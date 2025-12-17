import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

export interface CardProps extends BoxProps {
  variant?: 'elevated' | 'outline' | 'ghost' | 'filled';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'elevated', className = '', children, ...props }, ref) => {
    const classes = [
      'indo-card',
      variant !== 'filled' && `indo-card-${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Box ref={ref} className={classes} {...props}>
        {children}
      </Box>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends BoxProps {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} p={6} pb={0} {...props}>
        {children}
      </Box>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export interface CardBodyProps extends BoxProps {}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} p={6} {...props}>
        {children}
      </Box>
    );
  }
);

CardBody.displayName = 'CardBody';

export interface CardFooterProps extends BoxProps {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} p={6} pt={0} {...props}>
        {children}
      </Box>
    );
  }
);

CardFooter.displayName = 'CardFooter';
