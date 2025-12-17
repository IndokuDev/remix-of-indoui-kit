import React, { forwardRef } from 'react';
import { StyleProps, stylePropsToCSS, extractStyleProps } from '../system/style-props';

// Prose - Typography container for rich text
export interface ProseProps extends StyleProps, React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const Prose = forwardRef<HTMLDivElement, ProseProps>(
  ({ children, size = 'md', className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <div
        ref={ref}
        className={`indo-prose indo-prose-${size} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

Prose.displayName = 'Prose';

// Highlight
export interface HighlightProps extends StyleProps, React.HTMLAttributes<HTMLSpanElement> {
  query: string | string[];
  text: string;
  highlightStyle?: React.CSSProperties;
}

export const Highlight = forwardRef<HTMLSpanElement, HighlightProps>(
  (
    {
      query,
      text,
      highlightStyle = { background: 'hsl(var(--indo-yellow-200))', color: 'hsl(var(--indo-gray-900))' },
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    const queries = Array.isArray(query) ? query : [query];
    const regex = new RegExp(`(${queries.map(q => q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
      <span
        ref={ref}
        className={`indo-highlight ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {parts.map((part, index) =>
          queries.some(q => q.toLowerCase() === part.toLowerCase()) ? (
            <mark key={index} style={highlightStyle}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  }
);

Highlight.displayName = 'Highlight';

// Blockquote
export interface BlockquoteProps extends StyleProps, React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  cite?: string;
  variant?: 'subtle' | 'solid' | 'plain';
  colorPalette?: string;
}

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (
    { children, cite, variant = 'subtle', colorPalette = 'gray', className = '', style, ...props },
    ref
  ) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <blockquote
        ref={ref}
        className={`indo-blockquote indo-blockquote-${variant} ${className}`}
        style={{
          ...cssStyles,
          borderLeftColor: variant !== 'plain' ? `hsl(var(--indo-${colorPalette}-400))` : undefined,
          ...style,
        }}
        cite={cite}
        {...restProps}
      >
        {children}
      </blockquote>
    );
  }
);

Blockquote.displayName = 'Blockquote';

// List components
export interface ListProps extends StyleProps, React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  as?: 'ul' | 'ol';
  styleType?: string;
  spacing?: string | number;
}

export const List = forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  ({ as: Component = 'ul', styleType, spacing = 2, children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <Component
        ref={ref as any}
        className={`indo-list ${className}`}
        style={{
          ...cssStyles,
          listStyleType: styleType,
          ...style,
        }}
        {...restProps}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              style: {
                ...child.props.style,
                marginBottom: index < React.Children.count(children) - 1 
                  ? typeof spacing === 'number' ? `${spacing * 0.25}rem` : spacing 
                  : undefined,
              },
            });
          }
          return child;
        })}
      </Component>
    );
  }
);

List.displayName = 'List';

export interface ListItemProps extends StyleProps, React.LiHTMLAttributes<HTMLLIElement> {
  icon?: React.ReactNode;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ icon, children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <li
        ref={ref}
        className={`indo-list-item ${icon ? 'indo-list-item-icon' : ''} ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {icon && <span className="indo-list-icon">{icon}</span>}
        {children}
      </li>
    );
  }
);

ListItem.displayName = 'ListItem';

// InlineCode
export interface InlineCodeProps extends StyleProps, React.HTMLAttributes<HTMLElement> {}

export const InlineCode = forwardRef<HTMLElement, InlineCodeProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <code
        ref={ref}
        className={`indo-inline-code ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </code>
    );
  }
);

InlineCode.displayName = 'InlineCode';

// Description List
export interface DescriptionListProps extends StyleProps, React.HTMLAttributes<HTMLDListElement> {}

export const DescriptionList = forwardRef<HTMLDListElement, DescriptionListProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <dl
        ref={ref}
        className={`indo-description-list ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </dl>
    );
  }
);

DescriptionList.displayName = 'DescriptionList';

export interface DescriptionTermProps extends StyleProps, React.HTMLAttributes<HTMLElement> {}

export const DescriptionTerm = forwardRef<HTMLElement, DescriptionTermProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <dt
        ref={ref}
        className={`indo-description-term ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </dt>
    );
  }
);

DescriptionTerm.displayName = 'DescriptionTerm';

export interface DescriptionDetailsProps extends StyleProps, React.HTMLAttributes<HTMLElement> {}

export const DescriptionDetails = forwardRef<HTMLElement, DescriptionDetailsProps>(
  ({ children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);

    return (
      <dd
        ref={ref}
        className={`indo-description-details ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {children}
      </dd>
    );
  }
);

DescriptionDetails.displayName = 'DescriptionDetails';

// Clipboard
export interface ClipboardProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  value: string;
  onCopied?: () => void;
  timeout?: number;
  children?: React.ReactNode | ((props: { copied: boolean; copy: () => void }) => React.ReactNode);
}

export const Clipboard = forwardRef<HTMLDivElement, ClipboardProps>(
  ({ value, onCopied, timeout = 2000, children, className = '', style, ...props }, ref) => {
    const { styleProps, restProps } = extractStyleProps(props);
    const cssStyles = stylePropsToCSS(styleProps);
    const [copied, setCopied] = React.useState(false);

    const copy = async () => {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        onCopied?.();
        setTimeout(() => setCopied(false), timeout);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    return (
      <div
        ref={ref}
        className={`indo-clipboard ${className}`}
        style={{ ...cssStyles, ...style }}
        {...restProps}
      >
        {typeof children === 'function' ? children({ copied, copy }) : children}
      </div>
    );
  }
);

Clipboard.displayName = 'Clipboard';
