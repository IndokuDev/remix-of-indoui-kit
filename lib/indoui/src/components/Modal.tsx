import React, { forwardRef, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Box, BoxProps } from './Box';
import { useDisclosure } from '../hooks/useDisclosure';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  isCentered?: boolean;
}

const sizeMap = {
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '48rem',
  full: '100%',
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      children,
      closeOnOverlayClick = true,
      closeOnEsc = true,
      size = 'md',
      isCentered = true,
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

    const content = (
      <Box
        position="fixed"
        inset={0}
        zIndex={1400}
        display="flex"
        alignItems={isCentered ? 'center' : 'flex-start'}
        justifyContent="center"
        p={isCentered ? 4 : 16}
        style={{
          animation: 'fadeIn 0.2s ease-out',
        }}
      >
        {/* Overlay */}
        <Box
          position="fixed"
          inset={0}
          bg="bg"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
        
        {/* Content */}
        <Box
          ref={ref}
          position="relative"
          bg="card"
          rounded="xl"
          shadow="xl"
          w="100%"
          maxW={sizeMap[size]}
          maxH="90vh"
          overflow="auto"
          style={{
            animation: 'scaleIn 0.2s ease-out',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </Box>
      </Box>
    );

    return createPortal(content, document.body);
  }
);

Modal.displayName = 'Modal';

export interface ModalHeaderProps extends BoxProps {}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, ...props }, ref) => (
    <Box
      ref={ref}
      p={6}
      pb={0}
      fontSize="var(--indo-text-lg)"
      fontWeight={600}
      {...props}
    >
      {children}
    </Box>
  )
);

ModalHeader.displayName = 'ModalHeader';

export interface ModalBodyProps extends BoxProps {}

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, ...props }, ref) => (
    <Box ref={ref} p={6} {...props}>
      {children}
    </Box>
  )
);

ModalBody.displayName = 'ModalBody';

export interface ModalFooterProps extends BoxProps {}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, ...props }, ref) => (
    <Box
      ref={ref}
      p={6}
      pt={0}
      display="flex"
      justifyContent="flex-end"
      gap={3}
      {...props}
    >
      {children}
    </Box>
  )
);

ModalFooter.displayName = 'ModalFooter';

export interface ModalCloseButtonProps extends BoxProps {
  onClick?: () => void;
}

export const ModalCloseButton = forwardRef<HTMLButtonElement, ModalCloseButtonProps>(
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

ModalCloseButton.displayName = 'ModalCloseButton';
