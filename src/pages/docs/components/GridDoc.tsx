import {
  Box, VStack, HStack, Grid, GridItem, Heading, Text, Card, Badge,
  Tabs, TabList, Tab, TabPanels, TabPanel,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const GridDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Layout</Badge>
          <Heading as="h1" size="3xl" mb={4}>Grid</Heading>
          <Text size="lg" color="muted.fg">
            CSS Grid layout component for two-dimensional layouts with rows and columns.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Grid</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                  {[1,2,3,4,5,6].map(i => (
                    <Box key={i} bg="blue.500" p={4} rounded="md" color="white" textAlign="center">
                      {i}
                    </Box>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Grid templateColumns="repeat(3, 1fr)" gap={4}>
  <Box bg="blue.500" p={4}>1</Box>
  <Box bg="blue.500" p={4}>2</Box>
  <Box bg="blue.500" p={4}>3</Box>
  <Box bg="blue.500" p={4}>4</Box>
  <Box bg="blue.500" p={4}>5</Box>
  <Box bg="blue.500" p={4}>6</Box>
</Grid>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Grid with Spanning</Heading>
          <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(2, 1fr)" gap={4}>
            <GridItem colSpan={2} bg="purple.500" p={4} rounded="md" color="white">Span 2 cols</GridItem>
            <GridItem bg="green.500" p={4} rounded="md" color="white">1</GridItem>
            <GridItem rowSpan={2} bg="red.500" p={4} rounded="md" color="white">Span 2 rows</GridItem>
            <GridItem colSpan={3} bg="amber.500" p={4} rounded="md">Span 3 cols</GridItem>
          </Grid>
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
              <TableRow><TableCell><code>templateColumns</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>templateRows</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>gap</code></TableCell><TableCell>number | string</TableCell><TableCell>-</TableCell></TableRow>
              <TableRow><TableCell><code>colSpan</code></TableCell><TableCell>number (GridItem)</TableCell><TableCell>1</TableCell></TableRow>
              <TableRow><TableCell><code>rowSpan</code></TableCell><TableCell>number (GridItem)</TableCell><TableCell>1</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default GridDoc;
