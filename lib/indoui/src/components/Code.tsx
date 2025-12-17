import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

export interface CodeProps extends BoxProps {
  colorPalette?: 'primary' | 'secondary' | 'accent';
}

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ children, style, ...props }, ref) => {
    return (
      <Box
        as="code"
        ref={ref as React.Ref<HTMLDivElement>}
        px={1.5}
        py={0.5}
        rounded="md"
        fontSize="0.875em"
        style={{
          fontFamily: 'var(--indo-font-mono)',
          backgroundColor: 'hsl(var(--indo-muted))',
          color: 'hsl(var(--indo-fg))',
          ...style,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Code.displayName = 'Code';

export const Kbd = forwardRef<HTMLElement, BoxProps>(
  ({ children, style, ...props }, ref) => {
    return (
      <Box
        as="kbd"
        ref={ref as React.Ref<HTMLDivElement>}
        px={2}
        py={0.5}
        rounded="md"
        fontSize="0.875em"
        fontWeight={500}
        style={{
          fontFamily: 'var(--indo-font-mono)',
          backgroundColor: 'hsl(var(--indo-muted))',
          color: 'hsl(var(--indo-fg))',
          border: '1px solid hsl(var(--indo-border))',
          boxShadow: '0 1px 0 hsl(var(--indo-border))',
          ...style,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Kbd.displayName = 'Kbd';
