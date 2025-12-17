import React, { forwardRef, useState, useRef, useEffect, cloneElement, isValidElement } from 'react';
import { createPortal } from 'react-dom';
import { Box } from './Box';

export interface TooltipProps {
  label: string;
  children: React.ReactElement;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  hasArrow?: boolean;
  isDisabled?: boolean;
  openDelay?: number;
  closeDelay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  label,
  children,
  placement = 'top',
  hasArrow = true,
  isDisabled = false,
  openDelay = 0,
  closeDelay = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const offset = 8;

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - offset;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + offset;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - offset;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + offset;
        break;
    }

    setPosition({ top: top + window.scrollY, left: left + window.scrollX });
  };

  useEffect(() => {
    if (isOpen) {
      updatePosition();
    }
  }, [isOpen]);

  const handleOpen = () => {
    if (isDisabled) return;
    clearTimeout(closeTimeoutRef.current);
    openTimeoutRef.current = setTimeout(() => setIsOpen(true), openDelay);
  };

  const handleClose = () => {
    clearTimeout(openTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setIsOpen(false), closeDelay);
  };

  useEffect(() => {
    return () => {
      clearTimeout(openTimeoutRef.current);
      clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const arrowStyles: Record<string, React.CSSProperties> = {
    top: { bottom: -4, left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
    bottom: { top: -4, left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
    left: { right: -4, top: '50%', transform: 'translateY(-50%) rotate(45deg)' },
    right: { left: -4, top: '50%', transform: 'translateY(-50%) rotate(45deg)' },
  };

  // Wrap the trigger in a span to handle ref for non-forwardRef components
  const trigger = (
    <span
      ref={triggerRef as React.RefObject<HTMLSpanElement>}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
      style={{ display: 'inline-flex' }}
    >
      {children}
    </span>
  );

  return (
    <>
      {trigger}
      {isOpen &&
        createPortal(
          <Box
            ref={tooltipRef}
            position="absolute"
            zIndex={1800}
            px={3}
            py={1.5}
            rounded="md"
            fontSize="var(--indo-text-xs)"
            fontWeight={500}
            maxW="200px"
            style={{
              top: position.top,
              left: position.left,
              backgroundColor: 'hsl(var(--indo-fg))',
              color: 'hsl(var(--indo-bg))',
              animation: 'fadeIn 0.15s ease-out',
              pointerEvents: 'none',
            }}
          >
            {label}
            {hasArrow && (
              <Box
                position="absolute"
                w={2}
                h={2}
                style={{
                  ...arrowStyles[placement],
                  backgroundColor: 'hsl(var(--indo-fg))',
                }}
              />
            )}
          </Box>,
          document.body
        )}
    </>
  );
};

Tooltip.displayName = 'Tooltip';
