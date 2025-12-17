import { IndoUIProvider } from "../lib/indoui/src";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Playground from "./pages/Playground";
import { DocsLayout } from "./layouts/DocsLayout";
import Introduction from "./pages/docs/Introduction";
import Installation from "./pages/docs/Installation";
import QuickStart from "./pages/docs/QuickStart";
import Theming from "./pages/docs/Theming";

// Component docs - Layout
import BoxDoc from "./pages/docs/components/BoxDoc";
import FlexDoc from "./pages/docs/components/FlexDoc";
import StackDoc from "./pages/docs/components/StackDoc";
import GridDoc from "./pages/docs/components/GridDoc";
import ContainerDoc from "./pages/docs/components/ContainerDoc";
import CenterDoc from "./pages/docs/components/CenterDoc";
import DividerDoc from "./pages/docs/components/DividerDoc";
import SpacerDoc from "./pages/docs/components/SpacerDoc";
import WrapDoc from "./pages/docs/components/WrapDoc";
import AspectRatioDoc from "./pages/docs/components/AspectRatioDoc";
import SplitterDoc from "./pages/docs/components/SplitterDoc";

// Typography
import HeadingDoc from "./pages/docs/components/HeadingDoc";
import TextDoc from "./pages/docs/components/TextDoc";
import LinkDoc from "./pages/docs/components/LinkDoc";
import CodeDoc from "./pages/docs/components/CodeDoc";
import ProseDoc from "./pages/docs/components/ProseDoc";
import HighlightDoc from "./pages/docs/components/HighlightDoc";
import BlockquoteDoc from "./pages/docs/components/BlockquoteDoc";
import ListDoc from "./pages/docs/components/ListDoc";
import InlineCodeDoc from "./pages/docs/components/InlineCodeDoc";

// Forms
import ButtonDoc from "./pages/docs/components/ButtonDoc";
import ButtonGroupDoc from "./pages/docs/components/ButtonGroupDoc";
import InputDoc from "./pages/docs/components/InputDoc";
import PasswordInputDoc from "./pages/docs/components/PasswordInputDoc";
import NumberInputDoc from "./pages/docs/components/NumberInputDoc";
import PinInputDoc from "./pages/docs/components/PinInputDoc";
import TextareaDoc from "./pages/docs/components/TextareaDoc";
import CheckboxDoc from "./pages/docs/components/CheckboxDoc";
import RadioDoc from "./pages/docs/components/RadioDoc";
import SwitchDoc from "./pages/docs/components/SwitchDoc";
import SliderDoc from "./pages/docs/components/SliderDoc";
import RangeSliderDoc from "./pages/docs/components/RangeSliderDoc";
import SelectDoc from "./pages/docs/components/SelectDoc";
import FileUploadDoc from "./pages/docs/components/FileUploadDoc";
import DropzoneDoc from "./pages/docs/components/DropzoneDoc";
import TimePickerDoc from "./pages/docs/components/TimePickerDoc";
import SegmentedControlDoc from "./pages/docs/components/SegmentedControlDoc";
import ColorPickerDoc from "./pages/docs/components/ColorPickerDoc";
import DatePickerDoc from "./pages/docs/components/DatePickerDoc";

// Data Display
import CardDoc from "./pages/docs/components/CardDoc";
import BadgeDoc from "./pages/docs/components/BadgeDoc";
import TagDoc from "./pages/docs/components/TagDoc";
import AvatarDoc from "./pages/docs/components/AvatarDoc";
import TableDoc from "./pages/docs/components/TableDoc";
import TooltipDoc from "./pages/docs/components/TooltipDoc";
import ImageDoc from "./pages/docs/components/ImageDoc";
import StatDoc from "./pages/docs/components/StatDoc";
import TimelineDoc from "./pages/docs/components/TimelineDoc";
import PaginationDoc from "./pages/docs/components/PaginationDoc";
import CarouselDoc from "./pages/docs/components/CarouselDoc";
import DataTableDoc from "./pages/docs/components/DataTableDoc";
import TreeViewDoc from "./pages/docs/components/TreeViewDoc";

// Feedback
import AlertDoc from "./pages/docs/components/AlertDoc";
import ToastDoc from "./pages/docs/components/ToastDoc";
import ProgressDoc from "./pages/docs/components/ProgressDoc";
import SpinnerDoc from "./pages/docs/components/SpinnerDoc";
import SkeletonDoc from "./pages/docs/components/SkeletonDoc";
import EmptyStateDoc from "./pages/docs/components/EmptyStateDoc";

