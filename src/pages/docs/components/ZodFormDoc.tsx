import React from 'react';
import { Box, Stack, Heading, Text, Code, ZodForm, ZodField, ZodInput, ZodTextarea, ZodSelect, ZodCheckbox, ZodErrorMessage, ZodSubmit } from '../../../lib/indoui/src';
import { ComponentPreview } from '../../../components/docs/ComponentPreview';
import { CodeBlock } from '../../../components/docs/CodeBlock';
import { z } from 'zod';

const ZodFormDoc = () => {
  const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    subscribe: z.boolean().optional(),
  });

  const basicUsage = `import { z } from 'zod';
import { ZodForm, ZodField, ZodInput, ZodErrorMessage, ZodSubmit } from 'indoui';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

<ZodForm
  schema={schema}
  defaultValues={{ name: '', email: '', message: '' }}
  onSubmit={(data) => console.log('Submitted:', data)}
>
  <ZodField name="name">
    <label>Name</label>
    <ZodInput name="name" placeholder="Your name" />
    <ZodErrorMessage name="name" />
  </ZodField>
  
  <ZodField name="email">
    <label>Email</label>
    <ZodInput name="email" type="email" placeholder="your@email.com" />
    <ZodErrorMessage name="email" />
  </ZodField>
  
  <ZodField name="message">
    <label>Message</label>
    <ZodTextarea name="message" placeholder="Your message" />
    <ZodErrorMessage name="message" />
  </ZodField>
  
  <ZodSubmit>Submit</ZodSubmit>
</ZodForm>`;

  const allFieldsExample = `// All available form fields
<ZodInput name="text" />
<ZodTextarea name="textarea" />
<ZodSelect name="select">
  <option value="">Select...</option>
  <option value="a">Option A</option>
</ZodSelect>
<ZodCheckbox name="checkbox" />
<ZodFileInput name="file" />`;

  return (
    <Stack gap={8}>
      <Box>
        <Heading as="h1" size="2xl" mb={4}>ZodForm</Heading>
        <Text color="muted" size="lg">
          Type-safe forms with Zod schema validation.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Live Demo</Heading>
        <ComponentPreview>
          <ZodForm
            schema={schema}
            defaultValues={{ name: '', email: '', message: '', subscribe: false }}
            onSubmit={(data) => {
              console.log('Form submitted:', data);
              alert('Form submitted! Check console.');
            }}
          >
            <ZodField name="name">
              <Text as="label" fontWeight="medium" mb={1}>Name</Text>
              <ZodInput name="name" placeholder="Your name" />
              <ZodErrorMessage name="name" />
            </ZodField>
            
            <ZodField name="email">
              <Text as="label" fontWeight="medium" mb={1}>Email</Text>
              <ZodInput name="email" type="email" placeholder="your@email.com" />
              <ZodErrorMessage name="email" />
            </ZodField>
            
            <ZodField name="message">
              <Text as="label" fontWeight="medium" mb={1}>Message</Text>
              <ZodTextarea name="message" placeholder="Your message (min 10 chars)" rows={3} />
              <ZodErrorMessage name="message" />
            </ZodField>

            <Box style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ZodCheckbox name="subscribe" />
              <Text as="label">Subscribe to newsletter</Text>
            </Box>
            
            <ZodSubmit>Submit Form</ZodSubmit>
          </ZodForm>
        </ComponentPreview>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Usage</Heading>
        <CodeBlock code={basicUsage} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Available Fields</Heading>
        <CodeBlock code={allFieldsExample} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Components</Heading>
        <Stack gap={4}>
          <Box>
            <Heading as="h3" size="lg"><Code>ZodForm</Code></Heading>
            <Text>Form wrapper that handles validation and submission.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg"><Code>ZodField</Code></Heading>
            <Text>Field wrapper for grouping label, input, and error.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg"><Code>ZodInput</Code></Heading>
            <Text>Text input connected to form state.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg"><Code>ZodTextarea</Code></Heading>
            <Text>Textarea connected to form state.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg"><Code>ZodSelect</Code></Heading>
            <Text>Select dropdown connected to form state.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg"><Code>ZodCheckbox</Code></Heading>
            <Text>Checkbox connected to form state.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg"><Code>ZodFileInput</Code></Heading>
            <Text>File input for uploading files.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg"><Code>ZodErrorMessage</Code></Heading>
            <Text>Displays validation error for a field.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg"><Code>ZodSubmit</Code></Heading>
            <Text>Submit button with loading state.</Text>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>ZodForm Props</Heading>
        <Box as="table" w="100%">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Prop</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.5rem' }}><Code>schema</Code></td><td>ZodSchema</td><td>Zod validation schema</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>defaultValues</Code></td><td>object</td><td>Initial form values</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>onSubmit</Code></td><td>(data) =&gt; void</td><td>Called with validated data</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>onValidationError</Code></td><td>(errors) =&gt; void</td><td>Called when validation fails</td></tr>
          </tbody>
        </Box>
      </Box>
    </Stack>
  );
};

export default ZodFormDoc;
