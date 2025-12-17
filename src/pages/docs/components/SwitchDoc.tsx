import React, { useState } from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Switch,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const SwitchDoc = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>Switch</Heading>
          <Text size="lg" color="muted.fg">
            Toggle component for on/off states.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Usage</Heading>
          <VStack spacing={4} align="start">
            <HStack>
              <Switch isChecked={isOn} onChange={() => setIsOn(!isOn)} />
              <Text>Notifications: {isOn ? 'On' : 'Off'}</Text>
            </HStack>
            <HStack>
              <Switch defaultChecked />
              <Text>Default On</Text>
            </HStack>
            <HStack>
              <Switch isDisabled />
              <Text>Disabled</Text>
            </HStack>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Sizes</Heading>
          <HStack spacing={6}>
            <Switch size="sm" defaultChecked />
            <Switch size="md" defaultChecked />
            <Switch size="lg" defaultChecked />
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Colors</Heading>
          <HStack spacing={4}>
            <Switch colorPalette="blue" defaultChecked />
            <Switch colorPalette="green" defaultChecked />
            <Switch colorPalette="red" defaultChecked />
            <Switch colorPalette="purple" defaultChecked />
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [isOn, setIsOn] = useState(false);

<Switch 
  isChecked={isOn} 
  onChange={() => setIsOn(!isOn)}
  colorPalette="green"
  size="lg"
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
              <TableRow><TableCell><code>isChecked</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg'</TableCell><TableCell>'md'</TableCell></TableRow>
              <TableRow><TableCell><code>colorPalette</code></TableCell><TableCell>ColorName</TableCell><TableCell>'blue'</TableCell></TableRow>
              <TableRow><TableCell><code>isDisabled</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default SwitchDoc;
