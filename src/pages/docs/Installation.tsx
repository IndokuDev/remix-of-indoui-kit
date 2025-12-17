import { Box, VStack, Heading, Text, Card, Tabs, TabList, Tab, TabPanels, TabPanel } from "../../../lib/indoui/src";
import { CodeBlock } from "../../components/docs/CodeBlock";

const Installation = () => {
  const npmCode = `npm install @indoui/react`;
  const yarnCode = `yarn add @indoui/react`;
  const pnpmCode = `pnpm add @indoui/react`;
  const bunCode = `bun add @indoui/react`;
  
  const setupCode = `// main.tsx or App.tsx
import { IndoUIProvider } from '@indoui/react'

function App() {
  return (
    <IndoUIProvider defaultColorMode="system">
      {/* Your app content */}
    </IndoUIProvider>
  )
}

export default App`;

  const providerOptionsCode = `<IndoUIProvider
  defaultColorMode="light"   // 'light' | 'dark' | 'system'
  forcedColorMode="dark"     // Force a specific mode
  disableCSSReset={false}    // Disable the CSS reset
>
  {children}
</IndoUIProvider>`;

  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h1" size="3xl" mb={4}>
          Installation
        </Heading>
        <Text size="lg" color="muted.fg">
          Get started with IndoUI in your React project.
        </Text>
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          1. Install the package
        </Heading>
        <Tabs defaultValue="npm" variant="line">
          <TabList>
            <Tab value="npm">npm</Tab>
            <Tab value="yarn">yarn</Tab>
            <Tab value="pnpm">pnpm</Tab>
            <Tab value="bun">bun</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="npm">
              <CodeBlock code={npmCode} language="bash" />
            </TabPanel>
            <TabPanel value="yarn">
              <CodeBlock code={yarnCode} language="bash" />
            </TabPanel>
            <TabPanel value="pnpm">
              <CodeBlock code={pnpmCode} language="bash" />
            </TabPanel>
            <TabPanel value="bun">
              <CodeBlock code={bunCode} language="bash" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          2. Setup the Provider
        </Heading>
        <Text mb={4} color="muted.fg">
          Wrap your application root with <code>IndoUIProvider</code>. This injects all necessary
          styles, CSS variables, and theme context automatically.
        </Text>
        <CodeBlock code={setupCode} showLineNumbers filename="main.tsx" />
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Provider Options
        </Heading>
        <Text mb={4} color="muted.fg">
          The provider accepts several configuration options:
        </Text>
        <CodeBlock code={providerOptionsCode} />
      </Box>
      
      <Card variant="outline" p={5}>
        <VStack spacing={2} align="flex-start">
          <Text weight="semibold">💡 No CSS imports needed!</Text>
          <Text size="sm" color="muted.fg">
            Unlike other libraries, IndoUI doesn't require you to import any CSS files.
            The Provider handles everything automatically including CSS reset, variables,
            and component styles.
          </Text>
        </VStack>
      </Card>
    </VStack>
  );
};

export default Installation;
