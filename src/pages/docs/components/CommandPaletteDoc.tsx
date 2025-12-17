import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Badge,
  Button,
  CommandPalette,
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
import { Search, Settings, User, FileText, Home } from "lucide-react";

const CommandPaletteDoc = () => {
  const [isOpen, setIsOpen] = useState(false);

  const commands = [
    { id: "1", label: "Go to Home", description: "Navigate to home page", icon: <Home size={16} />, shortcut: "⌘H", group: "Navigation" },
    { id: "2", label: "Search Files", description: "Search for files in project", icon: <Search size={16} />, shortcut: "⌘P", group: "Navigation" },
    { id: "3", label: "User Settings", description: "Open user settings", icon: <User size={16} />, shortcut: "⌘,", group: "Settings" },
    { id: "4", label: "Preferences", description: "Application preferences", icon: <Settings size={16} />, group: "Settings" },
    { id: "5", label: "New Document", description: "Create a new document", icon: <FileText size={16} />, shortcut: "⌘N", group: "Actions" },
  ];

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>
            Component
          </Badge>
          <Heading as="h1" size="3xl" mb={4}>
            CommandPalette
          </Heading>
          <Text size="lg" color="muted.fg">
            A command palette for quick access to actions, navigation, and search.
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
                <VStack spacing={4} align="flex-start">
                  <Button onClick={() => setIsOpen(true)} variant="outline">
                    <Search size={16} />
                    Open Command Palette (⌘K)
                  </Button>
                  <Text size="sm" color="muted.fg">
                    Click the button or press ⌘K to open the command palette.
                  </Text>
                  <CommandPalette
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    items={commands}
                    onSelect={(item) => {
                      console.log("Selected:", item);
                      setIsOpen(false);
                    }}
                  />
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { CommandPalette, Button } from '@indoui/react';
import { Search, Home, Settings } from 'lucide-react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  
  const commands = [
    { 
      id: "1", 
      label: "Go to Home", 
      description: "Navigate to home",
      icon: <Home size={16} />,
      shortcut: "⌘H",
      group: "Navigation"
    },
    // ...more commands
  ];
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Command Palette
      </Button>
      <CommandPalette
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={commands}
        onSelect={(item) => console.log(item)}
      />
    </>
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
                <TableCell><code>isOpen</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Controls visibility</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onClose</code></TableCell>
                <TableCell>() =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Called when closing</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>items</code></TableCell>
                <TableCell>CommandPaletteItem[]</TableCell>
                <TableCell>[]</TableCell>
                <TableCell>Array of command items</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onSelect</code></TableCell>
                <TableCell>(item) =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Called when item selected</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>placeholder</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>"Type a command..."</TableCell>
                <TableCell>Search input placeholder</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default CommandPaletteDoc;
