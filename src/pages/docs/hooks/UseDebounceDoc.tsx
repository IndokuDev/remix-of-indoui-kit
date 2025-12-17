import React, { useState } from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Input,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useDebounce,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseDebounceDoc = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useDebounce</Heading>
          <Text size="lg" color="muted.fg">
            Hook to debounce a value, delaying updates until a pause in changes.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <Input 
              value={value} 
              onChange={(e) => setValue(e.target.value)} 
              placeholder="Type something..."
              w="100%"
            />
            <HStack spacing={8}>
              <Box>
                <Text size="sm" color="muted.fg">Instant value:</Text>
                <Badge>{value || '(empty)'}</Badge>
              </Box>
              <Box>
                <Text size="sm" color="muted.fg">Debounced (500ms):</Text>
                <Badge colorPalette="blue">{debouncedValue || '(empty)'}</Badge>
              </Box>
            </HStack>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Usage</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useDebounce, useDebouncedCallback } from '@indoui/react';

// Debounce a value
function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      searchAPI(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <Input value={query} onChange={(e) => setQuery(e.target.value)} />;
}

// Debounce a callback
function AutoSave() {
  const save = useDebouncedCallback((data) => {
    api.save(data);
  }, 1000);

  return <Input onChange={(e) => save(e.target.value)} />;
}`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Hook</TableHeaderCell>
                  <TableHeaderCell>Parameters</TableHeaderCell>
                  <TableHeaderCell>Returns</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>useDebounce</code></TableCell><TableCell>(value, delay)</TableCell><TableCell>Debounced value</TableCell></TableRow>
                <TableRow><TableCell><code>useDebouncedCallback</code></TableCell><TableCell>(callback, delay)</TableCell><TableCell>Debounced function</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseDebounceDoc;
