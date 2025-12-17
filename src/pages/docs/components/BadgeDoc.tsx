import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
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

const BadgeDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="teal" mb={4}>Data Display</Badge>
          <Heading as="h1" size="3xl" mb={4}>Badge</Heading>
          <Text size="lg" color="muted.fg">
            Small labels for categorization or status indication.
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
                <HStack spacing={4}>
                  <Badge variant="solid">Solid</Badge>
                  <Badge variant="subtle">Subtle</Badge>
                  <Badge variant="outline">Outline</Badge>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Badge variant="solid">Solid</Badge>
<Badge variant="subtle">Subtle</Badge>
<Badge variant="outline">Outline</Badge>`}
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
                    <Badge colorPalette="gray">Gray</Badge>
                    <Badge colorPalette="red">Red</Badge>
                    <Badge colorPalette="orange">Orange</Badge>
                    <Badge colorPalette="amber">Amber</Badge>
                    <Badge colorPalette="yellow">Yellow</Badge>
                    <Badge colorPalette="green">Green</Badge>
                    <Badge colorPalette="green">Green</Badge>
                    <Badge colorPalette="teal">Teal</Badge>
                  </HStack>
                  <HStack spacing={2} wrap="wrap">
                    <Badge colorPalette="cyan">Cyan</Badge>
                    <Badge colorPalette="blue">Blue</Badge>
                    <Badge colorPalette="indigo">Indigo</Badge>
                    <Badge colorPalette="purple">Purple</Badge>
                    <Badge colorPalette="pink">Pink</Badge>
                    <Badge colorPalette="rose">Rose</Badge>
                  </HStack>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Badge colorPalette="gray">Gray</Badge>
<Badge colorPalette="red">Red</Badge>
<Badge colorPalette="green">Green</Badge>
<Badge colorPalette="blue">Blue</Badge>
<Badge colorPalette="purple">Purple</Badge>
<Badge colorPalette="amber">Amber</Badge>`}
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
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}
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
                <TableCell>'solid' | 'subtle' | 'outline'</TableCell>
                <TableCell>'subtle'</TableCell>
                <TableCell>Badge style variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>size</code></TableCell>
                <TableCell>'sm' | 'md' | 'lg'</TableCell>
                <TableCell>'md'</TableCell>
                <TableCell>Badge size</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>colorPalette</code></TableCell>
                <TableCell>'gray' | 'red' | 'green' | 'blue' | ...</TableCell>
                <TableCell>'gray'</TableCell>
                <TableCell>Color palette</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default BadgeDoc;
