import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Button,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const CardDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="orange" mb={4}>Data Display</Badge>
          <Heading as="h1" size="3xl" mb={4}>Card</Heading>
          <Text size="lg" color="muted.fg">
            A container for grouping related content with optional header, body, and footer.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Variants</Heading>
          <HStack spacing={4} wrap="wrap">
            <Card variant="outline" p={4} w="200px">
              <Heading size="sm" mb={2}>Outline</Heading>
              <Text size="sm" color="muted.fg">Card content</Text>
            </Card>
            <Card variant="elevated" p={4} w="200px">
              <Heading size="sm" mb={2}>Elevated</Heading>
              <Text size="sm" color="muted.fg">Card content</Text>
            </Card>
            <Card variant="filled" p={4} w="200px">
              <Heading size="sm" mb={2}>Filled</Heading>
              <Text size="sm" color="muted.fg">Card content</Text>
            </Card>
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Card with Actions</Heading>
          <Card variant="elevated" p={0} maxW="350px">
            <Box p={4} borderBottom="1px solid" borderColor="gray.200">
              <Heading size="md">Card Title</Heading>
            </Box>
            <Box p={4}>
              <Text>This is the card body with some content description.</Text>
            </Box>
            <HStack p={4} borderTop="1px solid" borderColor="gray.200" justify="flex-end">
              <Button variant="ghost" size="sm">Cancel</Button>
              <Button colorPalette="blue" size="sm">Confirm</Button>
            </HStack>
          </Card>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Card variant="elevated" p={4}>
  <Heading size="md" mb={2}>Card Title</Heading>
  <Text color="muted.fg">Card content goes here.</Text>
  <Button mt={4} colorPalette="blue">Action</Button>
</Card>`}
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
              <TableRow><TableCell><code>variant</code></TableCell><TableCell>'outline' | 'elevated' | 'filled'</TableCell><TableCell>'outline'</TableCell></TableRow>
              <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg'</TableCell><TableCell>'md'</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default CardDoc;
