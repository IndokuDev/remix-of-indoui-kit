import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  KeyboardEvent,
} from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

export interface CodeEditorProps
  extends StyleProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  language?: string;
  theme?: 'light' | 'dark';
  readOnly?: boolean;
  disabled?: boolean;
  lineNumbers?: boolean;
  highlightActiveLine?: boolean;
  wordWrap?: boolean;
  tabSize?: number;
  placeholder?: string;
  minHeight?: string | number;
  maxHeight?: string | number;
  showStatusBar?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Token types for syntax highlighting
type TokenType = 'keyword' | 'string' | 'number' | 'comment' | 'function' | 'class' | 'tag' | 'attr' | 'operator' | 'punctuation' | 'property' | 'variable' | 'type' | 'default';

interface Token {
  type: TokenType;
  value: string;
}

// Simple tokenizer for various languages
const tokenize = (code: string, language: string): Token[] => {
  const tokens: Token[] = [];
  let remaining = code;
  
  const patterns: { type: TokenType; regex: RegExp }[] = getPatterns(language);
  
  while (remaining.length > 0) {
    let matched = false;
    
    for (const { type, regex } of patterns) {
      const match = remaining.match(regex);
      if (match && match.index === 0) {
        tokens.push({ type, value: match[0] });
        remaining = remaining.slice(match[0].length);
        matched = true;
        break;
      }
    }
    
    if (!matched) {
      // Push single character as default
      tokens.push({ type: 'default', value: remaining[0] });
      remaining = remaining.slice(1);
    }
  }
  
  return tokens;
};

