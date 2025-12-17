import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends BoxProps {
  as?: HeadingLevel;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

const sizeStyles: Record<string, { fontSize: string; lineHeight: string }> = {
  xs: { fontSize: 'var(--indo-text-xs)', lineHeight: '1.33' },
  sm: { fontSize: 'var(--indo-text-sm)', lineHeight: '1.33' },
  md: { fontSize: 'var(--indo-text-lg)', lineHeight: '1.33' },
  lg: { fontSize: 'var(--indo-text-xl)', lineHeight: '1.33' },
  xl: { fontSize: 'var(--indo-text-2xl)', lineHeight: '1.2' },
  '2xl': { fontSize: 'var(--indo-text-3xl)', lineHeight: '1.2' },
  '3xl': { fontSize: 'var(--indo-text-4xl)', lineHeight: '1.1' },
  '4xl': { fontSize: 'var(--indo-text-5xl)', lineHeight: '1' },
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = 'h2', size = 'xl', children, style, ...props }, ref) => {
    const sizeStyle = sizeStyles[size];

    return (
      <Box
        as={as}
        ref={ref}
        fontWeight={700}
        style={{
          fontFamily: 'var(--indo-font-display)',
          ...sizeStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Heading.displayName = 'Heading';
