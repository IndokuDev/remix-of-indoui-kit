import React, { useState } from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Slider,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const SliderDoc = () => {
  const [value, setValue] = useState(50);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>Slider</Heading>
          <Text size="lg" color="muted.fg">
            Allow users to select a value from a range.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Usage</Heading>
          <VStack spacing={4} align="stretch" maxW="400px">
            <Text>Value: {value}</Text>
            <Slider value={value} onChange={setValue} />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Sizes</Heading>
          <VStack spacing={6} align="stretch" maxW="400px">
            <Slider size="sm" defaultValue={30} />
            <Slider size="md" defaultValue={50} />
            <Slider size="lg" defaultValue={70} />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Colors</Heading>
          <VStack spacing={4} align="stretch" maxW="400px">
            <Slider colorPalette="blue" defaultValue={40} />
            <Slider colorPalette="green" defaultValue={60} />
            <Slider colorPalette="red" defaultValue={80} />
            <Slider colorPalette="purple" defaultValue={50} />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [value, setValue] = useState(50);

<Slider 
  value={value} 
  onChange={setValue}
  min={0}
  max={100}
  colorPalette="blue"
/>`}
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
              <TableRow><TableCell><code>value</code></TableCell><TableCell>number</TableCell><TableCell>0</TableCell></TableRow>
              <TableRow><TableCell><code>min</code></TableCell><TableCell>number</TableCell><TableCell>0</TableCell></TableRow>
              <TableRow><TableCell><code>max</code></TableCell><TableCell>number</TableCell><TableCell>100</TableCell></TableRow>
              <TableRow><TableCell><code>step</code></TableCell><TableCell>number</TableCell><TableCell>1</TableCell></TableRow>
              <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg'</TableCell><TableCell>'md'</TableCell></TableRow>
              <TableRow><TableCell><code>colorPalette</code></TableCell><TableCell>ColorName</TableCell><TableCell>'blue'</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default SliderDoc;
