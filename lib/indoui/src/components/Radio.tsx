import React, { forwardRef, useState, createContext, useContext, useId } from 'react';
import { Box, BoxProps } from './Box';

interface RadioGroupContextValue {
  value: string;
  onChange: (value: string) => void;
  name: string;
  isDisabled: boolean;
  size: 'sm' | 'md' | 'lg';
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

const useRadioGroupContext = () => useContext(RadioGroupContext);

export interface RadioGroupProps extends Omit<BoxProps, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      value,
      defaultValue = '',
      onChange,
      name,
      isDisabled = false,
      size = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const generatedName = useId();
    
    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    return (
      <RadioGroupContext.Provider
        value={{
          value: currentValue,
          onChange: handleChange,
          name: name || generatedName,
          isDisabled,
          size,
        }}
      >
        <Box
          ref={ref}
          role="radiogroup"
          display="flex"
          flexDirection="column"
          gap={2}
          {...props}
        >
          {children}
        </Box>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export interface RadioProps extends Omit<BoxProps, 'onChange'> {
  value: string;
  isDisabled?: boolean;
  children?: React.ReactNode;
}

const sizeMap = {
  sm: { box: 16, dot: 6 },
  md: { box: 20, dot: 8 },
  lg: { box: 24, dot: 10 },
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, isDisabled: itemDisabled = false, children, ...props }, ref) => {
    const context = useRadioGroupContext();
    const id = useId();
    
    if (!context) {
      throw new Error('Radio must be used within RadioGroup');
    }

    const { value: groupValue, onChange, name, isDisabled: groupDisabled, size } = context;
    const isChecked = groupValue === value;
    const isDisabled = groupDisabled || itemDisabled;
    const { box, dot } = sizeMap[size];

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
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          onChange={() => !isDisabled && onChange(value)}
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
          rounded="full"
          style={{
            width: box,
            height: box,
            border: `2px solid ${isChecked ? 'hsl(var(--indo-primary))' : 'hsl(var(--indo-border-emphasis))'}`,
            transition: 'var(--indo-transition-fast)',
          }}
        >
          {isChecked && (
            <Box
              rounded="full"
              style={{
                width: dot,
                height: dot,
                backgroundColor: 'hsl(var(--indo-primary))',
              }}
            />
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

Radio.displayName = 'Radio';
