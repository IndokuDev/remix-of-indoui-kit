import React, { forwardRef } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

export interface TextareaProps
  extends StyleProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'> {
  size?: 'sm' | 'md' | 'lg';
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = 'md',
      isInvalid = false,
      isDisabled = false,
      isReadOnly = false,
      isRequired = false,
      resize = 'vertical',
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
      <textarea
        ref={ref}
        className={classes}
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        aria-invalid={isInvalid}
        style={{ ...cssStyles, resize, ...style }}
        {...restProps}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
