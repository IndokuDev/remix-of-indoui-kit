import React from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge,
  NavigationMenu, NavigationMenuItem,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const NavigationMenuDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="teal" mb={4}>Navigation</Badge>
          <Heading as="h1" size="3xl" mb={4}>NavigationMenu</Heading>
          <Text size="lg" color="muted.fg">
            Navigation component for site-wide navigation links.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Horizontal Navigation</Heading>
          <NavigationMenu orientation="horizontal">
            <NavigationMenuItem href="#" isActive>Home</NavigationMenuItem>
            <NavigationMenuItem href="#">Products</NavigationMenuItem>
            <NavigationMenuItem href="#">About</NavigationMenuItem>
            <NavigationMenuItem href="#">Contact</NavigationMenuItem>
          </NavigationMenu>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Vertical Navigation</Heading>
          <Box maxW="200px">
            <NavigationMenu orientation="vertical">
              <NavigationMenuItem href="#" isActive>Dashboard</NavigationMenuItem>
              <NavigationMenuItem href="#">Settings</NavigationMenuItem>
              <NavigationMenuItem href="#">Profile</NavigationMenuItem>
              <NavigationMenuItem href="#">Logout</NavigationMenuItem>
            </NavigationMenu>
          </Box>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`// Horizontal
<NavigationMenu orientation="horizontal">
  <NavigationMenuItem href="/" isActive>Home</NavigationMenuItem>
  <NavigationMenuItem href="/products">Products</NavigationMenuItem>
  <NavigationMenuItem href="/about">About</NavigationMenuItem>
</NavigationMenu>

// Vertical (sidebar)
<NavigationMenu orientation="vertical">
  <NavigationMenuItem href="/dashboard">Dashboard</NavigationMenuItem>
  <NavigationMenuItem href="/settings">Settings</NavigationMenuItem>
</NavigationMenu>`}
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
                <TableRow><TableCell><code>orientation</code></TableCell><TableCell>'horizontal' | 'vertical'</TableCell><TableCell>'horizontal'</TableCell></TableRow>
                <TableRow><TableCell><code>href</code> (Item)</TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>isActive</code> (Item)</TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default NavigationMenuDoc;
