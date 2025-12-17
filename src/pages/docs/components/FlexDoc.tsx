import {
  Box, VStack, HStack, Flex, Heading, Text, Card, Badge,
  Tabs, TabList, Tab, TabPanels, TabPanel,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const FlexDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Layout</Badge>
          <Heading as="h1" size="3xl" mb={4}>Flex</Heading>
          <Text size="lg" color="muted.fg">
            A layout component for flexbox-based layouts with full control over alignment, direction, and spacing.
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
                <Flex gap={4} p={4} bg="gray.100" rounded="md">
                  <Box bg="blue.500" p={4} rounded="md" color="white">Box 1</Box>
                  <Box bg="green.500" p={4} rounded="md" color="white">Box 2</Box>
                  <Box bg="red.500" p={4} rounded="md" color="white">Box 3</Box>
                </Flex>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Flex gap={4}>
  <Box bg="blue.500" p={4}>Box 1</Box>
  <Box bg="green.500" p={4}>Box 2</Box>
  <Box bg="red.500" p={4}>Box 3</Box>
</Flex>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Direction & Wrap</Heading>
          <VStack spacing={4} align="stretch">
            <Flex direction="column" gap={2} p={4} bg="gray.100" rounded="md">
              <Box bg="amber.500" p={3} rounded="md">Column 1</Box>
              <Box bg="amber.500" p={3} rounded="md">Column 2</Box>
            </Flex>
            <Flex wrap="wrap" gap={2} p={4} bg="gray.100" rounded="md">
              {[1,2,3,4,5,6].map(i => (
                <Box key={i} bg="purple.500" p={3} rounded="md" color="white">Item {i}</Box>
              ))}
            </Flex>
          </VStack>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Props</Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Prop</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Default</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow><TableCell><code>direction</code></TableCell><TableCell>'row' | 'column' | 'row-reverse' | 'column-reverse'</TableCell><TableCell>'row'</TableCell></TableRow>
              <TableRow><TableCell><code>wrap</code></TableCell><TableCell>'wrap' | 'nowrap' | 'wrap-reverse'</TableCell><TableCell>'nowrap'</TableCell></TableRow>
              <TableRow><TableCell><code>align</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>justify</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>gap</code></TableCell><TableCell>number | string</TableCell><TableCell>-</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default FlexDoc;
