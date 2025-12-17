import React, { useState } from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Button,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  usePrevious,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UsePreviousDoc = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>usePrevious</Heading>
          <Text size="lg" color="muted.fg">
            Hook to access the previous value of a state or prop.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <HStack spacing={4}>
              <Button onClick={() => setCount(c => c - 1)}>-</Button>
              <Button onClick={() => setCount(c => c + 1)}>+</Button>
              <Button variant="outline" onClick={() => setCount(Math.floor(Math.random() * 100))}>Random</Button>
            </HStack>
            <HStack spacing={8}>
              <Box>
                <Text size="sm" color="muted.fg">Current:</Text>
                <Badge colorPalette="blue" size="lg">{count}</Badge>
              </Box>
              <Box>
                <Text size="sm" color="muted.fg">Previous:</Text>
                <Badge colorPalette="gray" size="lg">{previousCount ?? 'undefined'}</Badge>
              </Box>
            </HStack>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Usage</Heading>
          <CodeBlock
            language="tsx"
            code={`import { usePrevious } from '@indoui/react';

function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {previousCount}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}

// Detecting value changes
function ValueChangeDetector({ value }) {
  const previousValue = usePrevious(value);

  useEffect(() => {
    if (previousValue !== undefined && previousValue !== value) {
      console.log(\`Value changed from \${previousValue} to \${value}\`);
    }
  }, [value, previousValue]);

  return <div>{value}</div>;
}`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Parameter</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>value</code></TableCell><TableCell>T</TableCell><TableCell>The value to track</TableCell></TableRow>
                <TableRow><TableCell><code>returns</code></TableCell><TableCell>T | undefined</TableCell><TableCell>Previous value (undefined on first render)</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default UsePreviousDoc;
