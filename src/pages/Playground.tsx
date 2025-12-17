import { useState } from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  CodeEditor,
  FileTree,
  WebPlayer,
  IconButton,
  Button,
  Badge,
  Divider,
} from "../../lib/indoui/src";
import { DocsHeader } from "../components/docs/DocsHeader";
import { Play, X, Plus, File, FolderOpen, Terminal, Eye, Code2, Settings, RefreshCw } from "lucide-react";

interface OpenFile {
  id: string;
  name: string;
  content: string;
  language: string;
}

const defaultFiles: Record<string, { content: string; language: string }> = {
  "src/App.tsx": {
    content: `import { Button, Card, Text, VStack } from '@indoui/react';

function App() {
  return (
    <Card p={6} maxW="400px">
      <VStack spacing={4}>
        <Text size="xl" weight="bold">
          Welcome to IndoUI
        </Text>
        <Text color="muted.fg">
          Build beautiful React apps with ease.
        </Text>
        <Button colorPalette="blue">
          Get Started
        </Button>
      </VStack>
    </Card>
  );
}

export default App;`,
    language: "tsx",
  },
  "src/components/Header.tsx": {
    content: `import { Box, HStack, Text, Button } from '@indoui/react';

export const Header = () => {
  return (
    <Box as="header" p={4} bg="bg.subtle">
      <HStack justify="space-between">
        <Text size="lg" weight="bold">
          My App
        </Text>
        <HStack spacing={2}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="solid">Contact</Button>
        </HStack>
      </HStack>
    </Box>
  );
};`,
    language: "tsx",
  },
  "src/index.css": {
    content: `/* Global styles */
:root {
  --primary: #3b82f6;
  --secondary: #64748b;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #fafafa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}`,
    language: "css",
  },
  "package.json": {
    content: `{
  "name": "my-indoui-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@indoui/react": "^0.1.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}`,
    language: "json",
  },
};

const fileTreeItems = [
  {
    name: "src",
    type: "folder" as const,
    children: [
      {
        name: "components",
        type: "folder" as const,
        children: [{ name: "Header.tsx", type: "file" as const }],
      },
      { name: "App.tsx", type: "file" as const },
      { name: "index.css", type: "file" as const },
    ],
  },
  { name: "package.json", type: "file" as const },
];

