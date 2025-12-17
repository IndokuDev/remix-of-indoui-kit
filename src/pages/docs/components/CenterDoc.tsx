import {
  Box, VStack, Center, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const CenterDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Layout</Badge>
          <Heading as="h1" size="3xl" mb={4}>Center</Heading>
          <Text size="lg" color="muted.fg">
            A layout component to center its child both horizontally and vertically.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Usage</Heading>
          <Center h="200px" bg="gray.100" rounded="md">
            <Box bg="blue.500" p={4} rounded="md" color="white">
              Centered Content
            </Box>
          </Center>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Center h="200px" bg="gray.100">
  <Box bg="blue.500" p={4}>
    Centered Content
  </Box>
</Center>`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Props</Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Prop</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow><TableCell><code>children</code></TableCell><TableCell>ReactNode</TableCell><TableCell>Content to center</TableCell></TableRow>
              <TableRow><TableCell><code>...BoxProps</code></TableCell><TableCell>-</TableCell><TableCell>All Box style props</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default CenterDoc;
