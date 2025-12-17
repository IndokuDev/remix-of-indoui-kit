import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Badge,
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

const TabsDoc = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="cyan" mb={4}>Navigation</Badge>
          <Heading as="h1" size="3xl" mb={4}>Tabs</Heading>
          <Text size="lg" color="muted.fg">
            Organize content into switchable panels with tab navigation.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Line Variant</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Tabs defaultValue="tab1" variant="line">
                  <TabList>
                    <Tab value="tab1">Account</Tab>
                    <Tab value="tab2">Settings</Tab>
                    <Tab value="tab3">Notifications</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel value="tab1">
                      <Box p={4}>Account settings content</Box>
                    </TabPanel>
                    <TabPanel value="tab2">
                      <Box p={4}>General settings content</Box>
                    </TabPanel>
                    <TabPanel value="tab3">
                      <Box p={4}>Notification preferences</Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Tabs defaultValue="tab1" variant="line">
  <TabList>
    <Tab value="tab1">Account</Tab>
    <Tab value="tab2">Settings</Tab>
    <Tab value="tab3">Notifications</Tab>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">Account content</TabPanel>
    <TabPanel value="tab2">Settings content</TabPanel>
    <TabPanel value="tab3">Notifications content</TabPanel>
  </TabPanels>
</Tabs>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Enclosed Variant</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Tabs defaultValue="tab1" variant="enclosed">
                  <TabList>
                    <Tab value="tab1">Profile</Tab>
                    <Tab value="tab2">Security</Tab>
                    <Tab value="tab3">Billing</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel value="tab1">
                      <Box p={4}>Profile information</Box>
                    </TabPanel>
                    <TabPanel value="tab2">
                      <Box p={4}>Security settings</Box>
                    </TabPanel>
                    <TabPanel value="tab3">
                      <Box p={4}>Billing details</Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Tabs defaultValue="tab1" variant="enclosed">
  <TabList>
    <Tab value="tab1">Profile</Tab>
    <Tab value="tab2">Security</Tab>
    <Tab value="tab3">Billing</Tab>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">Profile content</TabPanel>
    <TabPanel value="tab2">Security content</TabPanel>
    <TabPanel value="tab3">Billing content</TabPanel>
  </TabPanels>
</Tabs>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Soft Rounded Variant</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <Tabs defaultValue="tab1" variant="soft-rounded">
                  <TabList>
                    <Tab value="tab1">Overview</Tab>
                    <Tab value="tab2">Analytics</Tab>
                    <Tab value="tab3">Reports</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel value="tab1">
                      <Box p={4}>Overview dashboard</Box>
                    </TabPanel>
                    <TabPanel value="tab2">
                      <Box p={4}>Analytics data</Box>
                    </TabPanel>
                    <TabPanel value="tab3">
                      <Box p={4}>Generated reports</Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`<Tabs defaultValue="tab1" variant="soft-rounded">
  <TabList>
    <Tab value="tab1">Overview</Tab>
    <Tab value="tab2">Analytics</Tab>
    <Tab value="tab3">Reports</Tab>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">Overview content</TabPanel>
    <TabPanel value="tab2">Analytics content</TabPanel>
    <TabPanel value="tab3">Reports content</TabPanel>
  </TabPanels>
</Tabs>`}
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
                <TableCell><code>defaultValue</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Initial active tab</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>value</code></TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Controlled active tab</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onChange</code></TableCell>
                <TableCell>(value: string) =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Called on tab change</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>variant</code></TableCell>
                <TableCell>'line' | 'enclosed' | 'soft-rounded'</TableCell>
                <TableCell>'line'</TableCell>
                <TableCell>Tab style variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>orientation</code></TableCell>
                <TableCell>'horizontal' | 'vertical'</TableCell>
                <TableCell>'horizontal'</TableCell>
                <TableCell>Tab orientation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default TabsDoc;
