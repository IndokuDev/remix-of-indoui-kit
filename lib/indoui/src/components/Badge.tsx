import React, { forwardRef } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';
import { tokens, ColorName, ColorShade } from '../theme/tokens';

// Named color palette type
export type BadgeColorPalette = ColorName | `${ColorName}.${ColorShade}`;

export interface BadgeProps
  extends StyleProps,
    Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  variant?: 'solid' | 'subtle' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  colorPalette?: BadgeColorPalette;
}

// Helper to get color values from named palette
const getColorFromPalette = (colorPalette: BadgeColorPalette): { base: string; light: string; dark: string } => {
  // Check if it's a shade format like "blue.500"
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
  
  // Fallback to gray
  return {
    base: `hsl(${tokens.colors.gray[500]})`,
    light: `hsl(${tokens.colors.gray[100]})`,
    dark: `hsl(${tokens.colors.gray[700]})`,
  };
};

const sizeStyles = {
  sm: { fontSize: '0.65rem', px: '0.375rem', py: '0.125rem' },
  md: { fontSize: '0.75rem', px: '0.5rem', py: '0.125rem' },
  lg: { fontSize: '0.875rem', px: '0.625rem', py: '0.25rem' },
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'subtle',
      size = 'md',
      colorPalette = 'gray',
      className = '',
      children,
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const colors = getColorFromPalette(colorPalette);
    const { fontSize, px, py } = sizeStyles[size];

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
      <span
        ref={ref}
        className={`indo-badge ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          fontWeight: 500,
          borderRadius: 'var(--indo-radius-md)',
          textTransform: 'uppercase',
          letterSpacing: '0.025em',
          fontSize,
          paddingLeft: px,
          paddingRight: px,
          paddingTop: py,
          paddingBottom: py,
          ...getVariantStyles(),
          ...cssStyles,
          ...style,
        }}
        {...restProps}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
