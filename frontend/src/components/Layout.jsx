import React from "react";
import Nav from "./Navbar";
import Footer from "./Footer";
import { Container, Box } from "@chakra-ui/react";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <Container maxW="10xl" bg="gray.100" centerContent>
        <Box padding="4" bg="blue.100" color="black" maxW="xl">
          <main>{children}</main>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
