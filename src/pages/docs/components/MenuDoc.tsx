import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
  Button,
  Menu,
  MenuItem,
  MenuDivider,
  MenuGroup,
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

const MenuDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Overlay</Badge>
          <Heading as="h1" size="3xl" mb={4}>Menu</Heading>
          <Text size="lg" color="muted.fg">
            Dropdown menu component for displaying a list of actions.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Usage</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Menu trigger={<Button>Open Menu</Button>}>
                  <MenuItem>New File</MenuItem>
                  <MenuItem>New Window</MenuItem>
                  <MenuDivider />
                  <MenuItem>Save</MenuItem>
                  <MenuItem>Save As...</MenuItem>
                </Menu>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Menu trigger={<Button>Open Menu</Button>}>
  <MenuItem>New File</MenuItem>
  <MenuItem>New Window</MenuItem>
  <MenuDivider />
  <MenuItem>Save</MenuItem>
  <MenuItem>Save As...</MenuItem>
</Menu>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Icons & Commands</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Menu trigger={<Button>Actions</Button>}>
                  <MenuItem icon={<span>📄</span>} command="⌘N">New File</MenuItem>
                  <MenuItem icon={<span>📁</span>} command="⌘O">Open</MenuItem>
                  <MenuDivider />
                  <MenuItem icon={<span>💾</span>} command="⌘S">Save</MenuItem>
                  <MenuItem icon={<span>📤</span>} command="⌘⇧S">Export</MenuItem>
                </Menu>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Menu trigger={<Button>Actions</Button>}>
  <MenuItem icon={<FileIcon />} command="⌘N">New File</MenuItem>
  <MenuItem icon={<FolderIcon />} command="⌘O">Open</MenuItem>
  <MenuDivider />
  <MenuItem icon={<SaveIcon />} command="⌘S">Save</MenuItem>
  <MenuItem icon={<ExportIcon />} command="⌘⇧S">Export</MenuItem>
</Menu>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Menu Groups</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Menu trigger={<Button>Settings</Button>}>
                  <MenuGroup title="Profile">
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Preferences</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Help">
                    <MenuItem>Documentation</MenuItem>
                    <MenuItem>Support</MenuItem>
                  </MenuGroup>
                </Menu>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Menu trigger={<Button>Settings</Button>}>
  <MenuGroup title="Profile">
    <MenuItem>My Account</MenuItem>
    <MenuItem>Preferences</MenuItem>
  </MenuGroup>
  <MenuDivider />
  <MenuGroup title="Help">
    <MenuItem>Documentation</MenuItem>
    <MenuItem>Support</MenuItem>
  </MenuGroup>
</Menu>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Destructive Item</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Menu trigger={<Button variant="outline">More Options</Button>}>
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Duplicate</MenuItem>
                  <MenuDivider />
                  <MenuItem isDestructive>Delete</MenuItem>
                </Menu>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Menu trigger={<Button variant="outline">More Options</Button>}>
  <MenuItem>Edit</MenuItem>
  <MenuItem>Duplicate</MenuItem>
  <MenuDivider />
  <MenuItem isDestructive>Delete</MenuItem>
</Menu>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Placement</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <HStack spacing={4}>
                  <Menu trigger={<Button size="sm">Bottom Start</Button>} placement="bottom-start">
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                  </Menu>
                  <Menu trigger={<Button size="sm">Bottom End</Button>} placement="bottom-end">
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                  </Menu>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Menu trigger={<Button>Bottom Start</Button>} placement="bottom-start">
  <MenuItem>Option 1</MenuItem>
  <MenuItem>Option 2</MenuItem>
</Menu>

<Menu trigger={<Button>Bottom End</Button>} placement="bottom-end">
  <MenuItem>Option 1</MenuItem>
  <MenuItem>Option 2</MenuItem>
</Menu>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API Reference</Heading>
          
          <Heading as="h3" size="lg" mb={3}>Menu</Heading>
          <Box mb={6}>
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
                <TableCell><code>trigger</code></TableCell>
                <TableCell>ReactElement</TableCell>
                <TableCell>required</TableCell>
                <TableCell>Element that triggers the menu</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>placement</code></TableCell>
                <TableCell>'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'</TableCell>
                <TableCell>'bottom-start'</TableCell>
                <TableCell>Menu placement</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </Box>

          <Heading as="h3" size="lg" mb={3}>MenuItem</Heading>
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
                <TableCell><code>icon</code></TableCell>
                <TableCell>ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Icon element</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>command</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Keyboard shortcut</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isDisabled</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Disable the item</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isDestructive</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Show destructive style</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default MenuDoc;
