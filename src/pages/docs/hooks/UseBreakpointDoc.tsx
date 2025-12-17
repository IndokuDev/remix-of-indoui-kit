import React from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useBreakpoint, useBreakpointValue, useMediaQuery,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseBreakpointDoc = () => {
  const breakpoint = useBreakpoint();
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
  const isLarge = useMediaQuery('(min-width: 1024px)');

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useBreakpoint</Heading>
          <Text size="lg" color="muted.fg">
            Hooks for responsive design based on screen size.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <Text>Current breakpoint: <Badge colorPalette="blue">{breakpoint}</Badge></Text>
            <Text>Columns for grid: <Badge colorPalette="green">{columns}</Badge></Text>
            <Text>Is large screen: <Badge colorPalette={isLarge ? 'green' : 'red'}>{isLarge ? 'Yes' : 'No'}</Badge></Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>useBreakpoint</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useBreakpoint } from '@indoui/react';

function ResponsiveComponent() {
  const breakpoint = useBreakpoint();
  // Returns: 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  return <Text>Current: {breakpoint}</Text>;
}`}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>useBreakpointValue</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useBreakpointValue } from '@indoui/react';

function ResponsiveGrid() {
  const columns = useBreakpointValue({
    base: 1,  // 0px+
    sm: 2,    // 640px+
    md: 3,    // 768px+
    lg: 4,    // 1024px+
  });

  return <Grid columns={columns}>...</Grid>;
}`}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>useMediaQuery</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useMediaQuery } from '@indoui/react';

function MediaQueryExample() {
  const [isLarge] = useMediaQuery('(min-width: 1024px)');
  const [prefersReducedMotion] = useMediaQuery(
    '(prefers-reduced-motion: reduce)'
  );

  return isLarge ? <Desktop /> : <Mobile />;
}`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Breakpoint Values</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Breakpoint</TableHeaderCell>
                  <TableHeaderCell>Min Width</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>base</code></TableCell><TableCell>0px</TableCell></TableRow>
                <TableRow><TableCell><code>sm</code></TableCell><TableCell>640px</TableCell></TableRow>
                <TableRow><TableCell><code>md</code></TableCell><TableCell>768px</TableCell></TableRow>
                <TableRow><TableCell><code>lg</code></TableCell><TableCell>1024px</TableCell></TableRow>
                <TableRow><TableCell><code>xl</code></TableCell><TableCell>1280px</TableCell></TableRow>
                <TableRow><TableCell><code>2xl</code></TableCell><TableCell>1536px</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseBreakpointDoc;
