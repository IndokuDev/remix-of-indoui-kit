import React, { useState } from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, RangeSlider,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const RangeSliderDoc = () => {
  const [range, setRange] = useState<[number, number]>([25, 75]);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>RangeSlider</Heading>
          <Text size="lg" color="muted.fg">
            Select a range of values with dual thumbs.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Range Slider</Heading>
          <Box maxW="400px">
            <RangeSlider value={range} onChange={setRange} />
          </Box>
          <Text size="sm" mt={2} color="muted.fg">
            Range: {range[0]} - {range[1]}
          </Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Tooltip</Heading>
          <Box maxW="400px">
            <RangeSlider defaultValue={[20, 80]} showTooltip />
          </Box>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Custom Range</Heading>
          <Box maxW="400px">
            <RangeSlider min={0} max={1000} step={50} defaultValue={[200, 800]} />
          </Box>
          <Text size="sm" mt={2} color="muted.fg">Range: 0-1000, Step: 50</Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Different Colors</Heading>
          <VStack spacing={6} maxW="400px">
            <RangeSlider colorPalette="blue" defaultValue={[30, 70]} />
            <RangeSlider colorPalette="green" defaultValue={[30, 70]} />
            <RangeSlider colorPalette="purple" defaultValue={[30, 70]} />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [range, setRange] = useState([25, 75]);

<RangeSlider value={range} onChange={setRange} />

// With tooltip
<RangeSlider defaultValue={[20, 80]} showTooltip />

// Custom range and step
<RangeSlider 
  min={0} 
  max={1000} 
  step={50} 
  defaultValue={[200, 800]} 
/>

// Different color
<RangeSlider colorPalette="purple" />`}
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
                <TableRow><TableCell><code>value</code></TableCell><TableCell>[number, number]</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>defaultValue</code></TableCell><TableCell>[number, number]</TableCell><TableCell>[25, 75]</TableCell></TableRow>
                <TableRow><TableCell><code>min</code></TableCell><TableCell>number</TableCell><TableCell>0</TableCell></TableRow>
                <TableRow><TableCell><code>max</code></TableCell><TableCell>number</TableCell><TableCell>100</TableCell></TableRow>
                <TableRow><TableCell><code>step</code></TableCell><TableCell>number</TableCell><TableCell>1</TableCell></TableRow>
                <TableRow><TableCell><code>colorPalette</code></TableCell><TableCell>string</TableCell><TableCell>'blue'</TableCell></TableRow>
                <TableRow><TableCell><code>showTooltip</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
                <TableRow><TableCell><code>isDisabled</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default RangeSliderDoc;
