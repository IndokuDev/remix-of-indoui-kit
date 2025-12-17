import React, { forwardRef } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

// Image with loading and error states
export interface ImageProps
  extends StyleProps,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'color'> {
  fallbackSrc?: string;
  fallback?: React.ReactNode;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  ignoreFallback?: boolean;
  crossOrigin?: 'anonymous' | 'use-credentials';
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt = '',
      fallbackSrc,
      fallback,
      objectFit = 'cover',
      objectPosition = 'center',
      ignoreFallback = false,
      className = '',
      style,
      onError,
      onLoad,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setStatus('loaded');
      onLoad?.(e);
    };

    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setStatus('error');
      if (fallbackSrc && !ignoreFallback) {
        (e.target as HTMLImageElement).src = fallbackSrc;
      }
      onError?.(e);
    };

    if (status === 'error' && fallback && !fallbackSrc) {
      return <>{fallback}</>;
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={`indo-image ${className}`}
        style={{
          ...cssStyles,
          objectFit,
          objectPosition,
          ...style,
        }}
        onLoad={handleLoad}
        onError={handleError}
        {...restProps}
      />
    );
  }
);

Image.displayName = 'Image';

// Stat components
export interface StatProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {}

export const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-stat ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

Stat.displayName = 'Stat';

export interface StatLabelProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {}

export const StatLabel = forwardRef<HTMLDivElement, StatLabelProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-stat-label ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

StatLabel.displayName = 'StatLabel';

export interface StatNumberProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {}

export const StatNumber = forwardRef<HTMLDivElement, StatNumberProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-stat-number ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

StatNumber.displayName = 'StatNumber';

export interface StatHelpTextProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {}

export const StatHelpText = forwardRef<HTMLDivElement, StatHelpTextProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-stat-help ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

StatHelpText.displayName = 'StatHelpText';

export interface StatArrowProps extends StyleProps, React.HTMLAttributes<HTMLSpanElement> {
  type: 'increase' | 'decrease';
}

export const StatArrow = forwardRef<HTMLSpanElement, StatArrowProps>(
  ({ type, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <span
        ref={ref}
        className={`indo-stat-arrow indo-stat-arrow-${type} ${className}`}
        style={{ ...cssStyles, ...style }}
        aria-hidden="true"
        {...restProps}
      >
        {type === 'increase' ? '↑' : '↓'}
      </span>
    );
  }
);

StatArrow.displayName = 'StatArrow';

export interface StatGroupProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {}

export const StatGroup = forwardRef<HTMLDivElement, StatGroupProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-stat-group ${className}`}
        style={{ ...cssStyles, display: 'flex', gap: '2rem', flexWrap: 'wrap', ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

StatGroup.displayName = 'StatGroup';

// Empty State
export interface EmptyStateProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, title, description, action, children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-empty-state ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {icon && <div className="indo-empty-state-icon">{icon}</div>}
        {title && <h3 className="indo-empty-state-title">{title}</h3>}
        {description && <p className="indo-empty-state-description">{description}</p>}
        {children}
        {action && <div className="indo-empty-state-action">{action}</div>}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';

// Timeline
export interface TimelineProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  variant?: 'solid' | 'outline';
}

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  ({ children, variant = 'solid', className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-timeline indo-timeline-${variant} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

Timeline.displayName = 'Timeline';

export interface TimelineItemProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  color?: string;
}

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ icon, color = 'blue', children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-timeline-item ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        <div
          className="indo-timeline-dot"
          style={{ background: `hsl(var(--indo-${color}-500))` }}
        >
          {icon}
        </div>
        <div className="indo-timeline-content">{children}</div>
      </div>
    );
  }
);

TimelineItem.displayName = 'TimelineItem';

// Pagination
export interface PaginationProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
  size?: 'sm' | 'md' | 'lg';
  colorPalette?: string;
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      siblingCount = 1,
      showFirstLast = true,
      size = 'md',
      colorPalette = 'blue',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({ length }, (_, idx) => idx + start);
    };

    const generatePagination = () => {
      const totalPageNumbers = siblingCount * 2 + 3;
      
      if (totalPageNumbers >= totalPages) {
        return range(1, totalPages);
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = range(1, leftItemCount);
        return [...leftRange, '...', totalPages];
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = range(totalPages - rightItemCount + 1, totalPages);
        return [1, '...', ...rightRange];
      }

      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, '...', ...middleRange, '...', totalPages];
    };

    const pages = generatePagination();

    return (
      <nav
        ref={ref}
        className={`indo-pagination ${className}`}
        style={{ ...cssStyles, ...style }}
        aria-label="Pagination"
        {...restProps}
      >
        {showFirstLast && (
          <button
            className={`indo-pagination-btn indo-pagination-${size}`}
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            aria-label="First page"
          >
            ««
          </button>
        )}
        <button
          className={`indo-pagination-btn indo-pagination-${size}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          «
        </button>
        
        {pages.map((page, index) =>
          page === '...' ? (
            <span key={`dots-${index}`} className="indo-pagination-dots">
              ...
            </span>
          ) : (
            <button
              key={page}
              className={`indo-pagination-btn indo-pagination-${size} ${currentPage === page ? 'indo-pagination-active' : ''}`}
              onClick={() => onPageChange(page as number)}
              aria-current={currentPage === page ? 'page' : undefined}
              style={
                currentPage === page
                  ? { background: `hsl(var(--indo-${colorPalette}-500))`, color: 'white' }
                  : undefined
              }
            >
              {page}
            </button>
          )
        )}
        
        <button
          className={`indo-pagination-btn indo-pagination-${size}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          »
        </button>
        {showFirstLast && (
          <button
            className={`indo-pagination-btn indo-pagination-${size}`}
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Last page"
          >
            »»
          </button>
        )}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';
