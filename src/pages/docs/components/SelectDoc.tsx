import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
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
import { useState } from "react";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

const SelectDoc = () => {
  const [value, setValue] = useState("");

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Form</Badge>
          <Heading as="h1" size="3xl" mb={4}>Select</Heading>
          <Text size="lg" color="muted.fg">
            Select component for choosing from a list of options.
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
                <VStack spacing={4} align="flex-start">
                  <Text size="sm" color="muted.fg">Selected: {value || "none"}</Text>
                  <Box w="250px">
                    <Select
                      value={value}
                      onChange={setValue}
                      options={options}
                      placeholder="Select a framework"
                    />
                  </Box>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

const [value, setValue] = useState('');

<Select
  value={value}
  onChange={setValue}
  options={options}
  placeholder="Select a framework"
/>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Sizes</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="flex-start">
                  <Box w="250px">
                    <Select size="sm" options={options} placeholder="Small" />
                  </Box>
                  <Box w="250px">
                    <Select size="md" options={options} placeholder="Medium" />
                  </Box>
                  <Box w="250px">
                    <Select size="lg" options={options} placeholder="Large" />
                  </Box>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Select size="sm" options={options} placeholder="Small" />
<Select size="md" options={options} placeholder="Medium" />
<Select size="lg" options={options} placeholder="Large" />`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>States</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="flex-start">
                  <Box w="250px">
                    <Select options={options} isDisabled placeholder="Disabled" />
                  </Box>
                  <Box w="250px">
                    <Select options={options} isInvalid placeholder="Invalid" />
                  </Box>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Select options={options} isDisabled placeholder="Disabled" />
<Select options={options} isInvalid placeholder="Invalid" />`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Disabled Options</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Box w="250px">
                  <Select
                    options={[
                      { value: "react", label: "React" },
                      { value: "vue", label: "Vue", isDisabled: true },
                      { value: "angular", label: "Angular" },
                    ]}
                    placeholder="Select framework"
                  />
                </Box>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Select
  options={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue', isDisabled: true },
    { value: 'angular', label: 'Angular' },
  ]}
  placeholder="Select framework"
/>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API Reference</Heading>
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
                <TableCell><code>options</code></TableCell>
                <TableCell>Array&lt;&#123; value, label, isDisabled? &#125;&gt;</TableCell>
                <TableCell>required</TableCell>
                <TableCell>Options to display</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>value</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Controlled value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>defaultValue</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>''</TableCell>
                <TableCell>Initial value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onChange</code></TableCell>
                <TableCell>(value: string) =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Change handler</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>placeholder</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>'Select an option'</TableCell>
                <TableCell>Placeholder text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>size</code></TableCell>
                <TableCell>'sm' | 'md' | 'lg'</TableCell>
                <TableCell>'md'</TableCell>
                <TableCell>Select size</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isDisabled</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Disable the select</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isInvalid</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Show invalid state</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default SelectDoc;
