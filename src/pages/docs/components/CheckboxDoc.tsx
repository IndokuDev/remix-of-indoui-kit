import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
  Checkbox,
  CheckboxGroup,
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

const CheckboxDoc = () => {
  const [checked, setChecked] = useState(false);
  const [groupValue, setGroupValue] = useState<string[]>(["react"]);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Form</Badge>
          <Heading as="h1" size="3xl" mb={4}>Checkbox</Heading>
          <Text size="lg" color="muted.fg">
            Checkbox component for boolean input with optional label and group support.
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
                  <Checkbox>Default checkbox</Checkbox>
                  <Checkbox defaultChecked>Checked by default</Checkbox>
                  <Checkbox isDisabled>Disabled</Checkbox>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Checkbox>Default checkbox</Checkbox>
<Checkbox defaultChecked>Checked by default</Checkbox>
<Checkbox isDisabled>Disabled</Checkbox>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Controlled</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Checkbox isChecked={checked} onChange={setChecked}>
                  Controlled: {checked ? "Checked" : "Unchecked"}
                </Checkbox>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`const [checked, setChecked] = useState(false);

<Checkbox isChecked={checked} onChange={setChecked}>
  Controlled: {checked ? "Checked" : "Unchecked"}
</Checkbox>`}
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
                <HStack spacing={6} align="center">
                  <Checkbox size="sm">Small</Checkbox>
                  <Checkbox size="md">Medium</Checkbox>
                  <Checkbox size="lg">Large</Checkbox>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Checkbox size="sm">Small</Checkbox>
<Checkbox size="md">Medium</Checkbox>
<Checkbox size="lg">Large</Checkbox>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Checkbox Group</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="flex-start">
                  <Text size="sm" color="muted.fg">Selected: {groupValue.join(", ") || "none"}</Text>
                  <VStack spacing={2} align="flex-start">
                    <Checkbox 
                      isChecked={groupValue.includes("react")} 
                      onChange={(checked) => {
                        if (checked) setGroupValue([...groupValue, "react"]);
                        else setGroupValue(groupValue.filter(v => v !== "react"));
                      }}
                    >React</Checkbox>
                    <Checkbox 
                      isChecked={groupValue.includes("vue")} 
                      onChange={(checked) => {
                        if (checked) setGroupValue([...groupValue, "vue"]);
                        else setGroupValue(groupValue.filter(v => v !== "vue"));
                      }}
                    >Vue</Checkbox>
                    <Checkbox 
                      isChecked={groupValue.includes("angular")} 
                      onChange={(checked) => {
                        if (checked) setGroupValue([...groupValue, "angular"]);
                        else setGroupValue(groupValue.filter(v => v !== "angular"));
                      }}
                    >Angular</Checkbox>
                    <Checkbox 
                      isChecked={groupValue.includes("svelte")} 
                      onChange={(checked) => {
                        if (checked) setGroupValue([...groupValue, "svelte"]);
                        else setGroupValue(groupValue.filter(v => v !== "svelte"));
                      }}
                    >Svelte</Checkbox>
                  </VStack>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`const [groupValue, setGroupValue] = useState(['react']);

<CheckboxGroup value={groupValue} onChange={setGroupValue}>
  <Checkbox value="react">React</Checkbox>
  <Checkbox value="vue">Vue</Checkbox>
  <Checkbox value="angular">Angular</Checkbox>
  <Checkbox value="svelte">Svelte</Checkbox>
</CheckboxGroup>`}
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
                <TableCell><code>isChecked</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Controlled checked state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>defaultChecked</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Initial checked state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onChange</code></TableCell>
                <TableCell>(checked: boolean) =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Change handler</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>size</code></TableCell>
                <TableCell>'sm' | 'md' | 'lg'</TableCell>
                <TableCell>'md'</TableCell>
                <TableCell>Checkbox size</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isDisabled</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Disable the checkbox</TableCell>
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

export default CheckboxDoc;
