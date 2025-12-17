import React, { useState } from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Button, Drawer,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const DrawerDoc = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right');

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Overlay</Badge>
          <Heading as="h1" size="3xl" mb={4}>Drawer</Heading>
          <Text size="lg" color="muted.fg">
            Panel that slides in from the edge of the screen.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Placement</Heading>
          <HStack spacing={2}>
            <Button onClick={() => { setPlacement('left'); setIsOpen(true); }}>Left</Button>
            <Button onClick={() => { setPlacement('right'); setIsOpen(true); }}>Right</Button>
            <Button onClick={() => { setPlacement('top'); setIsOpen(true); }}>Top</Button>
            <Button onClick={() => { setPlacement('bottom'); setIsOpen(true); }}>Bottom</Button>
          </HStack>
          <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} placement={placement}>
            <VStack spacing={4} align="stretch">
              <Heading size="lg">Drawer Title</Heading>
              <Text>This is drawer content that slides in from the {placement}.</Text>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </VStack>
          </Drawer>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Drawer</Button>

<Drawer 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  placement="right"
>
  <Heading>Drawer Title</Heading>
  <Text>Drawer content goes here.</Text>
</Drawer>`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Props</Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Prop</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Default</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow><TableCell><code>isOpen</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              <TableRow><TableCell><code>onClose</code></TableCell><TableCell>() =&gt; void</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>placement</code></TableCell><TableCell>'left' | 'right' | 'top' | 'bottom'</TableCell><TableCell>'right'</TableCell></TableRow>
              <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg' | 'full'</TableCell><TableCell>'md'</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default DrawerDoc;
