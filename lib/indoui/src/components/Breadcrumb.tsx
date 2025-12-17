import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';
import { HStack } from './Stack';

export interface BreadcrumbProps extends BoxProps {
  separator?: React.ReactNode;
  spacing?: number;
}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ separator = '/', spacing = 2, children, ...props }, ref) => {
    const items = React.Children.toArray(children);

    return (
      <Box
        as="nav"
        ref={ref as React.Ref<HTMLDivElement>}
        aria-label="breadcrumb"
        {...props}
      >
        <HStack as="ol" spacing={spacing} style={{ listStyle: 'none' }}>
          {items.map((child, index) => (
            <React.Fragment key={index}>
              <Box as="li" display="flex" alignItems="center">
                {child}
              </Box>
              {index < items.length - 1 && (
                <Box
                  as="li"
                  aria-hidden="true"
                  color="muted.fg"
                  fontSize="var(--indo-text-sm)"
                >
                  {separator}
                </Box>
              )}
            </React.Fragment>
          ))}
        </HStack>
      </Box>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export interface BreadcrumbItemProps extends BoxProps {
  isCurrentPage?: boolean;
}

export const BreadcrumbItem = forwardRef<HTMLSpanElement, BreadcrumbItemProps>(
  ({ isCurrentPage = false, children, ...props }, ref) => (
    <Box
      as="span"
      ref={ref as React.Ref<HTMLDivElement>}
      fontSize="var(--indo-text-sm)"
      fontWeight={isCurrentPage ? 600 : 400}
      color={isCurrentPage ? 'fg' : 'muted.fg'}
      aria-current={isCurrentPage ? 'page' : undefined}
      {...props}
    >
      {children}
    </Box>
  )
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

export interface BreadcrumbLinkProps extends BoxProps {
  href?: string;
  isCurrentPage?: boolean;
}

export const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ href, isCurrentPage = false, children, ...props }, ref) => {
    if (isCurrentPage) {
      return (
        <Box
          as="span"
          fontSize="var(--indo-text-sm)"
          fontWeight={600}
          aria-current="page"
          {...props}
        >
          {children}
        </Box>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        style={{
          fontSize: 'var(--indo-text-sm)',
          color: 'hsl(var(--indo-muted-fg))',
          textDecoration: 'none',
          transition: 'color 0.15s',
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.color = 'hsl(var(--indo-primary))';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.color = 'hsl(var(--indo-muted-fg))';
        }}
      >
        {children}
      </a>
    );
  }
);

BreadcrumbLink.displayName = 'BreadcrumbLink';
