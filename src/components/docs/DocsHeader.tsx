import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  VStack,
  Text,
  Badge,
  useColorMode,
  useDisclosure,
} from "../../../lib/indoui/src";
import { Box as BoxIcon, Sun, Moon, Search, Github } from "lucide-react";
import { searchItems } from "../../config/docs";

export const DocsHeader = () => {
  const { toggleColorMode, resolvedColorMode } = useColorMode();
  const searchModal = useDisclosure();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const filteredItems = searchQuery
    ? searchItems.filter(
        item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchItems.slice(0, 8);
  
  return (
    <>
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={100}
        bg="bg"
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "hsl(var(--indo-bg) / 0.9)",
          borderBottom: "1px solid hsl(var(--indo-border))",
        }}
      >
        <Container maxWidth="full" px={6}>
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <HStack spacing={8}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <HStack spacing={2}>
                  <Box
                    p={2}
                    rounded="lg"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--indo-primary)), hsl(var(--indo-accent)))",
                    }}
                  >
                    <BoxIcon size={18} style={{ color: "white" }} />
                  </Box>
                  <Heading as="h1" size="md">
                    IndoUI
                  </Heading>
                </HStack>
              </Link>
              <HStack spacing={1}>
                <Link to="/docs" style={{ textDecoration: "none" }}>
                  <Button variant="ghost" size="sm">Docs</Button>
                </Link>
                <Link to="/docs/components/button" style={{ textDecoration: "none" }}>
                  <Button variant="ghost" size="sm">Components</Button>
                </Link>
                <Link to="/playground" style={{ textDecoration: "none" }}>
                  <Button variant="ghost" size="sm">Playground</Button>
                </Link>
              </HStack>
            </HStack>
            
            <HStack spacing={3}>
              <Button
                variant="outline"
                size="sm"
                onClick={searchModal.onOpen}
                leftIcon={<Search size={14} />}
                style={{ width: "200px", justifyContent: "flex-start" }}
              >
                <HStack justifyContent="space-between" flex={1}>
                  <Text size="sm" color="muted.fg">Search...</Text>
                  <HStack spacing={1}>
                    <Box
                      px={1.5}
                      py={0.5}
                      rounded="sm"
                      style={{
                        backgroundColor: "hsl(var(--indo-bg-subtle))",
                        fontSize: "0.65rem",
                      }}
                    >
                      ⌘K
                    </Box>
                  </HStack>
                </HStack>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleColorMode}
              >
                {resolvedColorMode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  <Github size={18} />
                </Button>
              </a>
            </HStack>
          </Flex>
        </Container>
      </Box>
      
      <Modal isOpen={searchModal.isOpen} onClose={searchModal.onClose} size="lg">
        <ModalCloseButton onClick={searchModal.onClose} />
        <ModalBody p={0}>
          <Box
            px={4}
            py={3}
            style={{ borderBottom: "1px solid hsl(var(--indo-border))" }}
          >
            <Input
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="lg"
              autoFocus
              style={{ border: "none", boxShadow: "none" }}
            />
          </Box>
          <VStack spacing={1} p={2} align="stretch" maxH="400px" overflow="auto">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={searchModal.onClose}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    px={4}
                    py={3}
                    rounded="md"
                    display="block"
                    style={{
                      transition: "background 150ms ease",
                    }}
                    className="search-result-item"
                  >
                    <HStack justifyContent="space-between">
                      <VStack spacing={0} align="flex-start">
                        <Text size="sm" weight="medium">
                          {item.title}
                        </Text>
                        {item.description && (
                          <Text size="xs" color="muted.fg">
                            {item.description}
                          </Text>
                        )}
                      </VStack>
                      <Badge size="sm" variant="outline">
                        {item.category}
                      </Badge>
                    </HStack>
                  </Box>
                </Link>
              ))
            ) : (
              <Box py={8} style={{ textAlign: "center" }}>
                <Text color="muted.fg">No results found</Text>
              </Box>
            )}
          </VStack>
        </ModalBody>
      </Modal>
    </>
  );
};
