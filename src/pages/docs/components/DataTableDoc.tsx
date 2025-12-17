import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Badge,
  DataTable,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const sampleData: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Moderator", status: "Active" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "User", status: "Pending" },
];

const DataTableDoc = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const columns = [
    { key: "id", header: "ID", sortable: true, width: "60px" },
    { key: "name", header: "Name", sortable: true },
    { key: "email", header: "Email", sortable: true },
    { key: "role", header: "Role", sortable: true },
    {
      key: "status",
      header: "Status",
      render: (value: string) => (
        <Badge
          variant="subtle"
          colorPalette={value === "Active" ? "green" : value === "Pending" ? "amber" : "gray"}
        >
          {value}
        </Badge>
      ),
    },
  ];

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>
            Component
          </Badge>
          <Heading as="h1" size="3xl" mb={4}>
            DataTable
          </Heading>
          <Text size="lg" color="muted.fg">
            A powerful data table component with sorting, selection, and custom cell rendering.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <DataTable
                  data={sampleData}
                  columns={columns}
                  selectable
                  selectedRows={selectedRows}
                  onSelectionChange={setSelectedRows}
                  striped
                  hoverable
                />
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { DataTable, Badge } from '@indoui/react';

const data = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  // ...more data
];

const columns = [
  { key: "id", header: "ID", sortable: true },
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email" },
  {
    key: "status",
    header: "Status",
    render: (value) => (
      <Badge colorPalette={value === "Active" ? "success" : "secondary"}>
        {value}
      </Badge>
    ),
  },
];

function Example() {
  return (
    <DataTable
      data={data}
      columns={columns}
      selectable
      striped
      hoverable
    />
  );
}`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            API Reference
          </Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Prop</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Default</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><code>data</code></TableCell>
                <TableCell>T[]</TableCell>
                <TableCell>required</TableCell>
                <TableCell>Array of data objects</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>columns</code></TableCell>
                <TableCell>DataTableColumn[]</TableCell>
                <TableCell>required</TableCell>
                <TableCell>Column definitions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>selectable</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Enable row selection</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>striped</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Add zebra striping</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>hoverable</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Highlight rows on hover</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onRowClick</code></TableCell>
                <TableCell>(row, index) =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Row click handler</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default DataTableDoc;
