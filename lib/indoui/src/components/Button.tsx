import React, { forwardRef } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';
import { tokens, ColorName, ColorShade } from '../theme/tokens';

// Named color palette type
export type ButtonColorPalette = ColorName | `${ColorName}.${ColorShade}`;

export interface ButtonProps
  extends StyleProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  colorPalette?: ButtonColorPalette;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loadingText?: string;
  children?: React.ReactNode;
}

// Helper to get color values from named palette
const getColorFromPalette = (colorPalette: ButtonColorPalette): { base: string; hover: string; light: string; text: string } => {
  const [colorName, shade] = colorPalette.split('.') as [ColorName, string | undefined];
  const colorObj = tokens.colors[colorName];
  
  if (typeof colorObj === 'object') {
    const shadeNum = shade ? parseInt(shade) as ColorShade : 500;
    const baseShade = colorObj[shadeNum] || colorObj[500];
    const hoverShade = colorObj[600] || colorObj[shadeNum];
    const lightShade = colorObj[100] || colorObj[50];
    
    return {
      base: `hsl(${baseShade})`,
      hover: `hsl(${hoverShade})`,
      light: `hsl(${lightShade})`,
      text: shadeNum >= 500 ? 'white' : `hsl(${colorObj[900]})`,
    };
  }
  
  return {
    base: `hsl(${tokens.colors.gray[500]})`,
    hover: `hsl(${tokens.colors.gray[600]})`,
    light: `hsl(${tokens.colors.gray[100]})`,
    text: 'white',
  };
};

const sizeStyles = {
  xs: { height: '1.5rem', fontSize: '0.75rem', px: '0.5rem', gap: '0.25rem' },
  sm: { height: '2rem', fontSize: '0.875rem', px: '0.75rem', gap: '0.375rem' },
  md: { height: '2.5rem', fontSize: '0.875rem', px: '1rem', gap: '0.5rem' },
  lg: { height: '2.75rem', fontSize: '1rem', px: '1.25rem', gap: '0.5rem' },
  xl: { height: '3rem', fontSize: '1.125rem', px: '1.5rem', gap: '0.625rem' },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      size = 'md',
      colorPalette = 'blue',
      isLoading = false,
      isDisabled = false,
      leftIcon,
      rightIcon,
      loadingText,
      children,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const colors = getColorFromPalette(colorPalette);
    const { height, fontSize, px, gap } = sizeStyles[size];

    const getVariantStyles = (): React.CSSProperties => {
      switch (variant) {
        case 'outline':
          return {
            backgroundColor: 'transparent',
            border: `1px solid ${colors.base}`,
            color: colors.base,
          };
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            border: 'none',
            color: colors.base,
          };
        case 'link':
          return {
            backgroundColor: 'transparent',
            border: 'none',
            color: colors.base,
            textDecoration: 'underline',
            height: 'auto',
            padding: 0,
          };
        default: // solid
          return {
            backgroundColor: colors.base,
            border: 'none',
            color: colors.text,
          };
      }
    };

    return (
      <button
        ref={ref}
        className={`indo-btn ${className}`}
        disabled={isDisabled || isLoading}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 500,
          borderRadius: 'var(--indo-radius-md)',
          cursor: isDisabled || isLoading ? 'not-allowed' : 'pointer',
          opacity: isDisabled ? 0.5 : 1,
          transition: 'all 0.15s ease',
          height,
          fontSize,
          paddingLeft: px,
          paddingRight: px,
          gap,
          ...getVariantStyles(),
          ...cssStyles,
          ...style,
        }}
        onMouseEnter={(e) => {
          if (!isDisabled && !isLoading && variant === 'solid') {
            (e.target as HTMLButtonElement).style.backgroundColor = colors.hover;
          }
        }}
        onMouseLeave={(e) => {
          if (!isDisabled && !isLoading && variant === 'solid') {
            (e.target as HTMLButtonElement).style.backgroundColor = colors.base;
          }
        }}
        {...restProps}
      >
        {isLoading && (
          <span
            className="indo-spinner"
            style={{
              width: size === 'xs' || size === 'sm' ? '12px' : '16px',
              height: size === 'xs' || size === 'sm' ? '12px' : '16px',
              border: '2px solid currentColor',
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 0.6s linear infinite',
            }}
          />
        )}
        {!isLoading && leftIcon}
        {isLoading ? loadingText || children : children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'loadingText'> {
  icon: React.ReactNode;
  'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = 'md', ...props }, ref) => {
    const sizeMap = {
      xs: { boxSize: '1.75rem', iconSize: '0.75rem' },
      sm: { boxSize: '2rem', iconSize: '0.875rem' },
      md: { boxSize: '2.5rem', iconSize: '1rem' },
      lg: { boxSize: '2.75rem', iconSize: '1.125rem' },
      xl: { boxSize: '3rem', iconSize: '1.25rem' },
    };

    const { boxSize } = sizeMap[size];

    return (
      <Button
        ref={ref}
        size={size}
        style={{
          width: boxSize,
          height: boxSize,
          padding: 0,
        }}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';
