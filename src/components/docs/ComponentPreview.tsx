import { useState } from "react";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "../../../lib/indoui/src";
import { CodeBlock } from "./CodeBlock";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
}

export const ComponentPreview = ({ children, code }: ComponentPreviewProps) => {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      style={{
        border: "1px solid hsl(var(--indo-border))",
      }}
    >
      <Tabs defaultValue="preview" variant="line">
        <TabList px={4} style={{ backgroundColor: "hsl(var(--indo-bg-subtle))" }}>
          <Tab value="preview">Preview</Tab>
          <Tab value="code">Code</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="preview" p={6}>
            <Box
              p={6}
              rounded="md"
              style={{
                backgroundColor: "hsl(var(--indo-bg-subtle))",
                minHeight: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {children}
            </Box>
          </TabPanel>
          <TabPanel value="code" p={0}>
            <CodeBlock code={code} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
