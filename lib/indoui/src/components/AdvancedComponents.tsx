import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

// ColorPicker
export interface ColorPickerProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  swatches?: string[];
  showInput?: boolean;
  format?: 'hex' | 'rgb' | 'hsl';
  isDisabled?: boolean;
}

const defaultSwatches = [
  '#ef4444', '#f97316', '#eab308', '#22c55e', '#14b8a6',
  '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#d946ef',
  '#ec4899', '#f43f5e', '#78716c', '#71717a', '#000000',
];

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      value: controlledValue,
      defaultValue = '#3b82f6',
      onChange,
      swatches = defaultSwatches,
      showInput = true,
      format = 'hex',
      isDisabled = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [internalValue, setInternalValue] = useState(defaultValue);

    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (newValue: string) => {
      if (isDisabled) return;
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    return (
      <div
        ref={ref}
        className={`indo-color-picker ${isDisabled ? 'indo-color-picker-disabled' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        <div className="indo-color-picker-preview">
          <div 
            className="indo-color-picker-swatch-main"
            style={{ backgroundColor: value }}
          />
          <input
            type="color"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            disabled={isDisabled}
            className="indo-color-picker-native"
          />
        </div>
        {showInput && (
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            disabled={isDisabled}
            className="indo-color-picker-input"
          />
        )}
        <div className="indo-color-picker-swatches">
          {swatches.map((color) => (
            <button
              key={color}
              type="button"
              className={`indo-color-picker-swatch ${value === color ? 'indo-color-picker-swatch-selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleChange(color)}
              disabled={isDisabled}
            />
          ))}
        </div>
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';

// DatePicker
export interface DatePickerProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date | undefined) => void;
  min?: Date;
  max?: Date;
  format?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isClearable?: boolean;
}

const formatDate = (date: Date, format: string = 'yyyy-MM-dd'): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return format
    .replace('yyyy', String(year))
    .replace('MM', month)
    .replace('dd', day);
};

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      min,
      max,
      format = 'yyyy-MM-dd',
      placeholder = 'Select date...',
      isDisabled = false,
      isClearable = true,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [internalValue, setInternalValue] = useState<Date | undefined>(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (date: Date | undefined) => {
      if (isDisabled) return;
      if (controlledValue === undefined) {
        setInternalValue(date);
      }
      onChange?.(date);
      setIsOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const dateValue = e.target.value;
      if (dateValue) {
        const date = new Date(dateValue);
        if (!isNaN(date.getTime())) {
          handleChange(date);
        }
      } else {
        handleChange(undefined);
      }
    };

    return (
      <div
        ref={ref}
        className={`indo-date-picker ${isDisabled ? 'indo-date-picker-disabled' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        <input
          ref={inputRef}
          type="date"
          value={value ? formatDate(value, 'yyyy-MM-dd') : ''}
          onChange={handleInputChange}
          min={min ? formatDate(min, 'yyyy-MM-dd') : undefined}
          max={max ? formatDate(max, 'yyyy-MM-dd') : undefined}
          disabled={isDisabled}
          placeholder={placeholder}
          className="indo-date-picker-input"
        />
        {isClearable && value && !isDisabled && (
          <button
            type="button"
            className="indo-date-picker-clear"
            onClick={() => handleChange(undefined)}
          >
            ✕
          </button>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

// TimePicker
export interface TimePickerProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (time: string) => void;
  min?: string;
  max?: string;
  step?: number;
  format?: '12h' | '24h';
  placeholder?: string;
  isDisabled?: boolean;
}

export const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      value: controlledValue,
      defaultValue = '',
      onChange,
      min,
      max,
      step = 60,
      format = '24h',
      placeholder = 'Select time...',
      isDisabled = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [internalValue, setInternalValue] = useState(defaultValue);

    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isDisabled) return;
      const newValue = e.target.value;
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    return (
      <div
        ref={ref}
        className={`indo-time-picker ${isDisabled ? 'indo-time-picker-disabled' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        <input
          type="time"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          disabled={isDisabled}
          placeholder={placeholder}
          className="indo-time-picker-input"
        />
      </div>
    );
  }
);

TimePicker.displayName = 'TimePicker';

// CommandPalette
export interface CommandPaletteProps extends StyleProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSelect?: (item: CommandPaletteItem) => void;
  items?: CommandPaletteItem[];
  placeholder?: string;
  emptyMessage?: string;
}

