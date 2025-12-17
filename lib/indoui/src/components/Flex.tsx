import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

export interface FlexProps extends BoxProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ direction, wrap, align, justify, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        display="flex"
        flexDirection={direction}
        flexWrap={wrap}
        alignItems={align}
        justifyContent={justify}
        {...props}
      />
    );
  }
);

Flex.displayName = 'Flex';
