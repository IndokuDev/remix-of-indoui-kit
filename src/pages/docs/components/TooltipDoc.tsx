import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Button, Tooltip,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const TooltipDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="orange" mb={4}>Data Display</Badge>
          <Heading as="h1" size="3xl" mb={4}>Tooltip</Heading>
          <Text size="lg" color="muted.fg">
            Show contextual information on hover.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Usage</Heading>
          <HStack spacing={4}>
            <Tooltip label="This is a tooltip">
              <Button>Hover me</Button>
            </Tooltip>
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Placement</Heading>
          <HStack spacing={4} wrap="wrap">
            <Tooltip label="Top tooltip" placement="top">
              <Button variant="outline" size="sm">Top</Button>
            </Tooltip>
            <Tooltip label="Bottom tooltip" placement="bottom">
              <Button variant="outline" size="sm">Bottom</Button>
            </Tooltip>
            <Tooltip label="Left tooltip" placement="left">
              <Button variant="outline" size="sm">Left</Button>
            </Tooltip>
            <Tooltip label="Right tooltip" placement="right">
              <Button variant="outline" size="sm">Right</Button>
            </Tooltip>
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Tooltip label="Helpful information" placement="top">
  <Button>Hover me</Button>
</Tooltip>

<Tooltip label="Another tip" placement="right">
  <IconButton icon={<InfoIcon />} />
</Tooltip>`}
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
              <TableRow><TableCell><code>label</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>placement</code></TableCell><TableCell>'top' | 'bottom' | 'left' | 'right'</TableCell><TableCell>'top'</TableCell></TableRow>
              <TableRow><TableCell><code>hasArrow</code></TableCell><TableCell>boolean</TableCell><TableCell>true</TableCell></TableRow>
              <TableRow><TableCell><code>openDelay</code></TableCell><TableCell>number</TableCell><TableCell>0</TableCell></TableRow>
              <TableRow><TableCell><code>closeDelay</code></TableCell><TableCell>number</TableCell><TableCell>0</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default TooltipDoc;
