import React, { useState } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge,
  Pagination,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const PaginationDoc = () => {
  const [page, setPage] = useState(1);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Data Display</Badge>
          <Heading as="h1" size="3xl" mb={4}>Pagination</Heading>
          <Text size="lg" color="muted.fg">
            Navigate through pages of content.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Pagination</Heading>
          <Pagination
            currentPage={page}
            totalPages={10}
            onPageChange={setPage}
          />
          <Text size="sm" mt={2} color="muted.fg">Current page: {page}</Text>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Without First/Last</Heading>
          <Pagination
            currentPage={5}
            totalPages={20}
            onPageChange={() => {}}
            showFirstLast={false}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Different Sizes</Heading>
          <VStack spacing={4} align="flex-start">
            <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} size="sm" />
            <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} size="md" />
            <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} size="lg" />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [page, setPage] = useState(1);

<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
/>

// Customize sibling count
<Pagination
  currentPage={page}
  totalPages={100}
  siblingCount={2}
  onPageChange={setPage}
/>

// Without first/last buttons
<Pagination
  currentPage={page}
  totalPages={10}
  showFirstLast={false}
  onPageChange={setPage}
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
                <TableRow><TableCell><code>currentPage</code></TableCell><TableCell>number</TableCell><TableCell>required</TableCell></TableRow>
                <TableRow><TableCell><code>totalPages</code></TableCell><TableCell>number</TableCell><TableCell>required</TableCell></TableRow>
                <TableRow><TableCell><code>onPageChange</code></TableCell><TableCell>(page) =&gt; void</TableCell><TableCell>required</TableCell></TableRow>
                <TableRow><TableCell><code>siblingCount</code></TableCell><TableCell>number</TableCell><TableCell>1</TableCell></TableRow>
                <TableRow><TableCell><code>showFirstLast</code></TableCell><TableCell>boolean</TableCell><TableCell>true</TableCell></TableRow>
                <TableRow><TableCell><code>size</code></TableCell><TableCell>'sm' | 'md' | 'lg'</TableCell><TableCell>'md'</TableCell></TableRow>
                <TableRow><TableCell><code>colorPalette</code></TableCell><TableCell>string</TableCell><TableCell>'blue'</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default PaginationDoc;
