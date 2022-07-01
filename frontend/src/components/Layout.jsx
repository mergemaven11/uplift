import React,{ useEffect, useState } from "react";
import Nav from "./Navbar";
import Footer from "./Footer";
import { Container, Box } from "@chakra-ui/react";
import axios from 'axios';


function Layout({ children }) {
  return (
    <>
      <Nav />
      <Container pb={'20%'} maxH="10xl" maxW="10xl" bg="gray.100" centerContent>
          <main >{children}</main>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
