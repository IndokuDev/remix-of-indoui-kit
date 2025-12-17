import React from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Button,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useColorMode, useColorModeValue,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseColorModeDoc = () => {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.800');

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useColorMode</Heading>
          <Text size="lg" color="muted.fg">
            Hook to toggle between light and dark color modes.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <Text>Current mode: <Badge>{colorMode}</Badge></Text>
            <HStack spacing={4}>
              <Button onClick={toggleColorMode}>Toggle Mode</Button>
              <Button variant="outline" onClick={() => setColorMode('light')}>Light</Button>
              <Button variant="outline" onClick={() => setColorMode('dark')}>Dark</Button>
              <Button variant="outline" onClick={() => setColorMode('system')}>System</Button>
            </HStack>
            <Box p={4} bg={bg} rounded="md">
              This box uses useColorModeValue for conditional styling
            </Box>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Usage</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useColorMode, useColorModeValue } from '@indoui/react';

function ThemeToggle() {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  
  // Conditional values based on color mode
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg={bg} color={color}>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  );
}`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Return Values</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Property</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>colorMode</code></TableCell><TableCell>'light' | 'dark' | 'system'</TableCell><TableCell>Current color mode</TableCell></TableRow>
                <TableRow><TableCell><code>resolvedColorMode</code></TableCell><TableCell>'light' | 'dark'</TableCell><TableCell>Actual resolved mode</TableCell></TableRow>
                <TableRow><TableCell><code>setColorMode</code></TableCell><TableCell>(mode) =&gt; void</TableCell><TableCell>Set color mode</TableCell></TableRow>
                <TableRow><TableCell><code>toggleColorMode</code></TableCell><TableCell>() =&gt; void</TableCell><TableCell>Toggle between modes</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseColorModeDoc;
