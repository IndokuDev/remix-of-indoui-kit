import React, { useState } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge,
  Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const ImageDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Data Display</Badge>
          <Heading as="h1" size="3xl" mb={4}>Image</Heading>
          <Text size="lg" color="muted.fg">
            Responsive image component with fallback support.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Image</Heading>
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
            alt="Mountain landscape"
            w="300px"
            h="200px"
            rounded="md"
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Fallback</Heading>
          <Image
            src="https://invalid-url.com/image.jpg"
            fallbackSrc="https://via.placeholder.com/300x200?text=Fallback"
            alt="Fallback demo"
            w="300px"
            h="200px"
            rounded="md"
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Image
  src="/photo.jpg"
  alt="Description"
  objectFit="cover"
/>

// With fallback
<Image
  src="/photo.jpg"
  fallbackSrc="/placeholder.jpg"
  alt="With fallback"
/>

// Custom fallback element
<Image
  src="/photo.jpg"
  fallback={<Skeleton w="300px" h="200px" />}
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
                <TableRow><TableCell><code>src</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>alt</code></TableCell><TableCell>string</TableCell><TableCell>''</TableCell></TableRow>
                <TableRow><TableCell><code>fallbackSrc</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>fallback</code></TableCell><TableCell>ReactNode</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>objectFit</code></TableCell><TableCell>string</TableCell><TableCell>'cover'</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default ImageDoc;
