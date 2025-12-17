import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Avatar, AvatarGroup,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const AvatarDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="orange" mb={4}>Data Display</Badge>
          <Heading as="h1" size="3xl" mb={4}>Avatar</Heading>
          <Text size="lg" color="muted.fg">
            Display user profile images with fallback initials.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Sizes</Heading>
          <HStack spacing={4}>
            <Avatar size="xs" name="John Doe" />
            <Avatar size="sm" name="John Doe" />
            <Avatar size="md" name="John Doe" />
            <Avatar size="lg" name="John Doe" />
            <Avatar size="xl" name="John Doe" />
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Image</Heading>
          <HStack spacing={4}>
            <Avatar 
              src="https://i.pravatar.cc/150?img=1" 
              name="Jane Doe" 
              size="lg"
            />
            <Avatar 
              src="https://i.pravatar.cc/150?img=2" 
              name="Bob Smith" 
              size="lg"
            />
            <Avatar 
              src="https://i.pravatar.cc/150?img=3" 
              name="Alice Wonder" 
              size="lg"
            />
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Avatar Group</Heading>
          <AvatarGroup max={3}>
            <Avatar src="https://i.pravatar.cc/150?img=1" name="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=2" name="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=3" name="User 3" />
            <Avatar src="https://i.pravatar.cc/150?img=4" name="User 4" />
            <Avatar src="https://i.pravatar.cc/150?img=5" name="User 5" />
          </AvatarGroup>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<Avatar 
  src="https://example.com/avatar.jpg" 
  name="John Doe" 
  size="lg"
/>

<AvatarGroup max={3}>
  <Avatar name="User 1" />
  <Avatar name="User 2" />
  <Avatar name="User 3" />
  <Avatar name="User 4" />
</AvatarGroup>`}
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
              <TableRow><TableCell><code>name</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>src</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>size</code></TableCell><TableCell>'xs' | 'sm' | 'md' | 'lg' | 'xl'</TableCell><TableCell>'md'</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default AvatarDoc;
