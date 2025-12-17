import React, { forwardRef, createContext, useContext } from 'react';
import { Box, BoxProps } from './Box';
import { HStack, VStack } from './Stack';

interface StepsContextValue {
  activeStep: number;
  orientation: 'horizontal' | 'vertical';
}

const StepsContext = createContext<StepsContextValue | null>(null);

const useStepsContext = () => {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error('Step components must be used within Steps');
  }
  return context;
};

export interface StepsProps extends BoxProps {
  activeStep: number;
  orientation?: 'horizontal' | 'vertical';
  children: React.ReactNode;
}

export const Steps = forwardRef<HTMLDivElement, StepsProps>(
  ({ activeStep, orientation = 'horizontal', children, ...props }, ref) => {
    const StackComponent = orientation === 'horizontal' ? HStack : VStack;

    return (
      <StepsContext.Provider value={{ activeStep, orientation }}>
        <StackComponent
          ref={ref}
          spacing={orientation === 'horizontal' ? 0 : 4}
          align={orientation === 'horizontal' ? 'center' : 'flex-start'}
          w="100%"
          {...props}
        >
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement<{ index: number }>, {
                index,
              });
            }
            return child;
          })}
        </StackComponent>
      </StepsContext.Provider>
    );
  }
);

Steps.displayName = 'Steps';

export interface StepProps extends BoxProps {
  index?: number;
  title?: string;
  description?: string;
}

export const Step = forwardRef<HTMLDivElement, StepProps>(
  ({ index = 0, title, description, children, ...props }, ref) => {
    const { activeStep, orientation } = useStepsContext();
    
    const status = index < activeStep ? 'complete' : index === activeStep ? 'active' : 'incomplete';
    const isLast = false; // Will be determined by parent

    const getIndicatorStyles = () => {
      switch (status) {
        case 'complete':
          return {
            backgroundColor: 'hsl(var(--indo-primary))',
            borderColor: 'hsl(var(--indo-primary))',
            color: 'white',
          };
        case 'active':
          return {
            backgroundColor: 'hsl(var(--indo-primary))',
            borderColor: 'hsl(var(--indo-primary))',
            color: 'white',
          };
        default:
          return {
            backgroundColor: 'transparent',
            borderColor: 'hsl(var(--indo-border-emphasis))',
            color: 'hsl(var(--indo-muted-fg))',
          };
      }
    };

    return (
      <Box
        ref={ref}
        display="flex"
        flexDirection={orientation === 'horizontal' ? 'column' : 'row'}
        alignItems={orientation === 'horizontal' ? 'center' : 'flex-start'}
        flex={orientation === 'horizontal' ? 1 : undefined}
        gap={orientation === 'horizontal' ? 2 : 4}
        {...props}
      >
        <Box display="flex" alignItems="center" gap={orientation === 'horizontal' ? 0 : 3}>
          {/* Step Indicator */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="full"
            w={8}
            h={8}
            fontSize="var(--indo-text-sm)"
            fontWeight={600}
            flexShrink={0}
            style={{
              border: '2px solid',
              transition: 'var(--indo-transition-fast)',
              ...getIndicatorStyles(),
            }}
          >
            {status === 'complete' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              index + 1
            )}
          </Box>
          
          {/* Connector for horizontal */}
          {orientation === 'horizontal' && (
            <Box
              flex={1}
              h="2px"
              mx={2}
              style={{
                backgroundColor: index < activeStep ? 'hsl(var(--indo-primary))' : 'hsl(var(--indo-border))',
                minWidth: '2rem',
              }}
            />
          )}
        </Box>
        
        {/* Content */}
        <Box textAlign={orientation === 'horizontal' ? 'center' : 'left'}>
          {title && (
            <Box
              fontSize="var(--indo-text-sm)"
              fontWeight={status === 'active' ? 600 : 500}
              color={status === 'incomplete' ? 'muted.fg' : 'fg'}
            >
              {title}
            </Box>
          )}
          {description && (
            <Box
              fontSize="var(--indo-text-xs)"
              color="muted.fg"
              mt={0.5}
            >
              {description}
            </Box>
          )}
          {children}
        </Box>
      </Box>
    );
  }
);

Step.displayName = 'Step';

export interface StepIndicatorProps extends BoxProps {}

export const StepIndicator = forwardRef<HTMLDivElement, StepIndicatorProps>(
  ({ children, ...props }, ref) => (
    <Box ref={ref} {...props}>
      {children}
    </Box>
  )
);

StepIndicator.displayName = 'StepIndicator';

export interface StepStatusProps {
  complete?: React.ReactNode;
  incomplete?: React.ReactNode;
  active?: React.ReactNode;
}

export const StepStatus: React.FC<StepStatusProps> = ({
  complete,
  incomplete,
  active,
}) => {
  // This would need context integration
  return null;
};

StepStatus.displayName = 'StepStatus';
