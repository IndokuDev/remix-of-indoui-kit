import {
  Box, VStack, Container, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const ContainerDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Layout</Badge>
          <Heading as="h1" size="3xl" mb={4}>Container</Heading>
          <Text size="lg" color="muted.fg">
            A component to center content and constrain max-width with responsive sizing.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Sizes</Heading>
          <VStack spacing={4} align="stretch">
            <Container maxW="sm" bg="blue.100" p={4} rounded="md">
              <Text>Small Container (max-width: 640px)</Text>
            </Container>
            <Container maxW="md" bg="green.100" p={4} rounded="md">
              <Text>Medium Container (max-width: 768px)</Text>
            </Container>
            <Container maxW="lg" bg="amber.100" p={4} rounded="md">
              <Text>Large Container (max-width: 1024px)</Text>
            </Container>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Container maxW="lg" centerContent>
  <Heading>Centered Content</Heading>
  <Text>This content is centered within the container.</Text>
</Container>`}
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
              <TableRow><TableCell><code>maxW</code></TableCell><TableCell>'sm' | 'md' | 'lg' | 'xl' | '2xl' | string</TableCell><TableCell>'lg'</TableCell></TableRow>
              <TableRow><TableCell><code>centerContent</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContainerDoc;
