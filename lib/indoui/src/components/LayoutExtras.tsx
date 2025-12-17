import React, { forwardRef } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

// Wrap component
export interface WrapProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  spacing?: string | number;
  spacingX?: string | number;
  spacingY?: string | number;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  shouldWrapChildren?: boolean;
}

export const Wrap = forwardRef<HTMLDivElement, WrapProps>(
  (
    {
      children,
      spacing = 2,
      spacingX,
      spacingY,
      align = 'flex-start',
      justify = 'flex-start',
      shouldWrapChildren = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    const gapX = spacingX ?? spacing;
    const gapY = spacingY ?? spacing;

    const childrenToRender = shouldWrapChildren
      ? React.Children.map(children, (child) => <WrapItem>{child}</WrapItem>)
      : children;

    return (
      <div
        ref={ref}
        className={`indo-wrap ${className}`}
        style={{
          ...cssStyles,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: align,
          justifyContent: justify,
          columnGap: typeof gapX === 'number' ? `${gapX * 0.25}rem` : gapX,
          rowGap: typeof gapY === 'number' ? `${gapY * 0.25}rem` : gapY,
          ...style,
        }}
        {...restProps}
      >
        {childrenToRender}
      </div>
    );
  }
);

Wrap.displayName = 'Wrap';

export interface WrapItemProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {}

export const WrapItem = forwardRef<HTMLDivElement, WrapItemProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-wrap-item ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

WrapItem.displayName = 'WrapItem';

// AspectRatio
export interface AspectRatioProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ children, ratio = 16 / 9, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-aspect-ratio ${className}`}
        style={{
          ...cssStyles,
          position: 'relative',
          paddingBottom: `${(1 / ratio) * 100}%`,
          ...style,
        }}
        {...restProps}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';

// Splitter (Resizable Panels)
export interface SplitterProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
}

export const Splitter = forwardRef<HTMLDivElement, SplitterProps>(
  (
    {
      children,
      orientation = 'horizontal',
      defaultSize = 50,
      minSize = 10,
      maxSize = 90,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [size, setSize] = React.useState(defaultSize);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const isDragging = React.useRef(false);

    const handleMouseDown = () => {
      isDragging.current = true;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      let newSize: number;

      if (orientation === 'horizontal') {
        newSize = ((e.clientX - rect.left) / rect.width) * 100;
      } else {
        newSize = ((e.clientY - rect.top) / rect.height) * 100;
      }

      newSize = Math.max(minSize, Math.min(maxSize, newSize));
      setSize(newSize);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const childrenArray = React.Children.toArray(children);

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={`indo-splitter indo-splitter-${orientation} ${className}`}
        style={{
          ...cssStyles,
          display: 'flex',
          flexDirection: orientation === 'horizontal' ? 'row' : 'column',
          width: '100%',
          height: '100%',
          ...style,
        }}
        {...restProps}
      >
        <div
          className="indo-splitter-panel"
          style={{
            [orientation === 'horizontal' ? 'width' : 'height']: `${size}%`,
            overflow: 'auto',
          }}
        >
          {childrenArray[0]}
        </div>
        <div
          className="indo-splitter-handle"
          onMouseDown={handleMouseDown}
          style={{
            [orientation === 'horizontal' ? 'width' : 'height']: '4px',
            background: 'hsl(var(--indo-border))',
            cursor: orientation === 'horizontal' ? 'col-resize' : 'row-resize',
            flexShrink: 0,
          }}
        />
        <div
          className="indo-splitter-panel"
          style={{
            flex: 1,
            overflow: 'auto',
          }}
        >
          {childrenArray[1]}
        </div>
      </div>
    );
  }
);

Splitter.displayName = 'Splitter';

// HoverCard
export interface HoverCardProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  openDelay?: number;
  closeDelay?: number;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export const HoverCard = forwardRef<HTMLDivElement, HoverCardProps>(
  (
    {
      trigger,
      children,
      openDelay = 200,
      closeDelay = 300,
      placement = 'bottom',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [isOpen, setIsOpen] = React.useState(false);
    const openTimeout = React.useRef<NodeJS.Timeout>();
    const closeTimeout = React.useRef<NodeJS.Timeout>();

    const handleMouseEnter = () => {
      clearTimeout(closeTimeout.current);
      openTimeout.current = setTimeout(() => setIsOpen(true), openDelay);
    };

    const handleMouseLeave = () => {
      clearTimeout(openTimeout.current);
      closeTimeout.current = setTimeout(() => setIsOpen(false), closeDelay);
    };

    const placementStyles: Record<string, React.CSSProperties> = {
      top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px' },
      bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '8px' },
      left: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '8px' },
      right: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '8px' },
    };

    return (
      <div
        ref={ref}
        className={`indo-hover-card ${className}`}
        style={{ ...cssStyles, position: 'relative', display: 'inline-block', ...style }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...restProps}
      >
        {trigger}
        {isOpen && (
          <div
            className="indo-hover-card-content"
            style={{
              position: 'absolute',
              zIndex: 'var(--indo-z-popover)',
              background: 'hsl(var(--indo-card))',
              border: '1px solid hsl(var(--indo-border))',
              borderRadius: 'var(--indo-radius-lg)',
              boxShadow: 'var(--indo-shadow-lg)',
              padding: '1rem',
              minWidth: '200px',
              ...placementStyles[placement],
            }}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);

HoverCard.displayName = 'HoverCard';

// ContextMenu
export interface ContextMenuProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  menu: React.ReactNode;
}

export const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  ({ menu, children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [isOpen, setIsOpen] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleContextMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setIsOpen(true);
    };

    React.useEffect(() => {
      const handleClick = () => setIsOpen(false);
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
      <div
        ref={ref}
        className={`indo-context-menu-trigger ${className}`}
        style={{ ...cssStyles, ...style }}
        onContextMenu={handleContextMenu}
        {...restProps}
      >
        {children}
        {isOpen && (
          <div
            className="indo-context-menu"
            style={{
              position: 'fixed',
              top: position.y,
              left: position.x,
              zIndex: 'var(--indo-z-popover)',
              background: 'hsl(var(--indo-card))',
              border: '1px solid hsl(var(--indo-border))',
              borderRadius: 'var(--indo-radius-md)',
              boxShadow: 'var(--indo-shadow-lg)',
              padding: '0.25rem',
              minWidth: '160px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {menu}
          </div>
        )}
      </div>
    );
  }
);

ContextMenu.displayName = 'ContextMenu';

// Navigation Menu
export interface NavigationMenuProps extends StyleProps, React.HTMLAttributes<HTMLElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const NavigationMenu = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ children, orientation = 'horizontal', className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <nav
        ref={ref}
        className={`indo-nav-menu indo-nav-menu-${orientation} ${className}`}
        style={{
          ...cssStyles,
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
          ...style,
        }}
        {...restProps}
      >
        {children}
      </nav>
    );
  }
);

NavigationMenu.displayName = 'NavigationMenu';

export interface NavigationMenuItemProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  isActive?: boolean;
}

export const NavigationMenuItem = forwardRef<HTMLDivElement, NavigationMenuItemProps>(
  ({ children, href, isActive, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    const content = href ? (
      <a href={href} className="indo-nav-menu-link">
        {children}
      </a>
    ) : (
      children
    );

    return (
      <div
        ref={ref}
        className={`indo-nav-menu-item ${isActive ? 'indo-nav-menu-item-active' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {content}
      </div>
    );
  }
);

