import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Badge,
  ColorPicker,
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

const ColorPickerDoc = () => {
  const [color, setColor] = useState("#3b82f6");

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>
            Component
          </Badge>
          <Heading as="h1" size="3xl" mb={4}>
            ColorPicker
          </Heading>
          <Text size="lg" color="muted.fg">
            A color picker component with swatches and custom color input.
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
                  <ColorPicker value={color} onChange={setColor} />
                  <Box
                    p={4}
                    rounded="lg"
                    style={{ backgroundColor: color, minWidth: "200px" }}
                  >
                    <Text style={{ color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                      Selected: {color}
                    </Text>
                  </Box>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { ColorPicker } from '@indoui/react';

function Example() {
  const [color, setColor] = useState("#3b82f6");
  
  return (
    <ColorPicker
      value={color}
      onChange={setColor}
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
            Custom Swatches
          </Heading>
          <Card variant="outline" p={6}>
            <ColorPicker
              value={color}
              onChange={setColor}
              presetColors={[
                "#1a1a1a", "#333333", "#666666", "#999999", "#cccccc", "#ffffff",
                "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff",
              ]}
            />
          </Card>
        </Box>

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
                <TableCell>Controlled color value (hex format)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onChange</code></TableCell>
                <TableCell>(color: string) =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Callback when color changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>swatches</code></TableCell>
                <TableCell>string[]</TableCell>
                <TableCell>default palette</TableCell>
                <TableCell>Array of preset color swatches</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>showInput</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Show text input for color</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isDisabled</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Disable the color picker</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default ColorPickerDoc;
