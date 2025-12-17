import React, { forwardRef } from 'react';
import { Flex, FlexProps } from './Flex';

export interface StackProps extends Omit<FlexProps, 'direction'> {
  spacing?: string | number;
  divider?: React.ReactElement;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ spacing = 4, children, ...props }, ref) => {
    return (
      <Flex ref={ref} direction="column" gap={spacing} {...props}>
        {children}
      </Flex>
    );
  }
);

Stack.displayName = 'Stack';

export const VStack = forwardRef<HTMLDivElement, StackProps>(
  ({ spacing = 4, children, align = 'center', ...props }, ref) => {
    return (
      <Flex ref={ref} direction="column" align={align} gap={spacing} {...props}>
        {children}
      </Flex>
    );
  }
);

VStack.displayName = 'VStack';

export const HStack = forwardRef<HTMLDivElement, StackProps>(
  ({ spacing = 4, children, align = 'center', ...props }, ref) => {
    return (
      <Flex ref={ref} direction="row" align={align} gap={spacing} {...props}>
        {children}
      </Flex>
    );
  }
);

HStack.displayName = 'HStack';
