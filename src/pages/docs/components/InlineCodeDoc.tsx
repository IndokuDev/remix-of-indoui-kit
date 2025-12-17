import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, InlineCode,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const InlineCodeDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Typography</Badge>
          <Heading as="h1" size="3xl" mb={4}>InlineCode</Heading>
          <Text size="lg" color="muted.fg">
            Display inline code snippets within text content.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Usage</Heading>
          <Text>
            Use the <InlineCode>useState</InlineCode> hook to manage component state.
          </Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>In Documentation</Heading>
          <VStack spacing={4} align="flex-start">
            <Text>
              Install the package with <InlineCode>npm install indoui</InlineCode>
            </Text>
            <Text>
              Import components: <InlineCode>{"import { Button } from 'indoui'"}</InlineCode>
            </Text>
            <Text>
              The <InlineCode>onClick</InlineCode> prop accepts a callback function.
            </Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Text>
  Use the <InlineCode>useState</InlineCode> hook for state.
</Text>

<Text>
  Install with <InlineCode>npm install package</InlineCode>
</Text>`}
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
                  <TableHeaderCell>Description</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>children</code></TableCell><TableCell>ReactNode</TableCell><TableCell>Code content to display</TableCell></TableRow>
                <TableRow><TableCell><code>...styleProps</code></TableCell><TableCell>StyleProps</TableCell><TableCell>All style props supported</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default InlineCodeDoc;
