import {
  Box, VStack, Heading, Text, Card, Badge, Textarea,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const TextareaDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>Textarea</Heading>
          <Text size="lg" color="muted.fg">
            Multi-line text input component for longer content.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Usage</Heading>
          <VStack spacing={4} align="stretch" maxW="400px">
            <Textarea placeholder="Enter your message..." />
            <Textarea placeholder="Disabled textarea" isDisabled />
            <Textarea placeholder="Invalid textarea" isInvalid />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Sizes</Heading>
          <VStack spacing={4} align="stretch" maxW="400px">
            <Textarea size="sm" placeholder="Small" />
            <Textarea size="md" placeholder="Medium" />
            <Textarea size="lg" placeholder="Large" />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Textarea placeholder="Enter description..." />
<Textarea size="lg" rows={5} />
<Textarea isDisabled placeholder="Disabled" />`}
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
              <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg'</TableCell><TableCell>'md'</TableCell></TableRow>
              <TableRow><TableCell><code>rows</code></TableCell><TableCell>number</TableCell><TableCell>3</TableCell></TableRow>
              <TableRow><TableCell><code>isDisabled</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              <TableRow><TableCell><code>isInvalid</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default TextareaDoc;
