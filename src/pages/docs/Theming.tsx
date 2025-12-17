import { Box, VStack, Heading, Text, Card, SimpleGrid, HStack } from "../../../lib/indoui/src";
import { CodeBlock } from "../../components/docs/CodeBlock";

const ColorSwatch = ({ name, value }: { name: string; value: string }) => (
  <HStack spacing={3}>
    <Box
      w={10}
      h={10}
      rounded="md"
      style={{
        backgroundColor: value,
        border: "1px solid hsl(var(--indo-border))",
      }}
    />
    <VStack spacing={0} align="flex-start">
      <Text size="sm" weight="medium">{name}</Text>
      <Text size="xs" color="muted.fg" style={{ fontFamily: "var(--indo-font-mono)" }}>{value}</Text>
    </VStack>
  </HStack>
);

const Theming = () => {
  const tokensExample = `// Design tokens are defined in the theme
const tokens = {
  colors: {
    primary: { ... },
    secondary: { ... },
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    4: '1rem',
    // ...
  },
  radii: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
  },
  // ... more tokens
}`;

  const cssVarsExample = `/* CSS variables are automatically generated */
:root {
  --indo-primary: 173 73% 40%;
  --indo-primary-subtle: 173 73% 95%;
  --indo-bg: 0 0% 100%;
  --indo-fg: 222 47% 11%;
  --indo-border: 217 19% 90%;
  /* ... more variables */
}

[data-theme="dark"] {
  --indo-bg: 222 47% 6%;
  --indo-fg: 0 0% 100%;
  /* ... dark mode overrides */
}`;

  const customThemeExample = `// Override CSS variables in your own CSS
:root {
  /* Change primary color */
  --indo-primary: 250 91% 65%;
  --indo-primary-subtle: 250 91% 95%;
  
  /* Change border radius */
  --indo-radius-md: 1rem;
}`;

  const colorPaletteExample = `// Components support colorPalette prop
<Button colorPalette="primary">Primary</Button>
<Button colorPalette="success">Success</Button>
<Button colorPalette="warning">Warning</Button>
<Button colorPalette="destructive">Destructive</Button>

<Badge colorPalette="success">Active</Badge>
<Alert status="warning">Warning message</Alert>`;

  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h1" size="3xl" mb={4}>
          Theming
        </Heading>
        <Text size="lg" color="muted.fg">
          Customize the look and feel of IndoUI components.
        </Text>
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Design Tokens
        </Heading>
        <Text mb={4} color="muted.fg">
          IndoUI uses a token-based design system. Tokens define colors, spacing, typography, and more:
        </Text>
        <CodeBlock code={tokensExample} />
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          CSS Variables
        </Heading>
        <Text mb={4} color="muted.fg">
          Tokens are converted to CSS variables and injected by the Provider:
        </Text>
        <CodeBlock code={cssVarsExample} language="css" />
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Color Palette
        </Heading>
        <Text mb={4} color="muted.fg">
          The default theme includes these semantic colors:
        </Text>
        <SimpleGrid columns={2} spacing={4}>
          <Card variant="outline" p={4}>
            <VStack spacing={3} align="stretch">
              <ColorSwatch name="Primary" value="hsl(173, 73%, 40%)" />
              <ColorSwatch name="Primary Subtle" value="hsl(173, 73%, 95%)" />
            </VStack>
          </Card>
          <Card variant="outline" p={4}>
            <VStack spacing={3} align="stretch">
              <ColorSwatch name="Success" value="hsl(152, 76%, 36%)" />
              <ColorSwatch name="Success Subtle" value="hsl(152, 76%, 95%)" />
            </VStack>
          </Card>
          <Card variant="outline" p={4}>
            <VStack spacing={3} align="stretch">
              <ColorSwatch name="Warning" value="hsl(38, 92%, 50%)" />
              <ColorSwatch name="Warning Subtle" value="hsl(38, 92%, 95%)" />
            </VStack>
          </Card>
          <Card variant="outline" p={4}>
            <VStack spacing={3} align="stretch">
              <ColorSwatch name="Destructive" value="hsl(346, 84%, 61%)" />
              <ColorSwatch name="Destructive Subtle" value="hsl(346, 84%, 95%)" />
            </VStack>
          </Card>
        </SimpleGrid>
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Using Color Palettes
        </Heading>
        <Text mb={4} color="muted.fg">
          Many components accept a <code>colorPalette</code> prop:
        </Text>
        <CodeBlock code={colorPaletteExample} />
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Custom Theme
        </Heading>
        <Text mb={4} color="muted.fg">
          Override CSS variables to customize the theme:
        </Text>
        <CodeBlock code={customThemeExample} language="css" />
      </Box>
      
      <Card variant="outline" p={5}>
        <VStack spacing={2} align="flex-start">
          <Text weight="semibold">💡 Dark Mode</Text>
          <Text size="sm" color="muted.fg">
            Dark mode is handled automatically. CSS variables are swapped when the
            <code>[data-theme="dark"]</code> attribute is set on the document.
          </Text>
        </VStack>
      </Card>
    </VStack>
  );
};

export default Theming;
