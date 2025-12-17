import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box, BoxProps } from './Box';

export interface PopoverProps {
  trigger: React.ReactElement;
  children: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  closeOnBlur?: boolean;
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  placement = 'bottom',
  isOpen: controlledIsOpen,
  onOpen,
  onClose,
  closeOnBlur = true,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleOpen = () => {
    if (!isControlled) {
      setInternalIsOpen(true);
    }
    onOpen?.();
  };

  const handleClose = () => {
    if (!isControlled) {
      setInternalIsOpen(false);
    }
    onClose?.();
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  const updatePosition = () => {
    if (!triggerRef.current || !contentRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const offset = 8;

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top - contentRect.height - offset;
        left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + offset;
        left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.left - contentRect.width - offset;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.right + offset;
        break;
    }

    // Keep within viewport
    left = Math.max(8, Math.min(left, window.innerWidth - contentRect.width - 8));
    top = Math.max(8, Math.min(top, window.innerHeight - contentRect.height - 8));

    setPosition({ top: top + window.scrollY, left: left + window.scrollX });
  };

  useEffect(() => {
    if (isOpen) {
      updatePosition();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !closeOnBlur) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current?.contains(e.target as Node) ||
        contentRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      handleClose();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeOnBlur]);

  const triggerElement = React.cloneElement(trigger, {
    ref: triggerRef,
    onClick: (e: React.MouseEvent) => {
      trigger.props.onClick?.(e);
      handleToggle();
    },
  });

  return (
    <>
      {triggerElement}
      {isOpen &&
        createPortal(
          <Box
            ref={contentRef}
            position="absolute"
            zIndex={1500}
            bg="popover"
            rounded="lg"
            shadow="lg"
            p={4}
            minW="200px"
            style={{
              top: position.top,
              left: position.left,
              border: '1px solid hsl(var(--indo-border))',
              animation: 'scaleIn 0.15s ease-out, fadeIn 0.15s ease-out',
            }}
          >
            {children}
          </Box>,
          document.body
        )}
    </>
  );
};

Popover.displayName = 'Popover';

export interface PopoverHeaderProps extends BoxProps {}

export const PopoverHeader = forwardRef<HTMLDivElement, PopoverHeaderProps>(
  ({ children, ...props }, ref) => (
    <Box ref={ref} fontWeight={600} mb={2} {...props}>
      {children}
    </Box>
  )
);

PopoverHeader.displayName = 'PopoverHeader';

export interface PopoverBodyProps extends BoxProps {}

export const PopoverBody = forwardRef<HTMLDivElement, PopoverBodyProps>(
  ({ children, ...props }, ref) => (
    <Box ref={ref} fontSize="var(--indo-text-sm)" {...props}>
      {children}
    </Box>
  )
);

PopoverBody.displayName = 'PopoverBody';

export interface PopoverFooterProps extends BoxProps {}

export const PopoverFooter = forwardRef<HTMLDivElement, PopoverFooterProps>(
  ({ children, ...props }, ref) => (
    <Box ref={ref} mt={3} display="flex" justifyContent="flex-end" gap={2} {...props}>
      {children}
    </Box>
  )
);

PopoverFooter.displayName = 'PopoverFooter';
