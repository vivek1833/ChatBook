import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import User from "./User";

const Home = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/"> ChatBook </Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="danger">Logout</Button>
          </Nav>
        </Container>
      </Navbar>
      <User />
    </>
  );
};

export default Home;