export interface CommandPaletteItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  group?: string;
  action?: () => void;
}

export const CommandPalette = forwardRef<HTMLDivElement, CommandPaletteProps>(
  (
    {
      isOpen = false,
      onClose,
      onSelect,
      items = [],
      placeholder = 'Type a command or search...',
      emptyMessage = 'No results found.',
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredItems = items.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase())
    );

    const groupedItems = filteredItems.reduce((acc, item) => {
      const group = item.group || 'Commands';
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    }, {} as Record<string, CommandPaletteItem[]>);

    useEffect(() => {
      if (isOpen) {
        inputRef.current?.focus();
        setQuery('');
        setSelectedIndex(0);
      }
    }, [isOpen]);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!isOpen) return;
        
        if (e.key === 'Escape') {
          onClose?.();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => Math.min(prev + 1, filteredItems.length - 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const selected = filteredItems[selectedIndex];
          if (selected) {
            selected.action?.();
            onSelect?.(selected);
            onClose?.();
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredItems, selectedIndex, onClose, onSelect]);

    if (!isOpen) return null;

    return (
      <>
        <div className="indo-command-overlay" onClick={onClose} />
        <div
          ref={ref}
          className="indo-command-palette"
          style={cssStyles}
          {...restProps}
        >
          <div className="indo-command-header">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder={placeholder}
              className="indo-command-input"
            />
          </div>
          <div className="indo-command-list">
            {filteredItems.length === 0 ? (
              <div className="indo-command-empty">{emptyMessage}</div>
            ) : (
              Object.entries(groupedItems).map(([group, groupItems]) => (
                <div key={group} className="indo-command-group">
                  <div className="indo-command-group-label">{group}</div>
                  {groupItems.map((item, index) => {
                    const flatIndex = filteredItems.indexOf(item);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`indo-command-item ${flatIndex === selectedIndex ? 'indo-command-item-selected' : ''}`}
                        onClick={() => {
                          item.action?.();
                          onSelect?.(item);
                          onClose?.();
                        }}
                        onMouseEnter={() => setSelectedIndex(flatIndex)}
                      >
                        {item.icon && <span className="indo-command-icon">{item.icon}</span>}
                        <div className="indo-command-content">
                          <span className="indo-command-label">{item.label}</span>
                          {item.description && (
                            <span className="indo-command-description">{item.description}</span>
                          )}
                        </div>
                        {item.shortcut && (
                          <kbd className="indo-command-shortcut">{item.shortcut}</kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>
      </>
    );
  }
);

CommandPalette.displayName = 'CommandPalette';

// DataTable
export interface DataTableColumn<T> {
  key: string;
  header: string;
  render?: (value: any, row: T, index: number) => React.ReactNode;
  sortable?: boolean;
  width?: string;
}

export interface DataTableProps<T> extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  data: T[];
  columns: DataTableColumn<T>[];
  isLoading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: T, index: number) => void;
  selectable?: boolean;
  selectedRows?: number[];
  onSelectionChange?: (indices: number[]) => void;
  striped?: boolean;
  hoverable?: boolean;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  isLoading = false,
  emptyMessage = 'No data available',
  onRowClick,
  selectable = false,
  selectedRows = [],
  onSelectionChange,
  striped = false,
  hoverable = true,
  className = '',
  style,
  ...props
}: DataTableProps<T>) {
  const { styleProps, restProps } = extractStyleProps(props);
  const cssStyles = stylePropsToCSS(styleProps);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    const comparison = aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const toggleRow = (index: number) => {
    if (!selectable) return;
    const newSelection = selectedRows.includes(index)
      ? selectedRows.filter((i) => i !== index)
      : [...selectedRows, index];
    onSelectionChange?.(newSelection);
  };

  const toggleAll = () => {
    if (!selectable) return;
    if (selectedRows.length === data.length) {
      onSelectionChange?.([]);
    } else {
      onSelectionChange?.(data.map((_, i) => i));
    }
  };

  return (
    <div
      className={`indo-datatable ${className}`}
      style={{ ...cssStyles, ...style }}
      {...restProps}
    >
      <table className="indo-datatable-table">
        <thead className="indo-datatable-head">
          <tr>
            {selectable && (
              <th className="indo-datatable-th indo-datatable-checkbox">
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length && data.length > 0}
                  onChange={toggleAll}
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={`indo-datatable-th ${column.sortable ? 'indo-datatable-sortable' : ''}`}
                style={{ width: column.width }}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                {column.header}
                {column.sortable && sortKey === column.key && (
                  <span className="indo-datatable-sort">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="indo-datatable-body">
          {isLoading ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="indo-datatable-loading">
                Loading...
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="indo-datatable-empty">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            sortedData.map((row, index) => (
              <tr
                key={index}
                className={`indo-datatable-row ${striped && index % 2 === 1 ? 'indo-datatable-striped' : ''} ${hoverable ? 'indo-datatable-hoverable' : ''} ${selectedRows.includes(index) ? 'indo-datatable-selected' : ''}`}
                onClick={() => onRowClick?.(row, index)}
              >
                {selectable && (
                  <td className="indo-datatable-td indo-datatable-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={(e) => {
                        e.stopPropagation();
                        toggleRow(index);
                      }}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td key={column.key} className="indo-datatable-td">
                    {column.render
                      ? column.render(row[column.key], row, index)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

DataTable.displayName = 'DataTable';

// TreeView
export interface TreeNode {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeNode[];
  isExpanded?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
}

export interface TreeViewProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  nodes: TreeNode[];
  onSelect?: (node: TreeNode) => void;
  onExpand?: (node: TreeNode, expanded: boolean) => void;
  selectedId?: string;
  expandedIds?: string[];
  showLines?: boolean;
}

const TreeItem = ({
  node,
  level,
  onSelect,
  onExpand,
  selectedId,
  expandedIds = [],
  showLines,
}: {
  node: TreeNode;
  level: number;
  onSelect?: (node: TreeNode) => void;
  onExpand?: (node: TreeNode, expanded: boolean) => void;
  selectedId?: string;
  expandedIds?: string[];
  showLines?: boolean;
}) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedIds.includes(node.id);
  const isSelected = selectedId === node.id;

  return (
    <div className="indo-tree-item">
      <div
        className={`indo-tree-node ${isSelected ? 'indo-tree-node-selected' : ''} ${node.isDisabled ? 'indo-tree-node-disabled' : ''}`}
        style={{ paddingLeft: `${level * 1.25}rem` }}
        onClick={() => {
          if (!node.isDisabled) {
            onSelect?.(node);
          }
        }}
      >
        {hasChildren && (
          <button
            type="button"
            className={`indo-tree-toggle ${isExpanded ? 'indo-tree-toggle-expanded' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onExpand?.(node, !isExpanded);
            }}
          >
            ▶
          </button>
        )}
        {!hasChildren && <span className="indo-tree-spacer" />}
        {node.icon && <span className="indo-tree-icon">{node.icon}</span>}
        <span className="indo-tree-label">{node.label}</span>
      </div>
      {hasChildren && isExpanded && (
        <div className={`indo-tree-children ${showLines ? 'indo-tree-lines' : ''}`}>
          {node.children!.map((child) => (
            <TreeItem
              key={child.id}
              node={child}
              level={level + 1}
              onSelect={onSelect}
              onExpand={onExpand}
              selectedId={selectedId}
              expandedIds={expandedIds}
              showLines={showLines}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const TreeView = forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      nodes,
      onSelect,
      onExpand,
      selectedId,
      expandedIds = [],
      showLines = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-tree-view ${className}`}
        style={{ ...cssStyles, ...style }}
        role="tree"
        {...restProps}
      >
        {nodes.map((node) => (
          <TreeItem
            key={node.id}
            node={node}
            level={0}
            onSelect={onSelect}
            onExpand={onExpand}
            selectedId={selectedId}
            expandedIds={expandedIds}
            showLines={showLines}
          />
        ))}
      </div>
    );
  }
);

TreeView.displayName = 'TreeView';

// FileTree
export interface FileTreeItem {
  name: string;
  type: 'file' | 'folder';
  children?: FileTreeItem[];
  icon?: React.ReactNode;
}

export interface FileTreeProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  items: FileTreeItem[];
  onSelect?: (path: string, item: FileTreeItem) => void;
  selectedPath?: string;
}

const FileTreeNode = ({
  item,
  path,
  level,
  onSelect,
  selectedPath,
}: {
  item: FileTreeItem;
  path: string;
  level: number;
  onSelect?: (path: string, item: FileTreeItem) => void;
  selectedPath?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = path ? `${path}/${item.name}` : item.name;
  const isSelected = selectedPath === currentPath;

  const defaultIcon = item.type === 'folder' 
    ? (isOpen ? '📂' : '📁') 
    : '📄';

  return (
    <div className="indo-filetree-node">
      <div
        className={`indo-filetree-item ${isSelected ? 'indo-filetree-item-selected' : ''}`}
        style={{ paddingLeft: `${level * 1 + 0.5}rem` }}
        onClick={() => {
          if (item.type === 'folder') {
            setIsOpen(!isOpen);
          }
          onSelect?.(currentPath, item);
        }}
      >
        <span className="indo-filetree-icon">{item.icon || defaultIcon}</span>
        <span className="indo-filetree-name">{item.name}</span>
      </div>
      {item.type === 'folder' && isOpen && item.children && (
        <div className="indo-filetree-children">
          {item.children.map((child, index) => (
            <FileTreeNode
              key={`${currentPath}/${child.name}`}
              item={child}
              path={currentPath}
              level={level + 1}
              onSelect={onSelect}
              selectedPath={selectedPath}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileTree = forwardRef<HTMLDivElement, FileTreeProps>(
  ({ items, onSelect, selectedPath, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-filetree ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {items.map((item, index) => (
          <FileTreeNode
            key={item.name}
            item={item}
            path=""
            level={0}
            onSelect={onSelect}
            selectedPath={selectedPath}
          />
        ))}
      </div>
    );
  }
);

FileTree.displayName = 'FileTree';

// QRCode (SVG-based)
export interface QRCodeProps extends StyleProps, Omit<React.SVGAttributes<SVGSVGElement>, 'display' | 'opacity' | 'overflow' | 'cursor' | 'pointerEvents' | 'fontStyle' | 'textDecoration'> {
  value: string;
  size?: number;
  fgColor?: string;
  bgColor?: string;
  level?: 'L' | 'M' | 'Q' | 'H';
}

// Simple QR code generator (basic implementation)
const generateQRMatrix = (value: string, size: number): boolean[][] => {
  // This is a simplified placeholder - in production, use a proper QR library
  const matrixSize = 21; // Version 1 QR code
  const matrix: boolean[][] = Array(matrixSize).fill(null).map(() => 
    Array(matrixSize).fill(false)
  );
  
  // Add finder patterns (corners)
  const addFinderPattern = (x: number, y: number) => {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        const isOuter = i === 0 || i === 6 || j === 0 || j === 6;
        const isInner = i >= 2 && i <= 4 && j >= 2 && j <= 4;
        matrix[y + i][x + j] = isOuter || isInner;
      }
    }
  };
  
  addFinderPattern(0, 0);
  addFinderPattern(matrixSize - 7, 0);
  addFinderPattern(0, matrixSize - 7);
  
  // Add some data representation (simplified)
  const hash = value.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  for (let i = 9; i < matrixSize - 9; i++) {
    for (let j = 9; j < matrixSize - 9; j++) {
      matrix[i][j] = ((i + j + hash) % 3) === 0;
    }
  }
  
  return matrix;
};

export const QRCode = forwardRef<SVGSVGElement, QRCodeProps>(
  (
    {
      value,
      size = 128,
      fgColor = '#000000',
      bgColor = '#ffffff',
      level = 'M',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props as any);
    
    const matrix = generateQRMatrix(value, size);
    const moduleSize = size / matrix.length;
    
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={`indo-qrcode ${className}`}
        style={style}
        {...restProps}
      >
        <rect width={size} height={size} fill={bgColor} />
        {matrix.map((row, y) =>
          row.map((cell, x) =>
            cell ? (
              <rect
                key={`${x}-${y}`}
                x={x * moduleSize}
                y={y * moduleSize}
                width={moduleSize}
                height={moduleSize}
                fill={fgColor}
              />
            ) : null
          )
        )}
      </svg>
    );
  }
);

QRCode.displayName = 'QRCode';

// Carousel
export type CarouselDirection = 'horizontal' | 'vertical';
export type CarouselSlideDirection = 'left' | 'right' | 'up' | 'down';

export interface CarouselProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  loop?: boolean;
  onChange?: (index: number) => void;
  direction?: CarouselDirection;
  slideDirection?: CarouselSlideDirection;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      autoPlay = false,
      interval = 3000,
      showDots = true,
      showArrows = true,
      loop = true,
      onChange,
      direction = 'horizontal',
      slideDirection = 'left',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideCount = React.Children.count(children);

    const goTo = (index: number) => {
      let newIndex = index;
      if (loop) {
        newIndex = (index + slideCount) % slideCount;
      } else {
        newIndex = Math.max(0, Math.min(index, slideCount - 1));
      }
      setCurrentIndex(newIndex);
      onChange?.(newIndex);
    };

    const goNext = () => goTo(currentIndex + 1);
    const goPrev = () => goTo(currentIndex - 1);

    useEffect(() => {
      if (!autoPlay) return;
      const timer = setInterval(goNext, interval);
      return () => clearInterval(timer);
    }, [autoPlay, interval, currentIndex]);

    const isVertical = direction === 'vertical' || slideDirection === 'up' || slideDirection === 'down';
    const transform = isVertical
      ? `translateY(-${currentIndex * 100}%)`
      : `translateX(-${currentIndex * 100}%)`;

    return (
      <div
        ref={ref}
        className={`indo-carousel indo-carousel-${isVertical ? 'vertical' : 'horizontal'} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        <div className="indo-carousel-viewport">
          <div 
            className="indo-carousel-track"
            style={{ 
              transform,
              flexDirection: isVertical ? 'column' : 'row'
            }}
          >
            {React.Children.map(children, (child, index) => (
              <div className="indo-carousel-slide" key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>
        
        {showArrows && slideCount > 1 && (
          <>
            <button
              type="button"
              className={`indo-carousel-nav indo-carousel-nav-prev ${isVertical ? 'indo-carousel-nav-vertical' : ''}`}
              onClick={goPrev}
              disabled={!loop && currentIndex === 0}
            >
              {isVertical ? '▲' : '‹'}
            </button>
            <button
              type="button"
              className={`indo-carousel-nav indo-carousel-nav-next ${isVertical ? 'indo-carousel-nav-vertical' : ''}`}
              onClick={goNext}
              disabled={!loop && currentIndex === slideCount - 1}
            >
              {isVertical ? '▼' : '›'}
            </button>
          </>
        )}
        
        {showDots && slideCount > 1 && (
          <div className={`indo-carousel-dots ${isVertical ? 'indo-carousel-dots-vertical' : ''}`}>
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={`indo-carousel-dot ${index === currentIndex ? 'indo-carousel-dot-active' : ''}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';

// AlertDialog
export interface AlertDialogProps extends StyleProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isDestructive?: boolean;
  children?: React.ReactNode;
}

export const AlertDialog = forwardRef<HTMLDivElement, AlertDialogProps>(
  (
    {
      isOpen,
      onClose,
      onConfirm,
      title = 'Are you sure?',
      description,
      confirmLabel = 'Confirm',
      cancelLabel = 'Cancel',
      isDestructive = false,
      children,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
      <>
        <div className="indo-alertdialog-overlay" onClick={onClose} />
        <div
          ref={ref}
          className="indo-alertdialog"
          style={cssStyles}
          role="alertdialog"
          aria-modal="true"
          {...restProps}
        >
          <div className="indo-alertdialog-content">
            <h2 className="indo-alertdialog-title">{title}</h2>
            {description && (
              <p className="indo-alertdialog-description">{description}</p>
            )}
            {children}
          </div>
          <div className="indo-alertdialog-actions">
            <button
              type="button"
              className="indo-btn indo-btn-ghost"
              onClick={onClose}
            >
              {cancelLabel}
            </button>
            <button
              type="button"
              className={`indo-btn ${isDestructive ? 'indo-btn-destructive' : 'indo-btn-solid'}`}
              onClick={() => {
                onConfirm?.();
                onClose();
              }}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </>
    );
  }
);

AlertDialog.displayName = 'AlertDialog';
