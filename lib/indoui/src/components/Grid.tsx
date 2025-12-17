import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Box';

export interface GridProps extends BoxProps {
  columns?: number | string;
  rows?: number | string;
  templateColumns?: string;
  templateRows?: string;
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  autoColumns?: string;
  autoRows?: string;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns,
      rows,
      templateColumns,
      templateRows,
      autoFlow,
      autoColumns,
      autoRows,
      ...props
    },
    ref
  ) => {
    const gridTemplateColumns =
      templateColumns ||
      (typeof columns === 'number' ? `repeat(${columns}, minmax(0, 1fr))` : columns);
    
    const gridTemplateRows =
      templateRows ||
      (typeof rows === 'number' ? `repeat(${rows}, minmax(0, 1fr))` : rows);

    return (
      <Box
        ref={ref}
        display="grid"
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateRows={gridTemplateRows}
        gridAutoFlow={autoFlow}
        gridAutoColumns={autoColumns}
        gridAutoRows={autoRows}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';

export interface GridItemProps extends BoxProps {
  colSpan?: number | string;
  rowSpan?: number | string;
  colStart?: number | string;
  colEnd?: number | string;
  rowStart?: number | string;
  rowEnd?: number | string;
}

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (
    { colSpan, rowSpan, colStart, colEnd, rowStart, rowEnd, ...props },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        gridColumn={
          colSpan ? `span ${colSpan} / span ${colSpan}` : 
          (colStart || colEnd) ? `${colStart || 'auto'} / ${colEnd || 'auto'}` : 
          undefined
        }
        gridRow={
          rowSpan ? `span ${rowSpan} / span ${rowSpan}` : 
          (rowStart || rowEnd) ? `${rowStart || 'auto'} / ${rowEnd || 'auto'}` : 
          undefined
        }
        {...props}
      />
    );
  }
);

GridItem.displayName = 'GridItem';

export interface SimpleGridProps extends BoxProps {
  columns?: number | { base?: number; sm?: number; md?: number; lg?: number; xl?: number };
  spacing?: string | number;
  spacingX?: string | number;
  spacingY?: string | number;
  minChildWidth?: string;
}

export const SimpleGrid = forwardRef<HTMLDivElement, SimpleGridProps>(
  ({ columns = 1, spacing, spacingX, spacingY, minChildWidth, ...props }, ref) => {
    const templateColumns = minChildWidth
      ? `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`
      : typeof columns === 'number'
      ? `repeat(${columns}, minmax(0, 1fr))`
      : undefined;

    return (
      <Box
        ref={ref}
        display="grid"
        gridTemplateColumns={templateColumns}
        gap={spacing}
        columnGap={spacingX}
        rowGap={spacingY}
        {...props}
      />
    );
  }
);

SimpleGrid.displayName = 'SimpleGrid';
