import React from 'react';
import { Box, Stack, Heading, Text, Code, HeadProvider, useHead, usePageMeta } from '../../../lib/indoui/src';
import { ComponentPreview } from '../../../components/docs/ComponentPreview';
import { CodeBlock } from '../../../components/docs/CodeBlock';

// Demo component using useHead
const HeadDemo = () => {
  const { setHead } = useHead();
  
  React.useEffect(() => {
    setHead({
      title: 'My Page Title',
      description: 'This is my page description',
    });
  }, [setHead]);
  
  return <Text>Head updated! Check the browser tab.</Text>;
};

// Demo using usePageMeta
const PageMetaDemo = () => {
  usePageMeta({
    title: 'Products - My Store',
    description: 'Browse our products',
    ogTitle: 'Products',
  });
  
  return <Text>Page meta applied!</Text>;
};

const HeadProviderDoc = () => {
  const basicUsage = `import { HeadProvider, useHead } from 'indoui';

function App() {
  return (
    <HeadProvider defaultMeta={{ title: 'My App' }}>
      <MyComponent />
    </HeadProvider>
  );
}

function MyComponent() {
  const { setHead } = useHead();
  
  useEffect(() => {
    setHead({
      title: 'Page Title',
      description: 'Page description',
    });
  }, []);
  
  return <div>Content</div>;
}`;

  const usePageMetaExample = `import { usePageMeta } from 'indoui';

function ProductPage() {
  // Automatically sets head and cleans up on unmount
  usePageMeta({
    title: 'Product Name - My Store',
    description: 'Product description here',
    ogTitle: 'Product Name',
    ogImage: 'https://example.com/product.jpg',
  });
  
  return <div>Product content</div>;
}`;

  const seoExample = `import { HeadProvider, useHead } from 'indoui';

function BlogPost({ post }) {
  const { setHead } = useHead();
  
  useEffect(() => {
    setHead({
      title: post.title,
      description: post.excerpt,
      canonical: \`https://myblog.com/posts/\${post.slug}\`,
      ogTitle: post.title,
      ogDescription: post.excerpt,
      ogImage: post.coverImage,
      ogUrl: \`https://myblog.com/posts/\${post.slug}\`,
      twitterCard: 'summary_large_image',
      twitterTitle: post.title,
      twitterDescription: post.excerpt,
      twitterImage: post.coverImage,
    });
  }, [post]);
  
  return <article>{post.content}</article>;
}`;

  const ssrExample = `import { resolveHead, mergeHead } from 'indoui';

// Server-side rendering helper
const defaultMeta = {
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};

const pageMeta = {
  title: 'My Page',
  description: 'Page description',
};

// Merge and resolve to HTML string
const headTags = resolveHead(mergeHead(defaultMeta, pageMeta));
// Returns:
// <meta charset="utf-8" />
// <meta name="viewport" content="width=device-width, initial-scale=1" />
// <title>My Page</title>
// ...`;

  return (
    <Stack gap={8}>
      <Box>
        <Heading as="h1" size="2xl" mb={4}>HeadProvider</Heading>
        <Text color="muted" size="lg">
          Manage document head (title, meta tags, SEO) declaratively in your React app.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>Basic Usage</Heading>
        <Text mb={4}>
          Wrap your app with <Code>HeadProvider</Code> and use the <Code>useHead</Code> hook to update metadata.
        </Text>
        <CodeBlock code={basicUsage} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>usePageMeta Hook</Heading>
        <Text mb={4}>
          For page-specific metadata that should be cleaned up on unmount, use <Code>usePageMeta</Code>.
        </Text>
        <CodeBlock code={usePageMetaExample} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>SEO Best Practices</Heading>
        <Text mb={4}>
          Set comprehensive SEO metadata including Open Graph and Twitter cards.
        </Text>
        <CodeBlock code={seoExample} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>SSR Utilities</Heading>
        <Text mb={4}>
          Use <Code>resolveHead</Code> and <Code>mergeHead</Code> for server-side rendering.
        </Text>
        <CodeBlock code={ssrExample} language="tsx" />
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>HeadMeta Options</Heading>
        <Box as="table" w="100%">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Property</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.5rem' }}><Code>title</Code></td><td>string</td><td>Page title</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>description</Code></td><td>string</td><td>Meta description</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>keywords</Code></td><td>string</td><td>Meta keywords</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>author</Code></td><td>string</td><td>Author name</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>canonical</Code></td><td>string</td><td>Canonical URL</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>robots</Code></td><td>string</td><td>Robots directive</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>ogTitle</Code></td><td>string</td><td>Open Graph title</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>ogDescription</Code></td><td>string</td><td>Open Graph description</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>ogImage</Code></td><td>string</td><td>Open Graph image URL</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>ogUrl</Code></td><td>string</td><td>Open Graph URL</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>twitterCard</Code></td><td>string</td><td>Twitter card type</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>themeColor</Code></td><td>string</td><td>Theme color for mobile browsers</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><Code>favicon</Code></td><td>string</td><td>Favicon URL</td></tr>
          </tbody>
        </Box>
      </Box>
    </Stack>
  );
};

export default HeadProviderDoc;
