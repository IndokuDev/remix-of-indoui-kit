import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  KeyboardEvent,
  ClipboardEvent,
} from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

export interface CodeEditorProps
  extends StyleProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  // Core
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  language?: string;
  theme?: 'light' | 'dark';
  readOnly?: boolean;
  disabled?: boolean;
  
  // Behavior
  lineNumbers?: boolean;
  highlightActiveLine?: boolean;
  wordWrap?: boolean;
  tabSize?: number;
  autoIndent?: boolean;
  
  // Features
  placeholder?: string;
  minHeight?: string | number;
  maxHeight?: string | number;
  
  // Events
  onFocus?: () => void;
  onBlur?: () => void;
}

// Basic syntax highlighting patterns
const languagePatterns: Record<string, { pattern: RegExp; className: string }[]> = {
  javascript: [
    { pattern: /(\/\/.*$)/gm, className: 'indo-code-comment' },
    { pattern: /(\/\*[\s\S]*?\*\/)/g, className: 'indo-code-comment' },
    { pattern: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, className: 'indo-code-string' },
    { pattern: /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default|async|await|try|catch|throw|new|typeof|instanceof)\b/g, className: 'indo-code-keyword' },
    { pattern: /\b(true|false|null|undefined|NaN|Infinity)\b/g, className: 'indo-code-literal' },
    { pattern: /\b(\d+\.?\d*)\b/g, className: 'indo-code-number' },
    { pattern: /\b([A-Z][a-zA-Z0-9]*)\b/g, className: 'indo-code-class' },
    { pattern: /(\w+)(?=\s*\()/g, className: 'indo-code-function' },
  ],
  typescript: [
    { pattern: /(\/\/.*$)/gm, className: 'indo-code-comment' },
    { pattern: /(\/\*[\s\S]*?\*\/)/g, className: 'indo-code-comment' },
    { pattern: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, className: 'indo-code-string' },
    { pattern: /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default|async|await|try|catch|throw|new|typeof|instanceof|interface|type|enum|implements|extends|public|private|protected|readonly)\b/g, className: 'indo-code-keyword' },
    { pattern: /\b(true|false|null|undefined|NaN|Infinity)\b/g, className: 'indo-code-literal' },
    { pattern: /\b(\d+\.?\d*)\b/g, className: 'indo-code-number' },
    { pattern: /:\s*(\w+)/g, className: 'indo-code-type' },
    { pattern: /\b([A-Z][a-zA-Z0-9]*)\b/g, className: 'indo-code-class' },
    { pattern: /(\w+)(?=\s*\()/g, className: 'indo-code-function' },
  ],
  jsx: [
    { pattern: /(\/\/.*$)/gm, className: 'indo-code-comment' },
    { pattern: /({\/\*[\s\S]*?\*\/})/g, className: 'indo-code-comment' },
    { pattern: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, className: 'indo-code-string' },
    { pattern: /(<\/?[a-zA-Z][a-zA-Z0-9]*)/g, className: 'indo-code-tag' },
    { pattern: /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default|async|await)\b/g, className: 'indo-code-keyword' },
    { pattern: /(\w+)=/g, className: 'indo-code-attr' },
    { pattern: /\b([A-Z][a-zA-Z0-9]*)\b/g, className: 'indo-code-component' },
  ],
  tsx: [
    { pattern: /(\/\/.*$)/gm, className: 'indo-code-comment' },
    { pattern: /({\/\*[\s\S]*?\*\/})/g, className: 'indo-code-comment' },
    { pattern: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, className: 'indo-code-string' },
    { pattern: /(<\/?[a-zA-Z][a-zA-Z0-9]*)/g, className: 'indo-code-tag' },
    { pattern: /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default|async|await|interface|type)\b/g, className: 'indo-code-keyword' },
    { pattern: /(\w+)=/g, className: 'indo-code-attr' },
    { pattern: /\b([A-Z][a-zA-Z0-9]*)\b/g, className: 'indo-code-component' },
  ],
  css: [
    { pattern: /(\/\*[\s\S]*?\*\/)/g, className: 'indo-code-comment' },
    { pattern: /([.#]?[a-zA-Z_-][a-zA-Z0-9_-]*)(?=\s*{)/g, className: 'indo-code-selector' },
    { pattern: /([a-zA-Z-]+)(?=\s*:)/g, className: 'indo-code-property' },
    { pattern: /(#[a-fA-F0-9]{3,8})/g, className: 'indo-code-color' },
    { pattern: /(\d+\.?\d*)(px|em|rem|%|vh|vw|deg|s|ms)?/g, className: 'indo-code-number' },
    { pattern: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, className: 'indo-code-string' },
  ],
  html: [
    { pattern: /(<!--[\s\S]*?-->)/g, className: 'indo-code-comment' },
    { pattern: /(<\/?[a-zA-Z][a-zA-Z0-9]*)/g, className: 'indo-code-tag' },
    { pattern: /(\w+)=/g, className: 'indo-code-attr' },
    { pattern: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, className: 'indo-code-string' },
  ],
  json: [
    { pattern: /("(?:[^"\\]|\\.)*")\s*:/g, className: 'indo-code-property' },
    { pattern: /:\s*("(?:[^"\\]|\\.)*")/g, className: 'indo-code-string' },
    { pattern: /\b(true|false|null)\b/g, className: 'indo-code-literal' },
    { pattern: /\b(-?\d+\.?\d*)\b/g, className: 'indo-code-number' },
  ],
};

const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

const highlightCode = (code: string, language: string): string => {
  if (!code) return '';
  
  const patterns = languagePatterns[language] || languagePatterns.javascript;
  
  // Tokenize the code first to avoid overlapping matches
  interface Token {
    type: string;
    content: string;
    start: number;
    end: number;
  }
  
  const tokens: Token[] = [];
  
  // Find all matches for all patterns
  for (const { pattern, className } of patterns) {
    const regex = new RegExp(pattern.source, pattern.flags);
    let match;
    while ((match = regex.exec(code)) !== null) {
      tokens.push({
        type: className,
        content: match[0],
        start: match.index,
        end: match.index + match[0].length,
      });
      // Prevent infinite loop for zero-width matches
      if (match[0].length === 0) break;
    }
  }
  
  // Sort tokens by start position, then by length (longer first)
  tokens.sort((a, b) => a.start - b.start || b.content.length - a.content.length);
  
  // Remove overlapping tokens (keep the first/longest one)
  const filteredTokens: Token[] = [];
  let lastEnd = 0;
  for (const token of tokens) {
    if (token.start >= lastEnd) {
      filteredTokens.push(token);
      lastEnd = token.end;
    }
  }
  
  // Build the highlighted output
  let result = '';
  let currentIndex = 0;
  
  for (const token of filteredTokens) {
    // Add any unhighlighted text before this token
    if (token.start > currentIndex) {
      result += escapeHtml(code.slice(currentIndex, token.start));
    }
    // Add the highlighted token
    result += `<span class="${token.type}">${escapeHtml(token.content)}</span>`;
    currentIndex = token.end;
  }
  
  // Add any remaining unhighlighted text
  if (currentIndex < code.length) {
    result += escapeHtml(code.slice(currentIndex));
  }
  
  return result;
};

export const CodeEditor = forwardRef<HTMLDivElement, CodeEditorProps>(
  (
    {
      value: controlledValue,
      defaultValue = '',
      onChange,
      language = 'javascript',
      theme = 'dark',
      readOnly = false,
      disabled = false,
      lineNumbers = true,
      highlightActiveLine = true,
      wordWrap = false,
      tabSize = 2,
      autoIndent = true,
      placeholder = 'Start typing...',
      minHeight = '200px',
      maxHeight,
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
    const [cursorPosition, setCursorPosition] = useState({ line: 0, column: 0 });
    
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const codeRef = useRef<HTMLPreElement>(null);
    
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const lines = value.split('\n');
    
    const handleChange = useCallback((newValue: string) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    }, [controlledValue, onChange]);
    
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      handleChange(e.target.value);
    };
    
    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      
      const { selectionStart, selectionEnd } = textarea;
      
      // Handle Tab
      if (e.key === 'Tab') {
        e.preventDefault();
        const indent = ' '.repeat(tabSize);
        
        if (e.shiftKey) {
          // Unindent
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
          // Indent
          const newValue = value.slice(0, selectionStart) + indent + value.slice(selectionEnd);
          handleChange(newValue);
          setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = selectionStart + tabSize;
          }, 0);
        }
      }
      
      // Handle Enter with auto-indent
      if (e.key === 'Enter' && autoIndent) {
        e.preventDefault();
        const beforeCursor = value.slice(0, selectionStart);
        const lineStart = beforeCursor.lastIndexOf('\n') + 1;
        const currentLine = value.slice(lineStart, selectionStart);
        const indentMatch = currentLine.match(/^(\s*)/);
        const currentIndent = indentMatch ? indentMatch[1] : '';
        
        // Check if we should add extra indent (after { or :)
        const lastChar = beforeCursor.trim().slice(-1);
        const extraIndent = ['{', ':', '(', '['].includes(lastChar) ? ' '.repeat(tabSize) : '';
        
        const newValue = value.slice(0, selectionStart) + '\n' + currentIndent + extraIndent + value.slice(selectionEnd);
        handleChange(newValue);
        setTimeout(() => {
          const newPosition = selectionStart + 1 + currentIndent.length + extraIndent.length;
          textarea.selectionStart = textarea.selectionEnd = newPosition;
        }, 0);
      }
      
      // Handle bracket auto-close
      if (['(', '[', '{', '"', "'", '`'].includes(e.key)) {
        const pairs: Record<string, string> = {
          '(': ')',
          '[': ']',
          '{': '}',
          '"': '"',
          "'": "'",
          '`': '`',
        };
        
        e.preventDefault();
        const newValue = value.slice(0, selectionStart) + e.key + pairs[e.key] + value.slice(selectionEnd);
        handleChange(newValue);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
        }, 0);
      }
    };
    
    const handleScroll = () => {
      if (textareaRef.current && codeRef.current) {
        codeRef.current.scrollTop = textareaRef.current.scrollTop;
        codeRef.current.scrollLeft = textareaRef.current.scrollLeft;
      }
    };
    
    const handleSelect = () => {
      if (textareaRef.current) {
        const { selectionStart } = textareaRef.current;
        const textBefore = value.slice(0, selectionStart);
        const lineNumber = textBefore.split('\n').length - 1;
        const columnNumber = selectionStart - textBefore.lastIndexOf('\n') - 1;
        
        setActiveLine(lineNumber);
        setCursorPosition({ line: lineNumber, column: columnNumber });
      }
    };
    
    const handleFocus = () => {
      setIsFocused(true);
      onFocus?.();
    };
    
    const handleBlur = () => {
      setIsFocused(false);
      onBlur?.();
    };
    
    const handlePaste = (e: ClipboardEvent<HTMLTextAreaElement>) => {
      // Allow default paste behavior
    };
    
    // Sync scroll on value change
    useEffect(() => {
      handleScroll();
    }, [value]);
    
    const editorTheme = theme === 'dark' ? 'indo-code-editor-dark' : 'indo-code-editor-light';
    
    return (
      <div
        ref={ref}
        className={`indo-code-editor ${editorTheme} ${isFocused ? 'indo-code-editor-focused' : ''} ${disabled ? 'indo-code-editor-disabled' : ''} ${className}`}
        style={{
          ...cssStyles,
          minHeight,
          maxHeight,
          ...style,
        }}
        {...restProps}
      >
        {/* Line Numbers */}
        {lineNumbers && (
          <div className="indo-code-gutter">
            {lines.map((_, index) => (
              <div
                key={index}
                className={`indo-code-line-number ${activeLine === index ? 'indo-code-line-number-active' : ''}`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        )}
        
        {/* Code Area */}
        <div className="indo-code-content">
          {/* Highlighted Code (background layer) */}
          <pre
            ref={codeRef}
            className="indo-code-highlight"
            aria-hidden="true"
          >
            {lines.map((line, index) => (
              <div
                key={index}
                className={`indo-code-line ${highlightActiveLine && activeLine === index ? 'indo-code-line-active' : ''}`}
              >
                <code
                  dangerouslySetInnerHTML={{
                    __html: highlightCode(line, language) || ' ',
                  }}
                />
              </div>
            ))}
          </pre>
          
          {/* Textarea (input layer) */}
          <textarea
            ref={textareaRef}
            className="indo-code-textarea"
            value={value}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            onScroll={handleScroll}
            onSelect={handleSelect}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onPaste={handlePaste}
            readOnly={readOnly}
            disabled={disabled}
            placeholder={!value ? placeholder : undefined}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            style={{
              tabSize,
              MozTabSize: tabSize,
              whiteSpace: wordWrap ? 'pre-wrap' : 'pre',
            } as React.CSSProperties}
          />
        </div>
        
        {/* Status Bar */}
        <div className="indo-code-statusbar">
          <span className="indo-code-language">{language}</span>
          <span className="indo-code-position">
            Ln {cursorPosition.line + 1}, Col {cursorPosition.column + 1}
          </span>
        </div>
      </div>
    );
  }
);

CodeEditor.displayName = 'CodeEditor';

// Composable CodeBlock components
export interface CodeBlockRootProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CodeBlockRoot = forwardRef<HTMLDivElement, CodeBlockRootProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    
    return (
      <div
        ref={ref}
        className={`indo-codeblock ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

CodeBlockRoot.displayName = 'CodeBlock.Root';

export interface CodeBlockHeaderProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const CodeBlockHeader = forwardRef<HTMLDivElement, CodeBlockHeaderProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    
    return (
      <div
        ref={ref}
        className={`indo-codeblock-header ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

CodeBlockHeader.displayName = 'CodeBlock.Header';

export interface CodeBlockContentProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  language?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  maxLines?: number;
}

export const CodeBlockContent = forwardRef<HTMLDivElement, CodeBlockContentProps>(
  (
    {
      children,
      language = 'javascript',
      showLineNumbers = false,
      highlightLines = [],
      maxLines,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    
    const code = typeof children === 'string' ? children : '';
    const lines = code.split('\n');
    const displayLines = maxLines ? lines.slice(0, maxLines) : lines;
    
    return (
      <div
        ref={ref}
        className={`indo-codeblock-content ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {showLineNumbers && (
          <div className="indo-codeblock-gutter">
            {displayLines.map((_, index) => (
              <span key={index} className="indo-codeblock-line-number">
                {index + 1}
              </span>
            ))}
          </div>
        )}
        <pre className="indo-codeblock-pre">
          <code className={`indo-codeblock-code language-${language}`}>
            {displayLines.map((line, index) => (
              <div
                key={index}
                className={`indo-codeblock-line ${highlightLines.includes(index + 1) ? 'indo-codeblock-line-highlighted' : ''}`}
                dangerouslySetInnerHTML={{
                  __html: highlightCode(line, language) || ' ',
                }}
              />
            ))}
          </code>
        </pre>
        {maxLines && lines.length > maxLines && (
          <div className="indo-codeblock-overflow">
            +{lines.length - maxLines} more lines
          </div>
        )}
      </div>
    );
  }
);

CodeBlockContent.displayName = 'CodeBlock.Content';

export interface CodeBlockCopyTriggerProps
  extends StyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  code: string;
  onCopied?: () => void;
}

export const CodeBlockCopyTrigger = forwardRef<HTMLButtonElement, CodeBlockCopyTriggerProps>(
  ({ code, onCopied, children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [copied, setCopied] = useState(false);
    
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        onCopied?.();
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };
    
    return (
      <button
        ref={ref}
        className={`indo-codeblock-copy ${copied ? 'indo-codeblock-copied' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        onClick={handleCopy}
        {...restProps}
      >
        {children || (copied ? 'Copied!' : 'Copy')}
      </button>
    );
  }
);

CodeBlockCopyTrigger.displayName = 'CodeBlock.CopyTrigger';

// Compound export
export const CodeBlock = {
  Root: CodeBlockRoot,
  Header: CodeBlockHeader,
  Content: CodeBlockContent,
  CopyTrigger: CodeBlockCopyTrigger,
};
