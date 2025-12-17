import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

export interface DividerProps extends Omit<BoxProps, 'children'> {
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', ...props }, ref) => {
    const isHorizontal = orientation === 'horizontal';
    
    return (
      <Box
        as="hr"
        ref={ref}
        className={`indo-divider indo-divider-${orientation}`}
        role="separator"
        aria-orientation={orientation}
        {...(isHorizontal
          ? { w: '100%', h: '1px' }
          : { w: '1px', h: 'auto', alignSelf: 'stretch' }
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
