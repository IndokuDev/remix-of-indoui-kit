import { useState } from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Card,
  TextEditor,
  Badge,
} from "../../../../lib/indoui/src";
import { ComponentPreview } from "../../../components/docs/ComponentPreview";

const TextEditorDoc = () => {
  const [content, setContent] = useState("<p>Hello, <strong>World</strong>!</p>");

  return (
    <Container maxWidth="4xl" py={10}>
      <VStack spacing={10} align="stretch">
        <VStack align="flex-start" spacing={4}>
          <Badge variant="subtle" colorPalette="blue">Component</Badge>
          <Heading as="h1" size="3xl">TextEditor</Heading>
          <Text size="lg" color="muted.fg">
            A rich text WYSIWYG editor with formatting toolbar.
          </Text>
        </VStack>

        <Card variant="outline" p={6}>
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg">Basic Usage</Heading>
            <ComponentPreview>
              <TextEditor
                value={content}
                onChange={setContent}
                placeholder="Start typing..."
                minHeight="200px"
              />
            </ComponentPreview>
          </VStack>
        </Card>
      </VStack>
    </Container>
  );
};

export default TextEditorDoc;
