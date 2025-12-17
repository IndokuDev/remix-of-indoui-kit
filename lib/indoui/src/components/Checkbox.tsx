import React, { forwardRef, useState, useId } from 'react';
import { Box, BoxProps } from './Box';

export interface CheckboxProps extends Omit<BoxProps, 'onChange'> {
  isChecked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  colorPalette?: 'primary' | 'success' | 'warning' | 'destructive';
  children?: React.ReactNode;
}

const sizeMap = {
  sm: { box: 16, icon: 10 },
  md: { box: 20, icon: 12 },
  lg: { box: 24, icon: 14 },
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      isChecked,
      defaultChecked = false,
      onChange,
      isDisabled = false,
      isInvalid = false,
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
    const { box, icon } = sizeMap[size];

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
        gap={2}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        opacity={isDisabled ? 0.5 : 1}
        {...props}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={isDisabled}
          id={id}
          style={{
            position: 'absolute',
            opacity: 0,
            width: 0,
            height: 0,
          }}
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          rounded="sm"
          style={{
            width: box,
            height: box,
            border: checked 
              ? 'none' 
              : `2px solid ${isInvalid ? 'hsl(var(--indo-destructive))' : 'hsl(var(--indo-border-emphasis))'
            }`,
            backgroundColor: checked ? 'hsl(var(--indo-primary))' : 'transparent',
            transition: 'var(--indo-transition-fast)',
          }}
        >
          {checked && (
            <svg
              width={icon}
              height={icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
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

Checkbox.displayName = 'Checkbox';

export interface CheckboxGroupProps {
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  children: React.ReactNode;
  isDisabled?: boolean;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  value,
  defaultValue = [],
  onChange,
  children,
  isDisabled = false,
}) => {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (itemValue: string, checked: boolean) => {
    const newValue = checked
      ? [...currentValue, itemValue]
      : currentValue.filter((v) => v !== itemValue);
    
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<{ value?: string; isChecked?: boolean; onChange?: (checked: boolean) => void; isDisabled?: boolean }>(child) && child.props.value) {
          return React.cloneElement(child, {
            isChecked: currentValue.includes(child.props.value),
            onChange: (checked: boolean) => handleChange(child.props.value!, checked),
            isDisabled: isDisabled || child.props.isDisabled,
          });
        }
        return child;
      })}
    </Box>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
