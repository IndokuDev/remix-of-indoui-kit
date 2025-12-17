// Layout props utility for IndoUI components

export interface LayoutProps {
  w?: string | number;
  h?: string | number;
  minW?: string | number;
  maxW?: string | number;
  minH?: string | number;
  maxH?: string | number;
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pb?: string | number;
  pl?: string | number;
  pr?: string | number;
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  borderRadius?: string | number;
}

const parseValue = (value: string | number | undefined): string | undefined => {
  if (value === undefined) return undefined;
  if (value === 'full') return '100%';
  if (typeof value === 'number') return `${value}px`;
  return value;
};

export const getLayoutClasses = (props: LayoutProps): string => {
  const classes: string[] = [];
  
  // These are handled via inline styles, not classes
  return classes.join(' ');
};

export const getLayoutStyles = (props: LayoutProps): React.CSSProperties => {
  const styles: React.CSSProperties = {};
  
  if (props.w !== undefined) styles.width = parseValue(props.w);
  if (props.h !== undefined) styles.height = parseValue(props.h);
  if (props.minW !== undefined) styles.minWidth = parseValue(props.minW);
  if (props.maxW !== undefined) styles.maxWidth = parseValue(props.maxW);
  if (props.minH !== undefined) styles.minHeight = parseValue(props.minH);
  if (props.maxH !== undefined) styles.maxHeight = parseValue(props.maxH);
  
  if (props.p !== undefined) styles.padding = parseValue(props.p);
  if (props.px !== undefined) {
    styles.paddingLeft = parseValue(props.px);
    styles.paddingRight = parseValue(props.px);
  }
  if (props.py !== undefined) {
    styles.paddingTop = parseValue(props.py);
    styles.paddingBottom = parseValue(props.py);
  }
  if (props.pt !== undefined) styles.paddingTop = parseValue(props.pt);
  if (props.pb !== undefined) styles.paddingBottom = parseValue(props.pb);
  if (props.pl !== undefined) styles.paddingLeft = parseValue(props.pl);
  if (props.pr !== undefined) styles.paddingRight = parseValue(props.pr);
  
  if (props.m !== undefined) styles.margin = parseValue(props.m);
  if (props.mx !== undefined) {
    styles.marginLeft = parseValue(props.mx);
    styles.marginRight = parseValue(props.mx);
  }
  if (props.my !== undefined) {
    styles.marginTop = parseValue(props.my);
    styles.marginBottom = parseValue(props.my);
  }
  if (props.mt !== undefined) styles.marginTop = parseValue(props.mt);
  if (props.mb !== undefined) styles.marginBottom = parseValue(props.mb);
  if (props.ml !== undefined) styles.marginLeft = parseValue(props.ml);
  if (props.mr !== undefined) styles.marginRight = parseValue(props.mr);
  
  if (props.borderRadius !== undefined) styles.borderRadius = parseValue(props.borderRadius);
  
  return styles;
};

// For backward compatibility
export { getLayoutStyles as extractLayoutProps };
