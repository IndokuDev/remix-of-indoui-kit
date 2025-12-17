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
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
    font-size: var(--indo-text-sm);
    overflow: hidden;
  }
  
  .indo-code-editor-dark {
    background: hsl(var(--indo-gray-900));
    color: hsl(var(--indo-gray-100));
  }
  
  .indo-code-editor-light {
    background: hsl(var(--indo-white));
    color: hsl(var(--indo-gray-800));
  }
  
  .indo-code-editor-focused {
    border-color: hsl(var(--indo-blue-500));
    box-shadow: 0 0 0 3px hsl(var(--indo-blue-500) / 0.15);
  }
  
  .indo-code-gutter {
    flex-shrink: 0;
    padding: 0.75rem 0;
    background: hsl(var(--indo-gray-800));
    border-right: 1px solid hsl(var(--indo-border));
    text-align: right;
    user-select: none;
  }
  
  .indo-code-line-number {
    padding: 0 0.75rem;
    color: hsl(var(--indo-gray-500));
    line-height: 1.5;
  }
  
  .indo-code-line-number-active {
    color: hsl(var(--indo-gray-300));
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
    line-height: 1.5;
    overflow: auto;
  }
  
  .indo-code-highlight {
    pointer-events: none;
  }
  
  .indo-code-textarea {
    background: transparent;
    color: transparent;
    caret-color: hsl(var(--indo-gray-100));
    resize: none;
    outline: none;
  }
  
  .indo-code-line-active {
    background: hsl(var(--indo-gray-800) / 0.5);
  }
  
  .indo-code-statusbar {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0.75rem;
    background: hsl(var(--indo-gray-800));
    border-top: 1px solid hsl(var(--indo-border));
    font-size: var(--indo-text-xs);
    color: hsl(var(--indo-gray-400));
  }
  
  /* Syntax highlighting */
  .indo-code-keyword { color: hsl(var(--indo-purple-400)); }
  .indo-code-string { color: hsl(var(--indo-green-400)); }
  .indo-code-comment { color: hsl(var(--indo-gray-500)); font-style: italic; }
  .indo-code-number { color: hsl(var(--indo-orange-400)); }
  .indo-code-function { color: hsl(var(--indo-blue-400)); }
  .indo-code-class { color: hsl(var(--indo-yellow-400)); }
  .indo-code-tag { color: hsl(var(--indo-red-400)); }
  .indo-code-attr { color: hsl(var(--indo-cyan-400)); }
  .indo-code-literal { color: hsl(var(--indo-pink-400)); }
  
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
  }
  
  .indo-pin-input {
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    border: 1px solid hsl(var(--indo-border));
    border-radius: var(--indo-radius-md);
    font-size: var(--indo-text-lg);
  }
  
  .indo-segmented {
    display: inline-flex;
    background: hsl(var(--indo-muted));
    border-radius: var(--indo-radius-md);
    padding: 0.25rem;
  }
  
  .indo-segmented-item {
    padding: 0.5rem 1rem;
    border: none;
    background: transparent;
    border-radius: var(--indo-radius-sm);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
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
  }
  
  .indo-carousel-viewport {
    overflow: hidden;
    border-radius: var(--indo-radius-md);
  }
  
  .indo-carousel-track {
    display: flex;
    transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
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
    min-height: 250px;
  }
  
  .indo-carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background: hsl(var(--indo-bg) / 0.9);
    border-radius: var(--indo-radius-full);
    box-shadow: var(--indo-shadow-md);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
    z-index: 10;
    font-size: 1.25rem;
    color: hsl(var(--indo-fg));
  }
  
  .indo-carousel-nav:hover {
    background: hsl(var(--indo-bg));
    box-shadow: var(--indo-shadow-lg);
  }
  
  .indo-carousel-nav:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .indo-carousel-nav-prev {
    left: 0.5rem;
  }
  
  .indo-carousel-nav-next {
    right: 0.5rem;
  }
  
  .indo-carousel-nav-vertical.indo-carousel-nav-prev {
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .indo-carousel-nav-vertical.indo-carousel-nav-next {
    top: auto;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .indo-carousel-dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
  }
  
  .indo-carousel-dots-vertical {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    padding: 0.5rem;
  }
  
  .indo-carousel-dot {
    width: 0.5rem;
    height: 0.5rem;
    border: none;
    background: hsl(var(--indo-border-emphasis));
    border-radius: var(--indo-radius-full);
    cursor: pointer;
    transition: all var(--indo-transition-fast);
  }
  
  .indo-carousel-dot:hover {
    background: hsl(var(--indo-muted-fg));
  }
  
  .indo-carousel-dot-active {
    background: hsl(var(--indo-primary));
    width: 1.5rem;
  }
  
  .indo-carousel-dots-vertical .indo-carousel-dot-active {
    width: 0.5rem;
    height: 1.5rem;
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
`;
