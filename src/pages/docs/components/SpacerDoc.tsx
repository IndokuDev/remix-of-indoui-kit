import {
  Box, VStack, HStack, Flex, Spacer, Heading, Text, Card, Badge, Button,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const SpacerDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Layout</Badge>
          <Heading as="h1" size="3xl" mb={4}>Spacer</Heading>
          <Text size="lg" color="muted.fg">
            Creates adjustable empty space to distribute items in a flex container.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Usage</Heading>
          <Flex p={4} bg="gray.100" rounded="md">
            <Box bg="blue.500" p={3} rounded="md" color="white">Left</Box>
            <Spacer />
            <Box bg="green.500" p={3} rounded="md" color="white">Right</Box>
          </Flex>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Navigation Example</Heading>
          <Flex p={4} bg="gray.100" rounded="md" align="center">
            <Heading size="md">Logo</Heading>
            <Spacer />
            <HStack spacing={2}>
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About</Button>
              <Button colorPalette="blue">Contact</Button>
            </HStack>
          </Flex>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Flex>
  <Box>Left Content</Box>
  <Spacer />
  <Box>Right Content</Box>
</Flex>`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Props</Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Prop</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow><TableCell><code>-</code></TableCell><TableCell>-</TableCell><TableCell>Spacer takes no props, uses flex: 1</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default SpacerDoc;
