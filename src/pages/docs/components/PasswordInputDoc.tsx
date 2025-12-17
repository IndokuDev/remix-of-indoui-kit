import React, { useState } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, PasswordInput,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const PasswordInputDoc = () => {
  const [password, setPassword] = useState('');

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>PasswordInput</Heading>
          <Text size="lg" color="muted.fg">
            Password input with visibility toggle for secure text entry.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Password Input</Heading>
          <Box maxW="300px">
            <PasswordInput 
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Different Sizes</Heading>
          <VStack spacing={4} align="flex-start" maxW="300px">
            <PasswordInput size="sm" placeholder="Small" />
            <PasswordInput size="md" placeholder="Medium" />
            <PasswordInput size="lg" placeholder="Large" />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>States</Heading>
          <VStack spacing={4} align="flex-start" maxW="300px">
            <PasswordInput placeholder="Normal" />
            <PasswordInput isInvalid placeholder="Invalid password" />
            <PasswordInput disabled placeholder="Disabled" />
            <PasswordInput showToggle={false} placeholder="No toggle" />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [password, setPassword] = useState('');

<PasswordInput
  placeholder="Enter password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

// Invalid state
<PasswordInput isInvalid placeholder="Invalid" />

// Without toggle
<PasswordInput showToggle={false} />`}
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
                <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg'</TableCell><TableCell>'md'</TableCell></TableRow>
                <TableRow><TableCell><code>isInvalid</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
                <TableRow><TableCell><code>showToggle</code></TableCell><TableCell>boolean</TableCell><TableCell>true</TableCell></TableRow>
                <TableRow><TableCell><code>disabled</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default PasswordInputDoc;
