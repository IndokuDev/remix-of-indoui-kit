import React, { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

export interface TextEditorProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  minHeight?: string | number;
  maxHeight?: string | number;
  showToolbar?: boolean;
  toolbarItems?: ToolbarItem[];
  onFocus?: () => void;
  onBlur?: () => void;
}

type ToolbarItem = 
  | 'bold' | 'italic' | 'underline' | 'strikethrough'
  | 'h1' | 'h2' | 'h3'
  | 'ul' | 'ol'
  | 'blockquote' | 'code'
  | 'link' | 'clear'
  | 'divider';

const defaultToolbarItems: ToolbarItem[] = [
  'bold', 'italic', 'underline', 'strikethrough',
  'divider',
  'h1', 'h2', 'h3',
  'divider',
  'ul', 'ol', 'blockquote',
  'divider',
  'link', 'code', 'clear'
];

const toolbarIcons: Record<string, React.ReactNode> = {
  bold: <strong>B</strong>,
  italic: <em>I</em>,
  underline: <span style={{ textDecoration: 'underline' }}>U</span>,
  strikethrough: <span style={{ textDecoration: 'line-through' }}>S</span>,
  h1: <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>H1</span>,
  h2: <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>H2</span>,
  h3: <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>H3</span>,
  ul: '•',
  ol: '1.',
  blockquote: '"',
  code: '</>',
  link: '🔗',
  clear: '✕',
};

export const TextEditor = forwardRef<HTMLDivElement, TextEditorProps>(
  (
    {
      value: controlledValue,
      defaultValue = '',
      onChange,
      placeholder = 'Start typing...',
      readOnly = false,
      disabled = false,
      minHeight = '150px',
      maxHeight,
      showToolbar = true,
      toolbarItems = defaultToolbarItems,
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
    const editorRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set());

    const isControlled = controlledValue !== undefined;

    // Initialize with value
    useEffect(() => {
      if (editorRef.current && !isControlled) {
        if (defaultValue && editorRef.current.innerHTML !== defaultValue) {
          editorRef.current.innerHTML = defaultValue;
        }
      }
    }, []);

    // Update controlled value
    useEffect(() => {
      if (isControlled && editorRef.current && editorRef.current.innerHTML !== controlledValue) {
        editorRef.current.innerHTML = controlledValue;
      }
    }, [controlledValue, isControlled]);

    const handleInput = useCallback(() => {
      if (editorRef.current) {
        const html = editorRef.current.innerHTML;
        onChange?.(html);
      }
      updateActiveFormats();
    }, [onChange]);

    const updateActiveFormats = useCallback(() => {
      const formats = new Set<string>();
      if (document.queryCommandState('bold')) formats.add('bold');
      if (document.queryCommandState('italic')) formats.add('italic');
      if (document.queryCommandState('underline')) formats.add('underline');
      if (document.queryCommandState('strikethrough')) formats.add('strikethrough');
      if (document.queryCommandState('insertUnorderedList')) formats.add('ul');
      if (document.queryCommandState('insertOrderedList')) formats.add('ol');
      setActiveFormats(formats);
    }, []);

    const execCommand = useCallback((command: string, value?: string) => {
      editorRef.current?.focus();
      document.execCommand(command, false, value);
      handleInput();
    }, [handleInput]);

    const handleToolbarClick = useCallback((item: ToolbarItem) => {
      switch (item) {
        case 'bold':
          execCommand('bold');
          break;
        case 'italic':
          execCommand('italic');
          break;
        case 'underline':
          execCommand('underline');
          break;
        case 'strikethrough':
          execCommand('strikeThrough');
          break;
        case 'h1':
          execCommand('formatBlock', 'h1');
          break;
        case 'h2':
          execCommand('formatBlock', 'h2');
          break;
        case 'h3':
          execCommand('formatBlock', 'h3');
          break;
        case 'ul':
          execCommand('insertUnorderedList');
          break;
        case 'ol':
          execCommand('insertOrderedList');
          break;
        case 'blockquote':
          execCommand('formatBlock', 'blockquote');
          break;
        case 'code':
          const selection = window.getSelection();
          if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const code = document.createElement('code');
            code.appendChild(range.extractContents());
            range.insertNode(code);
            handleInput();
          }
          break;
        case 'link':
          const url = prompt('Enter URL:');
          if (url) {
            execCommand('createLink', url);
          }
          break;
        case 'clear':
          execCommand('removeFormat');
          break;
      }
    }, [execCommand, handleInput]);

    const handleFocus = () => {
      setIsFocused(true);
      onFocus?.();
    };

    const handleBlur = () => {
      setIsFocused(false);
      onBlur?.();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      // Handle Tab for indentation
      if (e.key === 'Tab') {
        e.preventDefault();
        execCommand('insertText', '\t');
      }
    };

    return (
      <div
        ref={ref}
        className={`indo-text-editor ${isFocused ? 'indo-text-editor-focused' : ''} ${disabled ? 'indo-text-editor-disabled' : ''} ${className}`}
        style={{
          ...cssStyles,
          opacity: disabled ? 0.5 : 1,
          pointerEvents: disabled ? 'none' : undefined,
          ...style,
        }}
        {...restProps}
      >
        {showToolbar && !readOnly && (
          <div className="indo-text-editor-toolbar">
            {toolbarItems.map((item, index) => {
              if (item === 'divider') {
                return <div key={index} className="indo-text-editor-toolbar-divider" />;
              }
              return (
                <button
                  key={item}
                  type="button"
                  className={`indo-text-editor-toolbar-btn ${activeFormats.has(item) ? 'indo-text-editor-toolbar-btn-active' : ''}`}
                  onClick={() => handleToolbarClick(item)}
                  title={item.charAt(0).toUpperCase() + item.slice(1)}
                >
                  {toolbarIcons[item] || item}
                </button>
              );
            })}
          </div>
        )}
        <div
          ref={editorRef}
          className="indo-text-editor-content"
          contentEditable={!readOnly && !disabled}
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onSelect={updateActiveFormats}
          data-placeholder={placeholder}
          style={{
            minHeight,
            maxHeight,
            overflowY: maxHeight ? 'auto' : undefined,
          }}
          suppressContentEditableWarning
        />
      </div>
    );
  }
);

TextEditor.displayName = 'TextEditor';
