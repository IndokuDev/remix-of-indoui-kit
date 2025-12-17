import React, { useState } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge,
  Timeline, TimelineItem,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";
import { CheckCircle, Circle, Clock } from "lucide-react";

const TimelineDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Data Display</Badge>
          <Heading as="h1" size="3xl" mb={4}>Timeline</Heading>
          <Text size="lg" color="muted.fg">
            Display a list of events in chronological order.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Timeline</Heading>
          <Timeline>
            <TimelineItem color="green">
              <Text fontWeight="medium">Order Placed</Text>
              <Text size="sm" color="muted.fg">Jan 15, 2024 at 10:00 AM</Text>
            </TimelineItem>
            <TimelineItem color="green">
              <Text fontWeight="medium">Order Confirmed</Text>
              <Text size="sm" color="muted.fg">Jan 15, 2024 at 10:05 AM</Text>
            </TimelineItem>
            <TimelineItem color="blue">
              <Text fontWeight="medium">Shipped</Text>
              <Text size="sm" color="muted.fg">Jan 16, 2024 at 2:30 PM</Text>
            </TimelineItem>
            <TimelineItem color="gray">
              <Text fontWeight="medium">Delivered</Text>
              <Text size="sm" color="muted.fg">Expected Jan 18, 2024</Text>
            </TimelineItem>
          </Timeline>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Icons</Heading>
          <Timeline>
            <TimelineItem icon={<CheckCircle size={14} />} color="green">
              <Text fontWeight="medium">Task Completed</Text>
            </TimelineItem>
            <TimelineItem icon={<Clock size={14} />} color="orange">
              <Text fontWeight="medium">In Progress</Text>
            </TimelineItem>
            <TimelineItem icon={<Circle size={14} />} color="gray">
              <Text fontWeight="medium">Pending</Text>
            </TimelineItem>
          </Timeline>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Timeline>
  <TimelineItem color="green">
    <Text fontWeight="medium">Order Placed</Text>
    <Text size="sm">Jan 15, 2024</Text>
  </TimelineItem>
  <TimelineItem color="blue">
    <Text fontWeight="medium">Shipped</Text>
  </TimelineItem>
</Timeline>

// With icons
<Timeline>
  <TimelineItem icon={<CheckIcon />} color="green">
    <Text>Completed</Text>
  </TimelineItem>
</Timeline>`}
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
                <TableRow><TableCell><code>variant</code> (Timeline)</TableCell><TableCell>'solid' | 'outline'</TableCell><TableCell>'solid'</TableCell></TableRow>
                <TableRow><TableCell><code>color</code> (TimelineItem)</TableCell><TableCell>string</TableCell><TableCell>'blue'</TableCell></TableRow>
                <TableRow><TableCell><code>icon</code> (TimelineItem)</TableCell><TableCell>ReactNode</TableCell><TableCell>-</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default TimelineDoc;
