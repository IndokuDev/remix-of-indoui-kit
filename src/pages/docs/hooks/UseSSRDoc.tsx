import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useSSR,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseSSRDoc = () => {
  const { isServer, isBrowser } = useSSR();

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useSSR</Heading>
          <Text size="lg" color="muted.fg">
            Hook to detect server-side vs client-side rendering environment.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <Text>isServer: <Badge colorPalette={isServer ? 'yellow' : 'gray'}>{String(isServer)}</Badge></Text>
            <Text>isBrowser: <Badge colorPalette={isBrowser ? 'green' : 'gray'}>{String(isBrowser)}</Badge></Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>useSSR</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useSSR } from '@indoui/react';

function BrowserOnlyComponent() {
  const { isBrowser, isServer } = useSSR();

  if (isServer) {
    return <div>Loading...</div>;
  }

  // Safe to use browser APIs
  return <div>Window width: {window.innerWidth}px</div>;
}`}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>useSafeLayoutEffect</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useSafeLayoutEffect } from '@indoui/react';

// Like useLayoutEffect, but skips on server
function MeasureComponent() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useSafeLayoutEffect(() => {
    // This only runs in the browser
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  return <div ref={ref}>Height: {height}px</div>;
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
                  <TableHeaderCell>Returns</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>useSSR</code></TableCell><TableCell>{'{isServer, isBrowser}'}</TableCell><TableCell>Environment detection</TableCell></TableRow>
                <TableRow><TableCell><code>useSafeLayoutEffect</code></TableCell><TableCell>void</TableCell><TableCell>Browser-only useLayoutEffect</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Common Use Cases</Heading>
          <VStack spacing={2} align="flex-start">
            <Text>• Avoiding hydration mismatches with browser-only content</Text>
            <Text>• Conditionally using browser APIs (window, document, localStorage)</Text>
            <Text>• Loading client-only libraries or components</Text>
            <Text>• Measuring DOM elements without SSR warnings</Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseSSRDoc;
