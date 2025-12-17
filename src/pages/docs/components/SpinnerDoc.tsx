import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Spinner,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const SpinnerDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="red" mb={4}>Feedback</Badge>
          <Heading as="h1" size="3xl" mb={4}>Spinner</Heading>
          <Text size="lg" color="muted.fg">
            Indicate loading state with an animated spinner.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Sizes</Heading>
          <HStack spacing={6}>
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Colors</Heading>
          <HStack spacing={6}>
            <Spinner colorPalette="blue" size="lg" />
            <Spinner colorPalette="green" size="lg" />
            <Spinner colorPalette="red" size="lg" />
            <Spinner colorPalette="purple" size="lg" />
            <Spinner colorPalette="amber" size="lg" />
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Spinner size="md" colorPalette="blue" />

<Spinner size="lg" colorPalette="green" />

// With label
<HStack>
  <Spinner size="sm" />
  <Text>Loading...</Text>
</HStack>`}
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
              <TableRow><TableCell><code>size</code></TableCell><TableCell>'xs' | 'sm' | 'md' | 'lg' | 'xl'</TableCell><TableCell>'md'</TableCell></TableRow>
              <TableRow><TableCell><code>colorPalette</code></TableCell><TableCell>ColorName</TableCell><TableCell>'blue'</TableCell></TableRow>
              <TableRow><TableCell><code>thickness</code></TableCell><TableCell>string</TableCell><TableCell>'2px'</TableCell></TableRow>
              <TableRow><TableCell><code>speed</code></TableCell><TableCell>string</TableCell><TableCell>'0.65s'</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default SpinnerDoc;
