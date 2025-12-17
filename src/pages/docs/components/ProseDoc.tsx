import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, Prose,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const ProseDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Typography</Badge>
          <Heading as="h1" size="3xl" mb={4}>Prose</Heading>
          <Text size="lg" color="muted.fg">
            Container for rich text content with beautiful typography defaults.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Default Prose</Heading>
          <Prose>
            <h2>Getting Started</h2>
            <p>
              This is a paragraph inside the Prose component. It automatically applies
              beautiful typography styles to all nested content including headings,
              paragraphs, lists, and more.
            </p>
            <ul>
              <li>First item in the list</li>
              <li>Second item with more content</li>
              <li>Third item to demonstrate spacing</li>
            </ul>
            <blockquote>
              This is a blockquote that will be styled automatically.
            </blockquote>
          </Prose>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Prose size="md">
  <h1>Article Title</h1>
  <p>Introduction paragraph with some text...</p>
  <h2>Section Heading</h2>
  <p>More content here...</p>
  <ul>
    <li>List item one</li>
    <li>List item two</li>
  </ul>
</Prose>`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Props</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Prop</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Default</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg'</TableCell><TableCell>'md'</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default ProseDoc;