const getPatterns = (language: string): { type: TokenType; regex: RegExp }[] => {
  const jsKeywords = /^(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|delete|typeof|instanceof|in|of|class|extends|super|import|export|from|default|async|await|yield|static|get|set|this|null|undefined|true|false|NaN|Infinity)\b/;
  const tsKeywords = /^(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|delete|typeof|instanceof|in|of|class|extends|super|import|export|from|default|async|await|yield|static|get|set|this|null|undefined|true|false|NaN|Infinity|interface|type|enum|implements|public|private|protected|readonly|abstract|declare|namespace|module|as|is|keyof|infer|never|unknown|any|void|boolean|string|number|object|symbol|bigint)\b/;
  
  switch (language) {
    case 'typescript':
    case 'tsx':
      return [
        { type: 'comment', regex: /^\/\/.*/ },
        { type: 'comment', regex: /^\/\*[\s\S]*?\*\// },
        { type: 'string', regex: /^`(?:[^`\\]|\\.)*`/ },
        { type: 'string', regex: /^"(?:[^"\\]|\\.)*"/ },
        { type: 'string', regex: /^'(?:[^'\\]|\\.)*'/ },
        { type: 'keyword', regex: tsKeywords },
        { type: 'number', regex: /^-?\d+\.?\d*(?:e[+-]?\d+)?/ },
        { type: 'tag', regex: /^<\/?[A-Z][a-zA-Z0-9]*/ },
        { type: 'tag', regex: /^<\/?[a-z][a-zA-Z0-9]*/ },
        { type: 'class', regex: /^[A-Z][a-zA-Z0-9]*/ },
        { type: 'function', regex: /^[a-z_$][a-zA-Z0-9_$]*(?=\s*\()/ },
        { type: 'attr', regex: /^[a-z][a-zA-Z0-9]*(?=\s*=)/ },
        { type: 'type', regex: /^:\s*[A-Z][a-zA-Z0-9<>,\s]*/ },
        { type: 'operator', regex: /^[+\-*/%=<>!&|^~?:]+/ },
        { type: 'punctuation', regex: /^[{}[\]().,;]/ },
        { type: 'variable', regex: /^[a-z_$][a-zA-Z0-9_$]*/ },
      ];
    case 'javascript':
    case 'jsx':
      return [
        { type: 'comment', regex: /^\/\/.*/ },
        { type: 'comment', regex: /^\/\*[\s\S]*?\*\// },
        { type: 'string', regex: /^`(?:[^`\\]|\\.)*`/ },
        { type: 'string', regex: /^"(?:[^"\\]|\\.)*"/ },
        { type: 'string', regex: /^'(?:[^'\\]|\\.)*'/ },
        { type: 'keyword', regex: jsKeywords },
        { type: 'number', regex: /^-?\d+\.?\d*(?:e[+-]?\d+)?/ },
        { type: 'tag', regex: /^<\/?[A-Z][a-zA-Z0-9]*/ },
        { type: 'tag', regex: /^<\/?[a-z][a-zA-Z0-9]*/ },
        { type: 'class', regex: /^[A-Z][a-zA-Z0-9]*/ },
        { type: 'function', regex: /^[a-z_$][a-zA-Z0-9_$]*(?=\s*\()/ },
        { type: 'attr', regex: /^[a-z][a-zA-Z0-9]*(?=\s*=)/ },
        { type: 'operator', regex: /^[+\-*/%=<>!&|^~?:]+/ },
        { type: 'punctuation', regex: /^[{}[\]().,;]/ },
        { type: 'variable', regex: /^[a-z_$][a-zA-Z0-9_$]*/ },
      ];
    case 'css':
      return [
        { type: 'comment', regex: /^\/\*[\s\S]*?\*\// },
        { type: 'string', regex: /^"(?:[^"\\]|\\.)*"/ },
        { type: 'string', regex: /^'(?:[^'\\]|\\.)*'/ },
        { type: 'keyword', regex: /^@[a-zA-Z-]+/ },
        { type: 'class', regex: /^\.[a-zA-Z_-][a-zA-Z0-9_-]*/ },
        { type: 'tag', regex: /^#[a-zA-Z_-][a-zA-Z0-9_-]*/ },
        { type: 'property', regex: /^[a-z-]+(?=\s*:)/ },
        { type: 'number', regex: /^-?\d+\.?\d*(px|em|rem|%|vh|vw|deg|s|ms)?/ },
        { type: 'function', regex: /^[a-z-]+(?=\s*\()/ },
        { type: 'punctuation', regex: /^[{}:;,]/ },
      ];
    case 'json':
      return [
        { type: 'string', regex: /^"(?:[^"\\]|\\.)*"(?=\s*:)/ },
        { type: 'string', regex: /^"(?:[^"\\]|\\.)*"/ },
        { type: 'keyword', regex: /^(true|false|null)\b/ },
        { type: 'number', regex: /^-?\d+\.?\d*(?:e[+-]?\d+)?/ },
        { type: 'punctuation', regex: /^[{}[\]:,]/ },
      ];
    case 'html':
      return [
        { type: 'comment', regex: /^<!--[\s\S]*?-->/ },
        { type: 'tag', regex: /^<\/?[a-zA-Z][a-zA-Z0-9]*/ },
        { type: 'string', regex: /^"(?:[^"\\]|\\.)*"/ },
        { type: 'string', regex: /^'(?:[^'\\]|\\.)*'/ },
        { type: 'attr', regex: /^[a-zA-Z-]+(?=\s*=)/ },
        { type: 'punctuation', regex: /^[<>\/=]/ },
      ];
    default:
      return [
        { type: 'comment', regex: /^\/\/.*/ },
        { type: 'comment', regex: /^\/\*[\s\S]*?\*\// },
        { type: 'string', regex: /^"(?:[^"\\]|\\.)*"/ },
        { type: 'string', regex: /^'(?:[^'\\]|\\.)*'/ },
        { type: 'keyword', regex: jsKeywords },
        { type: 'number', regex: /^-?\d+\.?\d*/ },
        { type: 'operator', regex: /^[+\-*/%=<>!&|^~?:]+/ },
        { type: 'punctuation', regex: /^[{}[\]().,;]/ },
      ];
  }
};

