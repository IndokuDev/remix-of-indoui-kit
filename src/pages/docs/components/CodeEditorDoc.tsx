import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Badge,
  CodeEditor,
  Select,
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

const CodeEditorDoc = () => {
  const [code, setCode] = useState(`// Welcome to IndoUI CodeEditor
import { Button, Card } from '@indoui/react';

function App() {
  const greeting = "Hello, World!";
  return (
    <Card p={4}>
      <Button colorPalette="blue">
        {greeting}
      </Button>
    </Card>
  );
}

export default App;`);

  const [language, setLanguage] = useState("tsx");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="blue" mb={4}>
            Component
          </Badge>
          <Heading as="h1" size="3xl" mb={4}>
            CodeEditor
          </Heading>
          <Text size="lg" color="muted.fg">
            A fully-featured code editor with syntax highlighting, line numbers, and auto-indentation.
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
                <VStack spacing={4} align="stretch">
                  <Box display="flex" gap={4}>
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
                  </Box>
                  <CodeEditor
                    value={code}
                    onChange={setCode}
                    language={language}
                    theme={theme}
                    lineNumbers
                    highlightActiveLine
                    minHeight="300px"
                  />
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { CodeEditor } from '@indoui/react';

function Example() {
  const [code, setCode] = useState('// Your code here');
  
  return (
    <CodeEditor
      value={code}
      onChange={setCode}
      language="tsx"
      theme="dark"
      lineNumbers
      highlightActiveLine
      minHeight="300px"
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
                <TableCell><code>value</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Controlled value of the editor</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onChange</code></TableCell>
                <TableCell>(value: string) =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Callback when content changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>language</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>"javascript"</TableCell>
                <TableCell>Syntax highlighting language</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>theme</code></TableCell>
                <TableCell>"light" | "dark"</TableCell>
                <TableCell>"dark"</TableCell>
                <TableCell>Editor color theme</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>lineNumbers</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Show line numbers</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>highlightActiveLine</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Highlight the active line</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>tabSize</code></TableCell>
                <TableCell>number</TableCell>
                <TableCell>2</TableCell>
                <TableCell>Number of spaces for tab</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>readOnly</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Make editor read-only</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Supported Languages
          </Heading>
          <Text color="muted.fg" mb={4}>
            The CodeEditor supports syntax highlighting for the following languages:
          </Text>
          <Box display="flex" gap={2} flexWrap="wrap">
            {["javascript", "typescript", "jsx", "tsx", "css", "html", "json"].map((lang) => (
              <Badge key={lang} variant="outline">{lang}</Badge>
            ))}
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default CodeEditorDoc;
