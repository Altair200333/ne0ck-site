import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" minH="100vh">
      {/* Navigation Bar */}
      <Navbar />
      {/* Main Content */}
      <Box as="main" display={"grid"} flex="1" p={8}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
