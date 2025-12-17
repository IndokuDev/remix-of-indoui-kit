import React from 'react';
import { Box, Stack, Heading, Text, Code, Group, Input, Button, IconButton } from '../../../../lib/indoui/src';
import { ComponentPreview } from '../../../components/docs/ComponentPreview';
import { CodeBlock } from '../../../components/docs/CodeBlock';

const GroupDoc = () => {
  const basicUsage = `import { Group, Input, Button } from 'indoui';

<Group>
  <Input placeholder="Search..." />
  <Button>Search</Button>
</Group>`;

  const buttonGroup = `<Group>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</Group>`;

  const inputAddon = `import { InputGroup, InputLeftAddon, InputRightAddon, Input } from 'indoui';

<InputGroup>
  <InputLeftAddon>https://</InputLeftAddon>
  <Input placeholder="example.com" />
</InputGroup>

<InputGroup>
  <Input placeholder="Amount" />
  <InputRightAddon>.00</InputRightAddon>
</InputGroup>`;

  const vertical = `<Group orientation="vertical">
  <Button variant="outline">Option 1</Button>
  <Button variant="outline">Option 2</Button>
  <Button variant="outline">Option 3</Button>
</Group>`;

  return (
    <Stack gap={8}>
      <Box>
        <Heading as="h1" size="2xl" mb={4}>Group</Heading>
        <Text color="muted" size="lg">
          Automatically combine inputs and buttons with connected borders.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Basic Usage</Heading>
        <Text mb={4}>
          Group automatically handles border-radius for combined elements.
        </Text>
        <ComponentPreview>
          <Group>
            <Input placeholder="Search..." style={{ borderRadius: 'var(--indo-radius-md)' }} />
            <Button>Search</Button>
          </Group>
        </ComponentPreview>
        <CodeBlock code={basicUsage} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Button Groups</Heading>
        <ComponentPreview>
          <Group>
            <Button variant="outline">Left</Button>
            <Button variant="outline">Center</Button>
            <Button variant="outline">Right</Button>
          </Group>
        </ComponentPreview>
        <CodeBlock code={buttonGroup} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Input with Addons</Heading>
        <ComponentPreview>
          <Stack gap={4}>
            <Box style={{ display: 'flex', alignItems: 'stretch' }}>
              <Box px={3} py={2} bg="muted" style={{ border: '1px solid', borderColor: 'hsl(var(--indo-input))', borderRight: 'none', borderRadius: 'var(--indo-radius-md) 0 0 var(--indo-radius-md)', display: 'flex', alignItems: 'center' }}>
                <Text size="sm" color="muted">https://</Text>
              </Box>
              <Input placeholder="example.com" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
            </Box>
            <Box style={{ display: 'flex', alignItems: 'stretch' }}>
              <Input placeholder="Amount" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: 'none' }} />
              <Box px={3} py={2} bg="muted" style={{ border: '1px solid', borderColor: 'hsl(var(--indo-input))', borderRadius: '0 var(--indo-radius-md) var(--indo-radius-md) 0', display: 'flex', alignItems: 'center' }}>
                <Text size="sm" color="muted">.00</Text>
              </Box>
            </Box>
          </Stack>
        </ComponentPreview>
        <CodeBlock code={inputAddon} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Vertical Orientation</Heading>
        <ComponentPreview>
          <Group orientation="vertical">
            <Button variant="outline">Option 1</Button>
            <Button variant="outline">Option 2</Button>
            <Button variant="outline">Option 3</Button>
          </Group>
        </ComponentPreview>
        <CodeBlock code={vertical} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Props</Heading>
        <Box as="table" w="100%">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Prop</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Default</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.5rem' }}><Code>attached</Code></td><td>boolean</td><td>true</td><td>Whether elements are visually connected</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>orientation</Code></td><td>"horizontal" | "vertical"</td><td>"horizontal"</td><td>Layout direction</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>spacing</Code></td><td>string | number</td><td>0</td><td>Gap between elements when not attached</td></tr>
          </tbody>
        </Box>
      </Box>
    </Stack>
  );
};

export default GroupDoc;
