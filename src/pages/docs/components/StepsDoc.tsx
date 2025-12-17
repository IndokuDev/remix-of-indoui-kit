import React, { useState } from 'react';
import {
  Box, VStack, HStack, Heading, Text, Card, Badge, Button, Steps,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const StepsDoc = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="teal" mb={4}>Navigation</Badge>
          <Heading as="h1" size="3xl" mb={4}>Steps</Heading>
          <Text size="lg" color="muted.fg">
            Guide users through a multi-step process.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Interactive Steps</Heading>
          <Steps activeStep={currentStep}>
            <Step title="Account" description="Create your account" />
            <Step title="Profile" description="Set up your profile" />
            <Step title="Review" description="Review and confirm" />
            <Step title="Complete" description="All done!" />
          </Steps>
          <HStack mt={6} justify="center" spacing={4}>
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              isDisabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button 
              colorPalette="blue"
              onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
              isDisabled={currentStep === 3}
            >
              Next
            </Button>
          </HStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Vertical Steps</Heading>
          <Steps orientation="vertical" activeStep={2}>
            <Step title="Step 1" description="First step completed" />
            <Step title="Step 2" description="Second step completed" />
            <Step title="Step 3" description="Current step" />
            <Step title="Step 4" description="Pending step" />
            ]}
          />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [currentStep, setCurrentStep] = useState(0);

<Steps
  currentStep={currentStep}
  steps={[
    { title: 'Account', description: 'Create your account' },
    { title: 'Profile', description: 'Set up your profile' },
    { title: 'Review', description: 'Review and confirm' },
  ]}
/>`}
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
              <TableRow><TableCell><code>steps</code></TableCell><TableCell>Step[]</TableCell><TableCell>[]</TableCell></TableRow>
              <TableRow><TableCell><code>currentStep</code></TableCell><TableCell>number</TableCell><TableCell>0</TableCell></TableRow>
              <TableRow><TableCell><code>orientation</code></TableCell><TableCell>'horizontal' | 'vertical'</TableCell><TableCell>'horizontal'</TableCell></TableRow>
              <TableRow><TableCell><code>colorPalette</code></TableCell><TableCell>ColorName</TableCell><TableCell>'blue'</TableCell></TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default StepsDoc;
