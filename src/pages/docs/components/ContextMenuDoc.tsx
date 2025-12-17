import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, Button,
  ContextMenu, MenuItem, MenuDivider,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const ContextMenuDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="red" mb={4}>Overlay</Badge>
          <Heading as="h1" size="3xl" mb={4}>ContextMenu</Heading>
          <Text size="lg" color="muted.fg">
            Display a menu on right-click (context menu).
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Right-Click Area</Heading>
          <ContextMenu
            menu={
              <>
                <MenuItem>Cut</MenuItem>
                <MenuItem>Copy</MenuItem>
                <MenuItem>Paste</MenuItem>
                <MenuDivider />
                <MenuItem>Delete</MenuItem>
              </>
            }
          >
            <Box
              p={8}
              bg="muted"
              rounded="md"
              border="2px dashed"
              borderColor="border"
              textAlign="center"
            >
              <Text>Right-click here to see context menu</Text>
            </Box>
          </ContextMenu>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<ContextMenu
  menu={
    <>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuDivider />
      <MenuItem>Delete</MenuItem>
    </>
  }
>
  <Box p={8}>
    Right-click here
  </Box>
</ContextMenu>`}
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
                  <TableHeaderCell>Description</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>menu</code></TableCell><TableCell>ReactNode</TableCell><TableCell>Menu content to display</TableCell></TableRow>
                <TableRow><TableCell><code>children</code></TableCell><TableCell>ReactNode</TableCell><TableCell>Target area for right-click</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContextMenuDoc;
