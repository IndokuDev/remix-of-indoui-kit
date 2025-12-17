import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, List, ListItem,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";
import { CheckCircle, Circle, Star } from "lucide-react";

const ListDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Typography</Badge>
          <Heading as="h1" size="3xl" mb={4}>List</Heading>
          <Text size="lg" color="muted.fg">
            Display ordered and unordered lists with custom styling.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Unordered List</Heading>
          <List as="ul" styleType="disc" spacing={2}>
            <ListItem>First item in the list</ListItem>
            <ListItem>Second item with more content</ListItem>
            <ListItem>Third item to show spacing</ListItem>
          </List>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Ordered List</Heading>
          <List as="ol" styleType="decimal" spacing={2}>
            <ListItem>Step one: Install the package</ListItem>
            <ListItem>Step two: Import components</ListItem>
            <ListItem>Step three: Start building</ListItem>
          </List>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>List with Icons</Heading>
          <List spacing={3}>
            <ListItem icon={<CheckCircle size={16} color="green" />}>
              Completed task
            </ListItem>
            <ListItem icon={<Circle size={16} />}>
              Pending task
            </ListItem>
            <ListItem icon={<Star size={16} color="gold" />}>
              Starred item
            </ListItem>
          </List>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`// Unordered list
<List as="ul" styleType="disc" spacing={2}>
  <ListItem>Item one</ListItem>
  <ListItem>Item two</ListItem>
</List>

// Ordered list
<List as="ol" styleType="decimal">
  <ListItem>First step</ListItem>
  <ListItem>Second step</ListItem>
</List>

// With icons
<List spacing={3}>
  <ListItem icon={<CheckIcon />}>Done</ListItem>
  <ListItem icon={<PendingIcon />}>In progress</ListItem>
</List>`}
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
                <TableRow><TableCell><code>as</code></TableCell><TableCell>'ul' | 'ol'</TableCell><TableCell>'ul'</TableCell></TableRow>
                <TableRow><TableCell><code>styleType</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>spacing</code></TableCell><TableCell>number | string</TableCell><TableCell>2</TableCell></TableRow>
                <TableRow><TableCell><code>icon</code> (ListItem)</TableCell><TableCell>ReactNode</TableCell><TableCell>-</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default ListDoc;
