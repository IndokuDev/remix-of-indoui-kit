import React, { useState } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge, Dropzone,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const DropzoneDoc = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>Dropzone</Heading>
          <Text size="lg" color="muted.fg">
            Drag and drop area for file uploads.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic Dropzone</Heading>
          <Dropzone onFilesAccepted={setFiles}>
            <VStack spacing={2} p={8}>
              <Text>Drag files here or click to browse</Text>
              <Text size="sm" color="muted.fg">Supports any file type</Text>
            </VStack>
          </Dropzone>
          {files.length > 0 && (
            <Box mt={4}>
              <Text size="sm" fontWeight="medium">Selected files:</Text>
              {files.map((file, i) => (
                <Text key={i} size="sm" color="muted.fg">{file.name}</Text>
              ))}
            </Box>
          )}
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Images Only</Heading>
          <Dropzone accept={["image/*"]} multiple maxFiles={5}>
            <VStack spacing={2} p={8}>
              <Text>Drop images here</Text>
              <Text size="sm" color="muted.fg">PNG, JPG, GIF up to 10MB</Text>
            </VStack>
          </Dropzone>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [files, setFiles] = useState([]);

<Dropzone onFilesAccepted={setFiles}>
  <VStack p={8}>
    <Text>Drag files here</Text>
    <Text size="sm">or click to browse</Text>
  </VStack>
</Dropzone>

// Images only (accept is string[])
<Dropzone accept={["image/*"]} multiple maxFiles={5}>
  <Text>Drop images here</Text>
</Dropzone>

// With size limit
<Dropzone maxSize={10 * 1024 * 1024}>
  <Text>Max 10MB per file</Text>
</Dropzone>`}
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
                <TableRow><TableCell><code>accept</code></TableCell><TableCell>string[]</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>multiple</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
                <TableRow><TableCell><code>maxFiles</code></TableCell><TableCell>number</TableCell><TableCell>1</TableCell></TableRow>
                <TableRow><TableCell><code>maxSize</code></TableCell><TableCell>number (bytes)</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>onFilesAccepted</code></TableCell><TableCell>(files) =&gt; void</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>isDisabled</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default DropzoneDoc;
