import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { cssReset } from '../theme/css-reset';
import { generateStylesheet } from '../theme/css-variables';
import { componentStyles } from '../theme/component-styles';
import { tokens } from '../theme/tokens';
import { ColorModeContext, ColorMode } from '../hooks/useColorMode';
import { ThemeContext, getNestedValue } from '../hooks/useTheme';
import { ToastProvider } from '../components/Toast';

export interface IndoUIProviderProps {
  children: React.ReactNode;
  defaultColorMode?: ColorMode;
  forcedColorMode?: 'light' | 'dark';
  disableCSSReset?: boolean;
}

// Inject styles into the document
const injectStyles = (id: string, css: string) => {
  if (typeof document === 'undefined') return;
  
  let styleEl = document.getElementById(id) as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = id;
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = css;
};

// Get system preference
const getSystemColorMode = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const IndoUIProvider: React.FC<IndoUIProviderProps> = ({
  children,
  defaultColorMode = 'system',
  forcedColorMode,
  disableCSSReset = false,
}) => {
  const [colorMode, setColorModeState] = useState<ColorMode>(defaultColorMode);
  const [resolvedColorMode, setResolvedColorMode] = useState<'light' | 'dark'>('light');

  // Inject all styles on mount
  useEffect(() => {
    if (!disableCSSReset) {
      injectStyles('indo-reset', cssReset);
    }
    injectStyles('indo-variables', generateStylesheet());
    injectStyles('indo-components', componentStyles);
    
    // Load fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;500;600&display=swap';
    document.head.appendChild(fontLink);
    
    return () => {
      fontLink.remove();
    };
  }, [disableCSSReset]);

  // Handle color mode changes
  useEffect(() => {
    const effectiveMode = forcedColorMode || colorMode;
    
    const resolved = effectiveMode === 'system' ? getSystemColorMode() : effectiveMode;
    setResolvedColorMode(resolved);
    
    // Apply to document
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', resolved);
      document.documentElement.classList.remove('indo-light', 'indo-dark');
      document.documentElement.classList.add(`indo-${resolved}`);
    }
  }, [colorMode, forcedColorMode]);

  // Listen for system changes when in 'system' mode
  useEffect(() => {
    if (colorMode !== 'system' || forcedColorMode) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setResolvedColorMode(getSystemColorMode());
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [colorMode, forcedColorMode]);

  const setColorMode = useCallback((mode: ColorMode) => {
    setColorModeState(mode);
  }, []);

  const toggleColorMode = useCallback(() => {
    setColorModeState((prev) => {
      if (prev === 'system') return 'light';
      return prev === 'light' ? 'dark' : 'light';
    });
  }, []);

  const colorModeValue = useMemo(
    () => ({
      colorMode,
      resolvedColorMode,
      setColorMode,
      toggleColorMode,
    }),
    [colorMode, resolvedColorMode, setColorMode, toggleColorMode]
  );

  const getToken = useCallback((path: string): string | undefined => {
    const value = getNestedValue(tokens as Record<string, unknown>, path);
    return typeof value === 'string' ? value : undefined;
  }, []);

  const themeValue = useMemo(
    () => ({
      tokens,
      getToken,
    }),
    [getToken]
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <ColorModeContext.Provider value={colorModeValue}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </ColorModeContext.Provider>
    </ThemeContext.Provider>
  );
};
