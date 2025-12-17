import { createContext, useContext } from 'react';
import { tokens, Tokens } from '../theme/tokens';

export interface ThemeContextValue {
  tokens: Tokens;
  getToken: (path: string) => string | undefined;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within IndoUIProvider');
  }
  return context;
};

export const useThemeToken = (path: string): string | undefined => {
  const { getToken } = useTheme();
  return getToken(path);
};

// Helper to get nested token value
export const getNestedValue = (obj: Record<string, unknown>, path: string): unknown => {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  
  return current;
};
