import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useMounted, useIsMounted,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseMountedDoc = () => {
  const mounted = useMounted();
  const isMounted = useIsMounted();

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useMounted</Heading>
          <Text size="lg" color="muted.fg">
            Hooks to track component mount state for safe async operations.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <Text>useMounted(): <Badge colorPalette={mounted ? 'green' : 'red'}>{String(mounted)}</Badge></Text>
            <Text>useIsMounted()(): <Badge colorPalette={isMounted() ? 'green' : 'red'}>{String(isMounted())}</Badge></Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>useMounted</Heading>
          <Text mb={4} size="sm" color="muted.fg">Returns a boolean that's true when mounted.</Text>
          <CodeBlock
            language="tsx"
            code={`import { useMounted } from '@indoui/react';

function AnimatedComponent() {
  const mounted = useMounted();

  return (
    <Box opacity={mounted ? 1 : 0} transition="opacity 0.3s">
      I fade in on mount!
    </Box>
  );
}`}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>useIsMounted</Heading>
          <Text mb={4} size="sm" color="muted.fg">Returns a function to check mount state (for async callbacks).</Text>
          <CodeBlock
            language="tsx"
            code={`import { useIsMounted } from '@indoui/react';

function AsyncDataFetcher() {
  const [data, setData] = useState(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    async function fetchData() {
      const result = await api.getData();
      
      // Only update state if still mounted
      if (isMounted()) {
        setData(result);
      }
    }
    
    fetchData();
  }, [isMounted]);

  return <div>{data}</div>;
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
                  <TableHeaderCell>Use Case</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>useMounted</code></TableCell><TableCell>boolean</TableCell><TableCell>Conditional rendering, animations</TableCell></TableRow>
                <TableRow><TableCell><code>useIsMounted</code></TableCell><TableCell>() =&gt; boolean</TableCell><TableCell>Safe state updates in async code</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseMountedDoc;
