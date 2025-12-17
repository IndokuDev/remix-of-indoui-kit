import React, { forwardRef, useState, createContext, useContext } from 'react';
import { Box, BoxProps } from './Box';

interface TabsContextValue {
  value: string;
  onChange: (value: string) => void;
  variant: 'line' | 'enclosed' | 'soft-rounded' | 'solid-rounded';
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within Tabs');
  }
  return context;
};

export interface TabsProps extends Omit<BoxProps, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: 'line' | 'enclosed' | 'soft-rounded' | 'solid-rounded';
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ value, defaultValue, onChange, variant = 'line', children, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    
    const currentValue = value !== undefined ? value : internalValue;
    const handleChange = (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    return (
      <TabsContext.Provider value={{ value: currentValue, onChange: handleChange, variant }}>
        <Box ref={ref} {...props}>
          {children}
        </Box>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';

export interface TabListProps extends BoxProps {}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, ...props }, ref) => {
    const { variant } = useTabsContext();
    
    const variantStyles: Record<string, React.CSSProperties> = {
      line: {
        borderBottom: '2px solid hsl(var(--indo-border))',
      },
      enclosed: {
        borderBottom: '1px solid hsl(var(--indo-border))',
      },
      'soft-rounded': {},
      'solid-rounded': {
        backgroundColor: 'hsl(var(--indo-muted))',
        borderRadius: 'var(--indo-radius-lg)',
        padding: '0.25rem',
      },
    };

    return (
      <Box
        ref={ref}
        display="flex"
        gap={variant === 'solid-rounded' ? 1 : 0}
        style={variantStyles[variant]}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

TabList.displayName = 'TabList';

export interface TabProps extends BoxProps {
  value: string;
  isDisabled?: boolean;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ value, isDisabled = false, children, ...props }, ref) => {
    const { value: selectedValue, onChange, variant } = useTabsContext();
    const isSelected = selectedValue === value;

    const getVariantStyles = (): React.CSSProperties => {
      switch (variant) {
        case 'line':
          return {
            borderBottom: isSelected ? '2px solid hsl(var(--indo-primary))' : '2px solid transparent',
            marginBottom: '-2px',
            color: isSelected ? 'hsl(var(--indo-primary))' : 'hsl(var(--indo-muted-fg))',
          };
        case 'enclosed':
          return {
            border: isSelected ? '1px solid hsl(var(--indo-border))' : '1px solid transparent',
            borderBottom: isSelected ? '1px solid hsl(var(--indo-bg))' : '1px solid transparent',
            marginBottom: '-1px',
            borderTopLeftRadius: 'var(--indo-radius-md)',
            borderTopRightRadius: 'var(--indo-radius-md)',
            backgroundColor: isSelected ? 'hsl(var(--indo-bg))' : 'transparent',
          };
        case 'soft-rounded':
          return {
            borderRadius: 'var(--indo-radius-full)',
            backgroundColor: isSelected ? 'hsl(var(--indo-primary-subtle))' : 'transparent',
            color: isSelected ? 'hsl(var(--indo-primary))' : 'hsl(var(--indo-muted-fg))',
          };
        case 'solid-rounded':
          return {
            borderRadius: 'var(--indo-radius-md)',
            backgroundColor: isSelected ? 'hsl(var(--indo-bg))' : 'transparent',
            color: isSelected ? 'hsl(var(--indo-fg))' : 'hsl(var(--indo-muted-fg))',
            boxShadow: isSelected ? 'var(--indo-shadow-sm)' : 'none',
          };
        default:
          return {};
      }
    };

    return (
    <Box
      as="button"
        px={4}
        py={2}
        fontSize="var(--indo-text-sm)"
        fontWeight={500}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        opacity={isDisabled ? 0.5 : 1}
        style={{
          background: 'transparent',
          border: 'none',
          transition: 'var(--indo-transition-fast)',
          whiteSpace: 'nowrap',
          ...getVariantStyles(),
        }}
        onClick={() => !isDisabled && onChange(value)}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Tab.displayName = 'Tab';

export interface TabPanelsProps extends BoxProps {}

export const TabPanels = forwardRef<HTMLDivElement, TabPanelsProps>(
  ({ children, ...props }, ref) => (
    <Box ref={ref} {...props}>
      {children}
    </Box>
  )
);

TabPanels.displayName = 'TabPanels';

export interface TabPanelProps extends BoxProps {
  value: string;
}

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ value, children, ...props }, ref) => {
    const { value: selectedValue } = useTabsContext();
    
    if (selectedValue !== value) return null;

    return (
      <Box
        ref={ref}
        py={4}
        style={{ animation: 'fadeIn 0.2s ease-out' }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

TabPanel.displayName = 'TabPanel';
