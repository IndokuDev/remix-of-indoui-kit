import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box } from './Box';
import { tokens, ColorName, ColorShade } from '../theme/tokens';

// Named color type for status
export type ToastColorPalette = ColorName | `${ColorName}.${ColorShade}`;

export type ToastStatus = 'info' | 'success' | 'warning' | 'error' | ToastColorPalette;
export type ToastPosition = 
  | 'top' | 'top-right' | 'top-left' 
  | 'bottom' | 'bottom-right' | 'bottom-left'
  | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';

export type ToastSlideFrom = 'top' | 'bottom' | 'left' | 'right';

export interface ToastOptions {
  title?: string;
  description?: string;
  status?: ToastStatus;
  duration?: number;
  isClosable?: boolean;
  position?: ToastPosition;
  slideFrom?: ToastSlideFrom;
  colorPalette?: ToastColorPalette;
}

interface Toast extends ToastOptions {
  id: string;
}

interface ToastContextValue {
  toast: (options: ToastOptions) => string;
  closeToast: (id: string) => void;
  closeAll: () => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

// Helper to get color from named palette or semantic status
const getStatusColors = (status: ToastStatus): { bg: string; color: string; borderColor: string } => {
  // Semantic status mapping to colors
  const semanticMap: Record<string, ColorName> = {
    info: 'blue',
    success: 'green',
    warning: 'amber',
    error: 'red',
  };
  
  let colorName: ColorName;
  let shade: ColorShade = 500;
  
  if (status in semanticMap) {
    colorName = semanticMap[status];
  } else {
    // Parse named color like "blue" or "blue.600"
    const [name, shadeStr] = status.split('.') as [ColorName, string | undefined];
    colorName = name;
    if (shadeStr) {
      shade = parseInt(shadeStr) as ColorShade;
    }
  }
  
  const colorObj = tokens.colors[colorName];
  if (typeof colorObj === 'object') {
    return {
      bg: `hsl(${colorObj[100]} / 0.95)`,
      color: `hsl(${colorObj[700]})`,
      borderColor: `hsl(${colorObj[shade]})`,
    };
  }
  
  return {
    bg: `hsl(${tokens.colors.gray[100]} / 0.95)`,
    color: `hsl(${tokens.colors.gray[700]})`,
    borderColor: `hsl(${tokens.colors.gray[500]})`,
  };
};

const statusIcons: Record<string, string> = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
};

const getPositionStyles = (position: ToastPosition): React.CSSProperties => {
  const styles: Record<ToastPosition, React.CSSProperties> = {
    top: { top: '1rem', left: '50%', transform: 'translateX(-50%)' },
    'top-right': { top: '1rem', right: '1rem' },
    'top-left': { top: '1rem', left: '1rem' },
    bottom: { bottom: '1rem', left: '50%', transform: 'translateX(-50%)' },
    'bottom-right': { bottom: '1rem', right: '1rem' },
    'bottom-left': { bottom: '1rem', left: '1rem' },
    'left-top': { top: '1rem', left: '1rem' },
    'left-bottom': { bottom: '1rem', left: '1rem' },
    'right-top': { top: '1rem', right: '1rem' },
    'right-bottom': { bottom: '1rem', right: '1rem' },
  };
  return styles[position] || styles['top-right'];
};

const getSlideAnimation = (slideFrom: ToastSlideFrom): string => {
  const animations: Record<ToastSlideFrom, string> = {
    top: 'slideInFromTop',
    bottom: 'slideInFromBottom',
    left: 'slideInFromLeft',
    right: 'slideInFromRight',
  };
  return animations[slideFrom] || 'slideInFromRight';
};

const getDefaultSlideFrom = (position: ToastPosition): ToastSlideFrom => {
  if (position.includes('left')) return 'left';
  if (position.includes('right')) return 'right';
  if (position.includes('top')) return 'top';
  if (position.includes('bottom')) return 'bottom';
  return 'right';
};

