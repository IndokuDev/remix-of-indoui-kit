import React, { useState } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, SegmentedControl,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const SegmentedControlDoc = () => {
  const [value, setValue] = useState('daily');

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>SegmentedControl</Heading>
          <Text size="lg" color="muted.fg">
            A set of mutually exclusive buttons for selecting one option.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Segmented Control</Heading>
          <SegmentedControl
            value={value}
            onChange={setValue}
            options={[
              { label: 'Daily', value: 'daily' },
              { label: 'Weekly', value: 'weekly' },
              { label: 'Monthly', value: 'monthly' },
            ]}
          />
          <Text size="sm" mt={2} color="muted.fg">Selected: {value}</Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Different Sizes</Heading>
          <VStack spacing={4} align="flex-start">
            <SegmentedControl
              size="sm"
              options={[
                { label: 'Small', value: '1' },
                { label: 'Options', value: '2' },
              ]}
            />
            <SegmentedControl
              size="md"
              options={[
                { label: 'Medium', value: '1' },
                { label: 'Options', value: '2' },
              ]}
            />
            <SegmentedControl
              size="lg"
              options={[
                { label: 'Large', value: '1' },
                { label: 'Options', value: '2' },
              ]}
            />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Full Width</Heading>
          <SegmentedControl
            fullWidth
            options={[
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
              { label: 'Right', value: 'right' },
            ]}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Disabled Option</Heading>
          <SegmentedControl
            options={[
              { label: 'Option 1', value: '1' },
              { label: 'Disabled', value: '2', disabled: true },
              { label: 'Option 3', value: '3' },
            ]}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [value, setValue] = useState('daily');

<SegmentedControl
  value={value}
  onChange={setValue}
  options={[
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
  ]}
/>

// Full width
<SegmentedControl fullWidth options={[...]} />

// With disabled option
<SegmentedControl
  options={[
    { label: 'Enabled', value: '1' },
    { label: 'Disabled', value: '2', disabled: true },
  ]}
/>`}
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
                <TableRow><TableCell><code>options</code></TableCell><TableCell>{'{ label, value, disabled? }[]'}</TableCell><TableCell>required</TableCell></TableRow>
                <TableRow><TableCell><code>value</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>defaultValue</code></TableCell><TableCell>string</TableCell><TableCell>first option</TableCell></TableRow>
                <TableRow><TableCell><code>onChange</code></TableCell><TableCell>(value) =&gt; void</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg'</TableCell><TableCell>'md'</TableCell></TableRow>
                <TableRow><TableCell><code>fullWidth</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
                <TableRow><TableCell><code>isDisabled</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default SegmentedControlDoc;
