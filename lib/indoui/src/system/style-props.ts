import { CSSProperties } from 'react';
import { tokens } from '../theme/tokens';

// Chakra-compatible style props
export interface StyleProps {
  // Layout & Size
  w?: string | number;
  h?: string | number;
  minW?: string | number;
  maxW?: string | number;
  minH?: string | number;
  maxH?: string | number;
  boxSize?: string | number;
  
  // Spacing - Padding
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  
  // Spacing - Margin
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  
  // Display & Position
  display?: CSSProperties['display'];
  position?: CSSProperties['position'];
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  inset?: string | number;
  zIndex?: string | number;
  
  // Flex
  flex?: CSSProperties['flex'];
  flexDir?: CSSProperties['flexDirection'];
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexBasis?: CSSProperties['flexBasis'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  alignSelf?: CSSProperties['alignSelf'];
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
  
  // Grid
  gridTemplateColumns?: CSSProperties['gridTemplateColumns'];
  gridTemplateRows?: CSSProperties['gridTemplateRows'];
  gridColumn?: CSSProperties['gridColumn'];
  gridRow?: CSSProperties['gridRow'];
  gridArea?: CSSProperties['gridArea'];
  gridAutoFlow?: CSSProperties['gridAutoFlow'];
  gridAutoColumns?: CSSProperties['gridAutoColumns'];
  gridAutoRows?: CSSProperties['gridAutoRows'];
  
  // Overflow
  overflow?: CSSProperties['overflow'];
  overflowX?: CSSProperties['overflowX'];
  overflowY?: CSSProperties['overflowY'];
  
  // Color & Visual - supports color.shade format (e.g., "blue.500", "gray.300")
  bg?: string;
  bgColor?: string;
  color?: string;
  opacity?: CSSProperties['opacity'];
  
  // Border
  border?: string;
  borderWidth?: string | number;
  borderStyle?: CSSProperties['borderStyle'];
  borderColor?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: string | number;
  borderTopRadius?: string | number;
  borderBottomRadius?: string | number;
  borderLeftRadius?: string | number;
  borderRightRadius?: string | number;
  rounded?: string | number;
  
  // Shadow
  shadow?: string;
  boxShadow?: string;
  
  // Typography
  fontSize?: string | number;
  fontWeight?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string | number;
  textAlign?: CSSProperties['textAlign'];
  fontFamily?: string;
  fontStyle?: CSSProperties['fontStyle'];
  textDecoration?: CSSProperties['textDecoration'];
  textTransform?: CSSProperties['textTransform'];
  
  // Interaction
  cursor?: CSSProperties['cursor'];
  pointerEvents?: CSSProperties['pointerEvents'];
  userSelect?: CSSProperties['userSelect'];
  
  // Motion
  transition?: string;
  transitionProperty?: string;
  transitionDuration?: string;
  transitionTimingFunction?: string;
  transform?: string;
  transformOrigin?: string;
  
  // Advanced
  sx?: Record<string, unknown>;
  css?: CSSProperties;
}

// Convert spacing value to CSS
const toSpacing = (value: string | number | undefined): string | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === 'number') {
    return `${value * 0.25}rem`;
  }
  return value;
};

// Convert size value to CSS
const toSize = (value: string | number | undefined): string | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === 'number') {
    if (value <= 1) return `${value * 100}%`;
    return `${value * 0.25}rem`;
  }
  return value;
};

// Color names that support shades
const colorPalettes = [
  'gray', 'red', 'orange', 'yellow', 'green', 'teal', 
  'cyan', 'blue', 'indigo', 'purple', 'pink', 'rose',
  'slate', 'zinc', 'neutral', 'amber', 'emerald'
];

