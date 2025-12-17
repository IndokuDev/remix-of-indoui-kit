import React, { forwardRef, Children, cloneElement, isValidElement } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

export interface GroupProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  attached?: boolean;
  orientation?: 'horizontal' | 'vertical';
  spacing?: string | number;
}

export const Group = forwardRef<HTMLDivElement, GroupProps>(
  (
    {
      children,
      attached = true,
      orientation = 'horizontal',
      spacing = 0,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    
    const childArray = Children.toArray(children).filter(isValidElement) as React.ReactElement[];
    const childCount = childArray.length;

    const enhancedChildren = childArray.map((child, index) => {
      const isFirst = index === 0;
      const isLast = index === childCount - 1;
      const isMiddle = !isFirst && !isLast;

      let borderRadiusStyle: React.CSSProperties = {};
      
      if (attached && childCount > 1) {
        if (orientation === 'horizontal') {
          if (isFirst) {
            borderRadiusStyle = {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderRight: 'none',
            };
          } else if (isLast) {
            borderRadiusStyle = {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            };
          } else if (isMiddle) {
            borderRadiusStyle = {
              borderRadius: 0,
              borderRight: 'none',
            };
          }
        } else {
          if (isFirst) {
            borderRadiusStyle = {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderBottom: 'none',
            };
          } else if (isLast) {
            borderRadiusStyle = {
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            };
          } else if (isMiddle) {
            borderRadiusStyle = {
              borderRadius: 0,
              borderBottom: 'none',
            };
          }
        }
      }

      const childProps = child.props as Record<string, any>;
      return cloneElement(child, {
        style: {
          ...(childProps.style || {}),
          ...borderRadiusStyle,
        },
        className: `${childProps.className || ''} indo-group-item`.trim(),
      });
    });

    return (
      <div
        ref={ref}
        className={`indo-group ${attached ? 'indo-group-attached' : ''} ${className}`}
        style={{
          ...cssStyles,
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
          gap: attached ? 0 : typeof spacing === 'number' ? `${spacing * 0.25}rem` : spacing,
          ...style,
        }}
        {...restProps}
      >
        {enhancedChildren}
      </div>
    );
  }
);

Group.displayName = 'Group';

// InputGroup - specifically for input + addon combinations
export interface InputGroupProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ children, size = 'md', className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    const childArray = Children.toArray(children).filter(isValidElement) as React.ReactElement[];
    const childCount = childArray.length;

    const enhancedChildren = childArray.map((child, index) => {
      const isFirst = index === 0;
      const isLast = index === childCount - 1;

      let borderRadiusStyle: React.CSSProperties = {};

      if (childCount > 1) {
        if (isFirst) {
          borderRadiusStyle = {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 'none',
          };
        } else if (isLast) {
          borderRadiusStyle = {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          };
        } else {
          borderRadiusStyle = {
            borderRadius: 0,
            borderRight: 'none',
          };
        }
      }

      const childProps = child.props as Record<string, any>;
      return cloneElement(child, {
        size: childProps.size ?? size,
        style: {
          ...(childProps.style || {}),
          ...borderRadiusStyle,
        },
      });
    });

    return (
      <div
        ref={ref}
        className={`indo-input-group ${className}`}
        style={{
          ...cssStyles,
          display: 'flex',
          alignItems: 'stretch',
          ...style,
        }}
        {...restProps}
      >
        {enhancedChildren}
      </div>
    );
  }
);

InputGroup.displayName = 'InputGroup';

// InputAddon
export interface InputAddonProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  placement?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

export const InputAddon = forwardRef<HTMLDivElement, InputAddonProps>(
  ({ children, placement = 'left', size = 'md', className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    const sizeStyles = {
      sm: { padding: '0 0.5rem', fontSize: 'var(--indo-text-xs)' },
      md: { padding: '0 0.75rem', fontSize: 'var(--indo-text-sm)' },
      lg: { padding: '0 1rem', fontSize: 'var(--indo-text-base)' },
    };

    return (
      <div
        ref={ref}
        className={`indo-input-addon indo-input-addon-${placement} ${className}`}
        style={{
          ...cssStyles,
          display: 'flex',
          alignItems: 'center',
          background: 'hsl(var(--indo-muted))',
          border: '1px solid hsl(var(--indo-input))',
          color: 'hsl(var(--indo-muted-fg))',
          ...sizeStyles[size],
          ...style,
        }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

InputAddon.displayName = 'InputAddon';

// InputLeftAddon
export const InputLeftAddon = forwardRef<HTMLDivElement, Omit<InputAddonProps, 'placement'>>(
  (props, ref) => <InputAddon ref={ref} {...props} placement="left" />
);
InputLeftAddon.displayName = 'InputLeftAddon';

// InputRightAddon  
export const InputRightAddon = forwardRef<HTMLDivElement, Omit<InputAddonProps, 'placement'>>(
  (props, ref) => <InputAddon ref={ref} {...props} placement="right" />
);
InputRightAddon.displayName = 'InputRightAddon';
