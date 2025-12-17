import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, Splitter,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const SplitterDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="blue" mb={4}>Layout</Badge>
          <Heading as="h1" size="3xl" mb={4}>Splitter</Heading>
          <Text size="lg" color="muted.fg">
            Resizable split pane layout for adjustable panel sizes.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Horizontal Splitter</Heading>
          <Box h="200px" border="1px solid" borderColor="border">
            <Splitter orientation="horizontal" defaultSize={40}>
              <Box p={4} bg="primary.subtle">
                <Text>Left Panel</Text>
                <Text size="sm" color="muted.fg">Drag the divider to resize</Text>
              </Box>
              <Box p={4} bg="secondary.subtle">
                <Text>Right Panel</Text>
              </Box>
            </Splitter>
          </Box>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Vertical Splitter</Heading>
          <Box h="300px" border="1px solid" borderColor="border">
            <Splitter orientation="vertical" defaultSize={30}>
              <Box p={4} bg="success.subtle">
                <Text>Top Panel</Text>
              </Box>
              <Box p={4} bg="warning.subtle">
                <Text>Bottom Panel</Text>
              </Box>
            </Splitter>
          </Box>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`// Horizontal split
<Splitter orientation="horizontal" defaultSize={50}>
  <Box>Left Panel</Box>
  <Box>Right Panel</Box>
</Splitter>

// Vertical split with constraints
<Splitter 
  orientation="vertical" 
  defaultSize={30}
  minSize={20}
  maxSize={80}
>
  <Box>Top Panel</Box>
  <Box>Bottom Panel</Box>
</Splitter>`}
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
                <TableRow><TableCell><code>orientation</code></TableCell><TableCell>'horizontal' | 'vertical'</TableCell><TableCell>'horizontal'</TableCell></TableRow>
                <TableRow><TableCell><code>defaultSize</code></TableCell><TableCell>number</TableCell><TableCell>50</TableCell></TableRow>
                <TableRow><TableCell><code>minSize</code></TableCell><TableCell>number</TableCell><TableCell>10</TableCell></TableRow>
                <TableRow><TableCell><code>maxSize</code></TableCell><TableCell>number</TableCell><TableCell>90</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default SplitterDoc;
