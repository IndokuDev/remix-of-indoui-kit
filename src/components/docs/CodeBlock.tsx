import { useState } from "react";
import { Box, HStack, Text, Button } from "../../../lib/indoui/src";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  filename?: string;
}

export const CodeBlock = ({ code, language = "tsx", showLineNumbers = false, filename }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const lines = code.split("\n");
  
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      style={{
        backgroundColor: "hsl(var(--indo-bg-inverted))",
        border: "1px solid hsl(var(--indo-border))",
      }}
    >
      {filename && (
        <HStack
          justifyContent="space-between"
          px={4}
          py={2}
          style={{
            borderBottom: "1px solid hsl(var(--indo-border))",
            backgroundColor: "hsl(var(--indo-bg-subtle))",
          }}
        >
          <Text size="xs" color="muted.fg" style={{ fontFamily: "var(--indo-font-mono)" }}>
            {filename}
          </Text>
          <Button
            variant="ghost"
            size="xs"
            onClick={handleCopy}
            leftIcon={copied ? <Check size={12} /> : <Copy size={12} />}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </HStack>
      )}
      <Box position="relative">
        {!filename && (
          <Button
            variant="ghost"
            size="xs"
            onClick={handleCopy}
            position="absolute"
            style={{ top: "8px", right: "8px" }}
            leftIcon={copied ? <Check size={12} /> : <Copy size={12} />}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        )}
        <Box
          as="pre"
          p={4}
          overflow="auto"
          style={{
            margin: 0,
            fontSize: "0.875rem",
            lineHeight: 1.7,
            fontFamily: "var(--indo-font-mono)",
          }}
        >
          <Box as="code">
            {lines.map((line, i) => (
              <Box key={i} display="flex">
                {showLineNumbers && (
                  <Text
                    as="span"
                    size="xs"
                    mr={4}
                    style={{
                      color: "hsl(var(--indo-muted-fg))",
                      userSelect: "none",
                      minWidth: "2rem",
                      textAlign: "right",
                    }}
                  >
                    {i + 1}
                  </Text>
                )}
                <Text
                  as="span"
                  size="sm"
                  style={{
                    color: "hsl(var(--indo-fg))",
                    whiteSpace: "pre",
                  }}
                >
                  {line || " "}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
