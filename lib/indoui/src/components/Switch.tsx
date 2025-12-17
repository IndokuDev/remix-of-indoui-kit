import React, { forwardRef, useState, useId } from 'react';
import { Box, BoxProps } from './Box';

export interface SwitchProps extends Omit<BoxProps, 'onChange'> {
  isChecked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  colorPalette?: 'primary' | 'success' | 'warning' | 'destructive';
  children?: React.ReactNode;
}

const sizeMap = {
  sm: { track: { width: 32, height: 18 }, thumb: 14, translate: 14 },
  md: { track: { width: 44, height: 24 }, thumb: 20, translate: 20 },
  lg: { track: { width: 56, height: 30 }, thumb: 26, translate: 26 },
};

const colorMap = {
  primary: 'hsl(var(--indo-primary))',
  success: 'hsl(var(--indo-success))',
  warning: 'hsl(var(--indo-warning))',
  destructive: 'hsl(var(--indo-destructive))',
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      isChecked,
      defaultChecked = false,
      onChange,
      isDisabled = false,
      size = 'md',
      colorPalette = 'primary',
      children,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const id = useId();
    
    const checked = isChecked !== undefined ? isChecked : internalChecked;
    const { track, thumb, translate } = sizeMap[size];

    const handleChange = () => {
      if (isDisabled) return;
      const newValue = !checked;
      if (isChecked === undefined) {
        setInternalChecked(newValue);
      }
      onChange?.(newValue);
    };

    return (
      <Box
        as="label"
        display="inline-flex"
        alignItems="center"
        gap={3}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        opacity={isDisabled ? 0.5 : 1}
        {...props}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          checked={checked}
          onChange={handleChange}
          disabled={isDisabled}
          id={id}
          aria-checked={checked}
          style={{
            position: 'absolute',
            opacity: 0,
            width: 0,
            height: 0,
          }}
        />
        <Box
          position="relative"
          rounded="full"
          style={{
            width: track.width,
            height: track.height,
            backgroundColor: checked ? colorMap[colorPalette] : 'hsl(var(--indo-muted))',
            transition: 'background-color 0.2s ease',
          }}
        >
          <Box
            position="absolute"
            rounded="full"
            bg="bg"
            shadow="sm"
            style={{
              width: thumb,
              height: thumb,
              top: '50%',
              left: checked ? `calc(100% - ${thumb + 2}px)` : '2px',
              transform: 'translateY(-50%)',
              transition: 'left 0.2s ease',
            }}
          />
        </Box>
        {children && (
          <Box as="span" fontSize="var(--indo-text-sm)">
            {children}
          </Box>
        )}
      </Box>
    );
  }
);

Switch.displayName = 'Switch';
