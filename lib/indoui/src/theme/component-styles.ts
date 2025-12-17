// Component-level styles for @indoui/react
export const componentStyles = `
  /* Button Styles */
  .indo-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 500;
    white-space: nowrap;
    border-radius: var(--indo-radius-md);
    transition: all var(--indo-transition-fast);
    cursor: pointer;
    border: none;
    outline: none;
    text-decoration: none;
  }
  
  .indo-btn:focus-visible {
    outline: 2px solid hsl(var(--indo-ring));
    outline-offset: 2px;
  }
  
  .indo-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  
  /* Button Variants */
  .indo-btn-solid {
    background-color: hsl(var(--indo-primary));
    color: hsl(var(--indo-primary-fg));
  }
  
  .indo-btn-solid:hover:not(:disabled) {
    background-color: hsl(var(--indo-primary-hover));
  }
  
  .indo-btn-outline {
    background-color: transparent;
    border: 1px solid hsl(var(--indo-border-emphasis));
    color: hsl(var(--indo-fg));
  }
  
  .indo-btn-outline:hover:not(:disabled) {
    background-color: hsl(var(--indo-bg-muted));
  }
  
  .indo-btn-ghost {
    background-color: transparent;
    color: hsl(var(--indo-fg));
  }
  
  .indo-btn-ghost:hover:not(:disabled) {
    background-color: hsl(var(--indo-bg-muted));
  }
  
  .indo-btn-link {
    background-color: transparent;
    color: hsl(var(--indo-primary));
    padding: 0;
    height: auto;
  }
  
  .indo-btn-link:hover:not(:disabled) {
    text-decoration: underline;
  }
  
  .indo-btn-destructive {
    background-color: hsl(var(--indo-destructive));
    color: hsl(var(--indo-destructive-fg));
  }
  
  .indo-btn-destructive:hover:not(:disabled) {
    opacity: 0.9;
  }
  
  /* Button Sizes */
  .indo-btn-xs {
    height: 1.75rem;
    padding: 0 0.5rem;
    font-size: var(--indo-text-xs);
  }
  
  .indo-btn-sm {
    height: 2rem;
    padding: 0 0.75rem;
    font-size: var(--indo-text-sm);
  }
  
  .indo-btn-md {
    height: 2.5rem;
    padding: 0 1rem;
    font-size: var(--indo-text-sm);
  }
  
  .indo-btn-lg {
    height: 2.75rem;
    padding: 0 1.5rem;
    font-size: var(--indo-text-base);
  }
  
  .indo-btn-xl {
    height: 3rem;
    padding: 0 2rem;
    font-size: var(--indo-text-lg);
  }
  
  /* Input Styles */
  .indo-input {
    display: flex;
    width: 100%;
    border-radius: var(--indo-radius-md);
    border: 1px solid hsl(var(--indo-input));
    background-color: transparent;
    padding: 0.5rem 0.75rem;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-input-fg));
    transition: all var(--indo-transition-fast);
  }
  
  .indo-input::placeholder {
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-input:focus {
    outline: none;
    border-color: hsl(var(--indo-ring));
    box-shadow: 0 0 0 3px hsl(var(--indo-ring) / 0.15);
  }
  
  .indo-input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .indo-input-error {
    border-color: hsl(var(--indo-destructive));
  }
  
  .indo-input-error:focus {
    border-color: hsl(var(--indo-destructive));
    box-shadow: 0 0 0 3px hsl(var(--indo-destructive) / 0.15);
  }
  
  /* Input Sizes */
  .indo-input-sm {
    height: 2rem;
    padding: 0 0.5rem;
    font-size: var(--indo-text-xs);
  }
  
  .indo-input-md {
    height: 2.5rem;
  }
  
  .indo-input-lg {
    height: 2.75rem;
    padding: 0 1rem;
    font-size: var(--indo-text-base);
  }
  
  /* Card Styles */
  .indo-card {
    background-color: hsl(var(--indo-card));
    color: hsl(var(--indo-card-fg));
    border-radius: var(--indo-radius-lg);
    border: 1px solid hsl(var(--indo-border));
    box-shadow: var(--indo-shadow-sm);
  }
  
  .indo-card-elevated {
    box-shadow: var(--indo-shadow-md);
    border: none;
  }
  
  .indo-card-outline {
    box-shadow: none;
    border: 1px solid hsl(var(--indo-border));
  }
  
  .indo-card-ghost {
    box-shadow: none;
    border: none;
    background-color: transparent;
  }
  
  /* Badge Styles */
  .indo-badge {
    display: inline-flex;
    align-items: center;
    border-radius: var(--indo-radius-full);
    font-size: var(--indo-text-xs);
    font-weight: 500;
    white-space: nowrap;
  }
  
  .indo-badge-solid {
    background-color: hsl(var(--indo-primary));
    color: hsl(var(--indo-primary-fg));
  }
  
  .indo-badge-subtle {
    background-color: hsl(var(--indo-primary-subtle));
    color: hsl(var(--indo-primary));
  }
  
  .indo-badge-outline {
    background-color: transparent;
    border: 1px solid hsl(var(--indo-border));
    color: hsl(var(--indo-fg));
  }
  
  .indo-badge-sm {
    padding: 0.125rem 0.5rem;
  }
  
  .indo-badge-md {
    padding: 0.25rem 0.625rem;
  }
  
  .indo-badge-lg {
    padding: 0.375rem 0.75rem;
    font-size: var(--indo-text-sm);
  }
  
  /* Avatar Styles */
  .indo-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: var(--indo-radius-full);
    background-color: hsl(var(--indo-muted));
    color: hsl(var(--indo-muted-fg));
    font-weight: 500;
    flex-shrink: 0;
  }
  
  .indo-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .indo-avatar-xs {
    width: 1.5rem;
    height: 1.5rem;
    font-size: var(--indo-text-xs);
  }
  
  .indo-avatar-sm {
    width: 2rem;
    height: 2rem;
    font-size: var(--indo-text-xs);
  }
  
  .indo-avatar-md {
    width: 2.5rem;
    height: 2.5rem;
    font-size: var(--indo-text-sm);
  }
  
  .indo-avatar-lg {
    width: 3rem;
    height: 3rem;
    font-size: var(--indo-text-base);
  }
  
  .indo-avatar-xl {
    width: 4rem;
    height: 4rem;
    font-size: var(--indo-text-lg);
  }
  
  .indo-avatar-2xl {
    width: 5rem;
    height: 5rem;
    font-size: var(--indo-text-xl);
  }
  
  /* Skeleton */
  .indo-skeleton {
    background: linear-gradient(
      90deg,
      hsl(var(--indo-muted)) 25%,
      hsl(var(--indo-bg-emphasis)) 50%,
      hsl(var(--indo-muted)) 75%
    );
    background-size: 200% 100%;
    animation: indo-skeleton-pulse 1.5s ease-in-out infinite;
    border-radius: var(--indo-radius-md);
  }
  
  @keyframes indo-skeleton-pulse {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
  
  /* Spinner */
  .indo-spinner {
    display: inline-block;
    border: 2px solid hsl(var(--indo-border));
    border-top-color: hsl(var(--indo-primary));
    border-radius: 50%;
    animation: indo-spin 0.6s linear infinite;
  }
  
  @keyframes indo-spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  /* Divider */
  .indo-divider {
    border: none;
    background-color: hsl(var(--indo-border));
  }
  
  .indo-divider-horizontal {
    height: 1px;
    width: 100%;
  }
  
  .indo-divider-vertical {
    width: 1px;
    height: 100%;
    min-height: 1rem;
  }
  
  /* Focus Ring Utility */
  .indo-focus-ring:focus-visible {
    outline: 2px solid hsl(var(--indo-ring));
    outline-offset: 2px;
  }
  
  /* Transition Utilities */
  .indo-transition {
    transition: all var(--indo-transition-normal);
  }
  
  .indo-transition-fast {
    transition: all var(--indo-transition-fast);
  }
  
  .indo-transition-slow {
    transition: all var(--indo-transition-slow);
  }
  
  /* Code Editor Styles */
  .indo-code-editor {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    font-family: 'Fira Code', 'Source Code Pro', 'Cascadia Code', ui-monospace, monospace;
    font-size: var(--indo-text-sm);
    overflow: hidden;
    background: hsl(var(--indo-card));
  }
  
  .indo-code-editor-dark {
    background: linear-gradient(135deg, hsl(222 47% 8%) 0%, hsl(222 47% 6%) 100%);
    color: hsl(var(--indo-gray-100));
  }
  
  .indo-code-editor-light {
    background: linear-gradient(135deg, hsl(var(--indo-gray-50)) 0%, hsl(var(--indo-white)) 100%);
    color: hsl(var(--indo-gray-800));
  }
  
  .indo-code-editor-focused {
    border-color: hsl(var(--indo-primary));
    box-shadow: 0 0 0 3px hsl(var(--indo-primary) / 0.15);
  }
  
  .indo-code-gutter {
    flex-shrink: 0;
    padding: 0.75rem 0;
    background: hsl(var(--indo-gray-900) / 0.5);
    border-right: 1px solid hsl(var(--indo-border) / 0.5);
    text-align: right;
    user-select: none;
  }
  
  .indo-code-line-number {
    padding: 0 0.75rem;
    color: hsl(var(--indo-gray-500));
    line-height: 1.5;
    font-size: var(--indo-text-xs);
  }
  
  .indo-code-line-number-active {
    color: hsl(var(--indo-primary));
    font-weight: 500;
  }
  
  .indo-code-content {
    flex: 1;
    position: relative;
    overflow: hidden;
  }
  
  .indo-code-highlight,
  .indo-code-textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.75rem;
    margin: 0;
    border: none;
    font: inherit;
    line-height: 1.6;
    overflow: auto;
  }
  
  .indo-code-highlight {
    pointer-events: none;
  }
  
  .indo-code-textarea {
    background: transparent;
    color: transparent;
    caret-color: hsl(var(--indo-primary));
    resize: none;
    outline: none;
  }
  
  .indo-code-line-active {
    background: hsl(var(--indo-primary) / 0.08);
    margin: 0 -0.75rem;
    padding: 0 0.75rem;
    border-left: 2px solid hsl(var(--indo-primary));
  }
  
  .indo-code-statusbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.375rem 0.75rem;
    background: hsl(var(--indo-gray-900));
    border-top: 1px solid hsl(var(--indo-border) / 0.5);
    font-size: var(--indo-text-xs);
    color: hsl(var(--indo-gray-400));
  }
  
  .indo-code-language {
    padding: 0.125rem 0.5rem;
    background: hsl(var(--indo-primary) / 0.2);
    color: hsl(var(--indo-primary));
    border-radius: var(--indo-radius-sm);
    font-weight: 500;
  }

  /* Syntax highlighting - vibrant colors */
  .indo-code-keyword { color: hsl(280 100% 70%); font-weight: 500; }
  .indo-code-string { color: hsl(95 60% 60%); }
  .indo-code-comment { color: hsl(var(--indo-gray-500)); font-style: italic; }
  .indo-code-number { color: hsl(30 100% 65%); }
  .indo-code-function { color: hsl(200 100% 70%); }
  .indo-code-class { color: hsl(45 100% 65%); }
  .indo-code-tag { color: hsl(350 100% 70%); }
  .indo-code-attr { color: hsl(180 80% 60%); }
  .indo-code-literal { color: hsl(330 100% 70%); }
  .indo-code-type { color: hsl(180 100% 65%); }
  .indo-code-component { color: hsl(30 100% 65%); }
  .indo-code-selector { color: hsl(280 100% 70%); }
  .indo-code-property { color: hsl(200 100% 70%); }
  .indo-code-color { color: hsl(30 100% 70%); }
  
  /* Form extras */
  .indo-password-toggle {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    color: hsl(var(--indo-muted-fg));
    transition: color var(--indo-transition-fast);
  }
  
  .indo-password-toggle:hover {
    color: hsl(var(--indo-fg));
  }
  
  /* Pin Input Sizes */
  .indo-pin-input {
    text-align: center;
    border: 2px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-md);
    background: hsl(var(--indo-bg));
    color: hsl(var(--indo-fg));
    font-weight: 600;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-pin-input:focus {
    border-color: hsl(var(--indo-primary));
    box-shadow: 0 0 0 3px hsl(var(--indo-primary) / 0.15);
    outline: none;
  }
  
  .indo-pin-input-sm {
    width: 2rem;
    height: 2rem;
    font-size: var(--indo-text-base);
  }
  
  .indo-pin-input-md {
    width: 2.75rem;
    height: 2.75rem;
    font-size: var(--indo-text-lg);
  }
  
  .indo-pin-input-lg {
    width: 3.5rem;
    height: 3.5rem;
    font-size: var(--indo-text-xl);
  }
  
  /* Number Input Stepper */
  .indo-number-wrapper {
    position: relative;
    display: inline-flex;
    align-items: stretch;
  }
  
  .indo-number-input {
    -moz-appearance: textfield;
    padding-right: 2.5rem !important;
  }
  
  .indo-number-input::-webkit-outer-spin-button,
  .indo-number-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  .indo-number-stepper {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 1.75rem;
    border-left: 1px solid hsl(var(--indo-border));
  }
  
  .indo-number-step {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: hsl(var(--indo-muted));
    color: hsl(var(--indo-muted-fg));
    cursor: pointer;
    font-size: 0.65rem;
    transition: all var(--indo-transition-fast);
    padding: 0;
  }
  
  .indo-number-step:hover:not(:disabled) {
    background: hsl(var(--indo-bg-emphasis));
    color: hsl(var(--indo-fg));
  }
  
  .indo-number-step:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  
  .indo-number-step-up {
    border-radius: 0 var(--indo-radius-md) 0 0;
    border-bottom: 1px solid hsl(var(--indo-border));
  }
  
  .indo-number-step-down {
    border-radius: 0 0 var(--indo-radius-md) 0;
  }
  
  /* Segmented Control */
  .indo-segmented {
    display: inline-flex;
    background: hsl(var(--indo-muted));
    border-radius: var(--indo-radius-md);
    padding: 0.25rem;
    gap: 0.125rem;
  }
  
  .indo-segmented-fullwidth {
    width: 100%;
  }
  
  .indo-segmented-item {
    flex: 1;
    padding: 0.5rem 1rem;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-sm);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
    font-size: var(--indo-text-sm);
    font-weight: 500;
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-segmented-item:hover:not(:disabled):not(.indo-segmented-item-active) {
    color: hsl(var(--indo-fg));
  }
  
  .indo-segmented-item-active {
    background: hsl(var(--indo-bg));
    color: hsl(var(--indo-fg));
    box-shadow: var(--indo-shadow-sm);
  }
  
  .indo-segmented-item:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Button Group */
  .indo-button-group {
    display: inline-flex;
  }
  
  .indo-button-group > .indo-btn {
    border-radius: 0;
  }
  
  .indo-button-group > .indo-btn:first-child {
    border-radius: var(--indo-radius-md) 0 0 var(--indo-radius-md);
  }
  
  .indo-button-group > .indo-btn:last-child {
    border-radius: 0 var(--indo-radius-md) var(--indo-radius-md) 0;
  }
  
  .indo-button-group > .indo-btn:only-child {
    border-radius: var(--indo-radius-md);
  }
  
  .indo-button-group > .indo-btn:not(:last-child) {
    border-right: 1px solid hsl(var(--indo-border) / 0.3);
  }
  
  /* Input Group */
  .indo-input-group {
    display: flex;
    align-items: stretch;
  }
  
  .indo-input-group > .indo-input {
    border-radius: 0;
    flex: 1;
  }
  
  .indo-input-group > .indo-input:first-child {
    border-radius: var(--indo-radius-md) 0 0 var(--indo-radius-md);
  }
  
  .indo-input-group > .indo-input:last-child {
    border-radius: 0 var(--indo-radius-md) var(--indo-radius-md) 0;
  }
  
  .indo-input-group > .indo-btn {
    border-radius: 0;
  }
  
  .indo-input-group > *:first-child {
    border-radius: var(--indo-radius-md) 0 0 var(--indo-radius-md);
  }
  
  .indo-input-group > *:last-child {
    border-radius: 0 var(--indo-radius-md) var(--indo-radius-md) 0;
  }
  
  .indo-input-group > .indo-input:not(:first-child) {
    border-left: none;
  }
  
  /* Input with icon */
  .indo-input-with-icon {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .indo-input-icon {
    position: absolute;
    left: 0.75rem;
    color: hsl(var(--indo-muted-fg));
    pointer-events: none;
    z-index: 1;
  }
  
  .indo-input-icon-right {
    left: auto;
    right: 0.75rem;
  }
  
  .indo-input-with-icon .indo-input {
    padding-left: 2.5rem;
  }
  
  .indo-input-with-icon-right .indo-input {
    padding-right: 2.5rem;
    padding-left: 0.75rem;
  }
  
  /* Icon Button */
  .indo-icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--indo-radius-md);
    transition: all var(--indo-transition-fast);
    cursor: pointer;
    border: none;
    padding: 0;
    aspect-ratio: 1;
  }
  
  .indo-icon-btn-xs { width: 1.75rem; height: 1.75rem; }
  .indo-icon-btn-sm { width: 2rem; height: 2rem; }
  .indo-icon-btn-md { width: 2.5rem; height: 2.5rem; }
  .indo-icon-btn-lg { width: 2.75rem; height: 2.75rem; }
  .indo-icon-btn-xl { width: 3rem; height: 3rem; }
  
  /* Dropzone */
  .indo-dropzone {
    border: 2px dashed hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-dropzone-active {
    border-color: hsl(var(--indo-blue-500));
    background: hsl(var(--indo-blue-50));
  }
  
  /* ColorPicker Styles */
  .indo-color-picker {
    display: inline-flex;
    flex-direction: column;
    gap: 0.75rem;
    max-width: 280px;
  }
  
  .indo-color-picker-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  
  .indo-color-picker-preview {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .indo-color-picker-swatch-main {
    width: 3rem;
    height: 3rem;
    border-radius: var(--indo-radius-md);
    border: 2px solid hsl(var(--indo-border));
    flex-shrink: 0;
  }
  
  .indo-color-picker-native {
    position: absolute;
    top: 0;
    left: 0;
    width: 3rem;
    height: 3rem;
    opacity: 0;
    cursor: pointer;
  }
  
  .indo-color-picker-input {
    flex: 1;
    padding: 0.5rem 0.75rem;
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-md);
    background: hsl(var(--indo-bg));
    font-family: var(--indo-font-mono);
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-fg));
  }
  
  .indo-color-picker-input:focus {
    outline: none;
    border-color: hsl(var(--indo-ring));
    box-shadow: 0 0 0 3px hsl(var(--indo-ring) / 0.15);
  }
  
  .indo-color-picker-swatches {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.375rem;
  }
  
  .indo-color-picker-swatch {
    width: 2rem;
    height: 2rem;
    border-radius: var(--indo-radius-sm);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-color-picker-swatch:hover {
    transform: scale(1.1);
    border-color: hsl(var(--indo-border-emphasis));
  }
  
  .indo-color-picker-swatch-selected {
    border-color: hsl(var(--indo-fg));
    box-shadow: 0 0 0 2px hsl(var(--indo-bg)), 0 0 0 4px hsl(var(--indo-fg));
  }
  
  /* DatePicker & TimePicker Styles */
  .indo-date-picker,
  .indo-time-picker {
    position: relative;
    display: inline-flex;
    align-items: center;
  }
  
  .indo-date-picker-disabled,
  .indo-time-picker-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  
  .indo-date-picker-input,
  .indo-time-picker-input {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-md);
    background: hsl(var(--indo-bg));
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-fg));
    min-width: 200px;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-date-picker-input:hover,
  .indo-time-picker-input:hover {
    border-color: hsl(var(--indo-border-emphasis));
  }
  
  .indo-date-picker-input:focus,
  .indo-time-picker-input:focus {
    outline: none;
    border-color: hsl(var(--indo-ring));
    box-shadow: 0 0 0 3px hsl(var(--indo-ring) / 0.15);
  }
  
  .indo-date-picker-clear {
    position: absolute;
    right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border: none;
    background: hsl(var(--indo-muted));
    border-radius: var(--indo-radius-full);
    font-size: var(--indo-text-xs);
    color: hsl(var(--indo-muted-fg));
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-date-picker-clear:hover {
    background: hsl(var(--indo-destructive));
    color: hsl(var(--indo-destructive-fg));
  }
  
  .indo-datepicker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
  
  .indo-datepicker-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-sm);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-datepicker-nav:hover {
    background: hsl(var(--indo-bg-muted));
  }
  
  .indo-datepicker-month-year {
    font-weight: 600;
    font-size: var(--indo-text-sm);
  }
  
  .indo-datepicker-weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.125rem;
    margin-bottom: 0.25rem;
  }
  
  .indo-datepicker-weekday {
    text-align: center;
    font-size: var(--indo-text-xs);
    font-weight: 500;
    color: hsl(var(--indo-muted-fg));
    padding: 0.25rem;
  }
  
  .indo-datepicker-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.125rem;
  }
  
  .indo-datepicker-day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-sm);
    font-size: var(--indo-text-sm);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-datepicker-day:hover:not(:disabled) {
    background: hsl(var(--indo-bg-muted));
  }
  
  .indo-datepicker-day-today {
    border: 1px solid hsl(var(--indo-primary));
  }
  
  .indo-datepicker-day-selected {
    background: hsl(var(--indo-primary));
    color: hsl(var(--indo-primary-fg));
  }
  
  .indo-datepicker-day-selected:hover {
    background: hsl(var(--indo-primary-hover));
  }
  
  .indo-datepicker-day:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  /* CommandPalette Styles */
  .indo-command-overlay {
    position: fixed;
    inset: 0;
    background: hsl(0 0% 0% / 0.5);
    z-index: var(--indo-z-modal);
  }
  
  .indo-command-palette {
    position: fixed;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 32rem;
    background: hsl(var(--indo-popover));
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-xl);
    box-shadow: var(--indo-shadow-xl);
    overflow: hidden;
    z-index: calc(var(--indo-z-modal) + 1);
  }
  
  .indo-command-header {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid hsl(var(--indo-border));
  }
  
  .indo-command-input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: var(--indo-text-base);
    color: hsl(var(--indo-fg));
    outline: none;
  }
  
  .indo-command-input::placeholder {
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-command-list {
    max-height: 300px;
    overflow-y: auto;
    padding: 0.5rem;
  }
  
  .indo-command-group {
    margin-bottom: 0.5rem;
  }
  
  .indo-command-group-label {
    padding: 0.5rem 0.75rem;
    font-size: var(--indo-text-xs);
    font-weight: 600;
    color: hsl(var(--indo-muted-fg));
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .indo-command-empty {
    padding: 2rem;
    text-align: center;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-command-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.625rem 0.75rem;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-md);
    cursor: pointer;
    text-align: left;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-command-item:hover,
  .indo-command-item-selected {
    background: hsl(var(--indo-bg-muted));
  }
  
  .indo-command-icon {
    flex-shrink: 0;
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-command-content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }
  
  .indo-command-label {
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-fg));
  }
  
  .indo-command-description {
    font-size: var(--indo-text-xs);
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-command-shortcut {
    padding: 0.125rem 0.375rem;
    font-size: var(--indo-text-xs);
    font-family: var(--indo-font-mono);
    background: hsl(var(--indo-muted));
    border-radius: var(--indo-radius-sm);
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-command-palette-overlay {
    position: fixed;
    inset: 0;
    background: hsl(0 0% 0% / 0.5);
    z-index: var(--indo-z-modal);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 20vh;
  }
  
  .indo-command-palette-input-wrapper {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid hsl(var(--indo-border));
  }
  
  .indo-command-palette-input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: var(--indo-text-base);
    color: hsl(var(--indo-fg));
    outline: none;
  }
  
  .indo-command-palette-input::placeholder {
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-command-palette-list {
    max-height: 300px;
    overflow-y: auto;
    padding: 0.5rem;
  }
  
  .indo-command-palette-group-label {
    padding: 0.5rem 0.75rem;
    font-size: var(--indo-text-xs);
    font-weight: 600;
    color: hsl(var(--indo-muted-fg));
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .indo-command-palette-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.625rem 0.75rem;
    border-radius: var(--indo-radius-md);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-command-palette-item:hover,
  .indo-command-palette-item-highlighted {
    background: hsl(var(--indo-bg-muted));
  }
  
  .indo-command-palette-item-icon {
    flex-shrink: 0;
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-command-palette-item-content {
    flex: 1;
    min-width: 0;
  }
  
  .indo-command-palette-item-title {
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-fg));
  }
  
  .indo-command-palette-item-description {
    font-size: var(--indo-text-xs);
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-command-palette-item-shortcut {
    display: flex;
    gap: 0.25rem;
  }
  
  .indo-command-palette-item-shortcut kbd {
    padding: 0.125rem 0.375rem;
    font-size: var(--indo-text-xs);
    font-family: var(--indo-font-mono);
    background: hsl(var(--indo-muted));
    border-radius: var(--indo-radius-sm);
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-command-palette-empty {
    padding: 2rem;
    text-align: center;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-muted-fg));
  }
  
  /* TreeView Styles */
  .indo-treeview {
    font-size: var(--indo-text-sm);
  }
  
  .indo-treeview-node {
    user-select: none;
  }
  
  .indo-treeview-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.375rem 0.5rem;
    border-radius: var(--indo-radius-sm);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-treeview-item:hover {
    background: hsl(var(--indo-bg-muted));
  }
  
  .indo-treeview-item-selected {
    background: hsl(var(--indo-primary-subtle));
    color: hsl(var(--indo-primary));
  }
  
  .indo-treeview-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    color: hsl(var(--indo-muted-fg));
    transition: transform var(--indo-transition-fast);
  }
  
  .indo-treeview-toggle-open {
    transform: rotate(90deg);
  }
  
  .indo-treeview-icon {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
  
  .indo-treeview-label {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .indo-treeview-children {
    margin-left: 0.75rem;
    padding-left: 0.75rem;
    border-left: 1px solid hsl(var(--indo-border));
  }
  
  /* FileTree Styles */
  .indo-filetree {
    font-size: var(--indo-text-sm);
    font-family: var(--indo-font-mono);
  }
  
  .indo-filetree-node {
    user-select: none;
  }
  
  .indo-filetree-item {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--indo-radius-sm);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-filetree-item:hover {
    background: hsl(var(--indo-bg-muted));
  }
  
  .indo-filetree-item-selected {
    background: hsl(var(--indo-primary-subtle));
  }
  
  .indo-filetree-icon {
    flex-shrink: 0;
  }
  
  .indo-filetree-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .indo-filetree-children {
    margin-left: 1rem;
  }
  
  /* DataTable Styles */
  .indo-datatable {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--indo-text-sm);
  }
  
  .indo-datatable th,
  .indo-datatable td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid hsl(var(--indo-border));
  }
  
  .indo-datatable th {
    font-weight: 600;
    background: hsl(var(--indo-bg-muted));
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-datatable th[data-sortable="true"] {
    cursor: pointer;
    user-select: none;
  }
  
  .indo-datatable th[data-sortable="true"]:hover {
    background: hsl(var(--indo-bg-emphasis));
  }
  
  .indo-datatable tbody tr:hover {
    background: hsl(var(--indo-bg-subtle));
  }
  
  .indo-datatable-sort-icon {
    display: inline-flex;
    margin-left: 0.25rem;
    opacity: 0.5;
  }
  
  .indo-datatable-sort-icon-active {
    opacity: 1;
    color: hsl(var(--indo-primary));
  }
  
  /* QRCode Styles */
  .indo-qrcode {
    display: inline-block;
  }
  
  /* Carousel Styles */
  .indo-carousel {
    position: relative;
    width: 100%;
    background: hsl(var(--indo-card));
    border-radius: var(--indo-radius-lg);
    overflow: hidden;
  }
  
  .indo-carousel-viewport {
    overflow: hidden;
    position: relative;
  }
  
  .indo-carousel-track {
    display: flex;
    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  .indo-carousel-horizontal .indo-carousel-track {
    flex-direction: row;
  }
  
  .indo-carousel-vertical .indo-carousel-track {
    flex-direction: column;
  }
  
  .indo-carousel-slide {
    flex: 0 0 100%;
    min-width: 0;
    width: 100%;
  }
  
  .indo-carousel-vertical .indo-carousel-slide {
    min-height: 300px;
  }
  
  /* Carousel Navigation - Hide external arrows */
  .indo-carousel-nav {
    display: none;
  }
  
  /* Carousel Dots - Inside positioning */
  .indo-carousel-dots {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: hsl(var(--indo-bg) / 0.7);
    backdrop-filter: blur(8px);
    border-radius: var(--indo-radius-full);
    z-index: 10;
  }
  
  .indo-carousel-dots-outside {
    position: relative;
    bottom: auto;
    left: auto;
    transform: none;
    margin-top: 1rem;
    background: transparent;
    backdrop-filter: none;
  }
  
  .indo-carousel-dots-vertical {
    position: absolute;
    right: 1rem;
    top: 50%;
    bottom: auto;
    left: auto;
    transform: translateY(-50%);
    flex-direction: column;
    padding: 0.75rem 0.5rem;
  }
  
  .indo-carousel-dot {
    width: 0.625rem;
    height: 0.625rem;
    border: none;
    background: hsl(var(--indo-fg) / 0.3);
    border-radius: var(--indo-radius-full);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-carousel-dot:hover {
    background: hsl(var(--indo-fg) / 0.5);
  }
  
  .indo-carousel-dot-active {
    background: hsl(var(--indo-primary));
    width: 1.5rem;
  }
  
  .indo-carousel-dots-vertical .indo-carousel-dot-active {
    width: 0.625rem;
    height: 1.5rem;
  }
  
  /* Stat Styles - Colorful */
  .indo-stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1.25rem;
    background: linear-gradient(135deg, hsl(var(--indo-card)) 0%, hsl(var(--indo-bg-subtle)) 100%);
    border-radius: var(--indo-radius-lg);
    border: 1px solid hsl(var(--indo-border));
    position: relative;
    overflow: hidden;
  }
  
  .indo-stat::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, hsl(var(--indo-primary)), hsl(var(--indo-accent)));
  }
  
  .indo-stat-label {
    font-size: var(--indo-text-sm);
    font-weight: 500;
    color: hsl(var(--indo-muted-fg));
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .indo-stat-number {
    font-size: var(--indo-text-3xl);
    font-weight: 700;
    color: hsl(var(--indo-fg));
    line-height: 1.2;
    background: linear-gradient(135deg, hsl(var(--indo-fg)) 0%, hsl(var(--indo-primary)) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .indo-stat-help {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-stat-arrow {
    font-weight: 600;
  }
  
  .indo-stat-arrow-increase {
    color: hsl(var(--indo-success));
  }
  
  .indo-stat-arrow-decrease {
    color: hsl(var(--indo-destructive));
  }
  
  .indo-stat-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  /* Pagination Styles - Modern */
  .indo-pagination {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  .indo-pagination-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2.25rem;
    height: 2.25rem;
    padding: 0 0.5rem;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-md);
    font-size: var(--indo-text-sm);
    font-weight: 500;
    color: hsl(var(--indo-muted-fg));
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-pagination-btn:hover:not(:disabled) {
    background: hsl(var(--indo-muted));
    color: hsl(var(--indo-fg));
  }
  
  .indo-pagination-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  
  .indo-pagination-active {
    background: hsl(var(--indo-primary)) !important;
    color: hsl(var(--indo-primary-fg)) !important;
    box-shadow: 0 2px 8px hsl(var(--indo-primary) / 0.3);
  }
  
  .indo-pagination-dots {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2.25rem;
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-pagination-sm .indo-pagination-btn {
    min-width: 1.75rem;
    height: 1.75rem;
    font-size: var(--indo-text-xs);
  }
  
  .indo-pagination-lg .indo-pagination-btn {
    min-width: 2.75rem;
    height: 2.75rem;
    font-size: var(--indo-text-base);
  }
  
  /* Empty State Styles */
  .indo-empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;
    text-align: center;
    background: hsl(var(--indo-bg-subtle));
    border-radius: var(--indo-radius-lg);
    border: 2px dashed hsl(var(--indo-border));
  }
  
  .indo-empty-state-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
    background: hsl(var(--indo-muted));
    border-radius: var(--indo-radius-full);
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-empty-state-title {
    font-size: var(--indo-text-lg);
    font-weight: 600;
    color: hsl(var(--indo-fg));
    margin: 0 0 0.5rem;
  }
  
  .indo-empty-state-description {
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-muted-fg));
    max-width: 24rem;
    margin: 0 0 1rem;
  }
  
  .indo-empty-state-action {
    margin-top: 0.5rem;
  }
  
  /* Timeline Styles */
  .indo-timeline {
    position: relative;
    padding-left: 1.5rem;
  }
  
  .indo-timeline::before {
    content: '';
    position: absolute;
    left: 0.375rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: hsl(var(--indo-border));
  }
  
  .indo-timeline-item {
    position: relative;
    padding-bottom: 1.5rem;
  }
  
  .indo-timeline-item:last-child {
    padding-bottom: 0;
  }
  
  .indo-timeline-dot {
    position: absolute;
    left: -1.5rem;
    top: 0;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: var(--indo-radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    color: hsl(var(--indo-primary-fg));
    font-size: 0.5rem;
    z-index: 1;
  }
  
  .indo-timeline-content {
    padding-top: 0;
  }
  
  /* AlertDialog Styles */
  .indo-alert-dialog-overlay {
    position: fixed;
    inset: 0;
    background: hsl(0 0% 0% / 0.5);
    z-index: var(--indo-z-modal);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  
  .indo-alert-dialog {
    width: 100%;
    max-width: 28rem;
    background: hsl(var(--indo-popover));
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    box-shadow: var(--indo-shadow-xl);
    padding: 1.5rem;
  }
  
  .indo-alert-dialog-header {
    margin-bottom: 1rem;
  }
  
  .indo-alert-dialog-title {
    font-size: var(--indo-text-lg);
    font-weight: 600;
    color: hsl(var(--indo-fg));
  }
  
  .indo-alert-dialog-description {
    margin-top: 0.5rem;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-muted-fg));
    line-height: 1.5;
  }
  
  .indo-alert-dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }
  
  /* TimePicker Dropdown */
  .indo-timepicker-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: var(--indo-z-popover);
    margin-top: 0.25rem;
    padding: 0.5rem;
    background: hsl(var(--indo-popover));
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    box-shadow: var(--indo-shadow-lg);
    display: flex;
    gap: 0.25rem;
  }
  
  .indo-timepicker-column {
    display: flex;
    flex-direction: column;
    max-height: 200px;
    overflow-y: auto;
  }
  
  .indo-timepicker-option {
    padding: 0.375rem 0.75rem;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-sm);
    font-size: var(--indo-text-sm);
    font-family: var(--indo-font-mono);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-timepicker-option:hover {
    background: hsl(var(--indo-bg-muted));
  }
  
  .indo-timepicker-option-selected {
    background: hsl(var(--indo-primary));
    color: hsl(var(--indo-primary-fg));
  }
  
  /* List Styles */
  .indo-list {
    list-style-position: inside;
    padding-left: 0;
    margin: 0;
  }
  
  .indo-list-item {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    line-height: 1.6;
  }
  
  .indo-list-item-icon {
    list-style: none;
  }
  
  .indo-list-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0.15rem;
    color: hsl(var(--indo-primary));
  }
  
  /* Inline Code */
  .indo-inline-code {
    padding: 0.125rem 0.375rem;
    font-family: var(--indo-font-mono);
    font-size: 0.875em;
    background: hsl(var(--indo-muted));
    color: hsl(var(--indo-fg));
    border-radius: var(--indo-radius-sm);
    white-space: nowrap;
  }
  
  /* Description List */
  .indo-description-list {
    display: grid;
    gap: 0.75rem;
  }
  
  .indo-description-term {
    font-weight: 600;
    color: hsl(var(--indo-fg));
  }
  
  .indo-description-details {
    color: hsl(var(--indo-muted-fg));
    margin-left: 0;
  }
  
  /* Clipboard */
  .indo-clipboard {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  /* Blockquote */
  .indo-blockquote {
    margin: 0;
    padding: 1rem 1.25rem;
    border-left: 4px solid hsl(var(--indo-border));
    font-style: italic;
  }
  
  .indo-blockquote-subtle {
    background: hsl(var(--indo-muted) / 0.3);
    border-radius: 0 var(--indo-radius-md) var(--indo-radius-md) 0;
  }
  
  .indo-blockquote-solid {
    background: hsl(var(--indo-muted));
    border-radius: 0 var(--indo-radius-md) var(--indo-radius-md) 0;
  }
  
  /* Prose */
  .indo-prose {
    color: hsl(var(--indo-fg));
    max-width: 65ch;
  }
  
  .indo-prose-sm { font-size: var(--indo-text-sm); }
  .indo-prose-md { font-size: var(--indo-text-base); }
  .indo-prose-lg { font-size: var(--indo-text-lg); }
  
  .indo-prose h1,
  .indo-prose h2,
  .indo-prose h3,
  .indo-prose h4,
  .indo-prose h5,
  .indo-prose h6 {
    font-weight: 700;
    line-height: 1.3;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  
  .indo-prose p {
    line-height: 1.7;
    margin-bottom: 1em;
  }
  
  .indo-prose a {
    color: hsl(var(--indo-primary));
    text-decoration: underline;
  }
  
  .indo-prose code {
    padding: 0.125rem 0.375rem;
    font-family: var(--indo-font-mono);
    font-size: 0.875em;
    background: hsl(var(--indo-muted));
    border-radius: var(--indo-radius-sm);
  }
  
  /* Range Slider */
  .indo-range-slider {
    position: relative;
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
  }
  
  .indo-range-slider-track {
    position: absolute;
    width: 100%;
    height: 0.375rem;
    background: hsl(var(--indo-muted));
    border-radius: var(--indo-radius-full);
  }
  
  .indo-range-slider-filled {
    position: absolute;
    height: 100%;
    border-radius: var(--indo-radius-full);
  }
  
  .indo-range-slider-input {
    position: absolute;
    width: 100%;
    height: 0.375rem;
    -webkit-appearance: none;
    background: transparent;
    pointer-events: none;
  }
  
  .indo-range-slider-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: hsl(var(--indo-bg));
    border: 2px solid hsl(var(--indo-primary));
    cursor: pointer;
    pointer-events: auto;
    box-shadow: var(--indo-shadow-sm);
  }
  
  .indo-range-slider-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  
  .indo-range-tooltip {
    position: absolute;
    top: -1.75rem;
    transform: translateX(-50%);
    padding: 0.125rem 0.5rem;
    background: hsl(var(--indo-fg));
    color: hsl(var(--indo-bg));
    font-size: var(--indo-text-xs);
    border-radius: var(--indo-radius-sm);
    white-space: nowrap;
  }
  
  /* Floating Color Picker */
  .indo-floating-color-picker {
    display: inline-flex;
    position: relative;
  }
  
  .indo-color-trigger {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: hsl(var(--indo-bg));
    border: 1px solid hsl(var(--indo-input));
    border-radius: var(--indo-radius-md);
    cursor: pointer;
    min-width: 140px;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-color-trigger:hover {
    border-color: hsl(var(--indo-ring));
  }
  
  .indo-color-trigger:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .indo-color-preview {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: var(--indo-radius-sm);
    border: 1px solid hsl(var(--indo-border));
  }
  
  .indo-color-value {
    flex: 1;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-fg));
    text-transform: uppercase;
  }
  
  .indo-color-chevron {
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-color-popup {
    background: hsl(var(--indo-card));
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    box-shadow: var(--indo-shadow-lg);
    padding: 1rem;
    min-width: 240px;
    animation: indo-popup-enter 0.15s ease-out;
  }
  
  @keyframes indo-popup-enter {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .indo-color-input-row {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  
  .indo-color-native {
    width: 3rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--indo-radius-md);
    cursor: pointer;
    padding: 0;
  }
  
  .indo-color-text-input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid hsl(var(--indo-input));
    border-radius: var(--indo-radius-md);
    font-size: var(--indo-text-sm);
    font-family: var(--indo-font-mono);
    text-transform: uppercase;
    background: transparent;
    color: hsl(var(--indo-fg));
  }
  
  .indo-color-swatches {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.375rem;
  }
  
  .indo-color-swatch {
    width: 100%;
    aspect-ratio: 1;
    border-radius: var(--indo-radius-sm);
    border: 2px solid transparent;
    cursor: pointer;
    transition: transform var(--indo-transition-fast);
  }
  
  .indo-color-swatch:hover {
    transform: scale(1.1);
  }
  
  .indo-color-swatch-active {
    border-color: hsl(var(--indo-fg));
    box-shadow: 0 0 0 2px hsl(var(--indo-bg));
  }
  
  /* Floating Date Picker */
  .indo-floating-date-picker {
    display: inline-flex;
    position: relative;
  }
  
  .indo-date-trigger {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: hsl(var(--indo-bg));
    border: 1px solid hsl(var(--indo-input));
    border-radius: var(--indo-radius-md);
    cursor: pointer;
    min-width: 180px;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-date-trigger:hover {
    border-color: hsl(var(--indo-ring));
  }
  
  .indo-date-trigger:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .indo-date-icon {
    color: hsl(var(--indo-muted-fg));
    flex-shrink: 0;
  }
  
  .indo-date-value {
    flex: 1;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-fg));
    text-align: left;
  }
  
  .indo-date-clear {
    background: none;
    border: none;
    padding: 0.125rem;
    cursor: pointer;
    color: hsl(var(--indo-muted-fg));
    font-size: var(--indo-text-xs);
  }
  
  .indo-date-clear:hover {
    color: hsl(var(--indo-fg));
  }
  
  .indo-date-popup {
    background: hsl(var(--indo-card));
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    box-shadow: var(--indo-shadow-lg);
    padding: 1rem;
    min-width: 280px;
    animation: indo-popup-enter 0.15s ease-out;
  }
  
  .indo-date-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: hsl(var(--indo-fg));
  }
  
  .indo-date-header button {
    background: none;
    border: none;
    padding: 0.375rem 0.5rem;
    cursor: pointer;
    color: hsl(var(--indo-muted-fg));
    font-size: var(--indo-text-lg);
    border-radius: var(--indo-radius-sm);
  }
  
  .indo-date-header button:hover {
    background: hsl(var(--indo-muted));
    color: hsl(var(--indo-fg));
  }
  
  .indo-date-days-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.125rem;
    margin-bottom: 0.25rem;
  }
  
  .indo-date-days-header span {
    text-align: center;
    font-size: var(--indo-text-xs);
    font-weight: 500;
    color: hsl(var(--indo-muted-fg));
    padding: 0.25rem;
  }
  
  .indo-date-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.125rem;
  }
  
  .indo-date-day {
    aspect-ratio: 1;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-sm);
    cursor: pointer;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-fg));
    transition: all var(--indo-transition-fast);
  }
  
  .indo-date-day:hover:not(:disabled) {
    background: hsl(var(--indo-muted));
  }
  
  .indo-date-day-empty {
    pointer-events: none;
  }
  
  .indo-date-day-today {
    font-weight: 600;
    border: 1px solid hsl(var(--indo-primary));
  }
  
  .indo-date-day-selected {
    background: hsl(var(--indo-primary)) !important;
    color: hsl(var(--indo-primary-fg)) !important;
  }
  
  .indo-date-day:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  /* Floating Time Picker */
  .indo-floating-time-picker {
    display: inline-flex;
    position: relative;
  }
  
  .indo-time-trigger {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: hsl(var(--indo-bg));
    border: 1px solid hsl(var(--indo-input));
    border-radius: var(--indo-radius-md);
    cursor: pointer;
    min-width: 140px;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-time-trigger:hover {
    border-color: hsl(var(--indo-ring));
  }
  
  .indo-time-trigger:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .indo-time-icon {
    color: hsl(var(--indo-muted-fg));
    flex-shrink: 0;
  }
  
  .indo-time-value {
    flex: 1;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-fg));
    text-align: left;
  }
  
  .indo-time-popup {
    background: hsl(var(--indo-card));
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    box-shadow: var(--indo-shadow-lg);
    max-height: 240px;
    overflow-y: auto;
    min-width: 140px;
    animation: indo-popup-enter 0.15s ease-out;
  }
  
  .indo-time-popup-content {
    padding: 0.25rem;
  }
  
  .indo-time-option {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: none;
    background: transparent;
    text-align: left;
    cursor: pointer;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-fg));
    border-radius: var(--indo-radius-sm);
    transition: all var(--indo-transition-fast);
  }
  
  .indo-time-option:hover {
    background: hsl(var(--indo-muted));
  }
  
  .indo-time-option-selected {
    background: hsl(var(--indo-primary));
    color: hsl(var(--indo-primary-fg));
  }
  
  /* WebPlayer */
  .indo-webplayer {
    display: flex;
    flex-direction: column;
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    overflow: hidden;
    background: hsl(var(--indo-card));
  }
  
  .indo-webplayer-dark {
    background: hsl(222 47% 8%);
  }
  
  .indo-webplayer-header {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: hsl(var(--indo-muted));
    border-bottom: 1px solid hsl(var(--indo-border));
    gap: 1rem;
  }
  
  .indo-webplayer-dark .indo-webplayer-header {
    background: hsl(222 47% 10%);
  }
  
  .indo-webplayer-title {
    font-weight: 500;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-fg));
  }
  
  .indo-webplayer-tabs {
    display: flex;
    gap: 0.25rem;
    flex: 1;
  }
  
  .indo-webplayer-tab {
    padding: 0.375rem 0.75rem;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-muted-fg));
    border-radius: var(--indo-radius-sm);
    transition: all var(--indo-transition-fast);
  }
  
  .indo-webplayer-tab:hover {
    background: hsl(var(--indo-bg-emphasis) / 0.5);
    color: hsl(var(--indo-fg));
  }
  
  .indo-webplayer-tab-active {
    background: hsl(var(--indo-primary));
    color: hsl(var(--indo-primary-fg));
  }
  
  .indo-webplayer-actions {
    display: flex;
    gap: 0.25rem;
  }
  
  .indo-webplayer-action {
    padding: 0.375rem;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: var(--indo-text-base);
    color: hsl(var(--indo-muted-fg));
    border-radius: var(--indo-radius-sm);
  }
  
  .indo-webplayer-action:hover {
    background: hsl(var(--indo-muted));
    color: hsl(var(--indo-fg));
  }
  
  .indo-webplayer-content {
    flex: 1;
    overflow: hidden;
  }
  
  .indo-webplayer-preview {
    width: 100%;
    height: 100%;
  }
  
  .indo-webplayer-iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  .indo-webplayer-error {
    padding: 1rem;
    color: hsl(var(--indo-destructive));
    font-family: var(--indo-font-mono);
    font-size: var(--indo-text-sm);
  }
  
  .indo-webplayer-code {
    padding: 1rem;
    overflow: auto;
    height: 100%;
    background: hsl(222 47% 6%);
  }
  
  .indo-webplayer-code pre {
    margin: 0;
    font-family: 'Fira Code', monospace;
    font-size: var(--indo-text-sm);
    color: hsl(var(--indo-gray-300));
    white-space: pre-wrap;
  }
  
  .indo-webplayer-console {
    padding: 0.5rem;
    overflow: auto;
    height: 100%;
    background: hsl(222 47% 6%);
    font-family: var(--indo-font-mono);
    font-size: var(--indo-text-xs);
  }
  
  .indo-webplayer-console-empty {
    padding: 1rem;
    color: hsl(var(--indo-muted-fg));
    text-align: center;
  }
  
  .indo-webplayer-log {
    display: flex;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-bottom: 1px solid hsl(var(--indo-border) / 0.3);
  }
  
  .indo-webplayer-log-type {
    min-width: 3rem;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.625rem;
  }
  
  .indo-webplayer-log-log .indo-webplayer-log-type { color: hsl(var(--indo-gray-400)); }
  .indo-webplayer-log-error .indo-webplayer-log-type { color: hsl(var(--indo-destructive)); }
  .indo-webplayer-log-warn .indo-webplayer-log-type { color: hsl(45 100% 50%); }
  
  .indo-webplayer-log-message {
    color: hsl(var(--indo-gray-300));
    word-break: break-all;
  }
  
  /* Group */
  .indo-group {
    display: inline-flex;
  }
  
  .indo-group-attached {
    gap: 0;
  }
  
  .indo-group-item {
    flex-shrink: 0;
  }
  
  /* ZodForm */
  .indo-zod-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .indo-zod-field {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }
  
  .indo-zod-error {
    font-size: var(--indo-text-xs);
    color: hsl(var(--indo-destructive));
  }
  
  /* Code Editor */
  .indo-code-editor {
    position: relative;
    display: flex;
    flex-direction: column;
    font-family: 'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
    border-radius: var(--indo-radius-lg);
    overflow: hidden;
    border: 1px solid hsl(var(--indo-border));
  }
  
  .indo-code-editor-dark {
    background: #1a1b26;
    color: #c0caf5;
  }
  
  .indo-code-editor-light {
    background: hsl(var(--indo-card));
    color: hsl(var(--indo-fg));
  }
  
  .indo-code-editor-focused {
    box-shadow: 0 0 0 2px hsl(var(--indo-ring) / 0.3);
  }
  
  .indo-code-gutter {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 2rem;
    width: 3.5rem;
    padding: 1rem 0;
    text-align: right;
    user-select: none;
    z-index: 1;
  }
  
  .indo-code-editor-dark .indo-code-gutter {
    background: #16161e;
    border-right: 1px solid #1a1b26;
    color: #565f89;
  }
  
  .indo-code-editor-light .indo-code-gutter {
    background: hsl(var(--indo-muted));
    border-right: 1px solid hsl(var(--indo-border));
    color: hsl(var(--indo-muted-fg));
  }
  
  .indo-code-line-number {
    padding-right: 1rem;
    font-size: 0.75rem;
    min-height: 1.6em;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  
  .indo-code-line-number-active {
    color: #7aa2f7;
  }
  
  .indo-code-content {
    position: relative;
    flex: 1;
    margin-left: 3.5rem;
    overflow: auto;
  }
  
  .indo-code-highlight {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    margin: 0;
    pointer-events: none;
    overflow: hidden;
    white-space: pre;
  }
  
  .indo-code-line {
    min-height: 1.6em;
    padding: 0 0.5rem;
    margin: 0 -0.5rem;
    border-radius: 2px;
  }
  
  .indo-code-line-active {
    background: rgba(122, 162, 247, 0.1);
  }
  
  .indo-code-textarea {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 1rem;
    margin: 0;
    border: none;
    outline: none;
    resize: none;
    background: transparent;
    color: transparent;
    caret-color: #7aa2f7;
    font: inherit;
    line-height: inherit;
    white-space: pre;
    overflow: auto;
    z-index: 2;
  }
  
  .indo-code-textarea::placeholder {
    color: #565f89;
  }
  
  .indo-code-statusbar {
    display: flex;
    justify-content: space-between;
    padding: 0.375rem 1rem;
    font-size: 0.75rem;
  }
  
  .indo-code-editor-dark .indo-code-statusbar {
    background: #16161e;
    color: #565f89;
  }
  
  .indo-code-editor-light .indo-code-statusbar {
    background: hsl(var(--indo-muted));
    color: hsl(var(--indo-muted-fg));
  }
  
  /* Tokyo Night inspired syntax highlighting */
  .indo-code-comment { color: #565f89; font-style: italic; }
  .indo-code-string { color: #9ece6a; }
  .indo-code-keyword { color: #bb9af7; }
  .indo-code-literal { color: #ff9e64; }
  .indo-code-number { color: #ff9e64; }
  .indo-code-class { color: #7dcfff; }
  .indo-code-function { color: #7aa2f7; }
  .indo-code-type { color: #2ac3de; }
  .indo-code-tag { color: #f7768e; }
  .indo-code-attr { color: #73daca; }
  .indo-code-component { color: #bb9af7; }
  .indo-code-selector { color: #7dcfff; }
  .indo-code-property { color: #73daca; }
  .indo-code-color { color: #ff9e64; }
  
  /* CodeBlock */
  .indo-codeblock {
    border-radius: var(--indo-radius-lg);
    overflow: hidden;
    background: #1a1b26;
  }
  
  .indo-codeblock-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background: #16161e;
    border-bottom: 1px solid #24283b;
    color: #565f89;
    font-size: var(--indo-text-sm);
  }
  
  .indo-codeblock-content {
    padding: 1rem;
    overflow-x: auto;
    font-family: 'Fira Code', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
  }
  
  .indo-codeblock-line {
    display: flex;
    min-height: 1.6em;
  }
  
  .indo-codeblock-line-number {
    width: 2.5rem;
    padding-right: 1rem;
    text-align: right;
    color: #565f89;
    user-select: none;
    flex-shrink: 0;
  }
  
  .indo-codeblock-line-highlighted {
    background: rgba(122, 162, 247, 0.1);
    margin: 0 -1rem;
    padding: 0 1rem;
  }
  
  .indo-codeblock-copy {
    padding: 0.375rem 0.625rem;
    background: transparent;
    border: 1px solid #24283b;
    border-radius: var(--indo-radius-sm);
    color: #565f89;
    cursor: pointer;
    font-size: var(--indo-text-xs);
    transition: all var(--indo-transition-fast);
  }
  
  .indo-codeblock-copy:hover {
    background: #24283b;
    color: #c0caf5;
  }
  
  /* TextEditor - Rich text editor */
  .indo-text-editor {
    position: relative;
    border: 1px solid hsl(var(--indo-input));
    border-radius: var(--indo-radius-md);
    overflow: hidden;
  }
  
  .indo-text-editor:focus-within {
    border-color: hsl(var(--indo-ring));
    box-shadow: 0 0 0 3px hsl(var(--indo-ring) / 0.15);
  }
  
  .indo-text-editor-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    padding: 0.5rem;
    background: hsl(var(--indo-muted));
    border-bottom: 1px solid hsl(var(--indo-border));
  }
  
  .indo-text-editor-toolbar-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    padding: 0;
    border: none;
    background: transparent;
    color: hsl(var(--indo-fg));
    border-radius: var(--indo-radius-sm);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-text-editor-toolbar-btn:hover {
    background: hsl(var(--indo-bg-emphasis));
  }
  
  .indo-text-editor-toolbar-btn-active {
    background: hsl(var(--indo-primary));
    color: hsl(var(--indo-primary-fg));
  }
  
  .indo-text-editor-toolbar-divider {
    width: 1px;
    height: 1.5rem;
    background: hsl(var(--indo-border));
    margin: 0 0.25rem;
    align-self: center;
  }
  
  .indo-text-editor-content {
    min-height: 150px;
    padding: 1rem;
    outline: none;
    color: hsl(var(--indo-fg));
    background: hsl(var(--indo-bg));
    line-height: 1.6;
  }
  
  .indo-text-editor-content:empty::before {
    content: attr(data-placeholder);
    color: hsl(var(--indo-muted-fg));
    pointer-events: none;
  }
  
  .indo-text-editor-content h1 { font-size: 2rem; font-weight: 700; margin: 1rem 0 0.5rem; }
  .indo-text-editor-content h2 { font-size: 1.5rem; font-weight: 600; margin: 0.75rem 0 0.5rem; }
  .indo-text-editor-content h3 { font-size: 1.25rem; font-weight: 600; margin: 0.5rem 0 0.375rem; }
  .indo-text-editor-content p { margin: 0.5rem 0; }
  .indo-text-editor-content ul, 
  .indo-text-editor-content ol { margin: 0.5rem 0; padding-left: 1.5rem; }
  .indo-text-editor-content blockquote {
    margin: 0.5rem 0;
    padding-left: 1rem;
    border-left: 3px solid hsl(var(--indo-border));
    color: hsl(var(--indo-muted-fg));
    font-style: italic;
  }
  .indo-text-editor-content a { color: hsl(var(--indo-primary)); text-decoration: underline; }
  .indo-text-editor-content code {
    padding: 0.125rem 0.375rem;
    background: hsl(var(--indo-muted));
    border-radius: var(--indo-radius-sm);
    font-family: var(--indo-font-mono);
    font-size: 0.875em;
  }

  /* WebPlayer Styles */
  .indo-webplayer {
    display: flex;
    flex-direction: column;
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    overflow: hidden;
  }
  
  .indo-webplayer-dark { background: #1e1e1e; }
  .indo-webplayer-light { background: #ffffff; }
  
  .indo-webplayer-fullscreen {
    position: fixed;
    inset: 1rem;
    z-index: 50;
  }
  
  .indo-webplayer-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 40;
  }
  
  .indo-webplayer-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid hsl(var(--indo-border));
  }
  
  .indo-webplayer-dark .indo-webplayer-toolbar { background: #252526; }
  .indo-webplayer-light .indo-webplayer-toolbar { background: #f3f3f3; }
  
  .indo-webplayer-toolbar-left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .indo-webplayer-traffic-lights {
    display: flex;
    gap: 0.375rem;
  }
  
  .indo-webplayer-traffic-light {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
  }
  
  .indo-webplayer-traffic-light-red { background: #ff5f57; }
  .indo-webplayer-traffic-light-yellow { background: #febc2e; }
  .indo-webplayer-traffic-light-green { background: #28c840; }
  
  .indo-webplayer-title {
    font-size: 0.75rem;
    font-weight: 500;
    margin-left: 0.75rem;
  }
  
  .indo-webplayer-dark .indo-webplayer-title { color: #8b8b8b; }
  .indo-webplayer-light .indo-webplayer-title { color: #6b6b6b; }
  
  .indo-webplayer-toolbar-actions {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  .indo-webplayer-action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.375rem;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-sm);
    cursor: pointer;
    transition: background var(--indo-transition-fast);
    position: relative;
  }
  
  .indo-webplayer-dark .indo-webplayer-action { color: #8b8b8b; }
  .indo-webplayer-dark .indo-webplayer-action:hover { background: #3c3c3c; }
  .indo-webplayer-light .indo-webplayer-action { color: #6b6b6b; }
  .indo-webplayer-light .indo-webplayer-action:hover { background: #e0e0e0; }
  
  .indo-webplayer-action-active {
    background: #3c3c3c !important;
  }
  
  .indo-webplayer-icon {
    width: 1rem;
    height: 1rem;
  }
  
  .indo-webplayer-icon-spin {
    animation: indo-spin 1s linear infinite;
  }
  
  @keyframes indo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .indo-webplayer-error-badge {
    position: absolute;
    top: -0.125rem;
    right: -0.125rem;
    width: 0.5rem;
    height: 0.5rem;
    background: hsl(var(--indo-destructive));
    border-radius: 50%;
  }
  
  .indo-webplayer-preview {
    flex: 1;
    position: relative;
    min-height: 200px;
  }
  
  .indo-webplayer-iframe {
    width: 100%;
    height: 100%;
    border: 0;
    background: white;
  }
  
  .indo-webplayer-loading {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background: rgba(30, 30, 30, 0.8);
  }
  
  .indo-webplayer-error {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: rgba(239, 68, 68, 0.1);
    color: hsl(var(--indo-destructive));
    z-index: 10;
  }
  
  .indo-webplayer-console {
    display: flex;
    flex-direction: column;
    border-top: 1px solid hsl(var(--indo-border));
  }
  
  .indo-webplayer-dark .indo-webplayer-console { background: #1e1e1e; }
  .indo-webplayer-light .indo-webplayer-console { background: #f9f9f9; }
  
  .indo-webplayer-console-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.375rem 0.75rem;
    border-bottom: 1px solid hsl(var(--indo-border));
  }
  
  .indo-webplayer-console-title {
    font-size: 0.75rem;
    font-weight: 500;
    color: #8b8b8b;
  }
  
  .indo-webplayer-console-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    padding: 0.125rem 0.375rem;
    font-size: 0.625rem;
    background: hsl(var(--indo-primary) / 0.2);
    color: hsl(var(--indo-primary));
    border-radius: var(--indo-radius-sm);
  }
  
  .indo-webplayer-console-clear {
    font-size: 0.75rem;
    padding: 0.125rem 0.5rem;
    border: none;
    background: transparent;
    color: #8b8b8b;
    cursor: pointer;
    border-radius: var(--indo-radius-sm);
    transition: background var(--indo-transition-fast);
  }
  
  .indo-webplayer-console-clear:hover { background: #3c3c3c; }
  
  .indo-webplayer-console-content {
    flex: 1;
    overflow: auto;
    padding: 0.5rem;
    font-family: var(--indo-font-mono);
    font-size: 0.75rem;
  }
  
  .indo-webplayer-console-empty { color: #6b6b6b; }
  
  .indo-webplayer-log {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.125rem 0;
  }
  
  .indo-webplayer-log-time {
    opacity: 0.5;
    user-select: none;
  }
  
  .indo-webplayer-log-message {
    white-space: pre-wrap;
    word-break: break-all;
  }
  
  .indo-webplayer-dark .indo-webplayer-log { color: #d4d4d4; }
  .indo-webplayer-light .indo-webplayer-log { color: #333; }
  
  .indo-webplayer-log-error { color: #f87171 !important; }
  .indo-webplayer-log-warn { color: #fbbf24 !important; }
  .indo-webplayer-log-info { color: #60a5fa !important; }
  
  /* ColorPicker Styles */
  .indo-color-picker {
    position: relative;
    display: inline-block;
  }
  
  .indo-color-picker-trigger {
    border: 2px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    box-shadow: var(--indo-shadow-sm);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-color-picker-trigger:hover { border-color: hsl(var(--indo-primary)); }
  .indo-color-picker-trigger:focus { outline: 2px solid hsl(var(--indo-ring)); outline-offset: 2px; }
  .indo-color-picker-trigger:disabled { opacity: 0.5; cursor: not-allowed; }
  
  .indo-color-picker-xs .indo-color-picker-trigger { width: 1.5rem; height: 1.5rem; }
  .indo-color-picker-sm .indo-color-picker-trigger { width: 2rem; height: 2rem; }
  .indo-color-picker-md .indo-color-picker-trigger { width: 2.5rem; height: 2.5rem; }
  .indo-color-picker-lg .indo-color-picker-trigger { width: 3rem; height: 3rem; }
  .indo-color-picker-xl .indo-color-picker-trigger { width: 3.5rem; height: 3.5rem; }
  .indo-color-picker-2xl .indo-color-picker-trigger { width: 4rem; height: 4rem; }
  
  .indo-color-picker-backdrop {
    position: fixed;
    inset: 0;
    z-index: 9998;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
  }
  
  .indo-color-picker-popup {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    padding: 1rem;
    background: hsl(var(--indo-bg));
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-xl);
    box-shadow: var(--indo-shadow-xl);
    width: 18rem;
    animation: indo-fade-in 0.15s ease-out;
  }
  
  @keyframes indo-fade-in {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }
  
  .indo-color-picker-gradient {
    position: relative;
    width: 100%;
    height: 10rem;
    border-radius: var(--indo-radius-lg);
    cursor: crosshair;
    margin-bottom: 0.75rem;
    border: 1px solid hsl(var(--indo-border));
  }
  
  .indo-color-picker-indicator {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: var(--indo-shadow-md);
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
  
  .indo-color-picker-hue {
    position: relative;
    width: 100%;
    height: 1rem;
    border-radius: var(--indo-radius-full);
    cursor: pointer;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
  }
  
  .indo-color-picker-hue-indicator {
    position: absolute;
    top: 50%;
    width: 1rem;
    height: 1rem;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: var(--indo-shadow-md);
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
  
  .indo-color-picker-preview {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }
  
  .indo-color-picker-swatch {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: var(--indo-radius-lg);
    border: 1px solid hsl(var(--indo-border));
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .indo-color-picker-value { flex: 1; }
  .indo-color-picker-label { font-size: 0.75rem; color: hsl(var(--indo-muted-fg)); margin-bottom: 0.125rem; }
  .indo-color-picker-hex { font-family: var(--indo-font-mono); font-size: 0.875rem; color: hsl(var(--indo-fg)); }
  
  .indo-color-picker-presets {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  
  .indo-color-picker-preset {
    width: 2rem;
    height: 2rem;
    border: 2px solid transparent;
    border-radius: var(--indo-radius-lg);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-color-picker-preset:hover { transform: scale(1.1); }
  .indo-color-picker-preset-active { border-color: hsl(var(--indo-primary)); box-shadow: 0 0 0 2px hsl(var(--indo-primary) / 0.3); }
  
  .indo-color-picker-input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    font-family: var(--indo-font-mono);
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    background: hsl(var(--indo-bg));
    color: hsl(var(--indo-fg));
  }
  
  /* DatePicker Styles */
  .indo-date-picker {
    position: relative;
    display: inline-block;
  }
  
  .indo-date-picker-trigger {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-md);
    background: hsl(var(--indo-bg));
    color: hsl(var(--indo-fg));
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-date-picker-trigger:hover { background: hsl(var(--indo-bg-muted)); }
  .indo-date-picker-trigger:focus { outline: 2px solid hsl(var(--indo-ring)); outline-offset: 2px; }
  .indo-date-picker-trigger:disabled { opacity: 0.5; cursor: not-allowed; }
  
  .indo-date-picker-xs .indo-date-picker-trigger { height: 1.75rem; font-size: 0.75rem; padding: 0 0.5rem; }
  .indo-date-picker-sm .indo-date-picker-trigger { height: 2rem; font-size: 0.875rem; padding: 0 0.625rem; }
  .indo-date-picker-md .indo-date-picker-trigger { height: 2.5rem; font-size: 0.875rem; padding: 0 0.75rem; }
  .indo-date-picker-lg .indo-date-picker-trigger { height: 2.75rem; font-size: 1rem; padding: 0 0.875rem; }
  .indo-date-picker-xl .indo-date-picker-trigger { height: 3rem; font-size: 1.125rem; padding: 0 1rem; }
  .indo-date-picker-2xl .indo-date-picker-trigger { height: 3.5rem; font-size: 1.25rem; padding: 0 1.25rem; }
  
  .indo-date-picker-icon { width: 1rem; height: 1rem; color: hsl(var(--indo-muted-fg)); }
  .indo-date-picker-placeholder { color: hsl(var(--indo-muted-fg)); }
  
  .indo-date-picker-backdrop {
    position: fixed;
    inset: 0;
    z-index: 9998;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
  }
  
  .indo-date-picker-popup {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    padding: 1rem;
    background: hsl(var(--indo-bg));
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-xl);
    box-shadow: var(--indo-shadow-xl);
    width: 20rem;
    animation: indo-fade-in 0.15s ease-out;
  }
  
  .indo-date-picker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .indo-date-picker-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-lg);
    cursor: pointer;
    transition: background var(--indo-transition-fast);
    color: hsl(var(--indo-fg));
  }
  
  .indo-date-picker-nav:hover { background: hsl(var(--indo-bg-muted)); }
  .indo-date-picker-nav-icon { width: 1rem; height: 1rem; }
  
  .indo-date-picker-header-text {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.75rem;
    font-weight: 600;
    color: hsl(var(--indo-fg));
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-lg);
    cursor: pointer;
    transition: background var(--indo-transition-fast);
  }
  
  .indo-date-picker-header-text:hover { background: hsl(var(--indo-bg-muted)); }
  .indo-date-picker-header-chevron { width: 0.75rem; height: 0.75rem; }
  
  .indo-date-picker-weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }
  
  .indo-date-picker-weekday {
    font-size: 0.75rem;
    font-weight: 500;
    color: hsl(var(--indo-muted-fg));
    text-align: center;
    padding: 0.5rem;
  }
  
  .indo-date-picker-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.25rem;
  }
  
  .indo-date-picker-day {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.25rem;
    width: 2.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-lg);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
    color: hsl(var(--indo-fg));
  }
  
  .indo-date-picker-day:hover { background: hsl(var(--indo-bg-muted)); }
  
  .indo-date-picker-day-selected {
    background: hsl(var(--indo-primary)) !important;
    color: hsl(var(--indo-primary-fg)) !important;
    box-shadow: var(--indo-shadow-md);
  }
  
  .indo-date-picker-day-today {
    border: 2px solid hsl(var(--indo-primary));
    color: hsl(var(--indo-primary));
  }
  
  .indo-date-picker-day-disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  .indo-date-picker-months,
  .indo-date-picker-years {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  
  .indo-date-picker-month,
  .indo-date-picker-year {
    padding: 0.75rem 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-lg);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
    color: hsl(var(--indo-fg));
  }
  
  .indo-date-picker-month:hover,
  .indo-date-picker-year:hover { background: hsl(var(--indo-bg-muted)); }
  
  .indo-date-picker-month-selected,
  .indo-date-picker-year-selected {
    background: hsl(var(--indo-primary)) !important;
    color: hsl(var(--indo-primary-fg)) !important;
  }
  
  .indo-date-picker-month-today,
  .indo-date-picker-year-today {
    border: 2px solid hsl(var(--indo-primary));
    color: hsl(var(--indo-primary));
  }
  
  .indo-date-picker-today {
    width: 100%;
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: hsl(var(--indo-primary));
    border: 1px solid hsl(var(--indo-primary) / 0.2);
    background: transparent;
    border-radius: var(--indo-radius-lg);
    cursor: pointer;
    transition: background var(--indo-transition-fast);
  }
  
  .indo-date-picker-today:hover { background: hsl(var(--indo-primary) / 0.1); }
  
  /* SyntaxHighlighter Styles */
  .indo-syntax-highlighter {
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-lg);
    overflow: hidden;
  }
  
  .indo-syntax-highlighter-dark { background: #1e1e1e; }
  .indo-syntax-highlighter-light { background: #ffffff; }
  
  .indo-syntax-highlighter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid hsl(var(--indo-border));
  }
  
  .indo-syntax-highlighter-dark .indo-syntax-highlighter-header { background: #252526; color: #cccccc; }
  .indo-syntax-highlighter-light .indo-syntax-highlighter-header { background: #f3f3f3; color: #616161; }
  
  .indo-syntax-highlighter-filename { font-size: 0.75rem; font-weight: 500; }
  
  .indo-syntax-highlighter-copy {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-sm);
    cursor: pointer;
    transition: background var(--indo-transition-fast);
  }
  
  .indo-syntax-highlighter-dark .indo-syntax-highlighter-copy { color: #cccccc; }
  .indo-syntax-highlighter-dark .indo-syntax-highlighter-copy:hover { background: #3c3c3c; }
  .indo-syntax-highlighter-light .indo-syntax-highlighter-copy { color: #616161; }
  .indo-syntax-highlighter-light .indo-syntax-highlighter-copy:hover { background: #e4e4e4; }
  
  .indo-syntax-highlighter-icon { width: 0.875rem; height: 0.875rem; }
  
  .indo-syntax-highlighter-pre {
    overflow: auto;
    padding: 1rem;
    font-family: var(--indo-font-mono);
    margin: 0;
  }
  
  .indo-syntax-highlighter-xs .indo-syntax-highlighter-pre { font-size: 0.625rem; line-height: 1rem; }
  .indo-syntax-highlighter-sm .indo-syntax-highlighter-pre { font-size: 0.75rem; line-height: 1.25rem; }
  .indo-syntax-highlighter-md .indo-syntax-highlighter-pre { font-size: 0.875rem; line-height: 1.5rem; }
  .indo-syntax-highlighter-lg .indo-syntax-highlighter-pre { font-size: 1rem; line-height: 1.75rem; }
  .indo-syntax-highlighter-xl .indo-syntax-highlighter-pre { font-size: 1.125rem; line-height: 2rem; }
  .indo-syntax-highlighter-2xl .indo-syntax-highlighter-pre { font-size: 1.25rem; line-height: 2.25rem; }
  
  .indo-syntax-highlighter-line { display: table-row; }
  
  .indo-syntax-highlighter-line-number {
    display: table-cell;
    padding-right: 1rem;
    text-align: right;
    user-select: none;
  }
  
  .indo-syntax-highlighter-dark .indo-syntax-highlighter-line-number { color: #858585; }
  .indo-syntax-highlighter-light .indo-syntax-highlighter-line-number { color: #999999; }
  
  .indo-syntax-highlighter-line-content { display: table-cell; }
  
  /* Stat Styles */
  .indo-stat { display: flex; flex-direction: column; }
  .indo-stat-label { font-size: 0.875rem; font-weight: 500; color: hsl(var(--indo-muted-fg)); }
  .indo-stat-number { font-size: 1.5rem; font-weight: 600; color: hsl(var(--indo-fg)); }
  .indo-stat-help-text { font-size: 0.875rem; color: hsl(var(--indo-muted-fg)); }
  .indo-stat-arrow { width: 1rem; height: 1rem; display: inline-block; }
  .indo-stat-arrow-increase { color: #22c55e; }
  .indo-stat-arrow-decrease { color: #ef4444; }
  .indo-stat-group { display: flex; flex-wrap: wrap; gap: 2rem; }
  
  /* QRCode Styles */
  .indo-qrcode { display: inline-flex; color: hsl(var(--indo-fg)); }
  
  /* DownloadTrigger Styles */
  .indo-download-trigger {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: var(--indo-radius-md);
    background: hsl(var(--indo-primary));
    color: hsl(var(--indo-primary-fg));
    cursor: pointer;
    transition: opacity var(--indo-transition-fast);
  }
  
  .indo-download-trigger:hover { opacity: 0.9; }
  .indo-download-trigger:disabled { opacity: 0.5; cursor: not-allowed; }
  .indo-download-trigger-icon { width: 1rem; height: 1rem; }
  
  .indo-download-trigger-wrapper { cursor: pointer; }
  .indo-download-trigger-disabled { opacity: 0.5; cursor: not-allowed; }
`;

