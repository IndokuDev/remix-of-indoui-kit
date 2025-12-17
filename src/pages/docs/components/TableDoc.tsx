import {
  Box, VStack, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const TableDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="orange" mb={4}>Data Display</Badge>
          <Heading as="h1" size="3xl" mb={4}>Table</Heading>
          <Text size="lg" color="muted.fg">
            Display tabular data with headers and rows.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Table</Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>Admin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell>User</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob Wilson</TableCell>
                <TableCell>bob@example.com</TableCell>
                <TableCell>Editor</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Email</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Components</Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Component</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow><TableCell><code>Table</code></TableCell><TableCell>Root table container</TableCell></TableRow>
              <TableRow><TableCell><code>TableHead</code></TableCell><TableCell>Table header section</TableCell></TableRow>
              <TableRow><TableCell><code>TableBody</code></TableCell><TableCell>Table body section</TableCell></TableRow>
              <TableRow><TableCell><code>TableRow</code></TableCell><TableCell>Table row</TableCell></TableRow>
              <TableRow><TableCell><code>TableHeaderCell</code></TableCell><TableCell>Header cell (th)</TableCell></TableRow>
              <TableRow><TableCell><code>TableCell</code></TableCell><TableCell>Body cell (td)</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default TableDoc;