// Overlay
import ModalDoc from "./pages/docs/components/ModalDoc";
import DrawerDoc from "./pages/docs/components/DrawerDoc";
import PopoverDoc from "./pages/docs/components/PopoverDoc";
import MenuDoc from "./pages/docs/components/MenuDoc";
import HoverCardDoc from "./pages/docs/components/HoverCardDoc";
import ContextMenuDoc from "./pages/docs/components/ContextMenuDoc";
import CommandPaletteDoc from "./pages/docs/components/CommandPaletteDoc";

// Navigation
import TabsDoc from "./pages/docs/components/TabsDoc";
import AccordionDoc from "./pages/docs/components/AccordionDoc";
import BreadcrumbDoc from "./pages/docs/components/BreadcrumbDoc";
import StepsDoc from "./pages/docs/components/StepsDoc";
import NavigationMenuDoc from "./pages/docs/components/NavigationMenuDoc";

// Advanced
import CodeEditorDoc from "./pages/docs/components/CodeEditorDoc";
import GroupDoc from "./pages/docs/components/GroupDoc";
import FloatingPickersDoc from "./pages/docs/components/FloatingPickersDoc";
import WebPlayerDoc from "./pages/docs/components/WebPlayerDoc";
import ZodFormDoc from "./pages/docs/components/ZodFormDoc";
import HeadProviderDoc from "./pages/docs/components/HeadProviderDoc";

// Hook docs
import UseColorModeDoc from "./pages/docs/hooks/UseColorModeDoc";
import UseThemeDoc from "./pages/docs/hooks/UseThemeDoc";
import UseDisclosureDoc from "./pages/docs/hooks/UseDisclosureDoc";
import UseClipboardDoc from "./pages/docs/hooks/UseClipboardDoc";
import UseBreakpointDoc from "./pages/docs/hooks/UseBreakpointDoc";
import UseDebounceDoc from "./pages/docs/hooks/UseDebounceDoc";
import UseThrottleDoc from "./pages/docs/hooks/UseThrottleDoc";
import UseControllableStateDoc from "./pages/docs/hooks/UseControllableStateDoc";
import UseMergeRefsDoc from "./pages/docs/hooks/UseMergeRefsDoc";
import UseEventListenerDoc from "./pages/docs/hooks/UseEventListenerDoc";
import UsePreviousDoc from "./pages/docs/hooks/UsePreviousDoc";
import UseMountedDoc from "./pages/docs/hooks/UseMountedDoc";
import UseIdDoc from "./pages/docs/hooks/UseIdDoc";
import UseSSRDoc from "./pages/docs/hooks/UseSSRDoc";

