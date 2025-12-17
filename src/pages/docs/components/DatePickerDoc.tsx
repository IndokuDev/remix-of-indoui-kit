import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Badge,
  DatePicker,
  TimePicker,
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

const DatePickerDoc = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState("14:30");

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="blue" mb={4}>
            Component
          </Badge>
          <Heading as="h1" size="3xl" mb={4}>
            DatePicker & TimePicker
          </Heading>
          <Text size="lg" color="muted.fg">
            Date and time selection components with range constraints.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="lg" mb={4}>DatePicker</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="flex-start">
                  <DatePicker
                    value={date}
                    onChange={setDate}
                    placeholder="Select a date"
                  />
                  <Text size="sm" color="muted.fg">
                    Selected: {date ? date.toLocaleDateString() : "None"}
                  </Text>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { DatePicker } from '@indoui/react';

function Example() {
  const [date, setDate] = useState<Date | undefined>();
  
  return (
    <DatePicker
      value={date}
      onChange={setDate}
      placeholder="Select a date"
    />
  );
}`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="lg" mb={4}>TimePicker</Heading>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="flex-start">
                  <TimePicker
                    value={time}
                    onChange={setTime}
                    placeholder="Select time"
                  />
                  <Text size="sm" color="muted.fg">
                    Selected: {time || "None"}
                  </Text>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { TimePicker } from '@indoui/react';

function Example() {
  const [time, setTime] = useState("14:30");
  
  return (
    <TimePicker
      value={time}
      onChange={setTime}
    />
  );
}`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            API Reference - DatePicker
          </Heading>
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
                <TableCell>Date</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Selected date value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onChange</code></TableCell>
                <TableCell>(date: Date | undefined) =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Change handler</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>min</code></TableCell>
                <TableCell>Date</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Minimum selectable date</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>max</code></TableCell>
                <TableCell>Date</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Maximum selectable date</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>isClearable</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Allow clearing the date</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default DatePickerDoc;
