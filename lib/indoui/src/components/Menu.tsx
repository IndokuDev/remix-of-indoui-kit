import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box, BoxProps } from './Box';

export interface MenuProps {
  trigger: React.ReactElement;
  children: React.ReactNode;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
}

export const Menu: React.FC<MenuProps> = ({
  trigger,
  children,
  placement = 'bottom-start',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (!triggerRef.current || !menuRef.current) return;
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();
    const offset = 4;

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'bottom-start':
        top = triggerRect.bottom + offset;
        left = triggerRect.left;
        break;
      case 'bottom-end':
        top = triggerRect.bottom + offset;
        left = triggerRect.right - menuRect.width;
        break;
      case 'top-start':
        top = triggerRect.top - menuRect.height - offset;
        left = triggerRect.left;
        break;
      case 'top-end':
        top = triggerRect.top - menuRect.height - offset;
        left = triggerRect.right - menuRect.width;
        break;
    }

    setPosition({ top: top + window.scrollY, left: left + window.scrollX });
  };

  useEffect(() => {
    if (isOpen) {
      updatePosition();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current?.contains(e.target as Node) ||
        menuRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setIsOpen(false);
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const triggerElement = React.cloneElement(trigger, {
    ref: triggerRef,
    onClick: (e: React.MouseEvent) => {
      trigger.props.onClick?.(e);
      setIsOpen(!isOpen);
    },
  });

  return (
    <>
      {triggerElement}
      {isOpen &&
        createPortal(
          <Box
            ref={menuRef}
            position="absolute"
            zIndex={1000}
            bg="popover"
            rounded="md"
            shadow="lg"
            py={1}
            minW="160px"
            style={{
              top: position.top,
              left: position.left,
              border: '1px solid hsl(var(--indo-border))',
              animation: 'fadeIn 0.15s ease-out, scaleIn 0.15s ease-out',
            }}
            role="menu"
          >
            {React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child as React.ReactElement<{ onClick?: () => void }>, {
                    onClick: () => {
                      (child as React.ReactElement<{ onClick?: () => void }>).props.onClick?.();
                      setIsOpen(false);
                    },
                  })
                : child
            )}
          </Box>,
          document.body
        )}
    </>
  );
};

Menu.displayName = 'Menu';

export interface MenuItemProps extends BoxProps {
  icon?: React.ReactNode;
  command?: string;
  isDisabled?: boolean;
  isDestructive?: boolean;
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ icon, command, isDisabled = false, isDestructive = false, children, ...props }, ref) => (
    <Box
      ref={ref}
      role="menuitem"
      display="flex"
      alignItems="center"
      gap={3}
      px={3}
      py={2}
      fontSize="var(--indo-text-sm)"
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      opacity={isDisabled ? 0.5 : 1}
      style={{
        color: isDestructive ? 'hsl(var(--indo-destructive))' : 'hsl(var(--indo-fg))',
        transition: 'background-color 0.1s',
      }}
      onMouseEnter={(e) => {
        if (!isDisabled) {
          (e.target as HTMLElement).style.backgroundColor = 'hsl(var(--indo-muted))';
        }
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.backgroundColor = 'transparent';
      }}
      {...props}
    >
      {icon && <span style={{ width: 16, display: 'flex' }}>{icon}</span>}
      <span style={{ flex: 1 }}>{children}</span>
      {command && (
        <span style={{ color: 'hsl(var(--indo-muted-fg))', fontSize: 'var(--indo-text-xs)' }}>
          {command}
        </span>
      )}
    </Box>
  )
);

MenuItem.displayName = 'MenuItem';

export interface MenuDividerProps extends BoxProps {}

export const MenuDivider = forwardRef<HTMLHRElement, MenuDividerProps>((props, ref) => (
  <Box
    as="hr"
    ref={ref as React.Ref<HTMLDivElement>}
    my={1}
    style={{
      border: 'none',
      height: '1px',
      backgroundColor: 'hsl(var(--indo-border))',
    }}
    {...props}
  />
));

MenuDivider.displayName = 'MenuDivider';

export interface MenuGroupProps extends BoxProps {
  title?: string;
}

export const MenuGroup = forwardRef<HTMLDivElement, MenuGroupProps>(
  ({ title, children, ...props }, ref) => (
    <Box ref={ref} {...props}>
      {title && (
        <Box
          px={3}
          py={1.5}
          fontSize="var(--indo-text-xs)"
          fontWeight={600}
          color="muted.fg"
          style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
        >
          {title}
        </Box>
      )}
      {children}
    </Box>
  )
);

MenuGroup.displayName = 'MenuGroup';
