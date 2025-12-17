import React from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Button, Input,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useClipboard,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseClipboardDoc = () => {
  const { value, setValue, onCopy, hasCopied } = useClipboard('Hello, World!');

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useClipboard</Heading>
          <Text size="lg" color="muted.fg">
            Hook to copy text to the clipboard with feedback.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <HStack spacing={4} w="100%">
              <Input 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Enter text to copy"
                flex={1}
              />
              <Button 
                colorPalette={hasCopied ? 'green' : 'blue'} 
                onClick={onCopy}
              >
                {hasCopied ? 'Copied!' : 'Copy'}
              </Button>
            </HStack>
            <Text size="sm" color="muted.fg">
              {hasCopied ? '✓ Text copied to clipboard' : 'Click copy to copy the text'}
            </Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Usage</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useClipboard } from '@indoui/react';

function CopyExample() {
  const { value, setValue, onCopy, hasCopied } = useClipboard('');

  return (
    <HStack>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={onCopy}>
        {hasCopied ? 'Copied!' : 'Copy'}
      </Button>
    </HStack>
  );
}

// With initial value
const { onCopy, hasCopied } = useClipboard('https://example.com');

// With custom timeout
const { onCopy, hasCopied } = useClipboard('text', { timeout: 3000 });`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Options & Return Values</Heading>
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
                <TableRow><TableCell><code>value</code></TableCell><TableCell>string</TableCell><TableCell>Current text value</TableCell></TableRow>
                <TableRow><TableCell><code>setValue</code></TableCell><TableCell>(value) =&gt; void</TableCell><TableCell>Update the value</TableCell></TableRow>
                <TableRow><TableCell><code>onCopy</code></TableCell><TableCell>() =&gt; void</TableCell><TableCell>Copy value to clipboard</TableCell></TableRow>
                <TableRow><TableCell><code>hasCopied</code></TableCell><TableCell>boolean</TableCell><TableCell>True after successful copy</TableCell></TableRow>
                <TableRow><TableCell><code>timeout</code></TableCell><TableCell>number</TableCell><TableCell>Reset hasCopied after ms (option)</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseClipboardDoc;
