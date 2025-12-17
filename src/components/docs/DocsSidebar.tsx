import { useLocation, Link } from "react-router-dom";
import { Box, VStack, Text, Badge } from "../../../lib/indoui/src";
import { docsConfig } from "../../config/docs";

export const DocsSidebar = () => {
  const location = useLocation();
  
  return (
    <Box
      as="aside"
      w="240px"
      h="calc(100vh - 64px)"
      position="sticky"
      top="64px"
      overflow="auto"
      py={6}
      pr={4}
      style={{
        borderRight: "1px solid hsl(var(--indo-border))",
      }}
    >
      <VStack spacing={6} align="stretch">
        {docsConfig.map((category) => (
          <Box key={category.title}>
            <Text
              size="xs"
              weight="semibold"
              mb={2}
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "hsl(var(--indo-muted-fg))",
              }}
            >
              {category.title}
            </Text>
            <VStack spacing={1} align="stretch">
              {category.items.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      px={3}
                      py={2}
                      rounded="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      style={{
                        backgroundColor: isActive ? "hsl(var(--indo-primary-subtle))" : "transparent",
                        color: isActive ? "hsl(var(--indo-primary))" : "hsl(var(--indo-fg))",
                        transition: "all 150ms ease",
                        fontSize: "0.875rem",
                      }}
                    >
                      <Text size="sm" weight={isActive ? "medium" : "normal"}>
                        {item.title}
                      </Text>
                      {item.isNew && (
                        <Badge size="sm" variant="solid" colorPalette="green">
                          New
                        </Badge>
                      )}
                    </Box>
                  </Link>
                );
              })}
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
