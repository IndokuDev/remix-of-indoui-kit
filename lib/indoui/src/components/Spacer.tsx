import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

export interface SpacerProps extends BoxProps {}

export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  (props, ref) => {
    return <Box ref={ref} flex="1" {...props} />;
  }
);

Spacer.displayName = 'Spacer';
