import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NavbarComponent from "./Navbar";
import User from "./User";
import Chat from "./Chat";

const Home = () => {
  return (
    <>
      <NavbarComponent />

      <Container className="mt-2">
        <Row>
          <Col
            xs={3}
            style={{
              height: "calc(100vh - 65px)",
              overflowY: "scroll",
              overflowX: "hidden",
            }}>
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
          </Col>
          <Col xs={9}>
            <Chat />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
