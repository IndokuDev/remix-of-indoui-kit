import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
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

const PopoverDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Overlay</Badge>
          <Heading as="h1" size="3xl" mb={4}>Popover</Heading>
          <Text size="lg" color="muted.fg">
            Popover component for displaying floating content with rich structure.
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
                <Popover trigger={<Button>Open Popover</Button>}>
                  <PopoverHeader>Confirmation</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to continue? This action cannot be undone.
                  </PopoverBody>
                  <PopoverFooter>
                    <Button size="sm" variant="ghost">Cancel</Button>
                    <Button size="sm">Confirm</Button>
                  </PopoverFooter>
                </Popover>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Popover trigger={<Button>Open Popover</Button>}>
  <PopoverHeader>Confirmation</PopoverHeader>
  <PopoverBody>
    Are you sure you want to continue? This action cannot be undone.
  </PopoverBody>
  <PopoverFooter>
    <Button size="sm" variant="ghost">Cancel</Button>
    <Button size="sm">Confirm</Button>
  </PopoverFooter>
</Popover>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Placement</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <HStack spacing={4} wrap="wrap">
                  <Popover trigger={<Button size="sm">Top</Button>} placement="top">
                    <PopoverBody>Popover on top</PopoverBody>
                  </Popover>
                  <Popover trigger={<Button size="sm">Bottom</Button>} placement="bottom">
                    <PopoverBody>Popover on bottom</PopoverBody>
                  </Popover>
                  <Popover trigger={<Button size="sm">Left</Button>} placement="left">
                    <PopoverBody>Popover on left</PopoverBody>
                  </Popover>
                  <Popover trigger={<Button size="sm">Right</Button>} placement="right">
                    <PopoverBody>Popover on right</PopoverBody>
                  </Popover>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Popover trigger={<Button>Top</Button>} placement="top">
  <PopoverBody>Popover on top</PopoverBody>
</Popover>

<Popover trigger={<Button>Bottom</Button>} placement="bottom">
  <PopoverBody>Popover on bottom</PopoverBody>
</Popover>

<Popover trigger={<Button>Left</Button>} placement="left">
  <PopoverBody>Popover on left</PopoverBody>
</Popover>

<Popover trigger={<Button>Right</Button>} placement="right">
  <PopoverBody>Popover on right</PopoverBody>
</Popover>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Simple Content</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Popover trigger={<Button variant="outline">Hover Info</Button>}>
                  <Text size="sm">
                    This is a simple popover with just text content.
                    Perfect for additional information or help text.
                  </Text>
                </Popover>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Popover trigger={<Button variant="outline">Hover Info</Button>}>
  <Text size="sm">
    This is a simple popover with just text content.
    Perfect for additional information or help text.
  </Text>
</Popover>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API Reference</Heading>
          
          <Heading as="h3" size="lg" mb={3}>Popover</Heading>
          <Box mb={6}>
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
                <TableCell><code>trigger</code></TableCell>
                <TableCell>ReactElement</TableCell>
                <TableCell>required</TableCell>
                <TableCell>Element that triggers the popover</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>placement</code></TableCell>
                <TableCell>'top' | 'bottom' | 'left' | 'right'</TableCell>
                <TableCell>'bottom'</TableCell>
                <TableCell>Popover placement</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isOpen</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Controlled open state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onOpen</code></TableCell>
                <TableCell>() =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Open callback</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onClose</code></TableCell>
                <TableCell>() =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Close callback</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>closeOnBlur</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Close when clicking outside</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </Box>

          <Heading as="h3" size="lg" mb={3}>PopoverHeader</Heading>
          <Text mb={4} color="muted.fg">Renders a header with bold text and bottom margin.</Text>

          <Heading as="h3" size="lg" mb={3}>PopoverBody</Heading>
          <Text mb={4} color="muted.fg">Renders the main content with appropriate font size.</Text>

          <Heading as="h3" size="lg" mb={3}>PopoverFooter</Heading>
          <Text color="muted.fg">Renders a footer with flex layout for action buttons.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default PopoverDoc;
