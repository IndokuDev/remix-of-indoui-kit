import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
  Radio,
  RadioGroup,
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

const RadioDoc = () => {
  const [value, setValue] = useState("react");

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Form</Badge>
          <Heading as="h1" size="3xl" mb={4}>Radio</Heading>
          <Text size="lg" color="muted.fg">
            Radio component for single selection within a group.
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
                  <Text size="sm" color="muted.fg">Selected: {value}</Text>
                  <RadioGroup value={value} onChange={setValue}>
                    <Radio value="react">React</Radio>
                    <Radio value="vue">Vue</Radio>
                    <Radio value="angular">Angular</Radio>
                  </RadioGroup>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`const [value, setValue] = useState('react');

<RadioGroup value={value} onChange={setValue}>
  <Radio value="react">React</Radio>
  <Radio value="vue">Vue</Radio>
  <Radio value="angular">Angular</Radio>
</RadioGroup>`}
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
                <VStack spacing={6} align="flex-start">
                  <RadioGroup defaultValue="a" size="sm">
                    <HStack spacing={4}>
                      <Radio value="a">Small A</Radio>
                      <Radio value="b">Small B</Radio>
                    </HStack>
                  </RadioGroup>
                  <RadioGroup defaultValue="a" size="md">
                    <HStack spacing={4}>
                      <Radio value="a">Medium A</Radio>
                      <Radio value="b">Medium B</Radio>
                    </HStack>
                  </RadioGroup>
                  <RadioGroup defaultValue="a" size="lg">
                    <HStack spacing={4}>
                      <Radio value="a">Large A</Radio>
                      <Radio value="b">Large B</Radio>
                    </HStack>
                  </RadioGroup>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<RadioGroup size="sm">
  <Radio value="a">Small A</Radio>
  <Radio value="b">Small B</Radio>
</RadioGroup>

<RadioGroup size="md">
  <Radio value="a">Medium A</Radio>
  <Radio value="b">Medium B</Radio>
</RadioGroup>

<RadioGroup size="lg">
  <Radio value="a">Large A</Radio>
  <Radio value="b">Large B</Radio>
</RadioGroup>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Disabled State</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <RadioGroup defaultValue="a" isDisabled>
                  <Radio value="a">Option A</Radio>
                  <Radio value="b">Option B</Radio>
                  <Radio value="c">Option C</Radio>
                </RadioGroup>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<RadioGroup defaultValue="a" isDisabled>
  <Radio value="a">Option A</Radio>
  <Radio value="b">Option B</Radio>
  <Radio value="c">Option C</Radio>
</RadioGroup>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API Reference</Heading>
          
          <Heading as="h3" size="lg" mb={3}>RadioGroup</Heading>
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
                <TableCell><code>size</code></TableCell>
                <TableCell>'sm' | 'md' | 'lg'</TableCell>
                <TableCell>'md'</TableCell>
                <TableCell>Radio size</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isDisabled</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Disable all radios</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </Box>

          <Heading as="h3" size="lg" mb={3}>Radio</Heading>
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
                <TableCell>required</TableCell>
                <TableCell>Radio value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isDisabled</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Disable this radio</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default RadioDoc;
