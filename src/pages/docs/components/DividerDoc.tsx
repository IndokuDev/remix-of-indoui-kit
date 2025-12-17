import {
  Box, VStack, HStack, Divider, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const DividerDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Layout</Badge>
          <Heading as="h1" size="3xl" mb={4}>Divider</Heading>
          <Text size="lg" color="muted.fg">
            A visual separator to divide content sections.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Horizontal Divider</Heading>
          <VStack spacing={4} align="stretch">
            <Text>Content above</Text>
            <Divider />
            <Text>Content below</Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Vertical Divider</Heading>
          <HStack spacing={4} h="50px" align="center">
            <Text>Left</Text>
            <Divider orientation="vertical" />
            <Text>Right</Text>
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`// Horizontal
<Divider />

// Vertical
<Divider orientation="vertical" />`}
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
              <TableRow><TableCell><code>orientation</code></TableCell><TableCell>'horizontal' | 'vertical'</TableCell><TableCell>'horizontal'</TableCell></TableRow>
              <TableRow><TableCell><code>variant</code></TableCell><TableCell>'solid' | 'dashed'</TableCell><TableCell>'solid'</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default DividerDoc;
