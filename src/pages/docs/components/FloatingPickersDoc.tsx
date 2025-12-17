import React, { useState } from 'react';
import { Box, Stack, Heading, Text, Code, FloatingColorPicker, FloatingDatePicker, FloatingTimePicker } from '../../../lib/indoui/src';
import { ComponentPreview } from '../../../components/docs/ComponentPreview';
import { CodeBlock } from '../../../components/docs/CodeBlock';

const FloatingPickersDoc = () => {
  const [color, setColor] = useState('#3b82f6');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState('09:00');

  const colorPickerCode = `import { FloatingColorPicker } from 'indoui';

const [color, setColor] = useState('#3b82f6');

<FloatingColorPicker
  value={color}
  onChange={setColor}
/>`;

  const datePickerCode = `import { FloatingDatePicker } from 'indoui';

const [date, setDate] = useState<Date | undefined>(new Date());

<FloatingDatePicker
  value={date}
  onChange={setDate}
  placeholder="Select date"
/>`;

  const timePickerCode = `import { FloatingTimePicker } from 'indoui';

const [time, setTime] = useState('09:00');

<FloatingTimePicker
  value={time}
  onChange={setTime}
  format="12h"
/>`;

  return (
    <Stack gap={8}>
      <Box>
        <Heading as="h1" size="2xl" mb={4}>Floating Pickers</Heading>
        <Text color="muted" size="lg">
          Beautiful floating popover-style pickers for colors, dates, and times.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Color Picker</Heading>
        <Text mb={4}>
          A floating color picker with swatches and hex input.
        </Text>
        <ComponentPreview>
          <FloatingColorPicker value={color} onChange={setColor} />
        </ComponentPreview>
        <CodeBlock code={colorPickerCode} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Date Picker</Heading>
        <Text mb={4}>
          A floating calendar picker for selecting dates.
        </Text>
        <ComponentPreview>
          <FloatingDatePicker value={date} onChange={setDate} placeholder="Select date" />
        </ComponentPreview>
        <CodeBlock code={datePickerCode} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Time Picker</Heading>
        <Text mb={4}>
          A floating time picker with 12/24 hour format support.
        </Text>
        <ComponentPreview>
          <FloatingTimePicker value={time} onChange={setTime} format="12h" />
        </ComponentPreview>
        <CodeBlock code={timePickerCode} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Color Picker Props</Heading>
        <Box as="table" w="100%">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Prop</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.5rem' }}><Code>value</Code></td><td>string</td><td>Selected color (hex)</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>onChange</Code></td><td>(color: string) =&gt; void</td><td>Change handler</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>swatches</Code></td><td>string[]</td><td>Custom color swatches</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>isDisabled</Code></td><td>boolean</td><td>Disable the picker</td></tr>
          </tbody>
        </Box>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Date Picker Props</Heading>
        <Box as="table" w="100%">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Prop</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.5rem' }}><Code>value</Code></td><td>Date</td><td>Selected date</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>onChange</Code></td><td>(date: Date | undefined) =&gt; void</td><td>Change handler</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>min</Code></td><td>Date</td><td>Minimum selectable date</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>max</Code></td><td>Date</td><td>Maximum selectable date</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>isClearable</Code></td><td>boolean</td><td>Allow clearing selection</td></tr>
          </tbody>
        </Box>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Time Picker Props</Heading>
        <Box as="table" w="100%">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Prop</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.5rem' }}><Code>value</Code></td><td>string</td><td>Selected time (HH:mm)</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>onChange</Code></td><td>(time: string) =&gt; void</td><td>Change handler</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>format</Code></td><td>"12h" | "24h"</td><td>Time format</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>step</Code></td><td>number</td><td>Minutes interval</td></tr>
          </tbody>
        </Box>
      </Box>
    </Stack>
  );
};

export default FloatingPickersDoc;