// Parse color value - supports "color.shade" format (e.g., "blue.500", "gray.300")
const toColor = (value: string | undefined): string | undefined => {
  if (!value) return undefined;
  
  // Check for color.shade format (e.g., "blue.500", "gray.300")
  const match = value.match(/^(\w+)\.(\d+)$/);
  if (match) {
    const [, colorName, shade] = match;
    if (colorPalettes.includes(colorName)) {
      return `hsl(var(--indo-${colorName}-${shade}))`;
    }
  }
  
  // Semantic color shortcuts
  const semanticColors: Record<string, string> = {
    'white': 'hsl(var(--indo-white))',
    'black': 'hsl(var(--indo-black))',
    'bg': 'hsl(var(--indo-bg))',
    'bg.subtle': 'hsl(var(--indo-bg-subtle))',
    'bg.muted': 'hsl(var(--indo-bg-muted))',
    'fg': 'hsl(var(--indo-fg))',
    'fg.muted': 'hsl(var(--indo-fg-muted))',
    'fg.subtle': 'hsl(var(--indo-fg-subtle))',
    'border': 'hsl(var(--indo-border))',
    'card': 'hsl(var(--indo-card))',
    'card.fg': 'hsl(var(--indo-card-fg))',
    'muted': 'hsl(var(--indo-muted))',
    'muted.fg': 'hsl(var(--indo-muted-fg))',
  };
  
  if (semanticColors[value]) {
    return semanticColors[value];
  }
  
  // For direct color names without shade, use 500 as default
  if (colorPalettes.includes(value)) {
    return `hsl(var(--indo-${value}-500))`;
  }
  
  return value;
};

// Shadow map
const shadowMap: Record<string, string> = {
  xs: 'var(--indo-shadow-xs)',
  sm: 'var(--indo-shadow-sm)',
  base: 'var(--indo-shadow-base)',
  md: 'var(--indo-shadow-md)',
  lg: 'var(--indo-shadow-lg)',
  xl: 'var(--indo-shadow-xl)',
  glow: 'var(--indo-shadow-glow)',
};

const toShadow = (value: string | undefined): string | undefined => {
  if (!value) return undefined;
  return shadowMap[value] || value;
};

// Radius map
const radiusMap: Record<string, string> = {
  none: 'var(--indo-radius-none)',
  sm: 'var(--indo-radius-sm)',
  base: 'var(--indo-radius-base)',
  md: 'var(--indo-radius-md)',
  lg: 'var(--indo-radius-lg)',
  xl: 'var(--indo-radius-xl)',
  '2xl': 'var(--indo-radius-2xl)',
  full: 'var(--indo-radius-full)',
};

const toRadius = (value: string | number | undefined): string | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === 'string') return radiusMap[value] || value;
  return `${value}px`;
};

