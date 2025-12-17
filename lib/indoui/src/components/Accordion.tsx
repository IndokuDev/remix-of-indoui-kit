import React, { forwardRef, useState, createContext, useContext } from 'react';
import { Box, BoxProps } from './Box';

interface AccordionContextValue {
  expandedItems: string[];
  toggleItem: (value: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

interface AccordionItemContextValue {
  value: string;
  isExpanded: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within Accordion');
  }
  return context;
};

const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('AccordionButton/Panel must be used within AccordionItem');
  }
  return context;
};

export interface AccordionProps extends BoxProps {
  defaultValue?: string[];
  allowMultiple?: boolean;
  allowToggle?: boolean;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ defaultValue = [], allowMultiple = false, allowToggle = true, children, ...props }, ref) => {
    const [expandedItems, setExpandedItems] = useState<string[]>(defaultValue);

    const toggleItem = (value: string) => {
      setExpandedItems((prev) => {
        const isExpanded = prev.includes(value);
        
        if (isExpanded) {
          return allowToggle ? prev.filter((v) => v !== value) : prev;
        }
        
        if (allowMultiple) {
          return [...prev, value];
        }
        
        return [value];
      });
    };

    return (
      <AccordionContext.Provider value={{ expandedItems, toggleItem, allowMultiple }}>
        <Box ref={ref} {...props}>
          {children}
        </Box>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

export interface AccordionItemProps extends BoxProps {
  value: string;
  isDisabled?: boolean;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, isDisabled = false, children, ...props }, ref) => {
    const { expandedItems } = useAccordionContext();
    const isExpanded = expandedItems.includes(value);

    return (
      <AccordionItemContext.Provider value={{ value, isExpanded }}>
        <Box
          ref={ref}
          borderBottom="1px solid"
          borderColor="border"
          opacity={isDisabled ? 0.5 : 1}
          pointerEvents={isDisabled ? 'none' : 'auto'}
          {...props}
        >
          {children}
        </Box>
      </AccordionItemContext.Provider>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export interface AccordionButtonProps extends BoxProps {}

export const AccordionButton = forwardRef<HTMLButtonElement, AccordionButtonProps>(
  ({ children, ...props }, ref) => {
    const { toggleItem } = useAccordionContext();
    const { value, isExpanded } = useAccordionItemContext();

    return (
    <Box
      as="button"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={0}
        fontSize="var(--indo-text-base)"
        fontWeight={500}
        cursor="pointer"
        style={{
          background: 'transparent',
          border: 'none',
          textAlign: 'left',
          transition: 'var(--indo-transition-fast)',
        }}
        onClick={() => toggleItem(value)}
        {...props}
      >
        {children}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{
            transition: 'transform 0.2s ease-out',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            color: 'hsl(var(--indo-muted-fg))',
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Box>
    );
  }
);

AccordionButton.displayName = 'AccordionButton';

export interface AccordionPanelProps extends BoxProps {}

export const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(
  ({ children, ...props }, ref) => {
    const { isExpanded } = useAccordionItemContext();

    return (
      <Box
        ref={ref}
        overflow="hidden"
        style={{
          display: isExpanded ? 'block' : 'none',
          animation: isExpanded ? 'accordionDown 0.2s ease-out' : undefined,
        }}
      >
        <Box pb={4} color="muted.fg" {...props}>
          {children}
        </Box>
      </Box>
    );
  }
);

AccordionPanel.displayName = 'AccordionPanel';

export interface AccordionIconProps extends BoxProps {}

export const AccordionIcon = forwardRef<HTMLSpanElement, AccordionIconProps>(
  (props, ref) => {
    const { isExpanded } = useAccordionItemContext();

    return (
      <Box
        as="span"
        ref={ref as React.Ref<HTMLDivElement>}
        display="inline-flex"
        style={{
          transition: 'transform 0.2s ease-out',
          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
        {...props}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Box>
    );
  }
);

AccordionIcon.displayName = 'AccordionIcon';
