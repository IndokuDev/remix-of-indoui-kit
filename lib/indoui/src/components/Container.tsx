import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

export interface ContainerProps extends BoxProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string;
  centerContent?: boolean;
}

const maxWidthMap = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth = 'xl', centerContent, children, ...props }, ref) => {
    const maxW = maxWidthMap[maxWidth as keyof typeof maxWidthMap] || maxWidth;
    
    return (
      <Box
        ref={ref}
        w="100%"
        maxW={maxW}
        mx="auto"
        px={4}
        {...(centerContent && {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        })}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Container.displayName = 'Container';
