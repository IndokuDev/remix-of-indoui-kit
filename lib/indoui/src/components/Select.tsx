import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box, BoxProps } from './Box';

export interface SelectProps extends Omit<BoxProps, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  options: Array<{ value: string; label: string; isDisabled?: boolean }>;
  isDisabled?: boolean;
  isInvalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: { height: '2rem', fontSize: 'var(--indo-text-xs)', padding: '0 2rem 0 0.5rem' },
  md: { height: '2.5rem', fontSize: 'var(--indo-text-sm)', padding: '0 2.5rem 0 0.75rem' },
  lg: { height: '2.75rem', fontSize: 'var(--indo-text-base)', padding: '0 3rem 0 1rem' },
};

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      value,
      defaultValue = '',
      onChange,
      placeholder = 'Select an option',
      options,
      isDisabled = false,
      isInvalid = false,
      size = 'md',
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
    const triggerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? value : internalValue;
    const selectedOption = options.find((opt) => opt.value === currentValue);
    const { height, fontSize, padding } = sizeStyles[size];

    const updatePosition = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
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
          dropdownRef.current?.contains(e.target as Node)
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

    const handleSelect = (optionValue: string) => {
      if (value === undefined) {
        setInternalValue(optionValue);
      }
      onChange?.(optionValue);
      setIsOpen(false);
    };

    return (
      <>
        <Box
          ref={(node) => {
            (triggerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          tabIndex={isDisabled ? -1 : 0}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          rounded="md"
          cursor={isDisabled ? 'not-allowed' : 'pointer'}
          opacity={isDisabled ? 0.5 : 1}
          style={{
            height,
            fontSize,
            padding,
            border: `1px solid ${isInvalid ? 'hsl(var(--indo-destructive))' : isOpen ? 'hsl(var(--indo-ring))' : 'hsl(var(--indo-input))'}`,
            backgroundColor: 'transparent',
            color: selectedOption ? 'hsl(var(--indo-fg))' : 'hsl(var(--indo-muted-fg))',
            transition: 'var(--indo-transition-fast)',
            outline: isOpen ? `2px solid hsl(var(--indo-ring) / 0.2)` : 'none',
          }}
          onClick={() => !isDisabled && setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              !isDisabled && setIsOpen(!isOpen);
            }
          }}
          {...props}
        >
          <span>{selectedOption?.label || placeholder}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              position: 'absolute',
              right: size === 'sm' ? 8 : 12,
              transition: 'transform 0.2s',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              color: 'hsl(var(--indo-muted-fg))',
            }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </Box>

        {isOpen &&
          createPortal(
            <Box
              ref={dropdownRef}
              position="absolute"
              zIndex={1000}
              bg="popover"
              rounded="md"
              shadow="lg"
              py={1}
              overflow="hidden"
              style={{
                top: position.top,
                left: position.left,
                width: position.width,
                border: '1px solid hsl(var(--indo-border))',
                animation: 'fadeIn 0.15s ease-out, scaleIn 0.15s ease-out',
                maxHeight: '200px',
                overflowY: 'auto',
              }}
              role="listbox"
            >
              {options.map((option) => (
                <Box
                  key={option.value}
                  role="option"
                  aria-selected={option.value === currentValue}
                  px={3}
                  py={2}
                  fontSize="var(--indo-text-sm)"
                  cursor={option.isDisabled ? 'not-allowed' : 'pointer'}
                  opacity={option.isDisabled ? 0.5 : 1}
                  style={{
                    backgroundColor:
                      option.value === currentValue
                        ? 'hsl(var(--indo-primary-subtle))'
                        : 'transparent',
                    color:
                      option.value === currentValue
                        ? 'hsl(var(--indo-primary))'
                        : 'hsl(var(--indo-fg))',
                    transition: 'background-color 0.1s',
                  }}
                  onClick={() => !option.isDisabled && handleSelect(option.value)}
                  onMouseEnter={(e) => {
                    if (!option.isDisabled) {
                      (e.target as HTMLElement).style.backgroundColor =
                        option.value === currentValue
                          ? 'hsl(var(--indo-primary-subtle))'
                          : 'hsl(var(--indo-muted))';
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor =
                      option.value === currentValue
                        ? 'hsl(var(--indo-primary-subtle))'
                        : 'transparent';
                  }}
                >
                  {option.label}
                </Box>
              ))}
            </Box>,
            document.body
          )}
      </>
    );
  }
);

Select.displayName = 'Select';