// Color scheme (Tokyo Night inspired)
const getTokenColor = (type: TokenType, theme: 'light' | 'dark'): string => {
  const colors = theme === 'dark' ? {
    keyword: '#bb9af7',      // Purple
    string: '#9ece6a',       // Green  
    number: '#ff9e64',       // Orange
    comment: '#565f89',      // Gray
    function: '#7aa2f7',     // Blue
    class: '#2ac3de',        // Cyan
    tag: '#f7768e',          // Pink/Red
    attr: '#e0af68',         // Yellow
    operator: '#89ddff',     // Light blue
    punctuation: '#9aa5ce',  // Light gray
    property: '#73daca',     // Teal
    variable: '#c0caf5',     // Light purple
    type: '#2ac3de',         // Cyan
    default: '#a9b1d6',      // Default text
  } : {
    keyword: '#8839ef',      // Purple
    string: '#40a02b',       // Green
    number: '#fe640b',       // Orange
    comment: '#9ca0b0',      // Gray
    function: '#1e66f5',     // Blue
    class: '#179299',        // Teal
    tag: '#d20f39',          // Red
    attr: '#df8e1d',         // Yellow
    operator: '#04a5e5',     // Sky
    punctuation: '#6c6f85',  // Gray
    property: '#179299',     // Teal
    variable: '#4c4f69',     // Dark text
    type: '#179299',         // Teal
    default: '#4c4f69',      // Default text
  };
  
  return colors[type] || colors.default;
};

const highlightLine = (line: string, language: string, theme: 'light' | 'dark'): React.ReactNode[] => {
  if (!line) return [<span key="empty">&nbsp;</span>];
  
  const tokens = tokenize(line, language);
  
  return tokens.map((token, i) => (
    <span key={i} style={{ color: getTokenColor(token.type, theme) }}>
      {token.value}
    </span>
  ));
};

