import React, { useState, useRef } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useEventListener,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseEventListenerDoc = () => {
  const [keyPressed, setKeyPressed] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  useEventListener('keydown', (e) => {
    setKeyPressed(e.key);
  });

  useEventListener('click', () => {
    setClickCount(c => c + 1);
  }, boxRef.current);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useEventListener</Heading>
          <Text size="lg" color="muted.fg">
            Hook to safely add event listeners with automatic cleanup.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <Text>Last key pressed: <Badge colorPalette="blue">{keyPressed || 'Press any key'}</Badge></Text>
            <Box 
              ref={boxRef}
              p={6} 
              bg="primary.subtle" 
              rounded="md" 
              cursor="pointer"
            >
              Click me! Count: {clickCount}
            </Box>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Usage</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useEventListener } from '@indoui/react';

// Listen to window events (default)
function KeyboardShortcuts() {
  useEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// Listen to specific element events
function ClickOutside() {
  const ref = useRef(null);
  
  useEventListener('click', (e) => {
    if (!ref.current?.contains(e.target)) {
      onClose();
    }
  }, document);

  return <div ref={ref}>...</div>;
}

// With options
useEventListener('scroll', handler, window, { passive: true });`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Parameter</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>eventName</code></TableCell><TableCell>string</TableCell><TableCell>Event name (click, keydown, etc.)</TableCell></TableRow>
                <TableRow><TableCell><code>handler</code></TableCell><TableCell>(event) =&gt; void</TableCell><TableCell>Event handler function</TableCell></TableRow>
                <TableRow><TableCell><code>element</code></TableCell><TableCell>Element | Window</TableCell><TableCell>Target element (default: window)</TableCell></TableRow>
                <TableRow><TableCell><code>options</code></TableCell><TableCell>AddEventListenerOptions</TableCell><TableCell>Listener options</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseEventListenerDoc;
