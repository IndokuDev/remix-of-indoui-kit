import {
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Badge,
  Card,
  SimpleGrid,
} from "../../../lib/indoui/src";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { Zap, Palette, Box as BoxIcon, Code2 } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <Card variant="outline" p={5}>
    <VStack spacing={3} align="flex-start">
      <Box
        p={2}
        rounded="md"
        style={{ backgroundColor: "hsl(var(--indo-primary-subtle))" }}
      >
        <Icon size={20} style={{ color: "hsl(var(--indo-primary))" }} />
      </Box>
      <Text weight="semibold">{title}</Text>
      <Text size="sm" color="muted.fg">{description}</Text>
    </VStack>
  </Card>
);

const Introduction = () => {
  const installCode = `npm install @indoui/react`;
  
  const usageCode = `import { IndoUIProvider, Button } from '@indoui/react'

function App() {
  return (
    <IndoUIProvider>
      <Button variant="solid" colorPalette="blue">
        Click me
      </Button>
    </IndoUIProvider>
  )
}`;

  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <HStack spacing={2} mb={4}>
          <Badge variant="subtle" colorPalette="blue">v0.1.0</Badge>
          <Badge variant="outline">React 18+</Badge>
        </HStack>
        <Heading as="h1" size="3xl" mb={4}>
          Introduction
        </Heading>
        <Text size="lg" color="muted.fg" style={{ maxWidth: "600px" }}>
          IndoUI is a modern, composable React component library with Chakra-style props,
          global theming, and zero CSS imports required.
        </Text>
      </Box>
      
      <SimpleGrid columns={2} spacing={4}>
        <FeatureCard
          icon={Zap}
          title="Zero Config"
          description="Just wrap your app with IndoUIProvider. No CSS imports, no build config."
        />
        <FeatureCard
          icon={Palette}
          title="Themeable"
          description="Full dark mode support with CSS variables. Customize everything."
        />
        <FeatureCard
          icon={BoxIcon}
          title="Style Props"
          description="Chakra-compatible style props on every component. Responsive by default."
        />
        <FeatureCard
          icon={Code2}
          title="TypeScript"
          description="Fully typed with TypeScript. Great DX with autocomplete."
        />
      </SimpleGrid>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Quick Install
        </Heading>
        <CodeBlock code={installCode} language="bash" />
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Basic Usage
        </Heading>
        <Text mb={4} color="muted.fg">
          Wrap your application with <code>IndoUIProvider</code> and start using components:
        </Text>
        <CodeBlock code={usageCode} showLineNumbers />
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Key Features
        </Heading>
        <VStack spacing={3} align="stretch">
          <HStack>
            <Text>✓</Text>
            <Text>Global styling via Provider - no manual CSS imports</Text>
          </HStack>
          <HStack>
            <Text>✓</Text>
            <Text>Chakra-compatible style props (p, m, bg, color, etc.)</Text>
          </HStack>
          <HStack>
            <Text>✓</Text>
            <Text>Variant + size + colorPalette system</Text>
          </HStack>
          <HStack>
            <Text>✓</Text>
            <Text>Light/Dark/System color modes</Text>
          </HStack>
          <HStack>
            <Text>✓</Text>
            <Text>Responsive props (base, sm, md, lg, xl)</Text>
          </HStack>
          <HStack>
            <Text>✓</Text>
            <Text>Tree-shakeable exports</Text>
          </HStack>
          <HStack>
            <Text>✓</Text>
            <Text>Framework-agnostic (Vite, CRA, Next.js)</Text>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Introduction;
