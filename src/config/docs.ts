// Documentation configuration - Complete IndoUI component library

export interface DocItem {
  title: string;
  href: string;
  description?: string;
  isNew?: boolean;
}

export interface DocCategory {
  title: string;
  items: DocItem[];
}

export const docsConfig: DocCategory[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs", description: "Introduction to IndoUI" },
      { title: "Installation", href: "/docs/installation", description: "How to install IndoUI" },
      { title: "Quick Start", href: "/docs/quick-start", description: "Get up and running quickly" },
      { title: "Theming", href: "/docs/theming", description: "Customize the theme" },
      { title: "Style Props", href: "/docs/style-props", description: "Global style props system", isNew: true },
      { title: "Color System", href: "/docs/colors", description: "Named color palettes (gray.300, blue.500)", isNew: true },
    ],
  },
  {
    title: "Layout",
    items: [
      { title: "Box", href: "/docs/components/box", description: "Basic layout component" },
      { title: "Flex", href: "/docs/components/flex", description: "Flexbox layout" },
      { title: "Stack", href: "/docs/components/stack", description: "Stack layout (VStack, HStack)" },
      { title: "Grid", href: "/docs/components/grid", description: "CSS Grid layout (Grid, GridItem, SimpleGrid)" },
      { title: "Container", href: "/docs/components/container", description: "Responsive container" },
      { title: "Center", href: "/docs/components/center", description: "Center content (Center, Square, Circle)" },
      { title: "Divider", href: "/docs/components/divider", description: "Horizontal/vertical divider" },
      { title: "Spacer", href: "/docs/components/spacer", description: "Flexible spacer" },
      { title: "Wrap", href: "/docs/components/wrap", description: "Wrap layout with gap" },
      { title: "AspectRatio", href: "/docs/components/aspect-ratio", description: "Maintain aspect ratio" },
      { title: "Splitter", href: "/docs/components/splitter", description: "Resizable split panes" },
    ],
  },
  {
    title: "Typography",
    items: [
      { title: "Heading", href: "/docs/components/heading", description: "Heading component (h1-h6)" },
      { title: "Text", href: "/docs/components/text", description: "Text component" },
      { title: "Link", href: "/docs/components/link", description: "Link component" },
      { title: "Code", href: "/docs/components/code", description: "Code & Kbd components" },
      { title: "Prose", href: "/docs/components/prose", description: "Rich text content" },
      { title: "Highlight", href: "/docs/components/highlight", description: "Highlight text" },
      { title: "Blockquote", href: "/docs/components/blockquote", description: "Block quotes" },
      { title: "List", href: "/docs/components/list", description: "Ordered/Unordered lists" },
      { title: "InlineCode", href: "/docs/components/inline-code", description: "Inline code snippets" },
    ],
  },
  {
    title: "Forms",
    items: [
      { title: "Button", href: "/docs/components/button", description: "Button & IconButton" },
      { title: "ButtonGroup", href: "/docs/components/button-group", description: "Group of buttons" },
      { title: "Input", href: "/docs/components/input", description: "Text input" },
      { title: "PasswordInput", href: "/docs/components/password-input", description: "Password field" },
      { title: "NumberInput", href: "/docs/components/number-input", description: "Number input with controls" },
      { title: "PinInput", href: "/docs/components/pin-input", description: "PIN/OTP input" },
      { title: "Textarea", href: "/docs/components/textarea", description: "Multi-line text input" },
      { title: "Select", href: "/docs/components/select", description: "Select dropdown" },
      { title: "Checkbox", href: "/docs/components/checkbox", description: "Checkbox & CheckboxGroup" },
      { title: "Radio", href: "/docs/components/radio", description: "Radio & RadioGroup" },
      { title: "Switch", href: "/docs/components/switch", description: "Toggle switch" },
      { title: "Slider", href: "/docs/components/slider", description: "Single value slider" },
      { title: "RangeSlider", href: "/docs/components/range-slider", description: "Range slider" },
      { title: "FileUpload", href: "/docs/components/file-upload", description: "File upload trigger" },
      { title: "Dropzone", href: "/docs/components/dropzone", description: "Drag & drop file upload" },
      { title: "ColorPicker", href: "/docs/components/color-picker", description: "Color selection", isNew: true },
      { title: "DatePicker", href: "/docs/components/date-picker", description: "Date selection", isNew: true },
      { title: "TimePicker", href: "/docs/components/time-picker", description: "Time selection", isNew: true },
      { title: "SegmentedControl", href: "/docs/components/segmented-control", description: "Segmented buttons" },
      { title: "Form", href: "/docs/components/form", description: "Form system (Form, FormField, FormLabel)" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { title: "Card", href: "/docs/components/card", description: "Card container" },
      { title: "Badge", href: "/docs/components/badge", description: "Badge component" },
      { title: "Tag", href: "/docs/components/tag", description: "Tag with close button" },
      { title: "Avatar", href: "/docs/components/avatar", description: "Avatar & AvatarGroup" },
      { title: "Table", href: "/docs/components/table", description: "HTML table components" },
      { title: "DataTable", href: "/docs/components/data-table", description: "Feature-rich data table", isNew: true },
      { title: "Tooltip", href: "/docs/components/tooltip", description: "Tooltip component" },
      { title: "Image", href: "/docs/components/image", description: "Responsive image" },
      { title: "Stat", href: "/docs/components/stat", description: "Statistics display" },
      { title: "DescriptionList", href: "/docs/components/description-list", description: "Key-value pairs" },
      { title: "Clipboard", href: "/docs/components/clipboard", description: "Copy to clipboard" },
      { title: "Timeline", href: "/docs/components/timeline", description: "Timeline display", isNew: true },
      { title: "Pagination", href: "/docs/components/pagination", description: "Page navigation" },
      { title: "TreeView", href: "/docs/components/tree-view", description: "Tree structure view", isNew: true },
      { title: "FileTree", href: "/docs/components/file-tree", description: "File explorer tree", isNew: true },
      { title: "QRCode", href: "/docs/components/qr-code", description: "QR code generator", isNew: true },
      { title: "Carousel", href: "/docs/components/carousel", description: "Image/content carousel", isNew: true },
    ],
  },
  {
    title: "Feedback",
    items: [
      { title: "Alert", href: "/docs/components/alert", description: "Alert messages" },
      { title: "AlertDialog", href: "/docs/components/alert-dialog", description: "Confirmation dialog", isNew: true },
      { title: "Progress", href: "/docs/components/progress", description: "Progress bar & circular" },
      { title: "Spinner", href: "/docs/components/spinner", description: "Loading spinner" },
      { title: "Skeleton", href: "/docs/components/skeleton", description: "Loading skeleton" },
      { title: "Toast", href: "/docs/components/toast", description: "Toast notifications" },
      { title: "EmptyState", href: "/docs/components/empty-state", description: "Empty state placeholder" },
    ],
  },
  {
    title: "Overlay",
    items: [
      { title: "Modal", href: "/docs/components/modal", description: "Modal dialog" },
      { title: "Drawer", href: "/docs/components/drawer", description: "Slide-in panel" },
      { title: "Popover", href: "/docs/components/popover", description: "Popover content" },
      { title: "Menu", href: "/docs/components/menu", description: "Dropdown menu" },
      { title: "ContextMenu", href: "/docs/components/context-menu", description: "Right-click menu" },
      { title: "HoverCard", href: "/docs/components/hover-card", description: "Hover preview card" },
      { title: "CommandPalette", href: "/docs/components/command-palette", description: "Command palette (⌘K)", isNew: true },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Tabs", href: "/docs/components/tabs", description: "Tab panels" },
      { title: "Accordion", href: "/docs/components/accordion", description: "Collapsible sections" },
      { title: "Breadcrumb", href: "/docs/components/breadcrumb", description: "Breadcrumb navigation" },
      { title: "Steps", href: "/docs/components/steps", description: "Step indicator/wizard" },
      { title: "NavigationMenu", href: "/docs/components/navigation-menu", description: "Navigation menu" },
      { title: "Sidebar", href: "/docs/components/sidebar", description: "Sidebar layout" },
      { title: "Navbar", href: "/docs/components/navbar", description: "Top navigation bar" },
    ],
  },
  {
    title: "Code & Editors",
    items: [
      { title: "CodeEditor", href: "/docs/components/code-editor", description: "Monaco-like code editor", isNew: true },
      { title: "CodeBlock", href: "/docs/components/code-block", description: "Syntax highlighted code block", isNew: true },
    ],
  },
  {
    title: "SEO & Head",
    items: [
      { title: "HeadProvider", href: "/docs/components/head-provider", description: "SEO head management", isNew: true },
      { title: "useHead", href: "/docs/hooks/use-head", description: "Head metadata hook", isNew: true },
      { title: "usePageMeta", href: "/docs/hooks/use-page-meta", description: "Page meta hook", isNew: true },
    ],
  },
  {
    title: "Hooks",
    items: [
      { title: "useColorMode", href: "/docs/hooks/use-color-mode", description: "Color mode toggle" },
      { title: "useTheme", href: "/docs/hooks/use-theme", description: "Theme access" },
      { title: "useBreakpoint", href: "/docs/hooks/use-breakpoint", description: "Responsive breakpoints" },
      { title: "useDisclosure", href: "/docs/hooks/use-disclosure", description: "Open/close state" },
      { title: "useClipboard", href: "/docs/hooks/use-clipboard", description: "Copy to clipboard" },
      { title: "useDebounce", href: "/docs/hooks/use-debounce", description: "Debounced value" },
      { title: "useThrottle", href: "/docs/hooks/use-throttle", description: "Throttled value" },
      { title: "useControllableState", href: "/docs/hooks/use-controllable-state", description: "Controlled/uncontrolled state" },
      { title: "useMergeRefs", href: "/docs/hooks/use-merge-refs", description: "Merge multiple refs" },
      { title: "useEventListener", href: "/docs/hooks/use-event-listener", description: "Event listener hook" },
      { title: "usePrevious", href: "/docs/hooks/use-previous", description: "Previous value" },
      { title: "useMounted", href: "/docs/hooks/use-mounted", description: "Mounted state" },
      { title: "useId", href: "/docs/hooks/use-id", description: "Unique ID generator" },
      { title: "useSSR", href: "/docs/hooks/use-ssr", description: "SSR detection" },
    ],
  },
];

export const searchItems = docsConfig.flatMap(category => 
  category.items.map(item => ({
    ...item,
    category: category.title,
  }))
);
