import React, { forwardRef, useState, useRef, useCallback } from 'react';

export interface SliderProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  colorPalette?: 'teal' | 'rose' | 'amber' | 'emerald' | 'slate';
  orientation?: 'horizontal' | 'vertical';
  showValue?: boolean;
  className?: string;
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value: controlledValue,
      defaultValue = 50,
      min = 0,
      max = 100,
      step = 1,
      onChange,
      onChangeEnd,
      isDisabled = false,
      size = 'md',
      colorPalette = 'teal',
      orientation = 'horizontal',
      showValue = false,
      className = '',
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const percentage = ((value - min) / (max - min)) * 100;

    const sizes = {
      sm: { track: '4px', thumb: '12px' },
      md: { track: '6px', thumb: '16px' },
      lg: { track: '8px', thumb: '20px' },
    };

    const updateValue = useCallback(
      (clientX: number) => {
        if (!trackRef.current || isDisabled) return;

        const rect = trackRef.current.getBoundingClientRect();
        const pos = (clientX - rect.left) / rect.width;
        const clampedPos = Math.max(0, Math.min(1, pos));
        const rawValue = min + clampedPos * (max - min);
        const steppedValue = Math.round(rawValue / step) * step;
        const finalValue = Math.max(min, Math.min(max, steppedValue));

        if (controlledValue === undefined) {
          setInternalValue(finalValue);
        }
        onChange?.(finalValue);
      },
      [min, max, step, isDisabled, onChange, controlledValue]
    );

    const handleMouseDown = (e: React.MouseEvent) => {
      if (isDisabled) return;
      isDragging.current = true;
      updateValue(e.clientX);

      const handleMouseMove = (e: MouseEvent) => {
        if (isDragging.current) {
          updateValue(e.clientX);
        }
      };

      const handleMouseUp = () => {
        isDragging.current = false;
        onChangeEnd?.(value);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    return (
      <div
        ref={ref}
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          opacity: isDisabled ? 0.5 : 1,
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
      >
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          style={{
            position: 'relative',
            flex: 1,
            height: sizes[size].track,
            backgroundColor: 'hsl(var(--indo-muted))',
            borderRadius: '9999px',
          }}
        >
          {/* Filled track */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: `${percentage}%`,
              backgroundColor: `hsl(var(--indo-${colorPalette}-500))`,
              borderRadius: '9999px',
              transition: isDragging.current ? 'none' : 'width 0.1s',
            }}
          />
          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: `${percentage}%`,
              transform: 'translate(-50%, -50%)',
              width: sizes[size].thumb,
              height: sizes[size].thumb,
              backgroundColor: 'hsl(var(--indo-bg))',
              border: `2px solid hsl(var(--indo-${colorPalette}-500))`,
              borderRadius: '50%',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: isDragging.current ? 'none' : 'left 0.1s',
            }}
          />
        </div>
        {showValue && (
          <span
            style={{
              fontSize: 'var(--indo-text-sm)',
              fontWeight: 500,
              color: 'hsl(var(--indo-fg))',
              minWidth: '40px',
              textAlign: 'right',
            }}
          >
            {value}
          </span>
        )}
      </div>
    );
  }
);

Slider.displayName = 'Slider';
