import React, { forwardRef, useState } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

// Password Input
export interface PasswordInputProps
  extends StyleProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'color' | 'size'> {
  size?: 'sm' | 'md' | 'lg';
  isInvalid?: boolean;
  showToggle?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      size = 'md',
      isInvalid = false,
      showToggle = true,
      className = '',
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [showPassword, setShowPassword] = useState(false);

    const classes = [
      'indo-input',
      'indo-password-input',
      `indo-input-${size}`,
      isInvalid && 'indo-input-error',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="indo-password-wrapper" style={{ position: 'relative', width: '100%' }}>
        <input
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          className={classes}
          disabled={disabled}
          style={{ ...cssStyles, paddingRight: showToggle ? '2.5rem' : undefined, ...style }}
          {...restProps}
        />
        {showToggle && (
          <button
            type="button"
            className="indo-password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            disabled={disabled}
            tabIndex={-1}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

// Number Input
export interface NumberInputProps
  extends StyleProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'color' | 'onChange' | 'size'> {
  size?: 'sm' | 'md' | 'lg';
  isInvalid?: boolean;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  allowMouseWheel?: boolean;
  showStepper?: boolean;
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      size = 'md',
      isInvalid = false,
      min,
      max,
      step = 1,
      precision,
      value: controlledValue,
      defaultValue,
      onChange,
      allowMouseWheel = false,
      showStepper = true,
      className = '',
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [internalValue, setInternalValue] = useState(defaultValue ?? 0);
    
    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const clamp = (val: number): number => {
      let result = val;
      if (min !== undefined) result = Math.max(min, result);
      if (max !== undefined) result = Math.min(max, result);
      if (precision !== undefined) result = Number(result.toFixed(precision));
      return result;
    };

    const updateValue = (newValue: number) => {
      const clamped = clamp(newValue);
      if (controlledValue === undefined) {
        setInternalValue(clamped);
      }
      onChange?.(clamped);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value);
      if (!isNaN(val)) {
        updateValue(val);
      }
    };

    const increment = () => updateValue(value + step);
    const decrement = () => updateValue(value - step);

    const handleWheel = (e: React.WheelEvent) => {
      if (!allowMouseWheel || disabled) return;
      e.preventDefault();
      if (e.deltaY < 0) increment();
      else decrement();
    };

    const classes = [
      'indo-input',
      'indo-number-input',
      `indo-input-${size}`,
      isInvalid && 'indo-input-error',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="indo-number-wrapper" style={{ position: 'relative', display: 'flex' }}>
        <input
          ref={ref}
          type="number"
          className={classes}
          value={value}
          onChange={handleChange}
          onWheel={handleWheel}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          style={{ ...cssStyles, ...style }}
          {...restProps}
        />
        {showStepper && (
          <div className="indo-number-stepper">
            <button
              type="button"
              className="indo-number-step indo-number-step-up"
              onClick={increment}
              disabled={disabled || (max !== undefined && value >= max)}
              tabIndex={-1}
            >
              ▲
            </button>
            <button
              type="button"
              className="indo-number-step indo-number-step-down"
              onClick={decrement}
              disabled={disabled || (min !== undefined && value <= min)}
              tabIndex={-1}
            >
              ▼
            </button>
          </div>
        )}
      </div>
    );
  }
);

NumberInput.displayName = 'NumberInput';

// Pin Input
export interface PinInputProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  length?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  type?: 'alphanumeric' | 'number';
  mask?: boolean;
  size?: 'sm' | 'md' | 'lg';
  isInvalid?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
}

export const PinInput = forwardRef<HTMLDivElement, PinInputProps>(
  (
    {
      length = 4,
      value: controlledValue,
      defaultValue = '',
      onChange,
      onComplete,
      type = 'number',
      mask = false,
      size = 'md',
      isInvalid = false,
      isDisabled = false,
      placeholder = '○',
      autoFocus = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [internalValue, setInternalValue] = useState(defaultValue);
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const values = value.split('').concat(Array(length - value.length).fill(''));

    const updateValue = (newValue: string) => {
      const trimmed = newValue.slice(0, length);
      if (controlledValue === undefined) {
        setInternalValue(trimmed);
      }
      onChange?.(trimmed);
      if (trimmed.length === length) {
        onComplete?.(trimmed);
      }
    };

    const handleChange = (index: number, char: string) => {
      if (type === 'number' && !/^\d*$/.test(char)) return;
      
      const newValues = [...values];
      newValues[index] = char.slice(-1);
      updateValue(newValues.join(''));

      // Move to next input
      if (char && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !values[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      if (e.key === 'ArrowLeft' && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      if (e.key === 'ArrowRight' && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault();
      const paste = e.clipboardData.getData('text');
      if (type === 'number' && !/^\d+$/.test(paste)) return;
      updateValue(paste);
    };

    const sizeClasses = {
      sm: 'indo-pin-input-sm',
      md: 'indo-pin-input-md',
      lg: 'indo-pin-input-lg',
    };

    return (
      <div
        ref={ref}
        className={`indo-pin-input-group ${className}`}
        style={{ ...cssStyles, display: 'flex', gap: '0.5rem', ...style }}
        {...restProps}
      >
        {values.slice(0, length).map((val, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type={mask ? 'password' : type === 'number' ? 'tel' : 'text'}
            inputMode={type === 'number' ? 'numeric' : 'text'}
            value={val}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            placeholder={placeholder}
            disabled={isDisabled}
            className={`indo-pin-input ${sizeClasses[size]} ${isInvalid ? 'indo-input-error' : ''}`}
            autoFocus={autoFocus && index === 0}
            maxLength={1}
          />
        ))}
      </div>
    );
  }
);

PinInput.displayName = 'PinInput';

// Range Slider
export interface RangeSliderProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  min?: number;
  max?: number;
  step?: number;
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (value: [number, number]) => void;
  onChangeEnd?: (value: [number, number]) => void;
  colorPalette?: string;
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  showTooltip?: boolean;
}

export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      value: controlledValue,
      defaultValue = [25, 75],
      onChange,
      onChangeEnd,
      colorPalette = 'blue',
      size = 'md',
      isDisabled = false,
      showTooltip = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [internalValue, setInternalValue] = useState(defaultValue);

    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const [minVal, maxVal] = value;

    const updateValue = (newValue: [number, number], isEnd = false) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      if (isEnd) onChangeEnd?.(newValue);
    };

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = Math.min(Number(e.target.value), maxVal - step);
      updateValue([val, maxVal]);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = Math.max(Number(e.target.value), minVal + step);
      updateValue([minVal, val]);
    };

    const minPercent = ((minVal - min) / (max - min)) * 100;
    const maxPercent = ((maxVal - min) / (max - min)) * 100;

    return (
      <div
        ref={ref}
        className={`indo-range-slider indo-range-slider-${size} ${isDisabled ? 'indo-range-slider-disabled' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        <div className="indo-range-slider-track">
          <div
            className="indo-range-slider-filled"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
              background: `hsl(var(--indo-${colorPalette}-500))`,
            }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={handleMinChange}
          onMouseUp={() => updateValue(value, true)}
          onTouchEnd={() => updateValue(value, true)}
          disabled={isDisabled}
          className="indo-range-slider-input indo-range-slider-min"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={handleMaxChange}
          onMouseUp={() => updateValue(value, true)}
          onTouchEnd={() => updateValue(value, true)}
          disabled={isDisabled}
          className="indo-range-slider-input indo-range-slider-max"
        />
        {showTooltip && (
          <>
            <div className="indo-range-tooltip" style={{ left: `${minPercent}%` }}>
              {minVal}
            </div>
            <div className="indo-range-tooltip" style={{ left: `${maxPercent}%` }}>
              {maxVal}
            </div>
          </>
        )}
      </div>
    );
  }
);

RangeSlider.displayName = 'RangeSlider';

// Segmented Control
export interface SegmentedControlProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: { label: string; value: string; disabled?: boolean }[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'md' | 'lg';
  colorPalette?: string;
  isDisabled?: boolean;
  fullWidth?: boolean;
}

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue,
      onChange,
      size = 'md',
      colorPalette = 'blue',
      isDisabled = false,
      fullWidth = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [internalValue, setInternalValue] = useState(defaultValue || options[0]?.value);

    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (newValue: string) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    return (
      <div
        ref={ref}
        className={`indo-segmented ${fullWidth ? 'indo-segmented-fullwidth' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        role="radiogroup"
        {...restProps}
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={value === option.value}
            className={`indo-segmented-item indo-segmented-${size} ${value === option.value ? 'indo-segmented-active' : ''}`}
            onClick={() => handleChange(option.value)}
            disabled={isDisabled || option.disabled}
            style={
              value === option.value
                ? { background: `hsl(var(--indo-${colorPalette}-500))`, color: 'white' }
                : undefined
            }
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }
);

SegmentedControl.displayName = 'SegmentedControl';
