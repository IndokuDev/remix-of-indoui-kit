import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';
import { tokens, ColorName, ColorShade } from '../theme/tokens';

// Named color palette type
export type TagColorPalette = ColorName | `${ColorName}.${ColorShade}`;

export interface TagProps extends BoxProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'subtle' | 'outline';
  colorPalette?: TagColorPalette;
  onClose?: () => void;
}

// Helper to get color values from named palette
const getColorFromPalette = (colorPalette: TagColorPalette): { base: string; light: string; dark: string } => {
  const [colorName, shade] = colorPalette.split('.') as [ColorName, string | undefined];
  const colorObj = tokens.colors[colorName];
  
  if (typeof colorObj === 'object') {
    const shadeNum = shade ? parseInt(shade) as ColorShade : 500;
    const baseShade = colorObj[shadeNum] || colorObj[500];
    const lightShade = colorObj[100] || colorObj[50];
    const darkShade = colorObj[700] || colorObj[600];
    
    return {
      base: `hsl(${baseShade})`,
      light: `hsl(${lightShade})`,
      dark: `hsl(${darkShade})`,
    };
  }
  
  return {
    base: `hsl(${tokens.colors.gray[500]})`,
    light: `hsl(${tokens.colors.gray[100]})`,
    dark: `hsl(${tokens.colors.gray[700]})`,
  };
};

const sizeStyles = {
  sm: { fontSize: 'var(--indo-text-xs)', px: 2, py: 0.5, gap: 1 },
  md: { fontSize: 'var(--indo-text-sm)', px: 2.5, py: 1, gap: 1.5 },
  lg: { fontSize: 'var(--indo-text-sm)', px: 3, py: 1.5, gap: 2 },
};

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      size = 'md',
      variant = 'subtle',
      colorPalette = 'gray',
      onClose,
      children,
      ...props
    },
    ref
  ) => {
    const { fontSize, px, py, gap } = sizeStyles[size];
    const colors = getColorFromPalette(colorPalette);

    const getVariantStyles = (): React.CSSProperties => {
      switch (variant) {
        case 'solid':
          return {
            backgroundColor: colors.base,
            color: 'white',
          };
        case 'outline':
          return {
            backgroundColor: 'transparent',
            border: `1px solid ${colors.base}`,
            color: colors.base,
          };
        default: // subtle
          return {
            backgroundColor: colors.light,
            color: colors.dark,
          };
      }
    };

    return (
      <Box
        as="span"
        ref={ref as React.Ref<HTMLDivElement>}
        display="inline-flex"
        alignItems="center"
        rounded="md"
        fontWeight={500}
        px={px}
        py={py}
        gap={gap}
        style={{
          fontSize,
          ...getVariantStyles(),
        }}
        {...props}
      >
        {children}
        {onClose && (
          <Box
            as="button"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            rounded="sm"
            cursor="pointer"
            ml={1}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              color: 'inherit',
              opacity: 0.7,
              transition: 'opacity 0.15s',
            }}
            onClick={onClose}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.opacity = '0.7';
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </Box>
        )}
      </Box>
    );
  }
);

Tag.displayName = 'Tag';

export interface TagLabelProps extends BoxProps {}

export const TagLabel = forwardRef<HTMLSpanElement, TagLabelProps>(
  ({ children, ...props }, ref) => (
    <Box as="span" ref={ref as React.Ref<HTMLDivElement>} {...props}>
      {children}
    </Box>
  )
);

TagLabel.displayName = 'TagLabel';

export interface TagCloseButtonProps extends BoxProps {
  onClick?: () => void;
}

export const TagCloseButton = forwardRef<HTMLButtonElement, TagCloseButtonProps>(
  ({ onClick, ...props }, ref) => (
    <Box
      as="button"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      rounded="sm"
      cursor="pointer"
      ml={1}
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        color: 'inherit',
        opacity: 0.7,
        transition: 'opacity 0.15s',
      }}
      onClick={onClick}
      {...props}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </Box>
  )
);

TagCloseButton.displayName = 'TagCloseButton';
