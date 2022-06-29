import React from "react";
import Nav from "./Navbar";
import Footer from "./Footer";
import { Container, Box } from "@chakra-ui/react";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <Container pb={'50%'} maxW="10xl" bg="gray.100" centerContent>
          <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