// Convert style props to CSS properties
export const stylePropsToCSS = (props: StyleProps): CSSProperties => {
  const css: CSSProperties = {};
  
  // Layout & Size
  if (props.w !== undefined) css.width = toSize(props.w);
  if (props.h !== undefined) css.height = toSize(props.h);
  if (props.minW !== undefined) css.minWidth = toSize(props.minW);
  if (props.maxW !== undefined) css.maxWidth = toSize(props.maxW);
  if (props.minH !== undefined) css.minHeight = toSize(props.minH);
  if (props.maxH !== undefined) css.maxHeight = toSize(props.maxH);
  if (props.boxSize !== undefined) {
    css.width = toSize(props.boxSize);
    css.height = toSize(props.boxSize);
  }
  
  // Padding
  if (props.p !== undefined) css.padding = toSpacing(props.p);
  if (props.px !== undefined) {
    css.paddingLeft = toSpacing(props.px);
    css.paddingRight = toSpacing(props.px);
  }
  if (props.py !== undefined) {
    css.paddingTop = toSpacing(props.py);
    css.paddingBottom = toSpacing(props.py);
  }
  if (props.pt !== undefined) css.paddingTop = toSpacing(props.pt);
  if (props.pr !== undefined) css.paddingRight = toSpacing(props.pr);
  if (props.pb !== undefined) css.paddingBottom = toSpacing(props.pb);
  if (props.pl !== undefined) css.paddingLeft = toSpacing(props.pl);
  
  // Margin
  if (props.m !== undefined) css.margin = toSpacing(props.m);
  if (props.mx !== undefined) {
    css.marginLeft = toSpacing(props.mx);
    css.marginRight = toSpacing(props.mx);
  }
  if (props.my !== undefined) {
    css.marginTop = toSpacing(props.my);
    css.marginBottom = toSpacing(props.my);
  }
  if (props.mt !== undefined) css.marginTop = toSpacing(props.mt);
  if (props.mr !== undefined) css.marginRight = toSpacing(props.mr);
  if (props.mb !== undefined) css.marginBottom = toSpacing(props.mb);
  if (props.ml !== undefined) css.marginLeft = toSpacing(props.ml);
  
  // Display & Position
  if (props.display !== undefined) css.display = props.display;
  if (props.position !== undefined) css.position = props.position;
  if (props.top !== undefined) css.top = toSpacing(props.top);
  if (props.right !== undefined) css.right = toSpacing(props.right);
  if (props.bottom !== undefined) css.bottom = toSpacing(props.bottom);
  if (props.left !== undefined) css.left = toSpacing(props.left);
  if (props.inset !== undefined) css.inset = toSpacing(props.inset);
  if (props.zIndex !== undefined) css.zIndex = props.zIndex as number;
  
  // Flex
  if (props.flex !== undefined) css.flex = props.flex;
  if (props.flexDir !== undefined) css.flexDirection = props.flexDir;
  if (props.flexDirection !== undefined) css.flexDirection = props.flexDirection;
  if (props.flexWrap !== undefined) css.flexWrap = props.flexWrap;
  if (props.flexGrow !== undefined) css.flexGrow = props.flexGrow;
  if (props.flexShrink !== undefined) css.flexShrink = props.flexShrink;
  if (props.flexBasis !== undefined) css.flexBasis = props.flexBasis;
  if (props.justifyContent !== undefined) css.justifyContent = props.justifyContent;
  if (props.alignItems !== undefined) css.alignItems = props.alignItems;
  if (props.alignContent !== undefined) css.alignContent = props.alignContent;
  if (props.alignSelf !== undefined) css.alignSelf = props.alignSelf;
  if (props.gap !== undefined) css.gap = toSpacing(props.gap);
  if (props.rowGap !== undefined) css.rowGap = toSpacing(props.rowGap);
  if (props.columnGap !== undefined) css.columnGap = toSpacing(props.columnGap);
  
  // Grid
  if (props.gridTemplateColumns !== undefined) css.gridTemplateColumns = props.gridTemplateColumns;
  if (props.gridTemplateRows !== undefined) css.gridTemplateRows = props.gridTemplateRows;
  if (props.gridColumn !== undefined) css.gridColumn = props.gridColumn;
  if (props.gridRow !== undefined) css.gridRow = props.gridRow;
  if (props.gridArea !== undefined) css.gridArea = props.gridArea;
  if (props.gridAutoFlow !== undefined) css.gridAutoFlow = props.gridAutoFlow;
  if (props.gridAutoColumns !== undefined) css.gridAutoColumns = props.gridAutoColumns;
  if (props.gridAutoRows !== undefined) css.gridAutoRows = props.gridAutoRows;
  
  // Overflow
  if (props.overflow !== undefined) css.overflow = props.overflow;
  if (props.overflowX !== undefined) css.overflowX = props.overflowX;
  if (props.overflowY !== undefined) css.overflowY = props.overflowY;
  
  // Color
  if (props.bg !== undefined) css.background = toColor(props.bg);
  if (props.bgColor !== undefined) css.backgroundColor = toColor(props.bgColor);
  if (props.color !== undefined) css.color = toColor(props.color);
  if (props.opacity !== undefined) css.opacity = props.opacity;
  
  // Border
  if (props.border !== undefined) css.border = props.border;
  if (props.borderWidth !== undefined) css.borderWidth = props.borderWidth;
  if (props.borderStyle !== undefined) css.borderStyle = props.borderStyle;
  if (props.borderColor !== undefined) css.borderColor = toColor(props.borderColor);
  if (props.borderTop !== undefined) css.borderTop = props.borderTop;
  if (props.borderRight !== undefined) css.borderRight = props.borderRight;
  if (props.borderBottom !== undefined) css.borderBottom = props.borderBottom;
  if (props.borderLeft !== undefined) css.borderLeft = props.borderLeft;
  if (props.borderRadius !== undefined) css.borderRadius = toRadius(props.borderRadius);
  if (props.rounded !== undefined) css.borderRadius = toRadius(props.rounded);
  
  // Shadow
  if (props.shadow !== undefined) css.boxShadow = toShadow(props.shadow);
  if (props.boxShadow !== undefined) css.boxShadow = toShadow(props.boxShadow);
  
  // Typography
  if (props.fontSize !== undefined) css.fontSize = props.fontSize;
  if (props.fontWeight !== undefined) css.fontWeight = props.fontWeight;
  if (props.lineHeight !== undefined) css.lineHeight = props.lineHeight;
  if (props.letterSpacing !== undefined) css.letterSpacing = props.letterSpacing;
  if (props.textAlign !== undefined) css.textAlign = props.textAlign;
  if (props.fontFamily !== undefined) css.fontFamily = props.fontFamily;
  if (props.fontStyle !== undefined) css.fontStyle = props.fontStyle;
  if (props.textDecoration !== undefined) css.textDecoration = props.textDecoration;
  if (props.textTransform !== undefined) css.textTransform = props.textTransform;
  
  // Interaction
  if (props.cursor !== undefined) css.cursor = props.cursor;
  if (props.pointerEvents !== undefined) css.pointerEvents = props.pointerEvents;
  if (props.userSelect !== undefined) css.userSelect = props.userSelect;
  
  // Motion
  if (props.transition !== undefined) css.transition = props.transition;
  if (props.transitionProperty !== undefined) css.transitionProperty = props.transitionProperty;
  if (props.transitionDuration !== undefined) css.transitionDuration = props.transitionDuration;
  if (props.transitionTimingFunction !== undefined) css.transitionTimingFunction = props.transitionTimingFunction;
  if (props.transform !== undefined) css.transform = props.transform;
  if (props.transformOrigin !== undefined) css.transformOrigin = props.transformOrigin;
  
  // Raw CSS override
  if (props.css) {
    Object.assign(css, props.css);
  }
  
  return css;
};

