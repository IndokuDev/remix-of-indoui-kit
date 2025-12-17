import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, Blockquote,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const BlockquoteDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Typography</Badge>
          <Heading as="h1" size="3xl" mb={4}>Blockquote</Heading>
          <Text size="lg" color="muted.fg">
            Display quoted text with distinctive styling.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Subtle Variant</Heading>
          <Blockquote variant="subtle" colorPalette="blue">
            The only way to do great work is to love what you do.
            <footer>— Steve Jobs</footer>
          </Blockquote>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Different Colors</Heading>
          <VStack spacing={4} align="stretch">
            <Blockquote variant="subtle" colorPalette="green">
              Success is not final, failure is not fatal.
            </Blockquote>
            <Blockquote variant="subtle" colorPalette="purple">
              Innovation distinguishes between a leader and a follower.
            </Blockquote>
            <Blockquote variant="subtle" colorPalette="orange">
              Stay hungry, stay foolish.
            </Blockquote>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Plain Variant</Heading>
          <Blockquote variant="plain">
            A simple quote without the border styling.
          </Blockquote>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Blockquote variant="subtle" colorPalette="blue">
  The only way to do great work is to love what you do.
  <footer>— Steve Jobs</footer>
</Blockquote>

<Blockquote variant="plain">
  A simple quote without styling.
</Blockquote>`}
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
                <TableRow><TableCell><code>variant</code></TableCell><TableCell>'subtle' | 'solid' | 'plain'</TableCell><TableCell>'subtle'</TableCell></TableRow>
                <TableRow><TableCell><code>colorPalette</code></TableCell><TableCell>string</TableCell><TableCell>'gray'</TableCell></TableRow>
                <TableRow><TableCell><code>cite</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default BlockquoteDoc;
