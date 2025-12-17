import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

export interface WebPlayerProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  code: string;
  language?: 'jsx' | 'tsx';
  showPreview?: boolean;
  showCode?: boolean;
  showConsole?: boolean;
  height?: string | number;
  theme?: 'light' | 'dark';
  title?: string;
}

export const WebPlayer = forwardRef<HTMLDivElement, WebPlayerProps>(
  (
    {
      code,
      language = 'jsx',
      showPreview = true,
      showCode = true,
      showConsole = true,
      height = 400,
      theme = 'dark',
      title = 'Preview',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'console'>('preview');
    const [consoleLogs, setConsoleLogs] = useState<{ type: string; message: string }[]>([]);
    const [error, setError] = useState<string | null>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Generate iframe content
    const generateIframeContent = () => {
      return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { 
      font-family: system-ui, -apple-system, sans-serif;
      padding: 1rem;
      background: ${theme === 'dark' ? '#1a1a1a' : '#ffffff'};
      color: ${theme === 'dark' ? '#ffffff' : '#000000'};
    }
    .error { color: #ef4444; padding: 1rem; background: #fef2f2; border-radius: 0.5rem; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script>
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    
    console.log = (...args) => {
      originalLog(...args);
      window.parent.postMessage({ type: 'console', logType: 'log', message: args.map(a => JSON.stringify(a)).join(' ') }, '*');
    };
    console.error = (...args) => {
      originalError(...args);
      window.parent.postMessage({ type: 'console', logType: 'error', message: args.map(a => String(a)).join(' ') }, '*');
    };
    console.warn = (...args) => {
      originalWarn(...args);
      window.parent.postMessage({ type: 'console', logType: 'warn', message: args.map(a => String(a)).join(' ') }, '*');
    };
    
    window.onerror = (message) => {
      window.parent.postMessage({ type: 'error', message }, '*');
    };
  </script>
  <script type="text/babel" data-type="module">
    ${code}
  </script>
</body>
</html>`;
    };

    useEffect(() => {
      const handleMessage = (event: MessageEvent) => {
        if (event.data.type === 'console') {
          setConsoleLogs(prev => [...prev, { type: event.data.logType, message: event.data.message }]);
        } else if (event.data.type === 'error') {
          setError(event.data.message);
        }
      };
      window.addEventListener('message', handleMessage);
      return () => window.removeEventListener('message', handleMessage);
    }, []);

    useEffect(() => {
      setConsoleLogs([]);
      setError(null);
    }, [code]);

    const tabs = [
      { id: 'preview', label: 'Preview', show: showPreview },
      { id: 'code', label: 'Code', show: showCode },
      { id: 'console', label: `Console${consoleLogs.length > 0 ? ` (${consoleLogs.length})` : ''}`, show: showConsole },
    ].filter(t => t.show);

    return (
      <div
        ref={ref}
        className={`indo-webplayer indo-webplayer-${theme} ${className}`}
        style={{
          ...cssStyles,
          height: typeof height === 'number' ? `${height}px` : height,
          ...style,
        }}
        {...restProps}
      >
        <div className="indo-webplayer-header">
          <div className="indo-webplayer-title">{title}</div>
          <div className="indo-webplayer-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`indo-webplayer-tab ${activeTab === tab.id ? 'indo-webplayer-tab-active' : ''}`}
                onClick={() => setActiveTab(tab.id as any)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="indo-webplayer-actions">
            <button
              type="button"
              className="indo-webplayer-action"
              onClick={() => {
                setConsoleLogs([]);
                setError(null);
                if (iframeRef.current) {
                  iframeRef.current.srcdoc = generateIframeContent();
                }
              }}
              title="Refresh"
            >
              ↻
            </button>
          </div>
        </div>
        
        <div className="indo-webplayer-content">
          {activeTab === 'preview' && (
            <div className="indo-webplayer-preview">
              {error ? (
                <div className="indo-webplayer-error">{error}</div>
              ) : (
                <iframe
                  ref={iframeRef}
                  srcDoc={generateIframeContent()}
                  sandbox="allow-scripts allow-same-origin"
                  className="indo-webplayer-iframe"
                />
              )}
            </div>
          )}
          
          {activeTab === 'code' && (
            <div className="indo-webplayer-code">
              <pre><code>{code}</code></pre>
            </div>
          )}
          
          {activeTab === 'console' && (
            <div className="indo-webplayer-console">
              {consoleLogs.length === 0 ? (
                <div className="indo-webplayer-console-empty">No console output</div>
              ) : (
                consoleLogs.map((log, i) => (
                  <div key={i} className={`indo-webplayer-log indo-webplayer-log-${log.type}`}>
                    <span className="indo-webplayer-log-type">{log.type}</span>
                    <span className="indo-webplayer-log-message">{log.message}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

WebPlayer.displayName = 'WebPlayer';
