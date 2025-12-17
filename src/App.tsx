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

// Component docs
import BoxDoc from "./pages/docs/components/BoxDoc";
import ButtonDoc from "./pages/docs/components/ButtonDoc";
import InputDoc from "./pages/docs/components/InputDoc";
import ModalDoc from "./pages/docs/components/ModalDoc";
import TabsDoc from "./pages/docs/components/TabsDoc";
import AlertDoc from "./pages/docs/components/AlertDoc";
import BadgeDoc from "./pages/docs/components/BadgeDoc";
import TagDoc from "./pages/docs/components/TagDoc";
import ToastDoc from "./pages/docs/components/ToastDoc";
import CodeEditorDoc from "./pages/docs/components/CodeEditorDoc";
import ColorPickerDoc from "./pages/docs/components/ColorPickerDoc";
import DataTableDoc from "./pages/docs/components/DataTableDoc";
import CommandPaletteDoc from "./pages/docs/components/CommandPaletteDoc";
import TreeViewDoc from "./pages/docs/components/TreeViewDoc";
import CarouselDoc from "./pages/docs/components/CarouselDoc";
import DatePickerDoc from "./pages/docs/components/DatePickerDoc";
import FlexDoc from "./pages/docs/components/FlexDoc";
import StackDoc from "./pages/docs/components/StackDoc";
import GridDoc from "./pages/docs/components/GridDoc";
import ContainerDoc from "./pages/docs/components/ContainerDoc";
import DividerDoc from "./pages/docs/components/DividerDoc";
import CenterDoc from "./pages/docs/components/CenterDoc";
import SpacerDoc from "./pages/docs/components/SpacerDoc";
import HeadingDoc from "./pages/docs/components/HeadingDoc";
import TextDoc from "./pages/docs/components/TextDoc";
import LinkDoc from "./pages/docs/components/LinkDoc";
import CodeDoc from "./pages/docs/components/CodeDoc";
import TextareaDoc from "./pages/docs/components/TextareaDoc";
import CheckboxDoc from "./pages/docs/components/CheckboxDoc";
import RadioDoc from "./pages/docs/components/RadioDoc";
import SwitchDoc from "./pages/docs/components/SwitchDoc";
import SliderDoc from "./pages/docs/components/SliderDoc";
import SelectDoc from "./pages/docs/components/SelectDoc";
import CardDoc from "./pages/docs/components/CardDoc";
import AvatarDoc from "./pages/docs/components/AvatarDoc";
import TableDoc from "./pages/docs/components/TableDoc";
import ProgressDoc from "./pages/docs/components/ProgressDoc";
import SpinnerDoc from "./pages/docs/components/SpinnerDoc";
import SkeletonDoc from "./pages/docs/components/SkeletonDoc";
import DrawerDoc from "./pages/docs/components/DrawerDoc";
import PopoverDoc from "./pages/docs/components/PopoverDoc";
import MenuDoc from "./pages/docs/components/MenuDoc";
import AccordionDoc from "./pages/docs/components/AccordionDoc";
import BreadcrumbDoc from "./pages/docs/components/BreadcrumbDoc";
import StepsDoc from "./pages/docs/components/StepsDoc";
import TooltipDoc from "./pages/docs/components/TooltipDoc";

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
          {/* Typography */}
          <Route path="components/heading" element={<HeadingDoc />} />
          <Route path="components/text" element={<TextDoc />} />
          <Route path="components/link" element={<LinkDoc />} />
          <Route path="components/code" element={<CodeDoc />} />
          {/* Forms */}
          <Route path="components/button" element={<ButtonDoc />} />
          <Route path="components/input" element={<InputDoc />} />
          <Route path="components/textarea" element={<TextareaDoc />} />
          <Route path="components/checkbox" element={<CheckboxDoc />} />
          <Route path="components/radio" element={<RadioDoc />} />
          <Route path="components/switch" element={<SwitchDoc />} />
          <Route path="components/slider" element={<SliderDoc />} />
          <Route path="components/select" element={<SelectDoc />} />
          {/* Data Display */}
          <Route path="components/card" element={<CardDoc />} />
          <Route path="components/badge" element={<BadgeDoc />} />
          <Route path="components/tag" element={<TagDoc />} />
          <Route path="components/avatar" element={<AvatarDoc />} />
          <Route path="components/table" element={<TableDoc />} />
          <Route path="components/tooltip" element={<TooltipDoc />} />
          <Route path="components/carousel" element={<CarouselDoc />} />
          <Route path="components/data-table" element={<DataTableDoc />} />
          <Route path="components/tree-view" element={<TreeViewDoc />} />
          {/* Feedback */}
          <Route path="components/alert" element={<AlertDoc />} />
          <Route path="components/toast" element={<ToastDoc />} />
          <Route path="components/progress" element={<ProgressDoc />} />
          <Route path="components/spinner" element={<SpinnerDoc />} />
          <Route path="components/skeleton" element={<SkeletonDoc />} />
          {/* Overlay */}
          <Route path="components/modal" element={<ModalDoc />} />
          <Route path="components/drawer" element={<DrawerDoc />} />
          <Route path="components/popover" element={<PopoverDoc />} />
          <Route path="components/menu" element={<MenuDoc />} />
          {/* Navigation */}
          <Route path="components/tabs" element={<TabsDoc />} />
          <Route path="components/accordion" element={<AccordionDoc />} />
          <Route path="components/breadcrumb" element={<BreadcrumbDoc />} />
          <Route path="components/steps" element={<StepsDoc />} />
          {/* Advanced */}
          <Route path="components/code-editor" element={<CodeEditorDoc />} />
          <Route path="components/color-picker" element={<ColorPickerDoc />} />
          <Route path="components/command-palette" element={<CommandPaletteDoc />} />
          <Route path="components/date-picker" element={<DatePickerDoc />} />
          <Route path="components/*" element={<Introduction />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </IndoUIProvider>
);

export default App;
