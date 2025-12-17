import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
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

const AccordionDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="blue" mb={4}>Navigation</Badge>
          <Heading as="h1" size="3xl" mb={4}>Accordion</Heading>
          <Text size="lg" color="muted.fg">
            Accordion component for showing and hiding content sections.
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
                <Accordion defaultValue={["item-1"]}>
                  <AccordionItem value="item-1">
                    <AccordionButton>What is IndoUI?</AccordionButton>
                    <AccordionPanel>
                      IndoUI is a React component library that provides a set of accessible, 
                      reusable, and composable components for building modern web applications.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionButton>Is it accessible?</AccordionButton>
                    <AccordionPanel>
                      Yes! All components are built with accessibility in mind, following 
                      WAI-ARIA guidelines and supporting keyboard navigation.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionButton>Can I customize it?</AccordionButton>
                    <AccordionPanel>
                      Absolutely! IndoUI is built with customization in mind. You can use 
                      style props, themes, and CSS variables to match your design system.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Accordion defaultValue={['item-1']}>
  <AccordionItem value="item-1">
    <AccordionButton>What is IndoUI?</AccordionButton>
    <AccordionPanel>
      IndoUI is a React component library...
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionButton>Is it accessible?</AccordionButton>
    <AccordionPanel>
      Yes! All components are built with accessibility in mind...
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionButton>Can I customize it?</AccordionButton>
    <AccordionPanel>
      Absolutely! IndoUI is built with customization in mind...
    </AccordionPanel>
  </AccordionItem>
</Accordion>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Allow Multiple</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Accordion allowMultiple defaultValue={["item-1", "item-2"]}>
                  <AccordionItem value="item-1">
                    <AccordionButton>Section One</AccordionButton>
                    <AccordionPanel>
                      This is the content for section one. Multiple sections can be open at once.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionButton>Section Two</AccordionButton>
                    <AccordionPanel>
                      This is the content for section two. Try opening multiple sections!
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionButton>Section Three</AccordionButton>
                    <AccordionPanel>
                      This is the content for section three.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Accordion allowMultiple defaultValue={['item-1', 'item-2']}>
  <AccordionItem value="item-1">
    <AccordionButton>Section One</AccordionButton>
    <AccordionPanel>
      This is the content for section one...
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionButton>Section Two</AccordionButton>
    <AccordionPanel>
      This is the content for section two...
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionButton>Section Three</AccordionButton>
    <AccordionPanel>
      This is the content for section three.
    </AccordionPanel>
  </AccordionItem>
</Accordion>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Disable Toggle</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Accordion allowToggle={false} defaultValue={["item-1"]}>
                  <AccordionItem value="item-1">
                    <AccordionButton>Always One Open</AccordionButton>
                    <AccordionPanel>
                      With allowToggle=false, at least one item will always be open.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionButton>Click Another to Switch</AccordionButton>
                    <AccordionPanel>
                      You can switch between items, but cannot close all of them.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Accordion allowToggle={false} defaultValue={['item-1']}>
  <AccordionItem value="item-1">
    <AccordionButton>Always One Open</AccordionButton>
    <AccordionPanel>
      With allowToggle=false, at least one item will always be open.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionButton>Click Another to Switch</AccordionButton>
    <AccordionPanel>
      You can switch between items, but cannot close all of them.
    </AccordionPanel>
  </AccordionItem>
</Accordion>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API Reference</Heading>
          
          <Heading as="h3" size="lg" mb={3}>Accordion</Heading>
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
                <TableCell><code>defaultValue</code></TableCell>
                <TableCell>string[]</TableCell>
                <TableCell>[]</TableCell>
                <TableCell>Initially expanded items</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>allowMultiple</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Allow multiple items open</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>allowToggle</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Allow closing expanded item</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </Box>

          <Heading as="h3" size="lg" mb={3}>AccordionItem</Heading>
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
                <TableCell><code>value</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>required</TableCell>
                <TableCell>Unique identifier</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isDisabled</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Disable the item</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </Box>

          <Heading as="h3" size="lg" mb={3}>AccordionButton</Heading>
          <Text mb={4} color="muted.fg">Renders a button that toggles the accordion panel. Includes a chevron icon.</Text>

          <Heading as="h3" size="lg" mb={3}>AccordionPanel</Heading>
          <Text color="muted.fg">Renders the collapsible content area.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default AccordionDoc;
