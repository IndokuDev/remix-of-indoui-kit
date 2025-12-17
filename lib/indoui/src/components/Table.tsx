import React, { forwardRef, createContext, useContext } from 'react';

interface TableContextValue {
  size: 'sm' | 'md' | 'lg';
  variant: 'simple' | 'striped' | 'outline';
}

const TableContext = createContext<TableContextValue>({ size: 'md', variant: 'simple' });

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'simple' | 'striped' | 'outline';
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ size = 'md', variant = 'simple', className = '', style, children, ...props }, ref) => {
    const sizes = {
      sm: { cell: '8px 12px', fontSize: 'var(--indo-text-sm)' },
      md: { cell: '12px 16px', fontSize: 'var(--indo-text-md)' },
      lg: { cell: '16px 20px', fontSize: 'var(--indo-text-md)' },
    };

    return (
      <TableContext.Provider value={{ size, variant }}>
        <div style={{ overflowX: 'auto', width: '100%' }}>
          <table
            ref={ref}
            className={className}
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: sizes[size].fontSize,
              ...style,
            }}
            {...props}
          >
            {children}
          </table>
        </div>
      </TableContext.Provider>
    );
  }
);

Table.displayName = 'Table';

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className = '', style, children, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={className}
        style={{
          backgroundColor: 'hsl(var(--indo-muted) / 0.5)',
          ...style,
        }}
        {...props}
      >
        {children}
      </thead>
    );
  }
);

TableHead.displayName = 'TableHead';

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className = '', children, ...props }, ref) => {
    const { variant } = useContext(TableContext);

    return (
      <tbody ref={ref} className={className} {...props}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && variant === 'striped') {
            return React.cloneElement(child as React.ReactElement<any>, {
              style: {
                ...(child.props as any).style,
                backgroundColor: index % 2 === 1 ? 'hsl(var(--indo-muted) / 0.3)' : 'transparent',
              },
            });
          }
          return child;
        })}
      </tbody>
    );
  }
);

TableBody.displayName = 'TableBody';

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  isSelected?: boolean;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className = '', style, isSelected = false, children, ...props }, ref) => {
    const { variant } = useContext(TableContext);

    return (
      <tr
        ref={ref}
        className={className}
        style={{
          borderBottom: variant === 'outline' ? '1px solid hsl(var(--indo-border))' : 'none',
          backgroundColor: isSelected ? 'hsl(var(--indo-teal-100) / 0.3)' : undefined,
          transition: 'background-color 0.15s',
          ...style,
        }}
        onMouseEnter={(e) => {
          if (!isSelected) {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'hsl(var(--indo-muted) / 0.5)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isSelected) {
            (e.currentTarget as HTMLElement).style.backgroundColor = '';
          }
        }}
        {...props}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow';

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className = '', style, children, ...props }, ref) => {
    const { size } = useContext(TableContext);

    const sizes = {
      sm: '8px 12px',
      md: '12px 16px',
      lg: '16px 20px',
    };

    return (
      <td
        ref={ref}
        className={className}
        style={{
          padding: sizes[size],
          color: 'hsl(var(--indo-fg))',
          ...style,
        }}
        {...props}
      >
        {children}
      </td>
    );
  }
);

TableCell.displayName = 'TableCell';

export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

export const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ className = '', style, children, ...props }, ref) => {
    const { size } = useContext(TableContext);

    const sizes = {
      sm: '8px 12px',
      md: '12px 16px',
      lg: '16px 20px',
    };

    return (
      <th
        ref={ref}
        className={className}
        style={{
          padding: sizes[size],
          textAlign: 'left',
          fontWeight: 600,
          color: 'hsl(var(--indo-fg))',
          ...style,
        }}
        {...props}
      >
        {children}
      </th>
    );
  }
);

TableHeaderCell.displayName = 'TableHeaderCell';
