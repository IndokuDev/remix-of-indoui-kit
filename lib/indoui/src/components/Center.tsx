import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

export interface CenterProps extends BoxProps {}

export const Center = forwardRef<HTMLDivElement, CenterProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        display="flex"
        alignItems="center"
        justifyContent="center"
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Center.displayName = 'Center';

export const Square = forwardRef<HTMLDivElement, CenterProps & { size?: string | number }>(
  ({ size, children, ...props }, ref) => {
    return (
      <Center ref={ref} boxSize={size} flexShrink={0} {...props}>
        {children}
      </Center>
    );
  }
);

Square.displayName = 'Square';

export const Circle = forwardRef<HTMLDivElement, CenterProps & { size?: string | number }>(
  ({ size, children, ...props }, ref) => {
    return (
      <Square ref={ref} size={size} borderRadius="full" {...props}>
        {children}
      </Square>
    );
  }
);

Circle.displayName = 'Circle';
