import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { SizeKey } from '../theme/tokens';
import { LayoutProps, getLayoutStyles } from '../utils/layoutProps';
import { Copy, Check } from 'lucide-react';

export type Language =
  | 'javascript'
  | 'typescript'
  | 'jsx'
  | 'tsx'
  | 'css'
  | 'html'
  | 'json'
  | 'markdown'
  | 'python'
  | 'bash'
  | 'shell'
  | 'yaml'
  | 'sql'
  | 'graphql';

export interface SyntaxHighlighterProps extends LayoutProps {
  children?: string;
  language?: Language;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  theme?: 'dark' | 'light';
  size?: SizeKey;
  filename?: string;
  className?: string;
}

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  children,
  language = 'typescript',
  showLineNumbers = true,
  showCopyButton = true,
  theme = 'dark',
  size = 'sm',
  filename,
  className,
  ...layoutProps
}) => {
  const [copied, setCopied] = useState(false);
  
  const code = (children ?? '').trim();
  const prismTheme = theme === 'dark' ? themes.vsDark : themes.vsLight;
  const layoutStyles = getLayoutStyles(layoutProps);
  
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  return (
    <div
      className={`indo-syntax-highlighter indo-syntax-highlighter-${theme} indo-syntax-highlighter-${size} ${className || ''}`}
      style={layoutStyles}
    >
      {(filename || showCopyButton) && (
        <div className="indo-syntax-highlighter-header">
          {filename && <span className="indo-syntax-highlighter-filename">{filename}</span>}
          {!filename && <span />}
          {showCopyButton && (
            <button onClick={copyCode} className="indo-syntax-highlighter-copy">
              {copied ? (
                <>
                  <Check className="indo-syntax-highlighter-icon" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="indo-syntax-highlighter-icon" />
                  Copy
                </>
              )}
            </button>
          )}
        </div>
      )}
      
      <Highlight theme={prismTheme} code={code} language={language}>
        {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`indo-syntax-highlighter-pre ${highlightClassName}`} style={{ ...style, margin: 0, background: 'transparent' }}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              return (
                <div key={i} {...lineProps} className="indo-syntax-highlighter-line">
                  {showLineNumbers && (
                    <span className="indo-syntax-highlighter-line-number">{i + 1}</span>
                  )}
                  <span className="indo-syntax-highlighter-line-content">
                    {line.map((token, key) => {
                      const tokenProps = getTokenProps({ token, key });
                      return <span key={key} {...tokenProps} />;
                    })}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

SyntaxHighlighter.displayName = 'SyntaxHighlighter';
