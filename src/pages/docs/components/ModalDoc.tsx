import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
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
  Input,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const ModalDoc = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Overlay</Badge>
          <Heading as="h1" size="3xl" mb={4}>Modal</Heading>
          <Text size="lg" color="muted.fg">
            Modal dialogs for displaying content in an overlay.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Modal</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="flex-start">
                  <HStack spacing={2}>
                    <Button onClick={() => { setSize('sm'); setIsOpen(true); }}>Small</Button>
                    <Button onClick={() => { setSize('md'); setIsOpen(true); }}>Medium</Button>
                    <Button onClick={() => { setSize('lg'); setIsOpen(true); }}>Large</Button>
                    <Button onClick={() => { setSize('xl'); setIsOpen(true); }}>XL</Button>
                  </HStack>
                  
                  <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
                    <ModalCloseButton />
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalBody>
                      <VStack spacing={4}>
                        <Text>This is the modal content. You can put any content here.</Text>
                        <Input placeholder="Example input" />
                      </VStack>
                    </ModalBody>
                    <ModalFooter>
                      <HStack spacing={2}>
                        <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button onClick={() => setIsOpen(false)}>Confirm</Button>
                      </HStack>
                    </ModalFooter>
                  </Modal>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { useState } from 'react';
import { 
  Modal, ModalHeader, ModalBody, ModalFooter, 
  ModalCloseButton, Button 
} from '@indoui/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
        <ModalCloseButton />
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          <Text>Modal content goes here.</Text>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API Reference</Heading>
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
                <TableCell><code>isOpen</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>required</TableCell>
                <TableCell>Control modal visibility</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onClose</code></TableCell>
                <TableCell>() =&gt; void</TableCell>
                <TableCell>required</TableCell>
                <TableCell>Called when modal should close</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>size</code></TableCell>
                <TableCell>'sm' | 'md' | 'lg' | 'xl' | 'full'</TableCell>
                <TableCell>'md'</TableCell>
                <TableCell>Modal size</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>closeOnOverlayClick</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Close when clicking overlay</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>closeOnEsc</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Close on Escape key</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default ModalDoc;
