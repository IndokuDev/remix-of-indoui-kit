import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Card,
  IconButton,
  HStack,
  Badge,
} from "../../../../lib/indoui/src";
import { ComponentPreview } from "../../../components/docs/ComponentPreview";
import { Plus, Minus, Heart, Star, Settings, Trash, Edit, Search, Menu, X } from "lucide-react";

const IconButtonDoc = () => {
  return (
    <Container maxWidth="4xl" py={10}>
      <VStack spacing={10} align="stretch">
        <VStack align="flex-start" spacing={4}>
          <Badge variant="subtle" colorPalette="blue">Component</Badge>
          <Heading as="h1" size="3xl">IconButton</Heading>
          <Text size="lg" color="muted.fg">
            A button component that only shows an icon, perfect for toolbars and compact UI.
          </Text>
        </VStack>

        <Card variant="outline" p={6}>
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg">Basic Usage</Heading>
            <ComponentPreview>
              <HStack spacing={4}>
                <IconButton icon={<Plus size={18} />} aria-label="Add" />
                <IconButton icon={<Minus size={18} />} aria-label="Remove" />
                <IconButton icon={<Heart size={18} />} aria-label="Like" />
                <IconButton icon={<Star size={18} />} aria-label="Favorite" />
              </HStack>
            </ComponentPreview>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg">Sizes</Heading>
            <ComponentPreview>
              <HStack spacing={4} align="center">
                <IconButton icon={<Settings size={12} />} aria-label="Settings" size="xs" />
                <IconButton icon={<Settings size={14} />} aria-label="Settings" size="sm" />
                <IconButton icon={<Settings size={18} />} aria-label="Settings" size="md" />
                <IconButton icon={<Settings size={20} />} aria-label="Settings" size="lg" />
                <IconButton icon={<Settings size={24} />} aria-label="Settings" size="xl" />
              </HStack>
            </ComponentPreview>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg">Variants</Heading>
            <ComponentPreview>
              <HStack spacing={4}>
                <IconButton icon={<Edit size={18} />} aria-label="Edit" variant="solid" />
                <IconButton icon={<Edit size={18} />} aria-label="Edit" variant="outline" />
                <IconButton icon={<Edit size={18} />} aria-label="Edit" variant="ghost" />
              </HStack>
            </ComponentPreview>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg">Color Palettes</Heading>
            <ComponentPreview>
              <HStack spacing={4}>
                <IconButton icon={<Heart size={18} />} aria-label="Like" colorPalette="red" />
                <IconButton icon={<Star size={18} />} aria-label="Favorite" colorPalette="amber" />
                <IconButton icon={<Plus size={18} />} aria-label="Add" colorPalette="green" />
                <IconButton icon={<Search size={18} />} aria-label="Search" colorPalette="blue" />
                <IconButton icon={<Settings size={18} />} aria-label="Settings" colorPalette="gray" />
              </HStack>
            </ComponentPreview>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg">Toolbar Example</Heading>
            <ComponentPreview>
              <Box p={2} rounded="lg" bg="bg.subtle" style={{ display: "inline-flex", gap: "4px" }}>
                <IconButton icon={<Menu size={18} />} aria-label="Menu" variant="ghost" />
                <IconButton icon={<Search size={18} />} aria-label="Search" variant="ghost" />
                <IconButton icon={<Edit size={18} />} aria-label="Edit" variant="ghost" />
                <IconButton icon={<Trash size={18} />} aria-label="Delete" variant="ghost" colorPalette="red" />
                <IconButton icon={<X size={18} />} aria-label="Close" variant="ghost" />
              </Box>
            </ComponentPreview>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <VStack spacing={4} align="stretch">
            <Heading as="h2" size="lg">Props</Heading>
            <Box as="table" style={{ width: "100%", borderCollapse: "collapse" }}>
              <Box as="thead">
                <Box as="tr">
                  <Box as="th" p={3} style={{ textAlign: "left", borderBottom: "1px solid var(--indo-border)" }}>Prop</Box>
                  <Box as="th" p={3} style={{ textAlign: "left", borderBottom: "1px solid var(--indo-border)" }}>Type</Box>
                  <Box as="th" p={3} style={{ textAlign: "left", borderBottom: "1px solid var(--indo-border)" }}>Default</Box>
                </Box>
              </Box>
              <Box as="tbody">
                <Box as="tr">
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>icon</Box>
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>ReactNode</Box>
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>-</Box>
                </Box>
                <Box as="tr">
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>aria-label</Box>
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>string</Box>
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>required</Box>
                </Box>
                <Box as="tr">
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>size</Box>
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>xs | sm | md | lg | xl</Box>
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>md</Box>
                </Box>
                <Box as="tr">
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>variant</Box>
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>solid | outline | ghost</Box>
                  <Box as="td" p={3} style={{ borderBottom: "1px solid var(--indo-border)" }}>solid</Box>
                </Box>
                <Box as="tr">
                  <Box as="td" p={3}>colorPalette</Box>
                  <Box as="td" p={3}>ColorName</Box>
                  <Box as="td" p={3}>blue</Box>
                </Box>
              </Box>
            </Box>
          </VStack>
        </Card>
      </VStack>
    </Container>
  );
};

export default IconButtonDoc;
