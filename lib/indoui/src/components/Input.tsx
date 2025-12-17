import React, { forwardRef } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

export interface InputProps
  extends StyleProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled' | 'flushed';
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      isInvalid = false,
      isDisabled = false,
      isReadOnly = false,
      isRequired = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    const classes = [
      'indo-input',
      `indo-input-${size}`,
      isInvalid && 'indo-input-error',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <input
        ref={ref}
        className={classes}
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        aria-invalid={isInvalid}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      />
    );
  }
);

Input.displayName = 'Input';
