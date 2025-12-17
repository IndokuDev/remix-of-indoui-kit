import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge,
  Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const StatDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Data Display</Badge>
          <Heading as="h1" size="3xl" mb={4}>Stat</Heading>
          <Text size="lg" color="muted.fg">
            Display statistics with labels and trend indicators.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Stat</Heading>
          <Stat>
            <StatLabel>Total Sales</StatLabel>
            <StatNumber>$45,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" /> 23% from last month
            </StatHelpText>
          </Stat>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Stat Group</Heading>
          <StatGroup>
            <Stat>
              <StatLabel>Revenue</StatLabel>
              <StatNumber>$120K</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" /> 12%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Users</StatLabel>
              <StatNumber>2,450</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" /> 8%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Bounce Rate</StatLabel>
              <StatNumber>32%</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" /> 5%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Stat>
  <StatLabel>Total Sales</StatLabel>
  <StatNumber>$45,670</StatNumber>
  <StatHelpText>
    <StatArrow type="increase" /> 23% from last month
  </StatHelpText>
</Stat>

// Multiple stats
<StatGroup>
  <Stat>
    <StatLabel>Revenue</StatLabel>
    <StatNumber>$120K</StatNumber>
  </Stat>
  <Stat>
    <StatLabel>Users</StatLabel>
    <StatNumber>2,450</StatNumber>
  </Stat>
</StatGroup>`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Components</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Component</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>Stat</code></TableCell><TableCell>Container for stat content</TableCell></TableRow>
                <TableRow><TableCell><code>StatLabel</code></TableCell><TableCell>Label for the statistic</TableCell></TableRow>
                <TableRow><TableCell><code>StatNumber</code></TableCell><TableCell>The main number/value</TableCell></TableRow>
                <TableRow><TableCell><code>StatHelpText</code></TableCell><TableCell>Additional context text</TableCell></TableRow>
                <TableRow><TableCell><code>StatArrow</code></TableCell><TableCell>Trend indicator arrow</TableCell></TableRow>
                <TableRow><TableCell><code>StatGroup</code></TableCell><TableCell>Container for multiple stats</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default StatDoc;
