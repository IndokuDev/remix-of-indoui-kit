import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Badge,
  TreeView,
  FileTree,
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

const TreeViewDoc = () => {
  const [expandedIds, setExpandedIds] = useState<string[]>(["1", "2"]);
  const [selectedId, setSelectedId] = useState<string>();

  const treeNodes = [
    {
      id: "1",
      label: "src",
      children: [
        { id: "1-1", label: "components", children: [
          { id: "1-1-1", label: "Button.tsx" },
          { id: "1-1-2", label: "Card.tsx" },
          { id: "1-1-3", label: "Input.tsx" },
        ]},
        { id: "1-2", label: "hooks", children: [
          { id: "1-2-1", label: "useTheme.ts" },
        ]},
        { id: "1-3", label: "App.tsx" },
      ],
    },
    {
      id: "2",
      label: "lib",
      children: [
        { id: "2-1", label: "utils.ts" },
      ],
    },
    { id: "3", label: "package.json" },
  ];

  const fileTreeItems = [
    {
      name: "src",
      type: "folder" as const,
      children: [
        { name: "components", type: "folder" as const, children: [
          { name: "Button.tsx", type: "file" as const },
          { name: "Card.tsx", type: "file" as const },
        ]},
        { name: "App.tsx", type: "file" as const },
      ],
    },
    { name: "package.json", type: "file" as const },
    { name: "README.md", type: "file" as const },
  ];

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="blue" mb={4}>
            Component
          </Badge>
          <Heading as="h1" size="3xl" mb={4}>
            TreeView & FileTree
          </Heading>
          <Text size="lg" color="muted.fg">
            Hierarchical tree components for displaying nested data structures.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="lg" mb={4}>TreeView</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Box p={4} bg="bg.muted" rounded="lg">
                  <TreeView
                    nodes={treeNodes}
                    selectedId={selectedId}
                    expandedIds={expandedIds}
                    onSelect={(node) => setSelectedId(node.id)}
                    onExpand={(node, expanded) => {
                      setExpandedIds(expanded 
                        ? [...expandedIds, node.id]
                        : expandedIds.filter(id => id !== node.id)
                      );
                    }}
                    showLines
                  />
                </Box>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { TreeView } from '@indoui/react';

const nodes = [
  {
    id: "1",
    label: "src",
    children: [
      { id: "1-1", label: "components", children: [...] },
      { id: "1-2", label: "App.tsx" },
    ],
  },
];

function Example() {
  const [expandedIds, setExpandedIds] = useState(["1"]);
  const [selectedId, setSelectedId] = useState();
  
  return (
    <TreeView
      nodes={nodes}
      selectedId={selectedId}
      expandedIds={expandedIds}
      onSelect={(node) => setSelectedId(node.id)}
      onExpand={(node, expanded) => {...}}
      showLines
    />
  );
}`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="lg" mb={4}>FileTree</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Box p={4} bg="bg.muted" rounded="lg">
                  <FileTree
                    items={fileTreeItems}
                    onSelect={(path, item) => console.log('Selected:', path)}
                  />
                </Box>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { FileTree } from '@indoui/react';

const items = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "components", type: "folder", children: [...] },
      { name: "App.tsx", type: "file" },
    ],
  },
];

function Example() {
  return (
    <FileTree
      items={items}
      onSelect={(path, item) => console.log(path)}
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
                <TableCell><code>nodes</code></TableCell>
                <TableCell>TreeNode[]</TableCell>
                <TableCell>required</TableCell>
                <TableCell>Array of tree nodes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>selectedId</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Currently selected node ID</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>expandedIds</code></TableCell>
                <TableCell>string[]</TableCell>
                <TableCell>[]</TableCell>
                <TableCell>Array of expanded node IDs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>showLines</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Show connecting lines</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default TreeViewDoc;
