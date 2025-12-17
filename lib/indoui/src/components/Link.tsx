import React, { forwardRef } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

export interface LinkProps extends StyleProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  isExternal?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ isExternal = false, children, style, className, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    
    const externalProps = isExternal
      ? { target: '_blank' as const, rel: 'noopener noreferrer' }
      : {};

    return (
      <a
        ref={ref}
        className={className}
        style={{
          color: 'hsl(var(--indo-primary))',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'var(--indo-transition-fast)',
          ...cssStyles,
          ...style,
        }}
        {...externalProps}
        {...restProps}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';
