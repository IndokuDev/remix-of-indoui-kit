import React, { forwardRef } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

export interface SpinnerProps
  extends StyleProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  thickness?: string;
  speed?: string;
  emptyColor?: string;
  label?: string;
}

const sizeMap = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
};

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      size = 'md',
      thickness = '2px',
      speed = '0.6s',
      label = 'Loading...',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    const spinnerSize = sizeMap[size];

    return (
      <div
        ref={ref}
        className={`indo-spinner ${className}`}
        role="status"
        aria-label={label}
        style={{
          width: spinnerSize,
          height: spinnerSize,
          borderWidth: thickness,
          animationDuration: speed,
          ...cssStyles,
          ...style,
        }}
        {...restProps}
      >
        <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
          {label}
        </span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';
