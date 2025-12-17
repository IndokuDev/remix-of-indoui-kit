import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
  Tag,
  TagLabel,
  TagCloseButton,
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

const TagDoc = () => {
  const [tags, setTags] = useState(['React', 'TypeScript', 'IndoUI']);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="teal" mb={4}>Data Display</Badge>
          <Heading as="h1" size="3xl" mb={4}>Tag</Heading>
          <Text size="lg" color="muted.fg">
            Tags are used to label, categorize, or organize items using keywords.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Tags</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <HStack spacing={2}>
                  <Tag>Default</Tag>
                  <Tag colorPalette="blue">Blue</Tag>
                  <Tag colorPalette="green">Green</Tag>
                  <Tag colorPalette="red">Red</Tag>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Tag>Default</Tag>
<Tag colorPalette="blue">Blue</Tag>
<Tag colorPalette="green">Green</Tag>
<Tag colorPalette="red">Red</Tag>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Variants</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="flex-start">
                  <HStack spacing={2}>
                    <Tag variant="solid" colorPalette="blue">Solid</Tag>
                    <Tag variant="subtle" colorPalette="blue">Subtle</Tag>
                    <Tag variant="outline" colorPalette="blue">Outline</Tag>
                  </HStack>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Tag variant="solid" colorPalette="blue">Solid</Tag>
<Tag variant="subtle" colorPalette="blue">Subtle</Tag>
<Tag variant="outline" colorPalette="blue">Outline</Tag>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Close Button</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <HStack spacing={2}>
                  {tags.map((tag) => (
                    <Tag key={tag} colorPalette="blue">
                      <TagLabel>{tag}</TagLabel>
                      <TagCloseButton onClick={() => setTags(tags.filter(t => t !== tag))} />
                    </Tag>
                  ))}
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Tag colorPalette="blue">
  <TagLabel>React</TagLabel>
  <TagCloseButton onClick={() => handleRemove('React')} />
</Tag>`}
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
                  <Tag size="sm">Small</Tag>
                  <Tag size="md">Medium</Tag>
                  <Tag size="lg">Large</Tag>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Tag size="sm">Small</Tag>
<Tag size="md">Medium</Tag>
<Tag size="lg">Large</Tag>`}
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
                <TableCell>Tag style variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>size</code></TableCell>
                <TableCell>'sm' | 'md' | 'lg'</TableCell>
                <TableCell>'md'</TableCell>
                <TableCell>Tag size</TableCell>
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

export default TagDoc;