const App = () => (
  <IndoUIProvider defaultColorMode="light">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<Introduction />} />
          <Route path="installation" element={<Installation />} />
          <Route path="quick-start" element={<QuickStart />} />
          <Route path="theming" element={<Theming />} />
          {/* Layout */}
          <Route path="components/box" element={<BoxDoc />} />
          <Route path="components/flex" element={<FlexDoc />} />
          <Route path="components/stack" element={<StackDoc />} />
          <Route path="components/grid" element={<GridDoc />} />
          <Route path="components/container" element={<ContainerDoc />} />
          <Route path="components/center" element={<CenterDoc />} />
          <Route path="components/divider" element={<DividerDoc />} />
          <Route path="components/spacer" element={<SpacerDoc />} />
          <Route path="components/wrap" element={<WrapDoc />} />
          <Route path="components/aspect-ratio" element={<AspectRatioDoc />} />
          <Route path="components/splitter" element={<SplitterDoc />} />
          {/* Typography */}
          <Route path="components/heading" element={<HeadingDoc />} />
          <Route path="components/text" element={<TextDoc />} />
          <Route path="components/link" element={<LinkDoc />} />
          <Route path="components/code" element={<CodeDoc />} />
          <Route path="components/prose" element={<ProseDoc />} />
          <Route path="components/highlight" element={<HighlightDoc />} />
          <Route path="components/blockquote" element={<BlockquoteDoc />} />
          <Route path="components/list" element={<ListDoc />} />
          <Route path="components/inline-code" element={<InlineCodeDoc />} />
          {/* Forms */}
          <Route path="components/button" element={<ButtonDoc />} />
          <Route path="components/button-group" element={<ButtonGroupDoc />} />
          <Route path="components/input" element={<InputDoc />} />
          <Route path="components/password-input" element={<PasswordInputDoc />} />
          <Route path="components/number-input" element={<NumberInputDoc />} />
          <Route path="components/pin-input" element={<PinInputDoc />} />
          <Route path="components/textarea" element={<TextareaDoc />} />
          <Route path="components/checkbox" element={<CheckboxDoc />} />
          <Route path="components/radio" element={<RadioDoc />} />
          <Route path="components/switch" element={<SwitchDoc />} />
          <Route path="components/slider" element={<SliderDoc />} />
          <Route path="components/range-slider" element={<RangeSliderDoc />} />
          <Route path="components/select" element={<SelectDoc />} />
          <Route path="components/file-upload" element={<FileUploadDoc />} />
          <Route path="components/dropzone" element={<DropzoneDoc />} />
          <Route path="components/time-picker" element={<TimePickerDoc />} />
          <Route path="components/segmented-control" element={<SegmentedControlDoc />} />
          <Route path="components/color-picker" element={<ColorPickerDoc />} />
          <Route path="components/date-picker" element={<DatePickerDoc />} />
          {/* Data Display */}
          <Route path="components/card" element={<CardDoc />} />
          <Route path="components/badge" element={<BadgeDoc />} />
          <Route path="components/tag" element={<TagDoc />} />
          <Route path="components/avatar" element={<AvatarDoc />} />
          <Route path="components/table" element={<TableDoc />} />
          <Route path="components/tooltip" element={<TooltipDoc />} />
          <Route path="components/image" element={<ImageDoc />} />
          <Route path="components/stat" element={<StatDoc />} />
          <Route path="components/timeline" element={<TimelineDoc />} />
          <Route path="components/pagination" element={<PaginationDoc />} />
          <Route path="components/carousel" element={<CarouselDoc />} />
          <Route path="components/data-table" element={<DataTableDoc />} />
          <Route path="components/tree-view" element={<TreeViewDoc />} />
          {/* Feedback */}
          <Route path="components/alert" element={<AlertDoc />} />
          <Route path="components/toast" element={<ToastDoc />} />
          <Route path="components/progress" element={<ProgressDoc />} />
          <Route path="components/spinner" element={<SpinnerDoc />} />
          <Route path="components/skeleton" element={<SkeletonDoc />} />
          <Route path="components/empty-state" element={<EmptyStateDoc />} />
          {/* Overlay */}
          <Route path="components/modal" element={<ModalDoc />} />
          <Route path="components/drawer" element={<DrawerDoc />} />
          <Route path="components/popover" element={<PopoverDoc />} />
          <Route path="components/menu" element={<MenuDoc />} />
          <Route path="components/hover-card" element={<HoverCardDoc />} />
          <Route path="components/context-menu" element={<ContextMenuDoc />} />
          <Route path="components/command-palette" element={<CommandPaletteDoc />} />
          {/* Navigation */}
          <Route path="components/tabs" element={<TabsDoc />} />
          <Route path="components/accordion" element={<AccordionDoc />} />
          <Route path="components/breadcrumb" element={<BreadcrumbDoc />} />
          <Route path="components/steps" element={<StepsDoc />} />
          <Route path="components/navigation-menu" element={<NavigationMenuDoc />} />
          {/* Advanced */}
          <Route path="components/code-editor" element={<CodeEditorDoc />} />
          <Route path="components/group" element={<GroupDoc />} />
          <Route path="components/floating-pickers" element={<FloatingPickersDoc />} />
          <Route path="components/web-player" element={<WebPlayerDoc />} />
          <Route path="components/zod-form" element={<ZodFormDoc />} />
          <Route path="components/head-provider" element={<HeadProviderDoc />} />
          {/* Hooks */}
          <Route path="hooks/use-color-mode" element={<UseColorModeDoc />} />
          <Route path="hooks/use-theme" element={<UseThemeDoc />} />
          <Route path="hooks/use-disclosure" element={<UseDisclosureDoc />} />
          <Route path="hooks/use-clipboard" element={<UseClipboardDoc />} />
          <Route path="hooks/use-breakpoint" element={<UseBreakpointDoc />} />
          <Route path="hooks/use-debounce" element={<UseDebounceDoc />} />
          <Route path="hooks/use-throttle" element={<UseThrottleDoc />} />
          <Route path="hooks/use-controllable-state" element={<UseControllableStateDoc />} />
          <Route path="hooks/use-merge-refs" element={<UseMergeRefsDoc />} />
          <Route path="hooks/use-event-listener" element={<UseEventListenerDoc />} />
          <Route path="hooks/use-previous" element={<UsePreviousDoc />} />
          <Route path="hooks/use-mounted" element={<UseMountedDoc />} />
          <Route path="hooks/use-id" element={<UseIdDoc />} />
          <Route path="hooks/use-ssr" element={<UseSSRDoc />} />
          <Route path="*" element={<Introduction />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </IndoUIProvider>
);

export default App;