NavigationMenuItem.displayName = 'NavigationMenuItem';

// Sidebar
export interface SidebarProps extends StyleProps, React.HTMLAttributes<HTMLElement> {
  isOpen?: boolean;
  onClose?: () => void;
  placement?: 'left' | 'right';
  width?: string | number;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      children,
      isOpen = true,
      onClose,
      placement = 'left',
      width = '280px',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <aside
        ref={ref}
        className={`indo-sidebar indo-sidebar-${placement} ${isOpen ? 'indo-sidebar-open' : ''} ${className}`}
        style={{
          ...cssStyles,
          width: typeof width === 'number' ? `${width}px` : width,
          ...style,
        }}
        {...restProps}
      >
        {children}
      </aside>
    );
  }
);

Sidebar.displayName = 'Sidebar';

// Navbar
export interface NavbarProps extends StyleProps, React.HTMLAttributes<HTMLElement> {
  position?: 'static' | 'sticky' | 'fixed';
  variant?: 'solid' | 'transparent' | 'blur';
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ children, position = 'static', variant = 'solid', className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <header
        ref={ref}
        className={`indo-navbar indo-navbar-${variant} ${className}`}
        style={{
          ...cssStyles,
          position,
          ...(position !== 'static' ? { top: 0, left: 0, right: 0, zIndex: 'var(--indo-z-sticky)' } : {}),
          ...style,
        }}
        {...restProps}
      >
        {children}
      </header>
    );
  }
);

Navbar.displayName = 'Navbar';
