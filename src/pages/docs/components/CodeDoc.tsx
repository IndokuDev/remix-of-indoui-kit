import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Code, InlineCode,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const CodeDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="pink" mb={4}>Typography</Badge>
          <Heading as="h1" size="3xl" mb={4}>Code</Heading>
          <Text size="lg" color="muted.fg">
            Display inline code and code blocks with syntax highlighting.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Inline Code</Heading>
          <Text>
            Use <InlineCode>npm install</InlineCode> to install packages. 
            The <InlineCode>useState</InlineCode> hook is commonly used in React.
          </Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code Block</Heading>
          <Code p={4} rounded="md" display="block">
{`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`}
          </Code>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Usage</Heading>
          <CodeBlock
            language="tsx"
            code={`// Inline code
<Text>Run <InlineCode>npm start</InlineCode> to begin</Text>

// Code block
<Code display="block" p={4}>
  const x = 1;
</Code>`}
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
              <TableRow><TableCell><code>children</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>colorPalette</code></TableCell><TableCell>ColorName</TableCell><TableCell>'gray'</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default CodeDoc;
