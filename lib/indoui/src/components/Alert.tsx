import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';
import { tokens, ColorName, ColorShade } from '../theme/tokens';

// Named color palette type
export type AlertColorPalette = ColorName | `${ColorName}.${ColorShade}`;
export type AlertStatus = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends BoxProps {
  status?: AlertStatus;
  variant?: 'subtle' | 'solid' | 'left-accent' | 'top-accent';
  colorPalette?: AlertColorPalette;
}

// Semantic status to color mapping
const statusToColor: Record<AlertStatus, ColorName> = {
  info: 'blue',
  success: 'green',
  warning: 'amber',
  error: 'red',
};

const statusIcons: Record<AlertStatus, string> = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
};

// Helper to get color from palette
const getColorsFromPalette = (palette: AlertColorPalette): { bg: string; color: string; solidBg: string } => {
  const [colorName, shade] = palette.split('.') as [ColorName, string | undefined];
  const colorObj = tokens.colors[colorName];
  
  if (typeof colorObj === 'object') {
    const shadeNum = shade ? parseInt(shade) as ColorShade : 500;
    return {
      bg: `hsl(${colorObj[100]})`,
      color: `hsl(${colorObj[shadeNum]})`,
      solidBg: `hsl(${colorObj[shadeNum]})`,
    };
  }
  
  return {
    bg: `hsl(${tokens.colors.gray[100]})`,
    color: `hsl(${tokens.colors.gray[500]})`,
    solidBg: `hsl(${tokens.colors.gray[500]})`,
  };
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ status = 'info', variant = 'subtle', colorPalette, children, ...props }, ref) => {
    // Use colorPalette if provided, otherwise map from status
    const effectivePalette: AlertColorPalette = colorPalette || statusToColor[status];
    const colors = getColorsFromPalette(effectivePalette);

    const getVariantStyles = (): React.CSSProperties => {
      switch (variant) {
        case 'solid':
          return {
            backgroundColor: colors.solidBg,
            color: 'white',
          };
        case 'left-accent':
          return {
            backgroundColor: colors.bg,
            borderLeft: `4px solid ${colors.color}`,
          };
        case 'top-accent':
          return {
            backgroundColor: colors.bg,
            borderTop: `4px solid ${colors.color}`,
          };
        default:
          return {
            backgroundColor: colors.bg,
          };
      }
    };

    return (
      <Box
        ref={ref}
        role="alert"
        p={4}
        rounded="md"
        display="flex"
        alignItems="flex-start"
        gap={3}
        style={getVariantStyles()}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Alert.displayName = 'Alert';

export interface AlertIconProps {
  status?: AlertStatus;
  colorPalette?: AlertColorPalette;
}

export const AlertIcon: React.FC<AlertIconProps> = ({ status = 'info', colorPalette }) => {
  const effectivePalette: AlertColorPalette = colorPalette || statusToColor[status];
  const colors = getColorsFromPalette(effectivePalette);

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path d={statusIcons[status]} />
    </svg>
  );
};

AlertIcon.displayName = 'AlertIcon';

export interface AlertTitleProps extends BoxProps {}

export const AlertTitle = forwardRef<HTMLDivElement, AlertTitleProps>(
  ({ children, ...props }, ref) => (
    <Box ref={ref} fontWeight={600} fontSize="var(--indo-text-sm)" {...props}>
      {children}
    </Box>
  )
);

AlertTitle.displayName = 'AlertTitle';

export interface AlertDescriptionProps extends BoxProps {}

export const AlertDescription = forwardRef<HTMLDivElement, AlertDescriptionProps>(
  ({ children, ...props }, ref) => (
    <Box ref={ref} fontSize="var(--indo-text-sm)" mt={1} {...props}>
      {children}
    </Box>
  )
);

AlertDescription.displayName = 'AlertDescription';