const ToastItem: React.FC<{ toast: Toast; onClose: () => void }> = ({ toast, onClose }) => {
  const { 
    title, 
    description, 
    status = 'info', 
    isClosable = true, 
    duration = 5000,
    position = 'top-right',
    slideFrom,
    colorPalette,
  } = toast;
  
  const effectiveStatus = colorPalette || status;
  const colors = getStatusColors(effectiveStatus);
  const effectiveSlideFrom = slideFrom || getDefaultSlideFrom(position);
  const animation = getSlideAnimation(effectiveSlideFrom);
  
  // Get icon for semantic status
  const iconPath = statusIcons[status] || statusIcons.info;

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <Box
      p={4}
      rounded="lg"
      shadow="lg"
      display="flex"
      alignItems="flex-start"
      gap={3}
      minW="300px"
      maxW="400px"
      style={{
        backgroundColor: colors.bg,
        borderLeft: `4px solid ${colors.borderColor}`,
        backdropFilter: 'blur(8px)',
        animation: `${animation} 0.3s ease-out, fadeIn 0.3s ease-out`,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.borderColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0, marginTop: 2 }}
      >
        <path d={iconPath} />
      </svg>
      
      <Box flex={1}>
        {title && (
          <Box
            fontWeight={600}
            fontSize="var(--indo-text-sm)"
            mb={description ? 1 : 0}
            style={{ color: colors.color }}
          >
            {title}
          </Box>
        )}
        {description && (
          <Box fontSize="var(--indo-text-sm)" style={{ color: colors.color, opacity: 0.9 }}>
            {description}
          </Box>
        )}
      </Box>
      
      {isClosable && (
        <Box
          as="button"
          p={1}
          rounded="md"
          cursor="pointer"
          style={{
            background: 'transparent',
            border: 'none',
            color: colors.color,
            opacity: 0.6,
            transition: 'var(--indo-transition-fast)',
          }}
          onClick={onClose}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.opacity = '0.6';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </Box>
      )}
    </Box>
  );
};

// Inject toast animations
const injectToastStyles = () => {
  if (typeof document === 'undefined') return;
  
  const styleId = 'indo-toast-animations';
  if (document.getElementById(styleId)) return;
  
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    @keyframes slideInFromTop {
      from { transform: translateY(-100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideInFromBottom {
      from { transform: translateY(100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideInFromLeft {
      from { transform: translateX(-100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideInFromRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    injectToastStyles();
  }, []);

  const toast = useCallback((options: ToastOptions): string => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setToasts((prev) => [...prev, { ...options, id }]);
    return id;
  }, []);

  const closeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const closeAll = useCallback(() => {
    setToasts([]);
  }, []);

  // Normalize position aliases
  const normalizePosition = (pos: ToastPosition): ToastPosition => {
    const aliases: Record<string, ToastPosition> = {
      'left-top': 'top-left',
      'left-bottom': 'bottom-left',
      'right-top': 'top-right',
      'right-bottom': 'bottom-right',
    };
    return aliases[pos] || pos;
  };

  // Group toasts by position
  const groupedToasts = toasts.reduce((acc, t) => {
    const pos = normalizePosition(t.position || 'top-right');
    if (!acc[pos]) acc[pos] = [];
    acc[pos].push(t);
    return acc;
  }, {} as Record<ToastPosition, Toast[]>);

  return (
    <ToastContext.Provider value={{ toast, closeToast, closeAll }}>
      {children}
      {typeof document !== 'undefined' && createPortal(
        <>
          {(Object.entries(groupedToasts) as [ToastPosition, Toast[]][]).map(([position, posToasts]) => (
            <Box
              key={position}
              position="fixed"
              zIndex={1700}
              display="flex"
              flexDirection="column"
              gap={3}
              style={getPositionStyles(position)}
            >
              {posToasts.map((t) => (
                <ToastItem key={t.id} toast={t} onClose={() => closeToast(t.id)} />
              ))}
            </Box>
          ))}
        </>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
