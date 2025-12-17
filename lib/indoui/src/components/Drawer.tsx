import React, { forwardRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Box, BoxProps } from './Box';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
}

const sizeMap = {
  xs: '16rem',
  sm: '20rem',
  md: '24rem',
  lg: '32rem',
  xl: '40rem',
  full: '100%',
};

const getPlacementStyles = (placement: string, size: string) => {
  const baseStyles = {
    position: 'fixed' as const,
    zIndex: 1400,
  };

  switch (placement) {
    case 'left':
      return {
        ...baseStyles,
        top: 0,
        left: 0,
        height: '100vh',
        width: size,
        transform: 'translateX(0)',
      };
    case 'right':
      return {
        ...baseStyles,
        top: 0,
        right: 0,
        height: '100vh',
        width: size,
        transform: 'translateX(0)',
      };
    case 'top':
      return {
        ...baseStyles,
        top: 0,
        left: 0,
        right: 0,
        height: size,
        width: '100%',
        transform: 'translateY(0)',
      };
    case 'bottom':
      return {
        ...baseStyles,
        bottom: 0,
        left: 0,
        right: 0,
        height: size,
        width: '100%',
        transform: 'translateY(0)',
      };
    default:
      return baseStyles;
  }
};

const getAnimation = (placement: string) => {
  switch (placement) {
    case 'left':
      return 'slideInLeft 0.3s ease-out';
    case 'right':
      return 'slideInRight 0.3s ease-out';
    case 'top':
      return 'slideInTop 0.3s ease-out';
    case 'bottom':
      return 'slideInBottom 0.3s ease-out';
    default:
      return 'fadeIn 0.3s ease-out';
  }
};

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      isOpen,
      onClose,
      children,
      placement = 'right',
      size = 'md',
      closeOnOverlayClick = true,
      closeOnEsc = true,
    },
    ref
  ) => {
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (closeOnEsc && e.key === 'Escape') {
          onClose();
        }
      },
      [closeOnEsc, onClose]
    );

    useEffect(() => {
      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
      }
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) return null;

    const placementStyles = getPlacementStyles(placement, sizeMap[size]);
    const animation = getAnimation(placement);

    const content = (
      <>
        {/* Overlay */}
        <Box
          position="fixed"
          inset={0}
          zIndex={1399}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            animation: 'fadeIn 0.2s ease-out',
          }}
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
        
        {/* Content */}
        <Box
          ref={ref}
          bg="card"
          shadow="xl"
          display="flex"
          flexDirection="column"
          style={{
            ...placementStyles,
            animation,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </Box>
      </>
    );

    return createPortal(content, document.body);
  }
);

Drawer.displayName = 'Drawer';

export interface DrawerHeaderProps extends BoxProps {}

export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, ...props }, ref) => (
    <Box
      ref={ref}
      p={6}
      fontSize="var(--indo-text-lg)"
      fontWeight={600}
      borderBottom="1px solid"
      borderColor="border"
      {...props}
    >
      {children}
    </Box>
  )
);

DrawerHeader.displayName = 'DrawerHeader';

export interface DrawerBodyProps extends BoxProps {}

export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ children, ...props }, ref) => (
    <Box ref={ref} p={6} flex={1} overflow="auto" {...props}>
      {children}
    </Box>
  )
);

DrawerBody.displayName = 'DrawerBody';

export interface DrawerFooterProps extends BoxProps {}

export const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ children, ...props }, ref) => (
    <Box
      ref={ref}
      p={6}
      borderTop="1px solid"
      borderColor="border"
      display="flex"
      justifyContent="flex-end"
      gap={3}
      {...props}
    >
      {children}
    </Box>
  )
);

DrawerFooter.displayName = 'DrawerFooter';

export interface DrawerCloseButtonProps extends BoxProps {
  onClick?: () => void;
}

export const DrawerCloseButton = forwardRef<HTMLButtonElement, DrawerCloseButtonProps>(
  ({ onClick, ...props }, ref) => (
    <Box
      as="button"
      position="absolute"
      top={4}
      right={4}
      p={2}
      rounded="md"
      cursor="pointer"
      style={{
        background: 'transparent',
        border: 'none',
        color: 'hsl(var(--indo-muted-fg))',
        transition: 'var(--indo-transition-fast)',
      }}
      onClick={onClick}
      {...props}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </Box>
  )
);

DrawerCloseButton.displayName = 'DrawerCloseButton';
