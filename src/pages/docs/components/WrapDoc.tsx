import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, Button, Wrap, WrapItem,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const WrapDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="blue" mb={4}>Layout</Badge>
          <Heading as="h1" size="3xl" mb={4}>Wrap</Heading>
          <Text size="lg" color="muted.fg">
            Layout component that wraps children with automatic spacing and line breaks.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Wrap</Heading>
          <Wrap spacing={4}>
            {Array.from({ length: 8 }).map((_, i) => (
              <WrapItem key={i}>
                <Button variant="outline">Item {i + 1}</Button>
              </WrapItem>
            ))}
          </Wrap>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Different Spacing</Heading>
          <Wrap spacingX={8} spacingY={4}>
            {Array.from({ length: 6 }).map((_, i) => (
              <WrapItem key={i}>
                <Box p={4} bg="primary.subtle" rounded="md">Box {i + 1}</Box>
              </WrapItem>
            ))}
          </Wrap>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Auto Wrap Children</Heading>
          <Wrap spacing={2} shouldWrapChildren>
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Tailwind</Badge>
            <Badge>Vite</Badge>
            <Badge>Node.js</Badge>
          </Wrap>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Wrap spacing={4}>
  <WrapItem><Button>Item 1</Button></WrapItem>
  <WrapItem><Button>Item 2</Button></WrapItem>
  <WrapItem><Button>Item 3</Button></WrapItem>
</Wrap>

// Auto wrap children
<Wrap spacing={2} shouldWrapChildren>
  <Badge>Tag 1</Badge>
  <Badge>Tag 2</Badge>
</Wrap>`}
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
                <TableRow><TableCell><code>spacing</code></TableCell><TableCell>number | string</TableCell><TableCell>2</TableCell></TableRow>
                <TableRow><TableCell><code>spacingX</code></TableCell><TableCell>number | string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>spacingY</code></TableCell><TableCell>number | string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>align</code></TableCell><TableCell>string</TableCell><TableCell>flex-start</TableCell></TableRow>
                <TableRow><TableCell><code>justify</code></TableCell><TableCell>string</TableCell><TableCell>flex-start</TableCell></TableRow>
                <TableRow><TableCell><code>shouldWrapChildren</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default WrapDoc;
