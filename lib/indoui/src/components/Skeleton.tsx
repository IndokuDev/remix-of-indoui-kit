import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

export interface SkeletonProps extends BoxProps {
  isLoaded?: boolean;
  fadeDuration?: number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ isLoaded = false, fadeDuration = 0.4, children, style, ...props }, ref) => {
    if (isLoaded) {
      return (
        <Box
          ref={ref}
          style={{
            animation: `fadeIn ${fadeDuration}s`,
            ...style,
          }}
          {...props}
        >
          {children}
        </Box>
      );
    }

    return (
      <Box
        ref={ref}
        className="indo-skeleton"
        h={children ? undefined : 4}
        style={style}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export const SkeletonText = forwardRef<HTMLDivElement, SkeletonProps & { noOfLines?: number; spacing?: number }>(
  ({ noOfLines = 3, spacing = 2, isLoaded = false, children, ...props }, ref) => {
    if (isLoaded) {
      return <>{children}</>;
    }

    return (
      <Box ref={ref} display="flex" flexDirection="column" gap={spacing} {...props}>
        {Array.from({ length: noOfLines }).map((_, index) => (
          <Skeleton
            key={index}
            h={4}
            w={index === noOfLines - 1 ? '80%' : '100%'}
          />
        ))}
      </Box>
    );
  }
);

SkeletonText.displayName = 'SkeletonText';

export const SkeletonCircle = forwardRef<HTMLDivElement, SkeletonProps & { size?: string | number }>(
  ({ size = 12, isLoaded = false, children, ...props }, ref) => {
    if (isLoaded) {
      return <>{children}</>;
    }

    return (
      <Skeleton
        ref={ref}
        boxSize={size}
        borderRadius="full"
        {...props}
      />
    );
  }
);

SkeletonCircle.displayName = 'SkeletonCircle';
