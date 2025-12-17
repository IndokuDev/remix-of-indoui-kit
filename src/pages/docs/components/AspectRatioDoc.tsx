import React from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, AspectRatio,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const AspectRatioDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="blue" mb={4}>Layout</Badge>
          <Heading as="h1" size="3xl" mb={4}>AspectRatio</Heading>
          <Text size="lg" color="muted.fg">
            Maintains a consistent width-to-height ratio for responsive content.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>16:9 Ratio (Video)</Heading>
          <Box maxW="400px">
            <AspectRatio ratio={16 / 9}>
              <Box bg="primary.subtle" rounded="md" display="flex" alignItems="center" justifyContent="center">
                <Text>16:9 Video</Text>
              </Box>
            </AspectRatio>
          </Box>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Different Ratios</Heading>
          <HStack spacing={4} align="flex-start">
            <Box w="150px">
              <Text size="sm" mb={2}>1:1 (Square)</Text>
              <AspectRatio ratio={1}>
                <Box bg="success.subtle" rounded="md" display="flex" alignItems="center" justifyContent="center">
                  <Text size="sm">1:1</Text>
                </Box>
              </AspectRatio>
            </Box>
            <Box w="150px">
              <Text size="sm" mb={2}>4:3</Text>
              <AspectRatio ratio={4 / 3}>
                <Box bg="warning.subtle" rounded="md" display="flex" alignItems="center" justifyContent="center">
                  <Text size="sm">4:3</Text>
                </Box>
              </AspectRatio>
            </Box>
            <Box w="150px">
              <Text size="sm" mb={2}>21:9 (Ultrawide)</Text>
              <AspectRatio ratio={21 / 9}>
                <Box bg="error.subtle" rounded="md" display="flex" alignItems="center" justifyContent="center">
                  <Text size="sm">21:9</Text>
                </Box>
              </AspectRatio>
            </Box>
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`// 16:9 video ratio
<AspectRatio ratio={16 / 9}>
  <iframe src="https://youtube.com/..." />
</AspectRatio>

// Square image
<AspectRatio ratio={1}>
  <Image src="avatar.jpg" objectFit="cover" />
</AspectRatio>

// 4:3 photo
<AspectRatio ratio={4 / 3}>
  <Image src="photo.jpg" />
</AspectRatio>`}
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
                <TableRow><TableCell><code>ratio</code></TableCell><TableCell>number</TableCell><TableCell>16/9</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default AspectRatioDoc;
