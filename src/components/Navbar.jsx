import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/"> ChatBook </Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="danger" onClick={logout}>
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
