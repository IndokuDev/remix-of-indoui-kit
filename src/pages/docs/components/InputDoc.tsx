import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Badge,
  Input,
  PasswordInput,
  NumberInput,
  PinInput,
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

const InputDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Form</Badge>
          <Heading as="h1" size="3xl" mb={4}>Input</Heading>
          <Text size="lg" color="muted.fg">
            Input components for text entry including password, number, and pin inputs.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Input</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} maxW="400px">
                  <Input placeholder="Basic input" />
                  <Input placeholder="Disabled" isDisabled />
                  <Input placeholder="Invalid" isInvalid />
                  <Input placeholder="Read only" value="Read only value" isReadOnly />
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Input placeholder="Basic input" />
<Input placeholder="Disabled" isDisabled />
<Input placeholder="Invalid" isInvalid />
<Input placeholder="Read only" value="Read only value" isReadOnly />`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Variants & Sizes</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} maxW="400px">
                  <Input placeholder="Outline (default)" variant="outline" />
                  <Input placeholder="Filled" variant="filled" />
                  <Input placeholder="Flushed" variant="flushed" />
                  <Input placeholder="Small" size="sm" />
                  <Input placeholder="Medium" size="md" />
                  <Input placeholder="Large" size="lg" />
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Input placeholder="Outline" variant="outline" />
<Input placeholder="Filled" variant="filled" />
<Input placeholder="Flushed" variant="flushed" />

<Input placeholder="Small" size="sm" />
<Input placeholder="Medium" size="md" />
<Input placeholder="Large" size="lg" />`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Password Input</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} maxW="400px">
                  <PasswordInput placeholder="Enter password" />
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { PasswordInput } from '@indoui/react';

<PasswordInput placeholder="Enter password" />`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Number Input</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} maxW="400px">
                  <NumberInput defaultValue={10} min={0} max={100} step={5} />
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { NumberInput } from '@indoui/react';

<NumberInput defaultValue={10} min={0} max={100} step={5} />`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Pin Input</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4}>
                  <PinInput length={4} />
                  <PinInput length={6} mask />
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { PinInput } from '@indoui/react';

<PinInput length={4} />
<PinInput length={6} mask />`}
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
                <TableCell><code>variant</code></TableCell>
                <TableCell>'outline' | 'filled' | 'flushed'</TableCell>
                <TableCell>'outline'</TableCell>
                <TableCell>Input style variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>size</code></TableCell>
                <TableCell>'sm' | 'md' | 'lg'</TableCell>
                <TableCell>'md'</TableCell>
                <TableCell>Input size</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isDisabled</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Disable input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isInvalid</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Show invalid state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isReadOnly</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Make input read-only</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default InputDoc;
