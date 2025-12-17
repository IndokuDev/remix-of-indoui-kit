import React, { useState } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, PinInput,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const PinInputDoc = () => {
  const [value, setValue] = useState('');

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>PinInput</Heading>
          <Text size="lg" color="muted.fg">
            Input for PIN codes, OTP verification, and multi-digit entries.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic PIN Input</Heading>
          <PinInput 
            length={4} 
            value={value}
            onChange={setValue}
            onComplete={(pin) => console.log('Complete:', pin)}
          />
          <Text size="sm" mt={2} color="muted.fg">Value: {value || '(empty)'}</Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Different Lengths</Heading>
          <VStack spacing={4} align="flex-start">
            <Box>
              <Text size="sm" mb={2}>4-digit PIN:</Text>
              <PinInput length={4} />
            </Box>
            <Box>
              <Text size="sm" mb={2}>6-digit OTP:</Text>
              <PinInput length={6} />
            </Box>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Masked Input</Heading>
          <PinInput length={4} mask />
          <Text size="sm" mt={2} color="muted.fg">Characters are hidden</Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Alphanumeric</Heading>
          <PinInput length={4} type="alphanumeric" />
          <Text size="sm" mt={2} color="muted.fg">Accepts letters and numbers</Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Different Sizes</Heading>
          <VStack spacing={4} align="flex-start">
            <PinInput length={4} size="sm" />
            <PinInput length={4} size="md" />
            <PinInput length={4} size="lg" />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [value, setValue] = useState('');

<PinInput
  length={4}
  value={value}
  onChange={setValue}
  onComplete={(pin) => verifyPin(pin)}
/>

// Masked for passwords
<PinInput length={4} mask />

// Alphanumeric input
<PinInput length={6} type="alphanumeric" />

// Auto focus first input
<PinInput length={4} autoFocus />`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Props</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Prop</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Default</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>length</code></TableCell><TableCell>number</TableCell><TableCell>4</TableCell></TableRow>
                <TableRow><TableCell><code>value</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>onChange</code></TableCell><TableCell>(value) =&gt; void</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>onComplete</code></TableCell><TableCell>(value) =&gt; void</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>type</code></TableCell><TableCell>'number' | 'alphanumeric'</TableCell><TableCell>'number'</TableCell></TableRow>
                <TableRow><TableCell><code>mask</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
                <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg'</TableCell><TableCell>'md'</TableCell></TableRow>
                <TableRow><TableCell><code>autoFocus</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default PinInputDoc;
