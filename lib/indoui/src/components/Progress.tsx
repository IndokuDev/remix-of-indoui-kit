import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

export interface ProgressProps extends Omit<BoxProps, 'children'> {
  value?: number;
  max?: number;
  min?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  colorPalette?: 'primary' | 'success' | 'warning' | 'destructive';
  isIndeterminate?: boolean;
  hasStripe?: boolean;
  isAnimated?: boolean;
}

const sizeMap = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
};

const colorMap = {
  primary: 'hsl(var(--indo-primary))',
  success: 'hsl(var(--indo-success))',
  warning: 'hsl(var(--indo-warning))',
  destructive: 'hsl(var(--indo-destructive))',
};

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value = 0,
      max = 100,
      min = 0,
      size = 'md',
      colorPalette = 'primary',
      isIndeterminate = false,
      hasStripe = false,
      isAnimated = false,
      ...props
    },
    ref
  ) => {
    const percent = ((value - min) / (max - min)) * 100;
    const clampedPercent = Math.max(0, Math.min(100, percent));

    const stripeStyles = hasStripe
      ? {
          backgroundImage: `linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.15) 75%,
            transparent 75%,
            transparent
          )`,
          backgroundSize: '1rem 1rem',
        }
      : {};

    return (
      <Box
        ref={ref}
        role="progressbar"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={isIndeterminate ? undefined : value}
        w="100%"
        h={sizeMap[size]}
        rounded="full"
        overflow="hidden"
        style={{
          backgroundColor: 'hsl(var(--indo-muted))',
        }}
        {...props}
      >
        <Box
          h="100%"
          rounded="full"
          style={{
            width: isIndeterminate ? '50%' : `${clampedPercent}%`,
            backgroundColor: colorMap[colorPalette],
            transition: isIndeterminate ? 'none' : 'width 0.3s ease',
            animation: isIndeterminate
              ? 'progressIndeterminate 1.5s ease-in-out infinite'
              : isAnimated && hasStripe
              ? 'progressStripe 1s linear infinite'
              : undefined,
            ...stripeStyles,
          }}
        />
      </Box>
    );
  }
);

Progress.displayName = 'Progress';

export interface CircularProgressProps {
  value?: number;
  max?: number;
  min?: number;
  size?: string | number;
  thickness?: number;
  colorPalette?: 'primary' | 'success' | 'warning' | 'destructive';
  isIndeterminate?: boolean;
  trackColor?: string;
  children?: React.ReactNode;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value = 0,
  max = 100,
  min = 0,
  size = 48,
  thickness = 4,
  colorPalette = 'primary',
  isIndeterminate = false,
  trackColor,
  children,
}) => {
  const percent = ((value - min) / (max - min)) * 100;
  const clampedPercent = Math.max(0, Math.min(100, percent));
  
  const sizeNum = typeof size === 'number' ? size : parseInt(size, 10);
  const radius = (sizeNum - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clampedPercent / 100) * circumference;

  return (
    <Box
      position="relative"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      style={{ width: sizeNum, height: sizeNum }}
    >
      <svg
        width={sizeNum}
        height={sizeNum}
        viewBox={`0 0 ${sizeNum} ${sizeNum}`}
        style={{
          transform: 'rotate(-90deg)',
          animation: isIndeterminate ? 'spin 1.5s linear infinite' : undefined,
        }}
      >
        {/* Track */}
        <circle
          cx={sizeNum / 2}
          cy={sizeNum / 2}
          r={radius}
          fill="none"
          stroke={trackColor || 'hsl(var(--indo-muted))'}
          strokeWidth={thickness}
        />
        {/* Progress */}
        <circle
          cx={sizeNum / 2}
          cy={sizeNum / 2}
          r={radius}
          fill="none"
          stroke={colorMap[colorPalette]}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={isIndeterminate ? circumference * 0.75 : offset}
          style={{
            transition: isIndeterminate ? 'none' : 'stroke-dashoffset 0.3s ease',
          }}
        />
      </svg>
      {children && (
        <Box position="absolute" display="flex" alignItems="center" justifyContent="center">
          {children}
        </Box>
      )}
    </Box>
  );
};

CircularProgress.displayName = 'CircularProgress';
