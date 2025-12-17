import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Input,
  Card,
  Badge,
  useColorMode,
} from "../../../lib/indoui/src";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { ComponentPreview } from "../../components/docs/ComponentPreview";

const QuickStart = () => {
  const { toggleColorMode, resolvedColorMode } = useColorMode();
  const [name, setName] = useState("");
  
  const basicExample = `import { Button, HStack } from '@indoui/react'

function MyComponent() {
  return (
    <HStack spacing={4}>
      <Button variant="solid">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </HStack>
  )
}`;

  const stylePropsExample = `import { Box, Text } from '@indoui/react'

// Style props work on every component
<Box
  p={6}
  m={4}
  bg="primary.subtle"
  rounded="lg"
  shadow="md"
>
  <Text color="primary" weight="semibold">
    Hello World
  </Text>
</Box>`;

  const colorModeExample = `import { useColorMode, Button } from '@indoui/react'

function ThemeToggle() {
  const { toggleColorMode, resolvedColorMode } = useColorMode()
  
  return (
    <Button onClick={toggleColorMode}>
      Current: {resolvedColorMode}
    </Button>
  )
}`;

  const formExample = `import { VStack, Input, Button } from '@indoui/react'

function LoginForm() {
  return (
    <VStack spacing={4} align="stretch" w="300px">
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Button variant="solid" w="100%">
        Sign In
      </Button>
    </VStack>
  )
}`;

  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h1" size="3xl" mb={4}>
          Quick Start
        </Heading>
        <Text size="lg" color="muted.fg">
          Learn the basics of IndoUI in 5 minutes.
        </Text>
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Basic Components
        </Heading>
        <Text mb={4} color="muted.fg">
          IndoUI components support variants, sizes, and color palettes:
        </Text>
        <ComponentPreview code={basicExample}>
          <HStack spacing={4}>
            <Button variant="solid">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </HStack>
        </ComponentPreview>
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Style Props
        </Heading>
        <Text mb={4} color="muted.fg">
          Every component accepts Chakra-compatible style props for quick styling:
        </Text>
        <ComponentPreview code={stylePropsExample}>
          <Box
            p={6}
            bg="primary.subtle"
            rounded="lg"
            style={{ boxShadow: "var(--indo-shadow-md)" }}
          >
            <Text color="primary" weight="semibold">
              Hello World
            </Text>
          </Box>
        </ComponentPreview>
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Color Mode
        </Heading>
        <Text mb={4} color="muted.fg">
          Toggle between light and dark modes with the <code>useColorMode</code> hook:
        </Text>
        <ComponentPreview code={colorModeExample}>
          <Button onClick={toggleColorMode}>
            Current: {resolvedColorMode}
          </Button>
        </ComponentPreview>
      </Box>
      
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Building Forms
        </Heading>
        <Text mb={4} color="muted.fg">
          Compose form elements easily with layout components:
        </Text>
        <ComponentPreview code={formExample}>
          <VStack spacing={4} align="stretch" w="300px">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button variant="solid" w="100%">
              Sign In
            </Button>
          </VStack>
        </ComponentPreview>
      </Box>
      
      <Card variant="outline" p={5}>
        <VStack spacing={3} align="flex-start">
          <HStack>
            <Badge colorPalette="green">Next Steps</Badge>
          </HStack>
          <Text size="sm" color="muted.fg">
            Now that you know the basics, explore the component documentation
            to see all available components and their props.
          </Text>
        </VStack>
      </Card>
    </VStack>
  );
};

export default QuickStart;
