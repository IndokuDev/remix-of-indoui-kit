import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
  Button,
  useToast,
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

const ToastDoc = () => {
  const { toast } = useToast();

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="amber" mb={4}>Feedback</Badge>
          <Heading as="h1" size="3xl" mb={4}>Toast</Heading>
          <Text size="lg" color="muted.fg">
            Show brief notifications using the useToast hook with configurable placement.
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
                <HStack spacing={2}>
                  <Button onClick={() => toast({ title: 'Info toast', status: 'info' })}>Info</Button>
                  <Button colorPalette="green" onClick={() => toast({ title: 'Success!', status: 'success' })}>Success</Button>
                  <Button colorPalette="amber" onClick={() => toast({ title: 'Warning', status: 'warning' })}>Warning</Button>
                  <Button colorPalette="red" onClick={() => toast({ title: 'Error', status: 'error' })}>Error</Button>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { useToast } from '@indoui/react';

const { toast } = useToast();

toast({ title: 'Info', status: 'info' });
toast({ title: 'Success', status: 'success' });
toast({ title: 'Warning', status: 'warning' });
toast({ title: 'Error', status: 'error' });`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Placement</Heading>
          <HStack spacing={2}>
            <Button variant="outline" onClick={() => toast({ title: 'Top Left', position: 'top-left' })}>Top Left</Button>
            <Button variant="outline" onClick={() => toast({ title: 'Top Right', position: 'top-right' })}>Top Right</Button>
            <Button variant="outline" onClick={() => toast({ title: 'Bottom Left', position: 'bottom-left' })}>Bottom Left</Button>
            <Button variant="outline" onClick={() => toast({ title: 'Bottom Right', position: 'bottom-right' })}>Bottom Right</Button>
          </HStack>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>useToast Options</Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Option</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Default</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><code>title</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>status</code></TableCell>
                <TableCell>'info' | 'success' | 'warning' | 'error'</TableCell>
                <TableCell>'info'</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>position</code></TableCell>
                <TableCell>'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'</TableCell>
                <TableCell>'bottom-right'</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>duration</code></TableCell>
                <TableCell>number</TableCell>
                <TableCell>3000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default ToastDoc;
