import { createContext, useContext, useCallback, useMemo } from 'react';

export type ColorMode = 'light' | 'dark' | 'system';

export interface ColorModeContextValue {
  colorMode: ColorMode;
  resolvedColorMode: 'light' | 'dark';
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextValue | null>(null);

export const useColorMode = (): ColorModeContextValue => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode must be used within IndoUIProvider');
  }
  return context;
};

export const useColorModeValue = <T>(lightValue: T, darkValue: T): T => {
  const { resolvedColorMode } = useColorMode();
  return resolvedColorMode === 'dark' ? darkValue : lightValue;
};
