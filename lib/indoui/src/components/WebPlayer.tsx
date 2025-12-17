import React, { useState, useRef, useEffect, useCallback } from 'react';
import { LayoutProps, getLayoutStyles } from '../utils/layoutProps';
import { Play, RefreshCw, Maximize2, Minimize2, ExternalLink, Code, Eye, Terminal, X, AlertCircle } from 'lucide-react';

export interface WebPlayerProps extends LayoutProps {
  html?: string;
  css?: string;
  js?: string;
  code?: string; // Alias for js (backward compatibility)
  srcDoc?: string;
  src?: string;
  title?: string;
  showToolbar?: boolean;
  showConsole?: boolean;
  consoleHeight?: number;
  autoRun?: boolean;
  theme?: 'dark' | 'light';
  language?: 'jsx' | 'tsx' | 'javascript' | 'typescript';
  height?: string | number;
  className?: string;
}

interface ConsoleMessage {
  type: 'log' | 'error' | 'warn' | 'info';
  message: string;
  timestamp: Date;
}

export const WebPlayer: React.FC<WebPlayerProps> = ({
  html = '',
  css = '',
  js = '',
  code,
  srcDoc,
  src,
  title = 'Preview',
  showToolbar = true,
  showConsole = false,
  consoleHeight = 150,
  autoRun = true,
  theme = 'dark',
  language,
  height,
  className,
  ...layoutProps
}) => {
  const jsCode = code || js;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isConsoleOpen, setIsConsoleOpen] = useState(showConsole);
  const [consoleMessages, setConsoleMessages] = useState<ConsoleMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const layoutStyles = getLayoutStyles(layoutProps);
  
  const generateSrcDoc = useCallback(() => {
    if (srcDoc) return srcDoc;
    
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; }
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    (function() {
      const originalConsole = { ...console };
      const postMessage = (type, args) => {
        window.parent.postMessage({
          type: 'console',
          method: type,
          message: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')
        }, '*');
      };
      
      console.log = (...args) => { postMessage('log', args); originalConsole.log(...args); };
      console.error = (...args) => { postMessage('error', args); originalConsole.error(...args); };
      console.warn = (...args) => { postMessage('warn', args); originalConsole.warn(...args); };
      console.info = (...args) => { postMessage('info', args); originalConsole.info(...args); };
      
      window.onerror = (msg, url, line, col, error) => {
        postMessage('error', [\`\${msg} at line \${line}:\${col}\`]);
      };
    })();
    
    try {
      ${jsCode}
    } catch (e) {
      console.error(e.message);
    }
  </script>
</body>
</html>
    `.trim();
  }, [html, css, jsCode, srcDoc]);
  
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'console') {
        setConsoleMessages(prev => [...prev, {
          type: event.data.method,
          message: event.data.message,
          timestamp: new Date(),
        }]);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
  
  useEffect(() => {
    if (autoRun) {
      refresh();
    }
  }, [html, css, jsCode, srcDoc, autoRun]);
  
  const refresh = () => {
    setIsLoading(true);
    setError(null);
    setConsoleMessages([]);
    
    if (iframeRef.current) {
      if (src) {
        iframeRef.current.src = src;
      } else {
        iframeRef.current.srcdoc = generateSrcDoc();
      }
    }
    
    setTimeout(() => setIsLoading(false), 500);
  };
  
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);
  
  const openInNewTab = () => {
    const blob = new Blob([generateSrcDoc()], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };
  
  const clearConsole = () => setConsoleMessages([]);
  
  const getConsoleTypeColor = (type: ConsoleMessage['type']) => {
    switch (type) {
      case 'error': return 'indo-webplayer-log-error';
      case 'warn': return 'indo-webplayer-log-warn';
      case 'info': return 'indo-webplayer-log-info';
      default: return '';
    }
  };
  
  return (
    <>
      {isFullscreen && (
        <div className="indo-webplayer-backdrop" onClick={toggleFullscreen} />
      )}
      
      <div 
        className={`indo-webplayer indo-webplayer-${theme} ${isFullscreen ? 'indo-webplayer-fullscreen' : ''} ${className || ''}`}
        style={{ ...layoutStyles, minHeight: '300px', height: typeof height === 'number' ? `${height}px` : height }}
      >
        {showToolbar && (
          <div className="indo-webplayer-toolbar">
            <div className="indo-webplayer-toolbar-left">
              <div className="indo-webplayer-traffic-lights">
                <div className="indo-webplayer-traffic-light indo-webplayer-traffic-light-red" />
                <div className="indo-webplayer-traffic-light indo-webplayer-traffic-light-yellow" />
                <div className="indo-webplayer-traffic-light indo-webplayer-traffic-light-green" />
              </div>
              <span className="indo-webplayer-title">{title}</span>
            </div>
            
            <div className="indo-webplayer-toolbar-actions">
              <button onClick={refresh} className="indo-webplayer-action" title="Refresh">
                <RefreshCw className={`indo-webplayer-icon ${isLoading ? 'indo-webplayer-icon-spin' : ''}`} />
              </button>
              <button 
                onClick={() => setIsConsoleOpen(!isConsoleOpen)} 
                className={`indo-webplayer-action ${isConsoleOpen ? 'indo-webplayer-action-active' : ''}`}
                title="Console"
              >
                <Terminal className="indo-webplayer-icon" />
                {consoleMessages.some(m => m.type === 'error') && (
                  <span className="indo-webplayer-error-badge" />
                )}
              </button>
              <button onClick={openInNewTab} className="indo-webplayer-action" title="Open in new tab">
                <ExternalLink className="indo-webplayer-icon" />
              </button>
              <button onClick={toggleFullscreen} className="indo-webplayer-action" title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}>
                {isFullscreen ? <Minimize2 className="indo-webplayer-icon" /> : <Maximize2 className="indo-webplayer-icon" />}
              </button>
            </div>
          </div>
        )}
        
        <div className="indo-webplayer-preview">
          {isLoading && (
            <div className="indo-webplayer-loading">
              <RefreshCw className="indo-webplayer-icon indo-webplayer-icon-spin" />
            </div>
          )}
          
          {error && (
            <div className="indo-webplayer-error">
              <AlertCircle className="indo-webplayer-icon" />
              <span>{error}</span>
            </div>
          )}
          
          <iframe
            ref={iframeRef}
            title={title}
            className="indo-webplayer-iframe"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            srcDoc={src ? undefined : generateSrcDoc()}
            src={src}
            onLoad={() => setIsLoading(false)}
            onError={() => setError('Failed to load content')}
          />
        </div>
        
        {isConsoleOpen && (
          <div className="indo-webplayer-console" style={{ height: consoleHeight }}>
            <div className="indo-webplayer-console-header">
              <span className="indo-webplayer-console-title">
                Console
                {consoleMessages.length > 0 && (
                  <span className="indo-webplayer-console-count">{consoleMessages.length}</span>
                )}
              </span>
              <button onClick={clearConsole} className="indo-webplayer-console-clear">Clear</button>
            </div>
            
            <div className="indo-webplayer-console-content">
              {consoleMessages.length === 0 ? (
                <span className="indo-webplayer-console-empty">Console output will appear here...</span>
              ) : (
                consoleMessages.map((msg, i) => (
                  <div key={i} className={`indo-webplayer-log ${getConsoleTypeColor(msg.type)}`}>
                    <span className="indo-webplayer-log-time">{msg.timestamp.toLocaleTimeString()}</span>
                    <span className="indo-webplayer-log-message">{msg.message}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

WebPlayer.displayName = 'WebPlayer';
