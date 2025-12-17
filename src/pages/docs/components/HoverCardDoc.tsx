import React from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Button,
  HoverCard, Avatar,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const HoverCardDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="red" mb={4}>Overlay</Badge>
          <Heading as="h1" size="3xl" mb={4}>HoverCard</Heading>
          <Text size="lg" color="muted.fg">
            Display additional content when hovering over an element.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic HoverCard</Heading>
          <HoverCard
            trigger={<Button variant="outline">Hover me</Button>}
          >
            <VStack spacing={2} align="flex-start">
              <Text fontWeight="medium">Popup Content</Text>
              <Text size="sm" color="muted.fg">
                This content appears when you hover over the trigger.
              </Text>
            </VStack>
          </HoverCard>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>User Profile Card</Heading>
          <HoverCard
            trigger={
              <HStack spacing={2} cursor="pointer">
                <Avatar name="John Doe" size="sm" />
                <Text>@johndoe</Text>
              </HStack>
            }
          >
            <VStack spacing={3} align="flex-start">
              <HStack spacing={3}>
                <Avatar name="John Doe" size="md" />
                <Box>
                  <Text fontWeight="medium">John Doe</Text>
                  <Text size="sm" color="muted.fg">@johndoe</Text>
                </Box>
              </HStack>
              <Text size="sm">Full-stack developer passionate about React and TypeScript.</Text>
              <HStack spacing={4}>
                <Text size="sm"><strong>245</strong> following</Text>
                <Text size="sm"><strong>1.2K</strong> followers</Text>
              </HStack>
            </VStack>
          </HoverCard>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Placement Options</Heading>
          <HStack spacing={4}>
            <HoverCard trigger={<Button size="sm">Top</Button>} placement="top">
              <Text>Top placement</Text>
            </HoverCard>
            <HoverCard trigger={<Button size="sm">Bottom</Button>} placement="bottom">
              <Text>Bottom placement</Text>
            </HoverCard>
            <HoverCard trigger={<Button size="sm">Left</Button>} placement="left">
              <Text>Left placement</Text>
            </HoverCard>
            <HoverCard trigger={<Button size="sm">Right</Button>} placement="right">
              <Text>Right placement</Text>
            </HoverCard>
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`<HoverCard
  trigger={<Button>Hover me</Button>}
>
  <Text>Content shown on hover</Text>
</HoverCard>

// With placement
<HoverCard
  trigger={<Avatar name="User" />}
  placement="right"
  openDelay={200}
  closeDelay={300}
>
  <UserProfileCard />
</HoverCard>`}
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
                <TableRow><TableCell><code>trigger</code></TableCell><TableCell>ReactNode</TableCell><TableCell>required</TableCell></TableRow>
                <TableRow><TableCell><code>placement</code></TableCell><TableCell>'top' | 'bottom' | 'left' | 'right'</TableCell><TableCell>'bottom'</TableCell></TableRow>
                <TableRow><TableCell><code>openDelay</code></TableCell><TableCell>number (ms)</TableCell><TableCell>200</TableCell></TableRow>
                <TableRow><TableCell><code>closeDelay</code></TableCell><TableCell>number (ms)</TableCell><TableCell>300</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default HoverCardDoc;
