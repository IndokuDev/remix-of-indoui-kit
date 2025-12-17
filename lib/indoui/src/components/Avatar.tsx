import React, { forwardRef, useState } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

export interface AvatarProps
  extends StyleProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  src?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showFallback?: boolean;
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      name,
      size = 'md',
      showFallback = true,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    const showImage = src && !imageError;
    const initials = name ? getInitials(name) : '?';

    const classes = [
      'indo-avatar',
      `indo-avatar-${size}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classes}
        role="img"
        aria-label={name || 'Avatar'}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {showImage ? (
          <img
            src={src}
            alt={name || 'Avatar'}
            onError={() => setImageError(true)}
          />
        ) : showFallback ? (
          <span>{initials}</span>
        ) : null}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  children: React.ReactNode;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max, size = 'md', children, style, ...props }, ref) => {
    const avatars = React.Children.toArray(children);
    const displayAvatars = max ? avatars.slice(0, max) : avatars;
    const excess = max && avatars.length > max ? avatars.length - max : 0;

    return (
      <div
        ref={ref}
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'flex-end',
          ...style,
        }}
        {...props}
      >
        {excess > 0 && (
          <Avatar
            size={size}
            name={`+${excess}`}
            style={{ marginLeft: '-0.5rem', border: '2px solid hsl(var(--indo-bg))' }}
          />
        )}
        {displayAvatars.reverse().map((child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<AvatarProps>, {
                size,
                style: {
                  ...((child as React.ReactElement<AvatarProps>).props.style || {}),
                  marginLeft: index === displayAvatars.length - 1 ? 0 : '-0.5rem',
                  border: '2px solid hsl(var(--indo-bg))',
                },
              })
            : child
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
