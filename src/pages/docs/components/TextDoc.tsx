import {
  Box, VStack, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const TextDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="pink" mb={4}>Typography</Badge>
          <Heading as="h1" size="3xl" mb={4}>Text</Heading>
          <Text size="lg" color="muted.fg">
            Render text with consistent sizing and styling options.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Sizes</Heading>
          <VStack spacing={3} align="start">
            <Text size="xs">Extra Small Text (xs)</Text>
            <Text size="sm">Small Text (sm)</Text>
            <Text size="md">Medium Text (md)</Text>
            <Text size="lg">Large Text (lg)</Text>
            <Text size="xl">Extra Large Text (xl)</Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Styling</Heading>
          <VStack spacing={3} align="start">
            <Text fontWeight="bold">Bold Text</Text>
            <Text fontStyle="italic">Italic Text</Text>
            <Text textDecoration="underline">Underlined Text</Text>
            <Text color="blue.500">Colored Text</Text>
            <Text color="muted.fg">Muted Text</Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Text size="lg">Large paragraph text</Text>
<Text fontWeight="bold" color="blue.500">Bold blue text</Text>
<Text color="muted.fg">Muted helper text</Text>`}
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
              <TableRow><TableCell><code>color</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>fontWeight</code></TableCell><TableCell>string</TableCell><TableCell>'normal'</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default TextDoc;
