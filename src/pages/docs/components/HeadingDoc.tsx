import {
  Box, VStack, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const HeadingDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="pink" mb={4}>Typography</Badge>
          <Heading as="h1" size="3xl" mb={4}>Heading</Heading>
          <Text size="lg" color="muted.fg">
            Render semantic headings with consistent typography and sizing.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Sizes</Heading>
          <VStack spacing={3} align="flex-start">
            <Heading size="4xl">Heading 4xl</Heading>
            <Heading size="3xl">Heading 3xl</Heading>
            <Heading size="2xl">Heading 2xl</Heading>
            <Heading size="xl">Heading xl</Heading>
            <Heading size="lg">Heading lg</Heading>
            <Heading size="md">Heading md</Heading>
            <Heading size="sm">Heading sm</Heading>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Semantic Tags</Heading>
          <VStack spacing={3} align="flex-start">
            <Heading as="h1" size="xl">h1 Heading</Heading>
            <Heading as="h2" size="lg">h2 Heading</Heading>
            <Heading as="h3" size="md">h3 Heading</Heading>
            <Heading as="h4" size="sm">h4 Heading</Heading>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Heading as="h1" size="3xl">Main Title</Heading>
<Heading as="h2" size="xl">Section Title</Heading>
<Heading as="h3" size="lg">Subsection</Heading>`}
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
              <TableRow><TableCell><code>as</code></TableCell><TableCell>'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'</TableCell><TableCell>'h2'</TableCell></TableRow>
              <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'</TableCell><TableCell>'xl'</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default HeadingDoc;
