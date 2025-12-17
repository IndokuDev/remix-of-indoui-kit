import {
  Box, VStack, HStack, Stack, Heading, Text, Card, Badge,
  Tabs, TabList, Tab, TabPanels, TabPanel,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const StackDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Layout</Badge>
          <Heading as="h1" size="3xl" mb={4}>Stack</Heading>
          <Text size="lg" color="muted.fg">
            Stack, VStack, and HStack for arranging elements with consistent spacing.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>VStack (Vertical)</Heading>
          <VStack spacing={3} p={4} bg="gray.100" rounded="md" align="stretch">
            <Box bg="blue.500" p={3} rounded="md" color="white">Item 1</Box>
            <Box bg="blue.500" p={3} rounded="md" color="white">Item 2</Box>
            <Box bg="blue.500" p={3} rounded="md" color="white">Item 3</Box>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>HStack (Horizontal)</Heading>
          <HStack spacing={3} p={4} bg="gray.100" rounded="md">
            <Box bg="green.500" p={3} rounded="md" color="white">Item 1</Box>
            <Box bg="green.500" p={3} rounded="md" color="white">Item 2</Box>
            <Box bg="green.500" p={3} rounded="md" color="white">Item 3</Box>
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`// Vertical Stack
<VStack spacing={4}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</VStack>

// Horizontal Stack
<HStack spacing={4}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</HStack>`}
          />
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
              <TableRow><TableCell><code>spacing</code></TableCell><TableCell>number | string</TableCell><TableCell>0</TableCell></TableRow>
              <TableRow><TableCell><code>align</code></TableCell><TableCell>string</TableCell><TableCell>'stretch'</TableCell></TableRow>
              <TableRow><TableCell><code>justify</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>divider</code></TableCell><TableCell>ReactNode</TableCell><TableCell>-</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default StackDoc;
