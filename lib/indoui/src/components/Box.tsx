import React, { forwardRef } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

export interface BoxProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  as?: React.ElementType;
  children?: React.ReactNode;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Component = 'div', children, style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    
    return (
      <Component
        ref={ref}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';