// Extract style props from all props
export const extractStyleProps = <T extends StyleProps>(
  props: T
): { styleProps: StyleProps; restProps: Omit<T, keyof StyleProps> } => {
  const styleKeys: (keyof StyleProps)[] = [
    'w', 'h', 'minW', 'maxW', 'minH', 'maxH', 'boxSize',
    'p', 'px', 'py', 'pt', 'pr', 'pb', 'pl',
    'm', 'mx', 'my', 'mt', 'mr', 'mb', 'ml',
    'display', 'position', 'top', 'right', 'bottom', 'left', 'inset', 'zIndex',
    'flex', 'flexDir', 'flexDirection', 'flexWrap', 'flexGrow', 'flexShrink', 'flexBasis',
    'justifyContent', 'alignItems', 'alignContent', 'alignSelf', 'gap', 'rowGap', 'columnGap',
    'gridTemplateColumns', 'gridTemplateRows', 'gridColumn', 'gridRow', 'gridArea',
    'gridAutoFlow', 'gridAutoColumns', 'gridAutoRows',
    'overflow', 'overflowX', 'overflowY',
    'bg', 'bgColor', 'color', 'opacity',
    'border', 'borderWidth', 'borderStyle', 'borderColor',
    'borderTop', 'borderRight', 'borderBottom', 'borderLeft',
    'borderRadius', 'borderTopRadius', 'borderBottomRadius', 'borderLeftRadius', 'borderRightRadius', 'rounded',
    'shadow', 'boxShadow',
    'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'textAlign',
    'fontFamily', 'fontStyle', 'textDecoration', 'textTransform',
    'cursor', 'pointerEvents', 'userSelect',
    'transition', 'transitionProperty', 'transitionDuration', 'transitionTimingFunction',
    'transform', 'transformOrigin',
    'sx', 'css',
  ];
  
  const styleProps: StyleProps = {};
  const restProps = { ...props } as Record<string, unknown>;
  
  for (const key of styleKeys) {
    if (key in props) {
      (styleProps as Record<string, unknown>)[key] = props[key];
      delete restProps[key];
    }
  }
  
  return { styleProps, restProps: restProps as Omit<T, keyof StyleProps> };
};
