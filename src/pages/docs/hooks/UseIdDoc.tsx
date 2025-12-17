import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useId, useIds,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseIdDoc = () => {
  const id = useId();
  const customId = useId('my-custom-id');
  const [labelId, inputId, helperId] = useIds(3);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useId</Heading>
          <Text size="lg" color="muted.fg">
            Hook to generate unique, stable IDs for accessibility.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <Text>Generated ID: <Badge>{id}</Badge></Text>
            <Text>Custom ID: <Badge>{customId}</Badge></Text>
            <Text>Multiple IDs: <Badge>{labelId}</Badge>, <Badge>{inputId}</Badge>, <Badge>{helperId}</Badge></Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>useId</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useId } from '@indoui/react';

function AccessibleInput({ label }) {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} />
    </>
  );
}

// With custom/provided ID
function CustomIdExample({ id: providedId }) {
  const id = useId(providedId); // Uses providedId if given, otherwise generates one
  
  return <input id={id} />;
}`}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>useIds</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useIds } from '@indoui/react';

function FormField({ label, helperText }) {
  const [labelId, inputId, helperId] = useIds(3);

  return (
    <div>
      <label id={labelId} htmlFor={inputId}>{label}</label>
      <input 
        id={inputId} 
        aria-labelledby={labelId}
        aria-describedby={helperId}
      />
      <span id={helperId}>{helperText}</span>
    </div>
  );
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
                <TableRow><TableCell><code>useId</code></TableCell><TableCell>(providedId?: string)</TableCell><TableCell>string</TableCell></TableRow>
                <TableRow><TableCell><code>useIds</code></TableCell><TableCell>(count, providedIds?)</TableCell><TableCell>string[]</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseIdDoc;
