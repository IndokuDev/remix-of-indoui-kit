import React, { useState } from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Button, Input,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useControllableState,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseControllableStateDoc = () => {
  const [uncontrolled, setUncontrolled] = useControllableState({ defaultValue: 'default' });
  
  const [externalValue, setExternalValue] = useState('controlled');
  const [controlled, setControlled] = useControllableState({
    value: externalValue,
    onChange: setExternalValue,
  });

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useControllableState</Heading>
          <Text size="lg" color="muted.fg">
            Hook to manage both controlled and uncontrolled component states.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Uncontrolled Mode</Heading>
          <VStack spacing={4} align="flex-start">
            <Input 
              value={uncontrolled} 
              onChange={(e) => setUncontrolled(e.target.value)}
              placeholder="Type here..."
            />
            <Text size="sm" color="muted.fg">Value: {uncontrolled}</Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Controlled Mode</Heading>
          <VStack spacing={4} align="flex-start">
            <Input 
              value={controlled as string} 
              onChange={(e) => setControlled(e.target.value)}
              placeholder="Type here..."
            />
            <Text size="sm" color="muted.fg">External state: {externalValue}</Text>
            <Button size="sm" onClick={() => setExternalValue('reset')}>Reset External</Button>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Usage</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useControllableState } from '@indoui/react';

// Building a component that supports both modes
function Counter({ value, defaultValue, onChange }) {
  const [count, setCount] = useControllableState({
    value,
    defaultValue: defaultValue ?? 0,
    onChange,
  });

  return (
    <HStack>
      <Button onClick={() => setCount(c => c - 1)}>-</Button>
      <Text>{count}</Text>
      <Button onClick={() => setCount(c => c + 1)}>+</Button>
    </HStack>
  );
}

// Usage as uncontrolled (internal state)
<Counter defaultValue={5} />

// Usage as controlled (external state)
const [count, setCount] = useState(10);
<Counter value={count} onChange={setCount} />`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Options</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Option</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>value</code></TableCell><TableCell>T</TableCell><TableCell>Controlled value (makes it controlled)</TableCell></TableRow>
                <TableRow><TableCell><code>defaultValue</code></TableCell><TableCell>T</TableCell><TableCell>Initial value for uncontrolled mode</TableCell></TableRow>
                <TableRow><TableCell><code>onChange</code></TableCell><TableCell>(value) =&gt; void</TableCell><TableCell>Callback when value changes</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseControllableStateDoc;
