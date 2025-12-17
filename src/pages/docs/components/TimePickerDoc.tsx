import React, { useState } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, TimePicker,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const TimePickerDoc = () => {
  const [time, setTime] = useState('09:00');

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>TimePicker</Heading>
          <Text size="lg" color="muted.fg">
            Input for selecting time values.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Time Picker</Heading>
          <Box maxW="200px">
            <TimePicker value={time} onChange={setTime} />
          </Box>
          <Text size="sm" mt={2} color="muted.fg">Selected: {time}</Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Min/Max</Heading>
          <Box maxW="200px">
            <TimePicker min="09:00" max="17:00" defaultValue="12:00" />
          </Box>
          <Text size="sm" mt={2} color="muted.fg">Business hours: 9AM - 5PM</Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Step</Heading>
          <Box maxW="200px">
            <TimePicker step={900} defaultValue="10:00" />
          </Box>
          <Text size="sm" mt={2} color="muted.fg">15-minute intervals</Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [time, setTime] = useState('09:00');

<TimePicker value={time} onChange={setTime} />

// With constraints
<TimePicker min="09:00" max="17:00" />

// 15-minute intervals
<TimePicker step={900} />

// Disabled
<TimePicker isDisabled />`}
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
                <TableRow><TableCell><code>value</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>defaultValue</code></TableCell><TableCell>string</TableCell><TableCell>''</TableCell></TableRow>
                <TableRow><TableCell><code>onChange</code></TableCell><TableCell>(time) =&gt; void</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>min</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>max</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>step</code></TableCell><TableCell>number (seconds)</TableCell><TableCell>60</TableCell></TableRow>
                <TableRow><TableCell><code>isDisabled</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default TimePickerDoc;
