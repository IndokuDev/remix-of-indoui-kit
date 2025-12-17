import { tokens } from './tokens';

// Generate CSS variables from tokens
export const generateCSSVariables = (mode: 'light' | 'dark' = 'light') => {
  const lightVars = `
    /* Semantic Colors - Light Mode */
    --indo-bg: 0 0% 100%;
    --indo-fg: 222 47% 11%;
    --indo-bg-subtle: 210 40% 98%;
    --indo-bg-muted: 210 40% 96%;
    --indo-bg-emphasis: 214 32% 91%;
    
    --indo-primary: 173 58% 39%;
    --indo-primary-fg: 0 0% 100%;
    --indo-primary-hover: 173 61% 36%;
    --indo-primary-subtle: 166 76% 97%;
    
    --indo-secondary: 210 40% 96%;
    --indo-secondary-fg: 222 47% 11%;
    --indo-secondary-hover: 214 32% 91%;
    
    --indo-accent: 173 80% 40%;
    --indo-accent-fg: 0 0% 100%;
    --indo-accent-subtle: 166 76% 97%;
    
    --indo-muted: 210 40% 96%;
    --indo-muted-fg: 215 16% 47%;
    
    --indo-destructive: 0 84% 60%;
    --indo-destructive-fg: 0 0% 100%;
    --indo-destructive-subtle: 0 86% 97%;
    
    --indo-success: 160 84% 39%;
    --indo-success-fg: 0 0% 100%;
    --indo-success-subtle: 152 81% 96%;
    
    --indo-warning: 38 92% 50%;
    --indo-warning-fg: 21 92% 14%;
    --indo-warning-subtle: 48 96% 89%;
    
    --indo-border: 214 32% 91%;
    --indo-border-subtle: 210 40% 96%;
    --indo-border-emphasis: 213 27% 84%;
    
    --indo-ring: 173 80% 40%;
    --indo-ring-offset: 0 0% 100%;
    
    --indo-card: 0 0% 100%;
    --indo-card-fg: 222 47% 11%;
    
    --indo-popover: 0 0% 100%;
    --indo-popover-fg: 222 47% 11%;
    
    --indo-input: 214 32% 91%;
    --indo-input-fg: 222 47% 11%;
  `;

  const darkVars = `
    /* Semantic Colors - Dark Mode */
    --indo-bg: 222 47% 6%;
    --indo-fg: 210 40% 98%;
    --indo-bg-subtle: 217 33% 10%;
    --indo-bg-muted: 217 33% 14%;
    --indo-bg-emphasis: 215 25% 20%;
    
    --indo-primary: 173 80% 40%;
    --indo-primary-fg: 222 47% 6%;
    --indo-primary-hover: 174 72% 56%;
    --indo-primary-subtle: 176 61% 12%;
    
    --indo-secondary: 217 33% 17%;
    --indo-secondary-fg: 210 40% 98%;
    --indo-secondary-hover: 215 25% 20%;
    
    --indo-accent: 174 72% 56%;
    --indo-accent-fg: 222 47% 6%;
    --indo-accent-subtle: 176 61% 12%;
    
    --indo-muted: 217 33% 17%;
    --indo-muted-fg: 215 20% 65%;
    
    --indo-destructive: 0 72% 51%;
    --indo-destructive-fg: 0 0% 100%;
    --indo-destructive-subtle: 0 63% 15%;
    
    --indo-success: 160 84% 39%;
    --indo-success-fg: 222 47% 6%;
    --indo-success-subtle: 163 94% 10%;
    
    --indo-warning: 43 96% 56%;
    --indo-warning-fg: 21 92% 14%;
    --indo-warning-subtle: 32 95% 12%;
    
    --indo-border: 217 33% 17%;
    --indo-border-subtle: 217 33% 14%;
    --indo-border-emphasis: 215 25% 25%;
    
    --indo-ring: 174 72% 56%;
    --indo-ring-offset: 222 47% 6%;
    
    --indo-card: 217 33% 10%;
    --indo-card-fg: 210 40% 98%;
    
    --indo-popover: 217 33% 10%;
    --indo-popover-fg: 210 40% 98%;
    
    --indo-input: 217 33% 17%;
    --indo-input-fg: 210 40% 98%;
  `;

  // Generate named color palette variables
  const colorPaletteVars = `
    /* Named Color Palette - use as gray.300, blue.500, etc. */
    /* White & Black */
    --indo-white: ${tokens.colors.white};
    --indo-black: ${tokens.colors.black};
    
    /* Gray */
    --indo-gray-50: ${tokens.colors.gray[50]};
    --indo-gray-100: ${tokens.colors.gray[100]};
    --indo-gray-200: ${tokens.colors.gray[200]};
    --indo-gray-300: ${tokens.colors.gray[300]};
    --indo-gray-400: ${tokens.colors.gray[400]};
    --indo-gray-500: ${tokens.colors.gray[500]};
    --indo-gray-600: ${tokens.colors.gray[600]};
    --indo-gray-700: ${tokens.colors.gray[700]};
    --indo-gray-800: ${tokens.colors.gray[800]};
    --indo-gray-900: ${tokens.colors.gray[900]};
    --indo-gray-950: ${tokens.colors.gray[950]};
    
    /* Red */
    --indo-red-50: ${tokens.colors.red[50]};
    --indo-red-100: ${tokens.colors.red[100]};
    --indo-red-200: ${tokens.colors.red[200]};
    --indo-red-300: ${tokens.colors.red[300]};
    --indo-red-400: ${tokens.colors.red[400]};
    --indo-red-500: ${tokens.colors.red[500]};
    --indo-red-600: ${tokens.colors.red[600]};
    --indo-red-700: ${tokens.colors.red[700]};
    --indo-red-800: ${tokens.colors.red[800]};
    --indo-red-900: ${tokens.colors.red[900]};
    --indo-red-950: ${tokens.colors.red[950]};
    
    /* Orange */
    --indo-orange-50: ${tokens.colors.orange[50]};
    --indo-orange-100: ${tokens.colors.orange[100]};
    --indo-orange-200: ${tokens.colors.orange[200]};
    --indo-orange-300: ${tokens.colors.orange[300]};
    --indo-orange-400: ${tokens.colors.orange[400]};
    --indo-orange-500: ${tokens.colors.orange[500]};
    --indo-orange-600: ${tokens.colors.orange[600]};
    --indo-orange-700: ${tokens.colors.orange[700]};
    --indo-orange-800: ${tokens.colors.orange[800]};
    --indo-orange-900: ${tokens.colors.orange[900]};
    --indo-orange-950: ${tokens.colors.orange[950]};
    
    /* Yellow */
    --indo-yellow-50: ${tokens.colors.yellow[50]};
    --indo-yellow-100: ${tokens.colors.yellow[100]};
    --indo-yellow-200: ${tokens.colors.yellow[200]};
    --indo-yellow-300: ${tokens.colors.yellow[300]};
    --indo-yellow-400: ${tokens.colors.yellow[400]};
    --indo-yellow-500: ${tokens.colors.yellow[500]};
    --indo-yellow-600: ${tokens.colors.yellow[600]};
    --indo-yellow-700: ${tokens.colors.yellow[700]};
    --indo-yellow-800: ${tokens.colors.yellow[800]};
    --indo-yellow-900: ${tokens.colors.yellow[900]};
    --indo-yellow-950: ${tokens.colors.yellow[950]};
    
    /* Green */
    --indo-green-50: ${tokens.colors.green[50]};
    --indo-green-100: ${tokens.colors.green[100]};
    --indo-green-200: ${tokens.colors.green[200]};
    --indo-green-300: ${tokens.colors.green[300]};
    --indo-green-400: ${tokens.colors.green[400]};
    --indo-green-500: ${tokens.colors.green[500]};
    --indo-green-600: ${tokens.colors.green[600]};
    --indo-green-700: ${tokens.colors.green[700]};
    --indo-green-800: ${tokens.colors.green[800]};
    --indo-green-900: ${tokens.colors.green[900]};
    --indo-green-950: ${tokens.colors.green[950]};
    
    /* Teal */
    --indo-teal-50: ${tokens.colors.teal[50]};
    --indo-teal-100: ${tokens.colors.teal[100]};
    --indo-teal-200: ${tokens.colors.teal[200]};
    --indo-teal-300: ${tokens.colors.teal[300]};
    --indo-teal-400: ${tokens.colors.teal[400]};
    --indo-teal-500: ${tokens.colors.teal[500]};
    --indo-teal-600: ${tokens.colors.teal[600]};
    --indo-teal-700: ${tokens.colors.teal[700]};
    --indo-teal-800: ${tokens.colors.teal[800]};
    --indo-teal-900: ${tokens.colors.teal[900]};
    --indo-teal-950: ${tokens.colors.teal[950]};
    
    /* Cyan */
    --indo-cyan-50: ${tokens.colors.cyan[50]};
    --indo-cyan-100: ${tokens.colors.cyan[100]};
    --indo-cyan-200: ${tokens.colors.cyan[200]};
    --indo-cyan-300: ${tokens.colors.cyan[300]};
    --indo-cyan-400: ${tokens.colors.cyan[400]};
    --indo-cyan-500: ${tokens.colors.cyan[500]};
    --indo-cyan-600: ${tokens.colors.cyan[600]};
    --indo-cyan-700: ${tokens.colors.cyan[700]};
    --indo-cyan-800: ${tokens.colors.cyan[800]};
    --indo-cyan-900: ${tokens.colors.cyan[900]};
    --indo-cyan-950: ${tokens.colors.cyan[950]};
    
    /* Blue */
    --indo-blue-50: ${tokens.colors.blue[50]};
    --indo-blue-100: ${tokens.colors.blue[100]};
    --indo-blue-200: ${tokens.colors.blue[200]};
    --indo-blue-300: ${tokens.colors.blue[300]};
    --indo-blue-400: ${tokens.colors.blue[400]};
    --indo-blue-500: ${tokens.colors.blue[500]};
    --indo-blue-600: ${tokens.colors.blue[600]};
    --indo-blue-700: ${tokens.colors.blue[700]};
    --indo-blue-800: ${tokens.colors.blue[800]};
    --indo-blue-900: ${tokens.colors.blue[900]};
    --indo-blue-950: ${tokens.colors.blue[950]};
    
    /* Indigo */
    --indo-indigo-50: ${tokens.colors.indigo[50]};
    --indo-indigo-100: ${tokens.colors.indigo[100]};
    --indo-indigo-200: ${tokens.colors.indigo[200]};
    --indo-indigo-300: ${tokens.colors.indigo[300]};
    --indo-indigo-400: ${tokens.colors.indigo[400]};
    --indo-indigo-500: ${tokens.colors.indigo[500]};
    --indo-indigo-600: ${tokens.colors.indigo[600]};
    --indo-indigo-700: ${tokens.colors.indigo[700]};
    --indo-indigo-800: ${tokens.colors.indigo[800]};
    --indo-indigo-900: ${tokens.colors.indigo[900]};
    --indo-indigo-950: ${tokens.colors.indigo[950]};
    
    /* Purple */
    --indo-purple-50: ${tokens.colors.purple[50]};
    --indo-purple-100: ${tokens.colors.purple[100]};
    --indo-purple-200: ${tokens.colors.purple[200]};
    --indo-purple-300: ${tokens.colors.purple[300]};
    --indo-purple-400: ${tokens.colors.purple[400]};
    --indo-purple-500: ${tokens.colors.purple[500]};
    --indo-purple-600: ${tokens.colors.purple[600]};
    --indo-purple-700: ${tokens.colors.purple[700]};
    --indo-purple-800: ${tokens.colors.purple[800]};
    --indo-purple-900: ${tokens.colors.purple[900]};
    --indo-purple-950: ${tokens.colors.purple[950]};
    
    /* Pink */
    --indo-pink-50: ${tokens.colors.pink[50]};
    --indo-pink-100: ${tokens.colors.pink[100]};
    --indo-pink-200: ${tokens.colors.pink[200]};
    --indo-pink-300: ${tokens.colors.pink[300]};
    --indo-pink-400: ${tokens.colors.pink[400]};
    --indo-pink-500: ${tokens.colors.pink[500]};
    --indo-pink-600: ${tokens.colors.pink[600]};
    --indo-pink-700: ${tokens.colors.pink[700]};
    --indo-pink-800: ${tokens.colors.pink[800]};
    --indo-pink-900: ${tokens.colors.pink[900]};
    --indo-pink-950: ${tokens.colors.pink[950]};
    
    /* Rose */
    --indo-rose-50: ${tokens.colors.rose[50]};
    --indo-rose-100: ${tokens.colors.rose[100]};
    --indo-rose-200: ${tokens.colors.rose[200]};
    --indo-rose-300: ${tokens.colors.rose[300]};
    --indo-rose-400: ${tokens.colors.rose[400]};
    --indo-rose-500: ${tokens.colors.rose[500]};
    --indo-rose-600: ${tokens.colors.rose[600]};
    --indo-rose-700: ${tokens.colors.rose[700]};
    --indo-rose-800: ${tokens.colors.rose[800]};
    --indo-rose-900: ${tokens.colors.rose[900]};
    --indo-rose-950: ${tokens.colors.rose[950]};
    
    /* Amber */
    --indo-amber-50: ${tokens.colors.amber[50]};
    --indo-amber-100: ${tokens.colors.amber[100]};
    --indo-amber-200: ${tokens.colors.amber[200]};
    --indo-amber-300: ${tokens.colors.amber[300]};
    --indo-amber-400: ${tokens.colors.amber[400]};
    --indo-amber-500: ${tokens.colors.amber[500]};
    --indo-amber-600: ${tokens.colors.amber[600]};
    --indo-amber-700: ${tokens.colors.amber[700]};
    --indo-amber-800: ${tokens.colors.amber[800]};
    --indo-amber-900: ${tokens.colors.amber[900]};
    --indo-amber-950: ${tokens.colors.amber[950]};
    
    /* Emerald */
    --indo-emerald-50: ${tokens.colors.emerald[50]};
    --indo-emerald-100: ${tokens.colors.emerald[100]};
    --indo-emerald-200: ${tokens.colors.emerald[200]};
    --indo-emerald-300: ${tokens.colors.emerald[300]};
    --indo-emerald-400: ${tokens.colors.emerald[400]};
    --indo-emerald-500: ${tokens.colors.emerald[500]};
    --indo-emerald-600: ${tokens.colors.emerald[600]};
    --indo-emerald-700: ${tokens.colors.emerald[700]};
    --indo-emerald-800: ${tokens.colors.emerald[800]};
    --indo-emerald-900: ${tokens.colors.emerald[900]};
    --indo-emerald-950: ${tokens.colors.emerald[950]};
    
    /* Slate */
    --indo-slate-50: ${tokens.colors.slate[50]};
    --indo-slate-100: ${tokens.colors.slate[100]};
    --indo-slate-200: ${tokens.colors.slate[200]};
    --indo-slate-300: ${tokens.colors.slate[300]};
    --indo-slate-400: ${tokens.colors.slate[400]};
    --indo-slate-500: ${tokens.colors.slate[500]};
    --indo-slate-600: ${tokens.colors.slate[600]};
    --indo-slate-700: ${tokens.colors.slate[700]};
    --indo-slate-800: ${tokens.colors.slate[800]};
    --indo-slate-900: ${tokens.colors.slate[900]};
    --indo-slate-950: ${tokens.colors.slate[950]};
    
    /* Zinc */
    --indo-zinc-50: ${tokens.colors.zinc[50]};
    --indo-zinc-100: ${tokens.colors.zinc[100]};
    --indo-zinc-200: ${tokens.colors.zinc[200]};
    --indo-zinc-300: ${tokens.colors.zinc[300]};
    --indo-zinc-400: ${tokens.colors.zinc[400]};
    --indo-zinc-500: ${tokens.colors.zinc[500]};
    --indo-zinc-600: ${tokens.colors.zinc[600]};
    --indo-zinc-700: ${tokens.colors.zinc[700]};
    --indo-zinc-800: ${tokens.colors.zinc[800]};
    --indo-zinc-900: ${tokens.colors.zinc[900]};
    --indo-zinc-950: ${tokens.colors.zinc[950]};
    
    /* Neutral */
    --indo-neutral-50: ${tokens.colors.neutral[50]};
    --indo-neutral-100: ${tokens.colors.neutral[100]};
    --indo-neutral-200: ${tokens.colors.neutral[200]};
    --indo-neutral-300: ${tokens.colors.neutral[300]};
    --indo-neutral-400: ${tokens.colors.neutral[400]};
    --indo-neutral-500: ${tokens.colors.neutral[500]};
    --indo-neutral-600: ${tokens.colors.neutral[600]};
    --indo-neutral-700: ${tokens.colors.neutral[700]};
    --indo-neutral-800: ${tokens.colors.neutral[800]};
    --indo-neutral-900: ${tokens.colors.neutral[900]};
    --indo-neutral-950: ${tokens.colors.neutral[950]};
  `;

  const baseVars = `
    /* Typography */
    --indo-font-sans: 'DM Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    --indo-font-mono: 'Fira Code', 'Source Code Pro', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace;
    --indo-font-display: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
    
    /* Font Sizes */
    --indo-text-xs: ${tokens.fontSizes.xs};
    --indo-text-sm: ${tokens.fontSizes.sm};
    --indo-text-base: ${tokens.fontSizes.base};
    --indo-text-lg: ${tokens.fontSizes.lg};
    --indo-text-xl: ${tokens.fontSizes.xl};
    --indo-text-2xl: ${tokens.fontSizes['2xl']};
    --indo-text-3xl: ${tokens.fontSizes['3xl']};
    --indo-text-4xl: ${tokens.fontSizes['4xl']};
    --indo-text-5xl: ${tokens.fontSizes['5xl']};
    --indo-text-6xl: ${tokens.fontSizes['6xl']};
    
    /* Spacing */
    --indo-space-0: ${tokens.spacing[0]};
    --indo-space-1: ${tokens.spacing[1]};
    --indo-space-2: ${tokens.spacing[2]};
    --indo-space-3: ${tokens.spacing[3]};
    --indo-space-4: ${tokens.spacing[4]};
    --indo-space-5: ${tokens.spacing[5]};
    --indo-space-6: ${tokens.spacing[6]};
    --indo-space-8: ${tokens.spacing[8]};
    --indo-space-10: ${tokens.spacing[10]};
    --indo-space-12: ${tokens.spacing[12]};
    --indo-space-16: ${tokens.spacing[16]};
    --indo-space-20: ${tokens.spacing[20]};
    --indo-space-24: ${tokens.spacing[24]};
    
    /* Radii */
    --indo-radius-none: ${tokens.radii.none};
    --indo-radius-sm: ${tokens.radii.sm};
    --indo-radius-base: ${tokens.radii.base};
    --indo-radius-md: ${tokens.radii.md};
    --indo-radius-lg: ${tokens.radii.lg};
    --indo-radius-xl: ${tokens.radii.xl};
    --indo-radius-2xl: ${tokens.radii['2xl']};
    --indo-radius-full: ${tokens.radii.full};
    
    /* Shadows */
    --indo-shadow-xs: ${tokens.shadows.xs};
    --indo-shadow-sm: ${tokens.shadows.sm};
    --indo-shadow-base: ${tokens.shadows.base};
    --indo-shadow-md: ${tokens.shadows.md};
    --indo-shadow-lg: ${tokens.shadows.lg};
    --indo-shadow-xl: ${tokens.shadows.xl};
    --indo-shadow-glow: ${tokens.shadows.glow};
    
    /* Z-Index */
    --indo-z-dropdown: ${tokens.zIndices.dropdown};
    --indo-z-sticky: ${tokens.zIndices.sticky};
    --indo-z-overlay: ${tokens.zIndices.overlay};
    --indo-z-modal: ${tokens.zIndices.modal};
    --indo-z-popover: ${tokens.zIndices.popover};
    --indo-z-toast: ${tokens.zIndices.toast};
    --indo-z-tooltip: ${tokens.zIndices.tooltip};
    
    /* Transitions */
    --indo-transition-fast: ${tokens.transitions.fast};
    --indo-transition-normal: ${tokens.transitions.normal};
    --indo-transition-slow: ${tokens.transitions.slow};
    
    ${colorPaletteVars}
  `;

  return { lightVars, darkVars, baseVars };
};

export const generateStylesheet = () => {
  const { lightVars, darkVars, baseVars } = generateCSSVariables();
  
  return `
    :root {
      ${baseVars}
      ${lightVars}
    }
    
    .indo-dark,
    [data-theme="dark"] {
      ${darkVars}
    }
    
    @media (prefers-color-scheme: dark) {
      :root:not([data-theme="light"]) {
        ${darkVars}
      }
    }
  `;
};
