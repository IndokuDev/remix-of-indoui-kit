import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, Highlight,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const HighlightDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Typography</Badge>
          <Heading as="h1" size="3xl" mb={4}>Highlight</Heading>
          <Text size="lg" color="muted.fg">
            Highlight specific words or phrases within text.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Single Word Highlight</Heading>
          <Text size="lg">
            <Highlight 
              query="IndoUI" 
              text="Welcome to IndoUI, the best component library for React."
            />
          </Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Multiple Words</Heading>
          <Text size="lg">
            <Highlight 
              query={["React", "TypeScript", "Tailwind"]} 
              text="Build apps with React, TypeScript, and Tailwind CSS."
            />
          </Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Custom Highlight Style</Heading>
          <Text size="lg">
            <Highlight 
              query="important" 
              text="This is an important message for you."
              highlightStyle={{ background: 'hsl(var(--indo-red-200))', color: 'hsl(var(--indo-red-900))' }}
            />
          </Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`// Single word
<Highlight 
  query="React" 
  text="Build apps with React."
/>

// Multiple words
<Highlight 
  query={["React", "TypeScript"]} 
  text="Build apps with React and TypeScript."
/>

// Custom style
<Highlight 
  query="error" 
  text="An error occurred."
  highlightStyle={{ background: 'red', color: 'white' }}
/>`}
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
                <TableRow><TableCell><code>query</code></TableCell><TableCell>string | string[]</TableCell><TableCell>required</TableCell></TableRow>
                <TableRow><TableCell><code>text</code></TableCell><TableCell>string</TableCell><TableCell>required</TableCell></TableRow>
                <TableRow><TableCell><code>highlightStyle</code></TableCell><TableCell>CSSProperties</TableCell><TableCell>yellow background</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default HighlightDoc;
