import React from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, Button,
  EmptyState,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";
import { Inbox, Search, FileText } from "lucide-react";

const EmptyStateDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="orange" mb={4}>Feedback</Badge>
          <Heading as="h1" size="3xl" mb={4}>EmptyState</Heading>
          <Text size="lg" color="muted.fg">
            Placeholder for empty content areas with helpful messaging.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Empty State</Heading>
          <EmptyState
            icon={<Inbox size={48} />}
            title="No messages"
            description="You have no messages in your inbox."
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Action</Heading>
          <EmptyState
            icon={<FileText size={48} />}
            title="No documents"
            description="Get started by creating your first document."
            action={<Button colorPalette="blue">Create Document</Button>}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Search Results</Heading>
          <EmptyState
            icon={<Search size={48} />}
            title="No results found"
            description="Try adjusting your search or filter to find what you're looking for."
            action={<Button variant="outline">Clear filters</Button>}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<EmptyState
  icon={<InboxIcon />}
  title="No messages"
  description="You have no messages in your inbox."
/>

// With action button
<EmptyState
  icon={<FileIcon />}
  title="No documents"
  description="Get started by creating your first document."
  action={<Button>Create Document</Button>}
/>`}
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
                <TableRow><TableCell><code>icon</code></TableCell><TableCell>ReactNode</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>title</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>description</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>action</code></TableCell><TableCell>ReactNode</TableCell><TableCell>-</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default EmptyStateDoc;
