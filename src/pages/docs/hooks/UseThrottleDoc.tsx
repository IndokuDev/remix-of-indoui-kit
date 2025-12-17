import React, { useState } from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Button,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useThrottle,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseThrottleDoc = () => {
  const [count, setCount] = useState(0);
  const throttledCount = useThrottle(count, 1000);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useThrottle</Heading>
          <Text size="lg" color="muted.fg">
            Hook to throttle a value, limiting updates to once per interval.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <Button onClick={() => setCount(c => c + 1)}>
              Click rapidly! ({count} clicks)
            </Button>
            <HStack spacing={8}>
              <Box>
                <Text size="sm" color="muted.fg">Instant count:</Text>
                <Badge>{count}</Badge>
              </Box>
              <Box>
                <Text size="sm" color="muted.fg">Throttled (1s):</Text>
                <Badge colorPalette="blue">{throttledCount}</Badge>
              </Box>
            </HStack>
            <Text size="sm" color="muted.fg">
              The throttled value updates at most once per second.
            </Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Usage</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useThrottle, useThrottledCallback } from '@indoui/react';

// Throttle a value
function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const throttledPosition = useThrottle(position, 100);

  useEffect(() => {
    const handler = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return <Text>Position: {throttledPosition.x}, {throttledPosition.y}</Text>;
}

// Throttle a callback
function ScrollHandler() {
  const handleScroll = useThrottledCallback(() => {
    console.log('Scroll position:', window.scrollY);
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
}`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Hook</TableHeaderCell>
                  <TableHeaderCell>Parameters</TableHeaderCell>
                  <TableHeaderCell>Returns</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>useThrottle</code></TableCell><TableCell>(value, interval)</TableCell><TableCell>Throttled value</TableCell></TableRow>
                <TableRow><TableCell><code>useThrottledCallback</code></TableCell><TableCell>(callback, interval)</TableCell><TableCell>Throttled function</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Debounce vs Throttle</Heading>
          <Card variant="outline" p={4}>
            <VStack spacing={2} align="flex-start">
              <Text><strong>Debounce:</strong> Waits until changes stop, then fires once.</Text>
              <Text><strong>Throttle:</strong> Fires at most once per interval, even if changes continue.</Text>
            </VStack>
          </Card>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseThrottleDoc;
