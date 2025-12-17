import { Outlet } from "react-router-dom";
import { Box, Flex, Container } from "../../lib/indoui/src";
import { DocsHeader } from "../components/docs/DocsHeader";
import { DocsSidebar } from "../components/docs/DocsSidebar";

export const DocsLayout = () => {
  return (
    <Box minH="100vh" bg="bg">
      <DocsHeader />
      <Container maxWidth="full" px={6}>
        <Flex>
          <DocsSidebar />
          <Box flex={1} py={8} px={8} maxW="900px">
            <Outlet />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
