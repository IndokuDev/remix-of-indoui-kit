import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Link,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const LinkDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="pink" mb={4}>Typography</Badge>
          <Heading as="h1" size="3xl" mb={4}>Link</Heading>
          <Text size="lg" color="muted.fg">
            Accessible link component with styling options.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Links</Heading>
          <VStack spacing={3} align="flex-start">
            <Link href="#">Default Link</Link>
            <Link href="#" color="blue.500">Colored Link</Link>
            <Link href="#" isExternal>External Link →</Link>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Link in Text</Heading>
          <Text>
            Visit our <Link href="#" color="blue.500">documentation</Link> to learn more about the components.
          </Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Link href="/docs">Internal Link</Link>
<Link href="https://example.com" isExternal>
  External Link
</Link>
<Link href="#" color="blue.500">Colored Link</Link>`}
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
              <TableRow><TableCell><code>href</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>isExternal</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              <TableRow><TableCell><code>color</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default LinkDoc;