const Playground = () => {
  const [openFiles, setOpenFiles] = useState<OpenFile[]>([
    { id: "src/App.tsx", name: "App.tsx", ...defaultFiles["src/App.tsx"] },
  ]);
  const [activeFileId, setActiveFileId] = useState("src/App.tsx");
  const [bottomTab, setBottomTab] = useState<"console" | "problems" | "output">("console");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "[Info] Development server started",
    "[Info] Compiled successfully in 234ms",
  ]);

  const activeFile = openFiles.find((f) => f.id === activeFileId);

  const handleFileSelect = (path: string) => {
    const existingFile = openFiles.find((f) => f.id === path);
    if (existingFile) {
      setActiveFileId(path);
    } else {
      const fileData = defaultFiles[path];
      if (fileData) {
        const fileName = path.split("/").pop() || path;
        const newFile: OpenFile = {
          id: path,
          name: fileName,
          ...fileData,
        };
        setOpenFiles([...openFiles, newFile]);
        setActiveFileId(path);
      }
    }
  };

  const handleCloseFile = (fileId: string) => {
    const newFiles = openFiles.filter((f) => f.id !== fileId);
    setOpenFiles(newFiles);
    if (activeFileId === fileId && newFiles.length > 0) {
      setActiveFileId(newFiles[newFiles.length - 1].id);
    }
  };

  const handleCodeChange = (newCode: string) => {
    setOpenFiles(
      openFiles.map((f) =>
        f.id === activeFileId ? { ...f, content: newCode } : f
      )
    );
  };

  const handleRun = () => {
    setConsoleLogs([
      ...consoleLogs,
      `[${new Date().toLocaleTimeString()}] Running preview...`,
      "[Info] Preview updated successfully",
    ]);
  };

  return (
    <Box minH="100vh" bg="bg" style={{ display: "flex", flexDirection: "column" }}>
      <DocsHeader />

      {/* Toolbar */}
      <Box
        px={4}
        py={2}
        bg="bg.subtle"
        style={{
          borderBottom: "1px solid var(--indo-border)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Badge variant="subtle" colorPalette="blue">
          <Code2 size={14} style={{ marginRight: "4px" }} />
          Playground
        </Badge>
        <Divider orientation="vertical" h={5} />
        <Button
          size="sm"
          variant="solid"
          colorPalette="green"
          leftIcon={<Play size={14} />}
          onClick={handleRun}
        >
          Run
        </Button>
        <IconButton
          icon={<RefreshCw size={14} />}
          aria-label="Refresh"
          size="sm"
          variant="ghost"
        />
        <Box style={{ flex: 1 }} />
        <IconButton
          icon={<Settings size={14} />}
          aria-label="Settings"
          size="sm"
          variant="ghost"
        />
      </Box>

      {/* Main IDE Area */}
      <Box style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Sidebar - File Explorer */}
        <Box
          w="240px"
          bg="bg.subtle"
          style={{
            borderRight: "1px solid var(--indo-border)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box px={3} py={2} style={{ borderBottom: "1px solid var(--indo-border)" }}>
            <HStack justify="space-between" align="center">
              <Text size="xs" weight="semibold" color="muted.fg" style={{ textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Explorer
              </Text>
              <HStack spacing={1}>
                <IconButton icon={<File size={14} />} aria-label="New File" size="xs" variant="ghost" />
                <IconButton icon={<FolderOpen size={14} />} aria-label="New Folder" size="xs" variant="ghost" />
              </HStack>
            </HStack>
          </Box>
          <Box p={2} style={{ flex: 1, overflow: "auto" }}>
            <FileTree
              items={fileTreeItems}
              onSelect={(path) => handleFileSelect(path)}
            />
          </Box>
        </Box>

        {/* Editor + Preview Area */}
        <Box style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Top area: Editor + Preview */}
          <Box style={{ flex: 1, display: "flex", overflow: "hidden" }}>
            {/* Editor Panel */}
            <Box style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
              {/* File Tabs */}
              <Box
                bg="bg.subtle"
                style={{
                  borderBottom: "1px solid var(--indo-border)",
                  display: "flex",
                  alignItems: "center",
                  overflow: "auto",
                }}
              >
                {openFiles.map((file) => (
                  <Box
                    key={file.id}
                    px={3}
                    py={2}
                    onClick={() => setActiveFileId(file.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                      borderRight: "1px solid var(--indo-border)",
                      backgroundColor: activeFileId === file.id ? "var(--indo-bg)" : "transparent",
                      borderBottom: activeFileId === file.id ? "2px solid var(--indo-primary)" : "2px solid transparent",
                    }}
                  >
                    <Text size="sm" weight={activeFileId === file.id ? "medium" : "normal"}>
                      {file.name}
                    </Text>
                    <Box
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseFile(file.id);
                      }}
                      style={{
                        padding: "2px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        opacity: 0.6,
                      }}
                    >
                      <X size={12} />
                    </Box>
                  </Box>
                ))}
                <IconButton
                  icon={<Plus size={14} />}
                  aria-label="New Tab"
                  size="xs"
                  variant="ghost"
                  mx={2}
                />
              </Box>

              {/* Code Editor */}
              <Box style={{ flex: 1, overflow: "hidden" }}>
                {activeFile ? (
                  <CodeEditor
                    value={activeFile.content}
                    onChange={handleCodeChange}
                    language={activeFile.language}
                    theme="dark"
                    lineNumbers
                    highlightActiveLine
                    style={{ height: "100%", borderRadius: 0, border: "none" }}
                  />
                ) : (
                  <Box
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text color="muted.fg">No file open</Text>
                  </Box>
                )}
              </Box>
            </Box>

            {/* Preview Panel */}
            <Box
              w="50%"
              style={{
                borderLeft: "1px solid var(--indo-border)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                px={3}
                py={2}
                bg="bg.subtle"
                style={{
                  borderBottom: "1px solid var(--indo-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Eye size={14} style={{ color: "var(--indo-muted-fg)" }} />
                <Text size="sm" weight="medium">
                  Preview
                </Text>
              </Box>
              <Box style={{ flex: 1, overflow: "hidden" }}>
                <WebPlayer
                  code={activeFile?.content || "// No code"}
                  language={(activeFile?.language === "tsx" || activeFile?.language === "jsx") ? activeFile.language : "tsx"}
                  showConsole={false}
                  height="100%"
                  theme="dark"
                />
              </Box>
            </Box>
          </Box>

          {/* Bottom Panel - Console/Problems/Output */}
          <Box
            h="180px"
            style={{
              borderTop: "1px solid var(--indo-border)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Tabs value={bottomTab} onChange={(v) => setBottomTab(v as "console" | "problems" | "output")}>
              <TabList style={{ borderBottom: "1px solid var(--indo-border)", paddingLeft: "8px" }}>
                <Tab value="console">
                  <HStack spacing={2}>
                    <Terminal size={14} />
                    <Text size="sm">Console</Text>
                  </HStack>
                </Tab>
                <Tab value="problems">
                  <HStack spacing={2}>
                    <Text size="sm">Problems</Text>
                    <Badge size="sm" variant="subtle" colorPalette="amber">0</Badge>
                  </HStack>
                </Tab>
                <Tab value="output">
                  <Text size="sm">Output</Text>
                </Tab>
              </TabList>
              <TabPanels style={{ flex: 1, overflow: "auto" }}>
                <TabPanel value="console" style={{ padding: "8px 12px" }}>
                  <VStack align="stretch" spacing={1}>
                    {consoleLogs.map((log, i) => (
                      <Text
                        key={i}
                        size="xs"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: log.includes("[Error]")
                            ? "var(--indo-error)"
                            : log.includes("[Warn]")
                            ? "var(--indo-warning)"
                            : "var(--indo-muted-fg)",
                        }}
                      >
                        {log}
                      </Text>
                    ))}
                  </VStack>
                </TabPanel>
                <TabPanel value="problems" style={{ padding: "8px 12px" }}>
                  <Text size="sm" color="muted.fg">
                    No problems detected
                  </Text>
                </TabPanel>
                <TabPanel value="output" style={{ padding: "8px 12px" }}>
                  <Text size="sm" color="muted.fg">
                    Build output will appear here
                  </Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Playground;