export const CodeEditor = forwardRef<HTMLDivElement, CodeEditorProps>(
  (
    {
      value: controlledValue,
      defaultValue = '',
      onChange,
      language = 'typescript',
      theme = 'dark',
      readOnly = false,
      disabled = false,
      lineNumbers = true,
      highlightActiveLine = true,
      wordWrap = false,
      tabSize = 2,
      placeholder = 'Start typing...',
      minHeight = '300px',
      maxHeight,
      showStatusBar = true,
      onFocus,
      onBlur,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [isFocused, setIsFocused] = useState(false);
    const [activeLine, setActiveLine] = useState(0);
    const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });
    
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const preRef = useRef<HTMLPreElement>(null);
    
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const lines = value.split('\n');
    
    const handleChange = useCallback((newValue: string) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    }, [controlledValue, onChange]);
    
    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      
      const { selectionStart, selectionEnd } = textarea;
      
      if (e.key === 'Tab') {
        e.preventDefault();
        const indent = ' '.repeat(tabSize);
        
        if (e.shiftKey) {
          const beforeCursor = value.slice(0, selectionStart);
          const lineStart = beforeCursor.lastIndexOf('\n') + 1;
          const lineContent = value.slice(lineStart, selectionEnd);
          
          if (lineContent.startsWith(indent)) {
            const newValue = value.slice(0, lineStart) + lineContent.slice(tabSize) + value.slice(selectionEnd);
            handleChange(newValue);
            setTimeout(() => {
              textarea.selectionStart = textarea.selectionEnd = selectionStart - tabSize;
            }, 0);
          }
        } else {
          const newValue = value.slice(0, selectionStart) + indent + value.slice(selectionEnd);
          handleChange(newValue);
          setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = selectionStart + tabSize;
          }, 0);
        }
      }
      
      if (e.key === 'Enter') {
        e.preventDefault();
        const beforeCursor = value.slice(0, selectionStart);
        const lineStart = beforeCursor.lastIndexOf('\n') + 1;
        const currentLine = value.slice(lineStart, selectionStart);
        const indentMatch = currentLine.match(/^(\s*)/);
        const currentIndent = indentMatch ? indentMatch[1] : '';
        
        const lastChar = beforeCursor.trim().slice(-1);
        const extraIndent = ['{', '(', '[', ':'].includes(lastChar) ? ' '.repeat(tabSize) : '';
        
        const newValue = value.slice(0, selectionStart) + '\n' + currentIndent + extraIndent + value.slice(selectionEnd);
        handleChange(newValue);
        setTimeout(() => {
          const newPosition = selectionStart + 1 + currentIndent.length + extraIndent.length;
          textarea.selectionStart = textarea.selectionEnd = newPosition;
        }, 0);
      }
      
      // Auto-close brackets
      const pairs: Record<string, string> = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'", '`': '`' };
      if (pairs[e.key]) {
        e.preventDefault();
        const newValue = value.slice(0, selectionStart) + e.key + pairs[e.key] + value.slice(selectionEnd);
        handleChange(newValue);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
        }, 0);
      }
    };
    
    const handleScroll = () => {
      if (textareaRef.current && preRef.current) {
        preRef.current.scrollTop = textareaRef.current.scrollTop;
        preRef.current.scrollLeft = textareaRef.current.scrollLeft;
      }
    };
    
    const handleSelect = () => {
      if (textareaRef.current) {
        const { selectionStart } = textareaRef.current;
        const textBefore = value.slice(0, selectionStart);
        const lineNum = textBefore.split('\n').length;
        const colNum = selectionStart - textBefore.lastIndexOf('\n');
        
        setActiveLine(lineNum - 1);
        setCursorPos({ line: lineNum, col: colNum });
      }
    };
    
    useEffect(() => {
      handleScroll();
    }, [value]);
    
    const bgColor = theme === 'dark' ? '#1a1b26' : '#fafafa';
    const gutterBg = theme === 'dark' ? '#16161e' : '#f4f4f5';
    const gutterText = theme === 'dark' ? '#565f89' : '#a1a1aa';
    const activeLineBg = theme === 'dark' ? 'rgba(41, 46, 66, 0.5)' : 'rgba(0, 0, 0, 0.04)';
    const borderColor = theme === 'dark' ? '#292e42' : '#e4e4e7';
    const statusBg = theme === 'dark' ? '#16161e' : '#f4f4f5';
    
    return (
      <div
        ref={ref}
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
          fontSize: '14px',
          lineHeight: '1.6',
          backgroundColor: bgColor,
          borderRadius: '8px',
          border: `1px solid ${borderColor}`,
          overflow: 'hidden',
          minHeight,
          maxHeight,
          ...cssStyles,
          ...style,
        }}
        {...restProps}
      >
        {/* Editor area */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
          {/* Line numbers gutter */}
          {lineNumbers && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: gutterBg,
                color: gutterText,
                padding: '12px 0',
                userSelect: 'none',
                textAlign: 'right',
                minWidth: '50px',
                borderRight: `1px solid ${borderColor}`,
              }}
            >
              {lines.map((_, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0 12px',
                    lineHeight: '1.6',
                    backgroundColor: highlightActiveLine && activeLine === i ? activeLineBg : 'transparent',
                    color: activeLine === i ? (theme === 'dark' ? '#7aa2f7' : '#2563eb') : gutterText,
                    fontWeight: activeLine === i ? 500 : 400,
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          
          {/* Code area */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            {/* Highlighted code layer */}
            <pre
              ref={preRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: 0,
                padding: '12px',
                overflow: 'auto',
                whiteSpace: wordWrap ? 'pre-wrap' : 'pre',
                wordBreak: wordWrap ? 'break-word' : 'normal',
                pointerEvents: 'none',
              }}
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: highlightActiveLine && activeLine === i ? activeLineBg : 'transparent',
                    minHeight: '1.6em',
                    paddingLeft: '4px',
                    marginLeft: '-4px',
                    marginRight: '-4px',
                    paddingRight: '4px',
                  }}
                >
                  {highlightLine(line, language, theme)}
                </div>
              ))}
            </pre>
            
            {/* Input textarea */}
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              onKeyDown={handleKeyDown}
              onScroll={handleScroll}
              onSelect={handleSelect}
              onFocus={() => { setIsFocused(true); onFocus?.(); }}
              onBlur={() => { setIsFocused(false); onBlur?.(); }}
              readOnly={readOnly}
              disabled={disabled}
              placeholder={!value ? placeholder : undefined}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                padding: '12px',
                margin: 0,
                border: 'none',
                outline: 'none',
                resize: 'none',
                background: 'transparent',
                color: 'transparent',
                caretColor: theme === 'dark' ? '#c0caf5' : '#4c4f69',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                lineHeight: 'inherit',
                whiteSpace: wordWrap ? 'pre-wrap' : 'pre',
                wordBreak: wordWrap ? 'break-word' : 'normal',
                overflow: 'auto',
                tabSize,
              }}
            />
          </div>
        </div>
        
        {/* Status bar */}
        {showStatusBar && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '4px 12px',
              backgroundColor: statusBg,
              borderTop: `1px solid ${borderColor}`,
              fontSize: '12px',
              color: gutterText,
            }}
          >
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ 
                backgroundColor: theme === 'dark' ? '#7aa2f7' : '#2563eb',
                color: 'white',
                padding: '2px 8px',
                borderRadius: '4px',
                fontWeight: 500,
              }}>
                {language.toUpperCase()}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span>Ln {cursorPos.line}, Col {cursorPos.col}</span>
              <span>{lines.length} lines</span>
            </div>
          </div>
        )}
      </div>
    );
  }
);

