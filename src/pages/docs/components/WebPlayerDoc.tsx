import React from 'react';
import { Box, Stack, Heading, Text, Code, WebPlayer } from '../../../lib/indoui/src';
import { ComponentPreview } from '../../../components/docs/ComponentPreview';
import { CodeBlock } from '../../../components/docs/CodeBlock';

const WebPlayerDoc = () => {
  const basicUsage = `import { WebPlayer } from 'indoui';

const code = \`
const App = () => {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
\`;

<WebPlayer
  code={code}
  title="Counter Example"
  height={300}
/>`;

  const demoCode = `const App = () => {
  const [count, setCount] = React.useState(0);
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Count: {count}</h1>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          borderRadius: '0.25rem',
          border: '1px solid #ccc'
        }}
      >
        Increment
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));`;

  return (
    <Stack gap={8}>
      <Box>
        <Heading as="h1" size="2xl" mb={4}>WebPlayer</Heading>
        <Text color="muted" size="lg">
          Interactive component playground with live preview, code view, and console.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Live Demo</Heading>
        <WebPlayer
          code={demoCode}
          title="Counter Example"
          height={350}
        />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Usage</Heading>
        <CodeBlock code={basicUsage} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Features</Heading>
        <Stack gap={2}>
          <Text>• <strong>Live Preview</strong> - See your component render in real-time</Text>
          <Text>• <strong>Code View</strong> - View and copy the source code</Text>
          <Text>• <strong>Console</strong> - See console.log, console.error, and console.warn output</Text>
          <Text>• <strong>Refresh</strong> - Re-run the component to reset state</Text>
          <Text>• <strong>Dark/Light Theme</strong> - Matches your preference</Text>
        </Stack>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Props</Heading>
        <Box as="table" w="100%">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Prop</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Default</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.5rem' }}><Code>code</Code></td><td>string</td><td>required</td><td>JSX/TSX code to render</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>title</Code></td><td>string</td><td>"Preview"</td><td>Title in header</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>height</Code></td><td>string | number</td><td>400</td><td>Player height</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>theme</Code></td><td>"light" | "dark"</td><td>"dark"</td><td>Color theme</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>showPreview</Code></td><td>boolean</td><td>true</td><td>Show preview tab</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>showCode</Code></td><td>boolean</td><td>true</td><td>Show code tab</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>showConsole</Code></td><td>boolean</td><td>true</td><td>Show console tab</td></tr>
          </tbody>
        </Box>
      </Box>
    </Stack>
  );
};

export default WebPlayerDoc;
