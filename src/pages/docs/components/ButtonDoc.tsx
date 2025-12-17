import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
  Button,
  IconButton,
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

const ButtonDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Form</Badge>
          <Heading as="h1" size="3xl" mb={4}>Button</Heading>
          <Text size="lg" color="muted.fg">
            Button component for triggering actions with multiple variants and sizes.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Variants</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <HStack spacing={4} wrap="wrap">
                  <Button variant="solid">Solid</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Color Palettes</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="flex-start">
                  <HStack spacing={2} wrap="wrap">
                    <Button colorPalette="blue">Blue</Button>
                    <Button colorPalette="red">Red</Button>
                    <Button colorPalette="green">Green</Button>
                    <Button colorPalette="amber">Amber</Button>
                    <Button colorPalette="purple">Purple</Button>
                    <Button colorPalette="gray">Gray</Button>
                  </HStack>
                  <HStack spacing={2} wrap="wrap">
                    <Button variant="outline" colorPalette="blue">Blue</Button>
                    <Button variant="outline" colorPalette="red">Red</Button>
                    <Button variant="outline" colorPalette="green">Green</Button>
                  </HStack>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Button colorPalette="blue">Blue</Button>
<Button colorPalette="red">Red</Button>
<Button colorPalette="green">Green</Button>
<Button colorPalette="amber">Amber</Button>
<Button colorPalette="purple">Purple</Button>

// Outline variant with colors
<Button variant="outline" colorPalette="blue">Blue</Button>`}
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
                <HStack spacing={4} align="center">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
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
                <HStack spacing={4}>
                  <Button isLoading>Loading</Button>
                  <Button isDisabled>Disabled</Button>
                  <Button leftIcon={<span>👋</span>}>With Icon</Button>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Button isLoading>Loading</Button>
<Button isDisabled>Disabled</Button>
<Button leftIcon={<Icon />}>With Icon</Button>`}
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
                <TableCell>'solid' | 'outline' | 'ghost' | 'link'</TableCell>
                <TableCell>'solid'</TableCell>
                <TableCell>Button style variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>size</code></TableCell>
                <TableCell>'xs' | 'sm' | 'md' | 'lg'</TableCell>
                <TableCell>'md'</TableCell>
                <TableCell>Button size</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>colorPalette</code></TableCell>
                <TableCell>'blue' | 'red' | 'green' | 'amber' | ...</TableCell>
                <TableCell>'blue'</TableCell>
                <TableCell>Color palette</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isLoading</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Show loading spinner</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isDisabled</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Disable the button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>leftIcon</code></TableCell>
                <TableCell>ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Icon on the left</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>rightIcon</code></TableCell>
                <TableCell>ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Icon on the right</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default ButtonDoc;
