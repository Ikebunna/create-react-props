import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavbarC = () => {
  return (
    <Navbar bg="light" className=" bg-secondary mb-5">
      <Container>
        <h1 className="fw-bold">OUR TOP FUT PICKS FOR YOU THIS WEEK</h1>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
