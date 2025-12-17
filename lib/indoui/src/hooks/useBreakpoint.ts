import { useState, useEffect, useMemo } from 'react';
import { tokens } from '../theme/tokens';

type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpointOrder: Breakpoint[] = ['base', 'sm', 'md', 'lg', 'xl', '2xl'];

const getBreakpointValue = (breakpoint: Breakpoint): number => {
  if (breakpoint === 'base') return 0;
  const value = tokens.breakpoints[breakpoint as keyof typeof tokens.breakpoints];
  return parseInt(value, 10);
};

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('base');

  useEffect(() => {
    const getBreakpoint = (): Breakpoint => {
      if (typeof window === 'undefined') return 'base';
      
      const width = window.innerWidth;
      
      if (width >= getBreakpointValue('2xl')) return '2xl';
      if (width >= getBreakpointValue('xl')) return 'xl';
      if (width >= getBreakpointValue('lg')) return 'lg';
      if (width >= getBreakpointValue('md')) return 'md';
      if (width >= getBreakpointValue('sm')) return 'sm';
      return 'base';
    };

    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export const useBreakpointValue = <T>(
  values: Partial<Record<Breakpoint, T>>
): T | undefined => {
  const breakpoint = useBreakpoint();
  
  return useMemo(() => {
    const currentIndex = breakpointOrder.indexOf(breakpoint);
    
    // Find the closest defined value at or below current breakpoint
    for (let i = currentIndex; i >= 0; i--) {
      const bp = breakpointOrder[i];
      if (values[bp] !== undefined) {
        return values[bp];
      }
    }
    
    return undefined;
  }, [breakpoint, values]);
};

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};
