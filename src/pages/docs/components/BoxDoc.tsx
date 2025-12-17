import {
  Box,
  VStack,
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

const BoxDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="blue" mb={4}>Layout</Badge>
          <Heading as="h1" size="3xl" mb={4}>Box</Heading>
          <Text size="lg" color="muted.fg">
            The most fundamental layout component. Box renders a div with style props support.
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
                <VStack spacing={4}>
                  <Box bg="blue" p={4} borderRadius="md">
                    <Text color="white">Basic Box with blue background</Text>
                  </Box>
                  <Box bg="gray.100" p={4} borderRadius="lg" shadow="md">
                    <Text>Box with shadow</Text>
                  </Box>
                  <Box 
                    bg="gradient-to-r" 
                    p={6} 
                    borderRadius="xl"
                    style={{ background: 'linear-gradient(to right, #667eea, #764ba2)' }}
                  >
                    <Text color="white">Gradient Box</Text>
                  </Box>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { Box, Text } from '@indoui/react';

// Basic usage
<Box bg="blue" p={4} borderRadius="md">
  <Text color="white">Basic Box</Text>
</Box>

// With shadow
<Box bg="gray.100" p={4} borderRadius="lg" shadow="md">
  <Text>Box with shadow</Text>
</Box>

// All style props available
<Box
  w="100%"
  h="200px"
  p={4}
  m={2}
  bg="red"
  borderRadius="xl"
  shadow="lg"
>
  Content
</Box>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Style Props</Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Prop</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><code>w, h</code></TableCell>
                <TableCell>string | number</TableCell>
                <TableCell>Width and height</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>p, px, py, pt, pr, pb, pl</code></TableCell>
                <TableCell>string | number</TableCell>
                <TableCell>Padding</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>m, mx, my, mt, mr, mb, ml</code></TableCell>
                <TableCell>string | number</TableCell>
                <TableCell>Margin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>bg, bgColor</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>Background color (e.g., "blue", "gray.300")</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>color</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>Text color</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>borderRadius</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>Border radius (sm, md, lg, xl, full)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>shadow</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>Box shadow (sm, md, lg, xl)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default BoxDoc;
