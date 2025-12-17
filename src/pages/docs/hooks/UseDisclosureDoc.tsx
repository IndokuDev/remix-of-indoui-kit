import React from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Button,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useDisclosure,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseDisclosureDoc = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const controlled = useDisclosure({ defaultIsOpen: true });

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useDisclosure</Heading>
          <Text size="lg" color="muted.fg">
            Hook to handle common open/close or toggle scenarios.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <Text>Status: <Badge colorPalette={isOpen ? 'green' : 'red'}>{isOpen ? 'Open' : 'Closed'}</Badge></Text>
            <HStack spacing={4}>
              <Button colorPalette="green" onClick={onOpen}>Open</Button>
              <Button colorPalette="red" onClick={onClose}>Close</Button>
              <Button variant="outline" onClick={onToggle}>Toggle</Button>
            </HStack>
            {isOpen && (
              <Box p={4} bg="success.subtle" rounded="md" w="100%">
                This content is visible when open!
              </Box>
            )}
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Usage</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useDisclosure } from '@indoui/react';

function ModalExample() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>...</ModalContent>
      </Modal>
    </>
  );
}

// With default open state
const { isOpen } = useDisclosure({ defaultIsOpen: true });

// Controlled mode
const [isOpen, setIsOpen] = useState(false);
const disclosure = useDisclosure({
  isOpen,
  onOpen: () => setIsOpen(true),
  onClose: () => setIsOpen(false),
});`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Options & Return Values</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Property</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>isOpen</code></TableCell><TableCell>boolean</TableCell><TableCell>Current open state</TableCell></TableRow>
                <TableRow><TableCell><code>onOpen</code></TableCell><TableCell>() =&gt; void</TableCell><TableCell>Set isOpen to true</TableCell></TableRow>
                <TableRow><TableCell><code>onClose</code></TableCell><TableCell>() =&gt; void</TableCell><TableCell>Set isOpen to false</TableCell></TableRow>
                <TableRow><TableCell><code>onToggle</code></TableCell><TableCell>() =&gt; void</TableCell><TableCell>Toggle isOpen</TableCell></TableRow>
                <TableRow><TableCell><code>defaultIsOpen</code></TableCell><TableCell>boolean</TableCell><TableCell>Initial open state (option)</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseDisclosureDoc;
