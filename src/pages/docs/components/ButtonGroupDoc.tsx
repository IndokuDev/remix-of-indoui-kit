import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, Button, ButtonGroup,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const ButtonGroupDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>ButtonGroup</Heading>
          <Text size="lg" color="muted.fg">
            Group related buttons together with consistent spacing and styling.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Button Group</Heading>
          <ButtonGroup>
            <Button variant="outline">Left</Button>
            <Button variant="outline">Center</Button>
            <Button variant="outline">Right</Button>
          </ButtonGroup>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Attached Buttons</Heading>
          <ButtonGroup isAttached>
            <Button>Save</Button>
            <Button variant="outline">Cancel</Button>
          </ButtonGroup>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Different Sizes</Heading>
          <VStack spacing={4} align="flex-start">
            <ButtonGroup size="sm">
              <Button>Small</Button>
              <Button>Buttons</Button>
            </ButtonGroup>
            <ButtonGroup size="md">
              <Button>Medium</Button>
              <Button>Buttons</Button>
            </ButtonGroup>
            <ButtonGroup size="lg">
              <Button>Large</Button>
              <Button>Buttons</Button>
            </ButtonGroup>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`// Basic group
<ButtonGroup>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>

// Attached buttons
<ButtonGroup isAttached>
  <Button>Save</Button>
  <Button variant="outline">Cancel</Button>
</ButtonGroup>

// With size
<ButtonGroup size="sm">
  <Button>Small</Button>
  <Button>Buttons</Button>
</ButtonGroup>`}
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
                <TableRow><TableCell><code>isAttached</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
                <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg'</TableCell><TableCell>'md'</TableCell></TableRow>
                <TableRow><TableCell><code>variant</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>orientation</code></TableCell><TableCell>'horizontal' | 'vertical'</TableCell><TableCell>'horizontal'</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default ButtonGroupDoc;
