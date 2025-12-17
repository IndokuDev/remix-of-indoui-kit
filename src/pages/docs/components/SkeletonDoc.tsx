import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Skeleton,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const SkeletonDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="red" mb={4}>Feedback</Badge>
          <Heading as="h1" size="3xl" mb={4}>Skeleton</Heading>
          <Text size="lg" color="muted.fg">
            Placeholder loading state for content.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Usage</Heading>
          <VStack spacing={4} align="stretch" maxW="400px">
            <Skeleton h="20px" />
            <Skeleton h="20px" w="80%" />
            <Skeleton h="20px" w="60%" />
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Card Skeleton</Heading>
          <Card variant="outline" p={4} maxW="300px">
            <HStack spacing={4} mb={4}>
              <Skeleton borderRadius="full" h="40px" w="40px" />
              <VStack spacing={2} flex={1} align="stretch">
                <Skeleton h="14px" w="70%" />
                <Skeleton h="12px" w="50%" />
              </VStack>
            </HStack>
            <Skeleton h="100px" mb={4} />
            <Skeleton h="14px" mb={2} />
            <Skeleton h="14px" w="80%" />
          </Card>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Skeleton h="20px" w="100%" />
<Skeleton h="20px" w="80%" />
<Skeleton h="20px" w="60%" />

// Circle skeleton (avatar)
<Skeleton borderRadius="full" h="40px" w="40px" />`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Props</Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Prop</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Default</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow><TableCell><code>isLoaded</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              <TableRow><TableCell><code>fadeDuration</code></TableCell><TableCell>number</TableCell><TableCell>0.4</TableCell></TableRow>
              <TableRow><TableCell><code>startColor</code></TableCell><TableCell>string</TableCell><TableCell>gray.100</TableCell></TableRow>
              <TableRow><TableCell><code>endColor</code></TableCell><TableCell>string</TableCell><TableCell>gray.300</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default SkeletonDoc;
