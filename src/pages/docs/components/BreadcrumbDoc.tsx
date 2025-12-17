import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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

const BreadcrumbDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="blue" mb={4}>Navigation</Badge>
          <Heading as="h1" size="3xl" mb={4}>Breadcrumb</Heading>
          <Text size="lg" color="muted.fg">
            Breadcrumb navigation component for showing the current location within a hierarchy.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Usage</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Breadcrumb>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  <BreadcrumbLink href="#">Products</BreadcrumbLink>
                  <BreadcrumbLink href="#">Category</BreadcrumbLink>
                  <BreadcrumbItem isCurrentPage>Current Page</BreadcrumbItem>
                </Breadcrumb>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Breadcrumb>
  <BreadcrumbLink href="#">Home</BreadcrumbLink>
  <BreadcrumbLink href="#">Products</BreadcrumbLink>
  <BreadcrumbLink href="#">Category</BreadcrumbLink>
  <BreadcrumbItem isCurrentPage>Current Page</BreadcrumbItem>
</Breadcrumb>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Custom Separator</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="flex-start">
                  <Breadcrumb separator="›">
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                    <BreadcrumbItem isCurrentPage>Components</BreadcrumbItem>
                  </Breadcrumb>
                  
                  <Breadcrumb separator="→">
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                    <BreadcrumbItem isCurrentPage>Components</BreadcrumbItem>
                  </Breadcrumb>
                  
                  <Breadcrumb separator="|">
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                    <BreadcrumbItem isCurrentPage>Components</BreadcrumbItem>
                  </Breadcrumb>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Breadcrumb separator="›">
  <BreadcrumbLink href="#">Home</BreadcrumbLink>
  <BreadcrumbLink href="#">Docs</BreadcrumbLink>
  <BreadcrumbItem isCurrentPage>Components</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb separator="→">
  <BreadcrumbLink href="#">Home</BreadcrumbLink>
  <BreadcrumbLink href="#">Docs</BreadcrumbLink>
  <BreadcrumbItem isCurrentPage>Components</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb separator="|">
  <BreadcrumbLink href="#">Home</BreadcrumbLink>
  <BreadcrumbLink href="#">Docs</BreadcrumbLink>
  <BreadcrumbItem isCurrentPage>Components</BreadcrumbItem>
</Breadcrumb>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Icon Separator</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Breadcrumb separator={<span style={{ margin: '0 4px' }}>»</span>}>
                  <BreadcrumbLink href="#">🏠 Home</BreadcrumbLink>
                  <BreadcrumbLink href="#">📁 Projects</BreadcrumbLink>
                  <BreadcrumbItem isCurrentPage>📄 Document</BreadcrumbItem>
                </Breadcrumb>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Breadcrumb separator={<ChevronIcon />}>
  <BreadcrumbLink href="#">🏠 Home</BreadcrumbLink>
  <BreadcrumbLink href="#">📁 Projects</BreadcrumbLink>
  <BreadcrumbItem isCurrentPage>📄 Document</BreadcrumbItem>
</Breadcrumb>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API Reference</Heading>
          
          <Heading as="h3" size="lg" mb={3}>Breadcrumb</Heading>
          <Box mb={6}>
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
                <TableCell><code>separator</code></TableCell>
                <TableCell>ReactNode</TableCell>
                <TableCell>'/'</TableCell>
                <TableCell>Separator between items</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>spacing</code></TableCell>
                <TableCell>number</TableCell>
                <TableCell>2</TableCell>
                <TableCell>Space between items</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </Box>

          <Heading as="h3" size="lg" mb={3}>BreadcrumbItem</Heading>
          <Box mb={6}>
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
                <TableCell><code>isCurrentPage</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Mark as current page</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </Box>

          <Heading as="h3" size="lg" mb={3}>BreadcrumbLink</Heading>
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
                <TableCell><code>href</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Link destination</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isCurrentPage</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Render as span instead of link</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default BreadcrumbDoc;
