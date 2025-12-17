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
`;

