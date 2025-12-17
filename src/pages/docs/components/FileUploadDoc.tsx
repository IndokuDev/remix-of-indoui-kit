import React, { useState } from 'react';
import {
  Box, VStack, Heading, Text, Card, Badge,
  FileUpload, FileUploadPreview,
  Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";

const FileUploadDoc = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="green" mb={4}>Forms</Badge>
          <Heading as="h1" size="3xl" mb={4}>FileUpload</Heading>
          <Text size="lg" color="muted.fg">
            Drag and drop file upload with validation.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Basic File Upload</Heading>
          <FileUpload onFilesChange={setFiles} accept="image/*" />
          <FileUploadPreview files={files} onRemove={(i) => setFiles(f => f.filter((_, idx) => idx !== i))} />
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Multiple Files</Heading>
          <FileUpload multiple maxFiles={5}>
            <VStack spacing={2}>
              <Text>Drop files here</Text>
              <Text size="sm" color="muted.fg">Up to 5 files</Text>
            </VStack>
          </FileUpload>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>With Size Limit</Heading>
          <FileUpload maxSize={5 * 1024 * 1024} accept=".pdf,.doc,.docx">
            <VStack spacing={2}>
              <Text>Upload Document</Text>
              <Text size="sm" color="muted.fg">PDF, DOC (max 5MB)</Text>
            </VStack>
          </FileUpload>
        </Card>

        <Card variant="outline" p={6}>
          <Heading as="h3" size="md" mb={4}>Code</Heading>
          <CodeBlock
            language="tsx"
            code={`const [files, setFiles] = useState([]);

<FileUpload onFilesChange={setFiles} accept="image/*">
  <Text>Drop images here</Text>
</FileUpload>

<FileUploadPreview 
  files={files} 
  onRemove={(i) => setFiles(f => f.filter((_, idx) => idx !== i))} 
/>

// Multiple files with limit
<FileUpload multiple maxFiles={5} maxSize={5 * 1024 * 1024}>
  <Text>Select Files</Text>
</FileUpload>`}
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
                <TableRow><TableCell><code>accept</code></TableCell><TableCell>string</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>multiple</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
                <TableRow><TableCell><code>maxFiles</code></TableCell><TableCell>number</TableCell><TableCell>10</TableCell></TableRow>
                <TableRow><TableCell><code>maxSize</code></TableCell><TableCell>number (bytes)</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>onFilesChange</code></TableCell><TableCell>(files) =&gt; void</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>onError</code></TableCell><TableCell>(error) =&gt; void</TableCell><TableCell>-</TableCell></TableRow>
                <TableRow><TableCell><code>isDisabled</code></TableCell><TableCell>boolean</TableCell><TableCell>false</TableCell></TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default FileUploadDoc;
