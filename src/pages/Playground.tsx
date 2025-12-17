import { useState } from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Card,
  Badge,
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  CodeEditor,
  ColorPicker,
  TreeView,
  FileTree,
} from "../../lib/indoui/src";
import { DocsHeader } from "../components/docs/DocsHeader";

const Playground = () => {
  const [code, setCode] = useState(`// Welcome to IndoUI Code Editor
import { Button, Card, Text } from '@indoui/react';

function App() {
  return (
    <Card p={4}>
      <Text mb={2}>Hello, IndoUI!</Text>
      <Button colorPalette="blue">
        Click me
      </Button>
    </Card>
  );
}

export default App;`);

  const [language, setLanguage] = useState("tsx");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [selectedColor, setSelectedColor] = useState("#3b82f6");
  
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
        ]},
        { id: "1-2", label: "App.tsx" },
      ],
    },
    {
      id: "2", 
      label: "lib",
      children: [
        { id: "2-1", label: "utils.ts" },
      ],
    },
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
        { name: "index.css", type: "file" as const },
      ],
    },
    { name: "package.json", type: "file" as const },
  ];

  return (
    <Box minH="100vh" bg="bg">
      <DocsHeader />
      <Container maxWidth="xl" py={12}>
        <VStack spacing={8} align="stretch">
          <Box style={{ textAlign: "center" }}>
            <Badge variant="subtle" colorPalette="blue" mb={4}>
              Interactive
            </Badge>
            <Heading as="h1" size="3xl" mb={4}>
              Component Playground
            </Heading>
            <Text size="lg" color="muted.fg" maxW="600px" mx="auto">
              Experiment with IndoUI components including our custom-built Code Editor.
            </Text>
          </Box>

          <Card variant="elevated" p={6}>
            <Tabs defaultValue="editor" variant="line">
              <TabList mb={6}>
                <Tab value="editor">Code Editor</Tab>
                <Tab value="colorpicker">Color Picker</Tab>
                <Tab value="treeview">Tree View</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="editor">
                  <VStack spacing={4} align="stretch">
                    <HStack spacing={4}>
                      <Box flex={1}>
                        <Text size="sm" weight="medium" mb={2}>Language</Text>
                        <Select
                          value={language}
                          onChange={setLanguage}
                          options={[
                            { value: "tsx", label: "TypeScript JSX" },
                            { value: "javascript", label: "JavaScript" },
                            { value: "css", label: "CSS" },
                            { value: "json", label: "JSON" },
                            { value: "html", label: "HTML" },
                          ]}
                        />
                      </Box>
                      <Box flex={1}>
                        <Text size="sm" weight="medium" mb={2}>Theme</Text>
                        <Select
                          value={theme}
                          onChange={(v) => setTheme(v as "light" | "dark")}
                          options={[
                            { value: "dark", label: "Dark" },
                            { value: "light", label: "Light" },
                          ]}
                        />
                      </Box>
                    </HStack>
                    <CodeEditor
                      value={code}
                      onChange={setCode}
                      language={language}
                      theme={theme}
                      lineNumbers
                      highlightActiveLine
                      minHeight="400px"
                    />
                  </VStack>
                </TabPanel>

                <TabPanel value="colorpicker">
                  <VStack spacing={6} align="stretch">
                    <Text size="lg" weight="medium">Pick a Color</Text>
                    <ColorPicker
                      value={selectedColor}
                      onChange={setSelectedColor}
                    />
                    <Box p={4} rounded="lg" style={{ backgroundColor: selectedColor }}>
                      <Text style={{ color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        Selected: {selectedColor}
                      </Text>
                    </Box>
                  </VStack>
                </TabPanel>

                <TabPanel value="treeview">
                  <HStack spacing={6} align="flex-start">
                    <Box flex={1}>
                      <Text size="sm" weight="medium" mb={3}>TreeView Component</Text>
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
                    <Box flex={1}>
                      <Text size="sm" weight="medium" mb={3}>FileTree Component</Text>
                      <FileTree
                        items={fileTreeItems}
                        onSelect={(path, item) => console.log('Selected:', path)}
                      />
                    </Box>
                  </HStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Card>
        </VStack>
      </Container>
    </Box>
  );
};

export default Playground;
