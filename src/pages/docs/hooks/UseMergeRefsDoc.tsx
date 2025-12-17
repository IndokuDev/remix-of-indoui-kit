import React, { useRef, useEffect, useState } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, Button,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
  useMergeRefs,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const UseMergeRefsDoc = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs(ref1, ref2);
  const [info, setInfo] = useState('');

  useEffect(() => {
    if (ref1.current && ref2.current) {
      setInfo(`Both refs point to the same element: ${ref1.current === ref2.current}`);
    }
  }, []);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="purple" mb={4}>Hooks</Badge>
          <Heading as="h1" size="3xl" mb={4}>useMergeRefs</Heading>
          <Text size="lg" color="muted.fg">
            Hook to merge multiple refs into a single callback ref.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Live Demo</Heading>
          <VStack spacing={4} align="flex-start">
            <Box ref={mergedRef} p={4} bg="primary.subtle" rounded="md">
              This element has merged refs
            </Box>
            <Text size="sm" color="muted.fg">{info}</Text>
            <Button 
              size="sm"
              onClick={() => {
                if (ref1.current) {
                  ref1.current.style.background = `hsl(${Math.random() * 360}, 70%, 80%)`;
                }
              }}
            >
              Change color via ref1
            </Button>
          </VStack>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Usage</Heading>
          <CodeBlock
            language="tsx"
            code={`import { useMergeRefs } from '@indoui/react';
import { forwardRef, useRef } from 'react';

// Common use case: forwarding ref while also using internal ref
const FocusableInput = forwardRef((props, forwardedRef) => {
  const internalRef = useRef(null);
  const mergedRef = useMergeRefs(internalRef, forwardedRef);

  const focusInput = () => {
    internalRef.current?.focus();
  };

  return (
    <>
      <input ref={mergedRef} {...props} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
});

// Usage with multiple refs
function MultiRefExample() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  
  const mergedRef = useMergeRefs(ref1, ref2, ref3);

  return <div ref={mergedRef}>All three refs point here</div>;
}`}
          />
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>API</Heading>
          <Box mb={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Parameter</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><code>...refs</code></TableCell><TableCell>Ref[]</TableCell><TableCell>Any number of refs to merge</TableCell></TableRow>
                <TableRow><TableCell><code>returns</code></TableCell><TableCell>RefCallback</TableCell><TableCell>Callback ref that updates all refs</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default UseMergeRefsDoc;
