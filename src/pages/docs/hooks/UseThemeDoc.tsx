import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useTheme, useThemeToken,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseThemeDoc = () => {
  const { tokens, getToken } = useTheme();
  const primaryColor = useThemeToken('colors.primary');

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useTheme</Heading>
          <Text size="lg" color="muted.fg">
            Hook to access theme tokens and values programmatically.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <Text>Primary color token: <Badge>{primaryColor || 'N/A'}</Badge></Text>
            <Text>Space.4 token: <Badge>{getToken('space.4') || 'N/A'}</Badge></Text>
            <Text>Available token categories: <Badge>{Object.keys(tokens).join(', ')}</Badge></Text>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>useTheme</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useTheme } from '@indoui/react';

function ThemeAwareComponent() {
  const { tokens, getToken } = useTheme();

  // Access full tokens object
  console.log(tokens.colors);
  console.log(tokens.space);
  console.log(tokens.radii);

  // Get specific token value
  const primaryColor = getToken('colors.primary');
  const spacing = getToken('space.4');

  return (
    <Box style={{ color: primaryColor, padding: spacing }}>
      Styled with theme tokens
    </Box>
  );
}`}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>useThemeToken</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useThemeToken } from '@indoui/react';

function TokenExample() {
  const primary = useThemeToken('colors.primary');
  const borderRadius = useThemeToken('radii.md');
  const shadow = useThemeToken('shadows.lg');

  return (
    <div style={{
      backgroundColor: primary,
      borderRadius: borderRadius,
      boxShadow: shadow,
    }}>
      Using theme tokens inline
    </div>
  );
}`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Hook</TableHeaderCell>
                  <TableHeaderCell>Returns</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>useTheme</code></TableCell><TableCell>{'{tokens, getToken}'}</TableCell><TableCell>Full theme access</TableCell></TableRow>
                <TableRow><TableCell><code>useThemeToken</code></TableCell><TableCell>string | undefined</TableCell><TableCell>Get single token value</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Token Paths</Heading>
          <VStack spacing={2} align="flex-start">
            <Text><code>colors.primary</code> - Primary color</Text>
            <Text><code>colors.gray.500</code> - Color scale value</Text>
            <Text><code>space.4</code> - Spacing value</Text>
            <Text><code>radii.md</code> - Border radius</Text>
            <Text><code>shadows.lg</code> - Box shadow</Text>
            <Text><code>fontSizes.lg</code> - Font size</Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseThemeDoc;
