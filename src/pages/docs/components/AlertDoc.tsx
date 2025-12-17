import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Badge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const AlertDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="amber" mb={4}>Feedback</Badge>
          <Heading as="h1" size="3xl" mb={4}>Alert</Heading>
          <Text size="lg" color="muted.fg">
            Display important messages and feedback to users.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Status Types</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4}>
                  <Alert status="info">
                    <AlertIcon />
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>This is an informational alert.</AlertDescription>
                  </Alert>
                  <Alert status="success">
                    <AlertIcon />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>Operation completed successfully.</AlertDescription>
                  </Alert>
                  <Alert status="warning">
                    <AlertIcon />
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>Please review before continuing.</AlertDescription>
                  </Alert>
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Something went wrong.</AlertDescription>
                  </Alert>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Alert status="info">
  <AlertIcon />
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>Informational message.</AlertDescription>
</Alert>

<Alert status="success">
  <AlertIcon />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Success message.</AlertDescription>
</Alert>

<Alert status="warning">
  <AlertIcon />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Warning message.</AlertDescription>
</Alert>

<Alert status="error">
  <AlertIcon />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Error message.</AlertDescription>
</Alert>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Color Palettes</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4}>
                  <Alert colorPalette="blue">
                    <AlertIcon />
                    <AlertTitle>Blue Alert</AlertTitle>
                  </Alert>
                  <Alert colorPalette="green">
                    <AlertIcon />
                    <AlertTitle>Green Alert</AlertTitle>
                  </Alert>
                  <Alert colorPalette="amber">
                    <AlertIcon />
                    <AlertTitle>Amber Alert</AlertTitle>
                  </Alert>
                  <Alert colorPalette="red">
                    <AlertIcon />
                    <AlertTitle>Red Alert</AlertTitle>
                  </Alert>
                  <Alert colorPalette="purple">
                    <AlertIcon />
                    <AlertTitle>Purple Alert</AlertTitle>
                  </Alert>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Alert colorPalette="blue">
  <AlertIcon />
  <AlertTitle>Blue Alert</AlertTitle>
</Alert>

<Alert colorPalette="green">
  <AlertIcon />
  <AlertTitle>Green Alert</AlertTitle>
</Alert>

<Alert colorPalette="amber">
  <AlertIcon />
  <AlertTitle>Amber Alert</AlertTitle>
</Alert>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Variants</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4}>
                  <Alert variant="subtle" colorPalette="blue">
                    <AlertIcon />
                    <AlertTitle>Subtle variant</AlertTitle>
                  </Alert>
                  <Alert variant="solid" colorPalette="blue">
                    <AlertIcon />
                    <AlertTitle>Solid variant</AlertTitle>
                  </Alert>
                  <Alert variant="left-accent" colorPalette="blue">
                    <AlertIcon />
                    <AlertTitle>Left accent variant</AlertTitle>
                  </Alert>
                  <Alert variant="top-accent" colorPalette="blue">
                    <AlertIcon />
                    <AlertTitle>Top accent variant</AlertTitle>
                  </Alert>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Alert variant="subtle" colorPalette="blue">
  Subtle variant
</Alert>

<Alert variant="solid" colorPalette="blue">
  Solid variant
</Alert>

<Alert variant="left-accent" colorPalette="blue">
  Left accent variant
</Alert>

<Alert variant="top-accent" colorPalette="blue">
  Top accent variant
</Alert>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API Reference</Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Prop</TableHeaderCell>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>Default</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><code>status</code></TableCell>
                <TableCell>'info' | 'success' | 'warning' | 'error'</TableCell>
                <TableCell>'info'</TableCell>
                <TableCell>Alert status type</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>variant</code></TableCell>
                <TableCell>'subtle' | 'solid' | 'left-accent' | 'top-accent'</TableCell>
                <TableCell>'subtle'</TableCell>
                <TableCell>Alert style variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>colorPalette</code></TableCell>
                <TableCell>'blue' | 'green' | 'amber' | 'red' | ...</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Color palette override</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default AlertDoc;
