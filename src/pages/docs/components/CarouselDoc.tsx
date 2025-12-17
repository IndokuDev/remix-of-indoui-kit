import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  Badge,
  Carousel,
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
  HStack,
  Button,
} from "../../../../lib/indoui/src";
import { CodeBlock } from "../../../components/docs/CodeBlock";
import { useState } from "react";

const CarouselDoc = () => {
  const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal');
  
  const slides = [
    { id: 1, content: "Slide 1", bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { id: 2, content: "Slide 2", bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { id: 3, content: "Slide 3", bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { id: 4, content: "Slide 4", bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
  ];

  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Box>
          <Badge variant="subtle" colorPalette="amber" mb={4}>
            Component
          </Badge>
          <Heading as="h1" size="3xl" mb={4}>
            Carousel
          </Heading>
          <Text size="lg" color="muted.fg">
            A carousel component for cycling through elements like slides or images with configurable slide direction.
          </Text>
        </Box>

        <Card variant="outline" p={6}>
          <Tabs defaultValue="preview" variant="line">
            <TabList mb={4}>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="preview">
                <VStack spacing={4} align="stretch">
                  <HStack spacing={2}>
                    <Button 
                      size="sm" 
                      variant={direction === 'horizontal' ? 'solid' : 'outline'}
                      onClick={() => setDirection('horizontal')}
                    >
                      Horizontal
                    </Button>
                    <Button 
                      size="sm" 
                      variant={direction === 'vertical' ? 'solid' : 'outline'}
                      onClick={() => setDirection('vertical')}
                    >
                      Vertical
                    </Button>
                  </HStack>
                  <Carousel 
                    autoPlay 
                    interval={3000} 
                    showDots 
                    showArrows
                    direction={direction}
                  >
                    {slides.map((slide) => (
                      <Box
                        key={slide.id}
                        style={{
                          background: slide.bg,
                          height: "250px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "8px",
                        }}
                      >
                        <Text size="xl" weight="bold" style={{ color: "white" }}>
                          {slide.content}
                        </Text>
                      </Box>
                    ))}
                  </Carousel>
                </VStack>
              </TabPanel>
              <TabPanel value="code">
                <CodeBlock
                  language="tsx"
                  code={`import { Carousel, Box, Text } from '@indoui/react';

const slides = [
  { id: 1, content: "Slide 1", bg: "..." },
  { id: 2, content: "Slide 2", bg: "..." },
];

// Horizontal carousel (default)
<Carousel autoPlay interval={3000} showDots showArrows>
  {slides.map((slide) => (
    <Box key={slide.id} style={{ background: slide.bg, height: "250px" }}>
      <Text>{slide.content}</Text>
    </Box>
  ))}
</Carousel>

// Vertical carousel
<Carousel direction="vertical" showDots showArrows>
  {slides.map((slide) => (
    <Box key={slide.id} style={{ background: slide.bg, height: "250px" }}>
      <Text>{slide.content}</Text>
    </Box>
  ))}
</Carousel>

// With slide direction
<Carousel slideDirection="up">
  {slides.map((slide) => (...))}
</Carousel>`}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            API Reference
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
                <TableCell><code>children</code></TableCell>
                <TableCell>ReactNode[]</TableCell>
                <TableCell>required</TableCell>
                <TableCell>Slide content</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>autoPlay</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Auto-advance slides</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>interval</code></TableCell>
                <TableCell>number</TableCell>
                <TableCell>3000</TableCell>
                <TableCell>Auto-play interval (ms)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>showDots</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Show navigation dots</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>showArrows</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Show prev/next arrows</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>loop</code></TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Loop back to first/last slide</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>direction</code></TableCell>
                <TableCell>'horizontal' | 'vertical'</TableCell>
                <TableCell>'horizontal'</TableCell>
                <TableCell>Carousel scroll direction</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>slideDirection</code></TableCell>
                <TableCell>'left' | 'right' | 'up' | 'down'</TableCell>
                <TableCell>'left'</TableCell>
                <TableCell>Slide animation direction</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>onChange</code></TableCell>
                <TableCell>(index: number) =&gt; void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Called when slide changes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default CarouselDoc;