CodeEditor.displayName = 'CodeEditor';

// Simple CodeBlock for display only
export interface CodeBlockProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
  theme?: 'light' | 'dark';
  showLineNumbers?: boolean;
  title?: string;
}

export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ code, language = 'typescript', theme = 'dark', showLineNumbers = true, title, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    
    const lines = code.split('\n');
    const bgColor = theme === 'dark' ? '#1a1b26' : '#fafafa';
    const gutterBg = theme === 'dark' ? '#16161e' : '#f4f4f5';
    const gutterText = theme === 'dark' ? '#565f89' : '#a1a1aa';
    const borderColor = theme === 'dark' ? '#292e42' : '#e4e4e7';
    
    return (
      <div
        ref={ref}
        className={className}
        style={{
          fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
          fontSize: '13px',
          lineHeight: '1.6',
          backgroundColor: bgColor,
          borderRadius: '8px',
          border: `1px solid ${borderColor}`,
          overflow: 'hidden',
          ...cssStyles,
          ...style,
        }}
        {...restProps}
      >
        {title && (
          <div style={{
            padding: '8px 12px',
            backgroundColor: gutterBg,
            borderBottom: `1px solid ${borderColor}`,
            color: gutterText,
            fontSize: '12px',
            fontWeight: 500,
          }}>
            {title}
          </div>
        )}
        <div style={{ display: 'flex', overflow: 'auto' }}>
          {showLineNumbers && (
            <div style={{
              backgroundColor: gutterBg,
              color: gutterText,
              padding: '12px 0',
              userSelect: 'none',
              textAlign: 'right',
              minWidth: '40px',
              borderRight: `1px solid ${borderColor}`,
            }}>
              {lines.map((_, i) => (
                <div key={i} style={{ padding: '0 12px' }}>{i + 1}</div>
              ))}
            </div>
          )}
          <pre style={{ flex: 1, margin: 0, padding: '12px', overflow: 'auto' }}>
            {lines.map((line, i) => (
              <div key={i} style={{ minHeight: '1.6em' }}>
                {highlightLine(line, language, theme)}
              </div>
            ))}
          </pre>
        </div>
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';
