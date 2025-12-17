import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  Badge,
  Progress,
  CircularProgress,
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

const ProgressDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="yellow" mb={4}>Feedback</Badge>
          <Heading as="h1" size="3xl" mb={4}>Progress</Heading>
          <Text size="lg" color="muted.fg">
            Progress components for displaying completion status.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Linear Progress</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="stretch">
                  <Progress value={25} />
                  <Progress value={50} />
                  <Progress value={75} />
                  <Progress value={100} />
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Sizes</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="stretch">
                  <Progress value={60} size="xs" />
                  <Progress value={60} size="sm" />
                  <Progress value={60} size="md" />
                  <Progress value={60} size="lg" />
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Progress value={60} size="xs" />
<Progress value={60} size="sm" />
<Progress value={60} size="md" />
<Progress value={60} size="lg" />`}
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
                <VStack spacing={4} align="stretch">
                  <Progress value={60} colorPalette="primary" />
                  <Progress value={60} colorPalette="success" />
                  <Progress value={60} colorPalette="warning" />
                  <Progress value={60} colorPalette="destructive" />
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Progress value={60} colorPalette="primary" />
<Progress value={60} colorPalette="success" />
<Progress value={60} colorPalette="warning" />
<Progress value={60} colorPalette="destructive" />`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Striped & Animated</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="stretch">
                  <Progress value={60} hasStripe />
                  <Progress value={60} hasStripe isAnimated />
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Progress value={60} hasStripe />
<Progress value={60} hasStripe isAnimated />`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Indeterminate</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Progress isIndeterminate />
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Progress isIndeterminate />`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Circular Progress</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <HStack spacing={6}>
                  <CircularProgress value={25} />
                  <CircularProgress value={50} colorPalette="success" />
                  <CircularProgress value={75} colorPalette="warning" />
                  <CircularProgress isIndeterminate />
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<CircularProgress value={25} />
<CircularProgress value={50} colorPalette="success" />
<CircularProgress value={75} colorPalette="warning" />
<CircularProgress isIndeterminate />`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Circular with Label</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <HStack spacing={6}>
                  <CircularProgress value={65} size={64} thickness={6}>
                    <Text size="sm" fontWeight={600}>65%</Text>
                  </CircularProgress>
                  <CircularProgress value={80} size={80} thickness={8} colorPalette="success">
                    <Text size="md" fontWeight={600}>80%</Text>
                  </CircularProgress>
                </HStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<CircularProgress value={65} size={64} thickness={6}>
  <Text>65%</Text>
</CircularProgress>

<CircularProgress value={80} size={80} thickness={8} colorPalette="success">
  <Text>80%</Text>
</CircularProgress>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API Reference</Heading>
          
          <Heading as="h3" size="lg" mb={3}>Progress</Heading>
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
                <TableCell><code>value</code></TableCell>
                <TableCell>number</TableCell>
                <TableCell>0</TableCell>
                <TableCell>Current value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>min</code></TableCell>
                <TableCell>number</TableCell>
                <TableCell>0</TableCell>
                <TableCell>Minimum value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>max</code></TableCell>
                <TableCell>number</TableCell>
                <TableCell>100</TableCell>
                <TableCell>Maximum value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>size</code></TableCell>
                <TableCell>'xs' | 'sm' | 'md' | 'lg'</TableCell>
                <TableCell>'md'</TableCell>
                <TableCell>Progress bar height</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>colorPalette</code></TableCell>
                <TableCell>'primary' | 'success' | 'warning' | 'destructive'</TableCell>
                <TableCell>'primary'</TableCell>
                <TableCell>Color theme</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>hasStripe</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Show striped pattern</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isAnimated</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Animate stripes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isIndeterminate</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Indeterminate state</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </Box>

          <Heading as="h3" size="lg" mb={3}>CircularProgress</Heading>
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
                <TableCell><code>value</code></TableCell>
                <TableCell>number</TableCell>
                <TableCell>0</TableCell>
                <TableCell>Current value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>size</code></TableCell>
                <TableCell>number | string</TableCell>
                <TableCell>48</TableCell>
                <TableCell>Circle size in pixels</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>thickness</code></TableCell>
                <TableCell>number</TableCell>
                <TableCell>4</TableCell>
                <TableCell>Stroke thickness</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>children</code></TableCell>
                <TableCell>ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Content inside circle</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default ProgressDoc;
