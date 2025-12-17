import React, { useState } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, NumberInput,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const NumberInputDoc = () => {
  const [value, setValue] = useState(10);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>NumberInput</Heading>
          <Text size="lg" color="muted.fg">
            Input for numeric values with increment/decrement controls.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Number Input</Heading>
          <Box maxW="200px">
            <NumberInput value={value} onChange={setValue} />
          </Box>
          <Text size="sm" mt={2} color="muted.fg">Value: {value}</Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Min/Max</Heading>
          <Box maxW="200px">
            <NumberInput min={0} max={100} step={5} defaultValue={50} />
          </Box>
          <Text size="sm" mt={2} color="muted.fg">Range: 0-100, Step: 5</Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Different Sizes</Heading>
          <VStack spacing={4} align="flex-start" maxW="200px">
            <NumberInput size="sm" defaultValue={5} />
            <NumberInput size="md" defaultValue={10} />
            <NumberInput size="lg" defaultValue={15} />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Options</Heading>
          <VStack spacing={4} align="flex-start" maxW="200px">
            <Text size="sm">With precision (2 decimals):</Text>
            <NumberInput step={0.01} precision={2} defaultValue={9.99} />
            <Text size="sm">Without stepper:</Text>
            <NumberInput showStepper={false} defaultValue={42} />
            <Text size="sm">With mouse wheel:</Text>
            <NumberInput allowMouseWheel defaultValue={100} />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [value, setValue] = useState(10);

<NumberInput value={value} onChange={setValue} />

// With constraints
<NumberInput min={0} max={100} step={5} />

// With precision
<NumberInput step={0.01} precision={2} />

// Without stepper
<NumberInput showStepper={false} />

// With mouse wheel
<NumberInput allowMouseWheel />`}
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
                <TableRow><TableCell><code>value</code></TableCell><TableCell>number</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>defaultValue</code></TableCell><TableCell>number</TableCell><TableCell>0</TableCell></TableRow>
                <TableRow><TableCell><code>min</code></TableCell><TableCell>number</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>max</code></TableCell><TableCell>number</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>step</code></TableCell><TableCell>number</TableCell><TableCell>1</TableCell></TableRow>
                <TableRow><TableCell><code>precision</code></TableCell><TableCell>number</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>showStepper</code></TableCell><TableCell>boolean</TableCell><TableCell>true</TableCell></TableRow>
                <TableRow><TableCell><code>allowMouseWheel</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default NumberInputDoc;
