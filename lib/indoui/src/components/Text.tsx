import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

export interface TextProps extends BoxProps {
  as?: 'p' | 'span' | 'div' | 'label' | 'strong' | 'em' | 'small';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  truncate?: boolean;
  noOfLines?: number;
}

const sizeStyles: Record<string, string> = {
  xs: 'var(--indo-text-xs)',
  sm: 'var(--indo-text-sm)',
  md: 'var(--indo-text-base)',
  lg: 'var(--indo-text-lg)',
  xl: 'var(--indo-text-xl)',
};

const weightStyles: Record<string, number> = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      as = 'p',
      size = 'md',
      weight = 'normal',
      truncate = false,
      noOfLines,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const truncateStyles = truncate
      ? {
          overflow: 'hidden' as const,
          textOverflow: 'ellipsis' as const,
          whiteSpace: 'nowrap' as const,
        }
      : {};

    const lineClampStyles = noOfLines
      ? {
          overflow: 'hidden' as const,
          display: '-webkit-box' as const,
          WebkitLineClamp: noOfLines,
          WebkitBoxOrient: 'vertical' as const,
        }
      : {};

    return (
      <Box
        as={as}
        ref={ref}
        style={{
          fontSize: sizeStyles[size],
          fontWeight: weightStyles[weight],
          lineHeight: 1.5,
          ...truncateStyles,
          ...lineClampStyles,
          ...style,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Text.displayName = 'Text';
