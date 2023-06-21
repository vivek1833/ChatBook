import React from "react";
// left side chat users and right side chat messages like telegram
import { Col, Container, Image, Row, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col xs={3} className="px-0 bg-secondary">
            <ListGroup
              variant="flush"
              style={{
                height: "calc(100vh - 79px)",
                overflowY: "scroll",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}>
              {Array(8)
                .fill()
                .map((_, i) => (
                  <ListGroup.Item
                    key={i}
                    action
                    variant="light"
                    className="text-dark">
                    <Image
                      src="https://picsum.photos/200"
                      roundedCircle
                      width={40}
                      height={40}
                      className="me-2"
                    />
                    User {i + 1} <br />
                    <span className="text-muted">last message</span>
                    <span className="position-absolute  badge rounded-pill bg-danger">
                      99+
                    </span>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
          <Col xs={9} className="px-0 bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-light">
                <span className="text-dark">User 1 </span>
                <span className="text-muted ms-2">12:00</span>
                <p className="text-dark">Hello</p>
              </ListGroup.Item>
              <ListGroup.Item className="bg-light">
                <span className="text-dark">User 2 </span>
                <span className="text-muted ms-2">12:00</span>
                <p className="text-dark">Hi</p>
              </ListGroup.Item>
              <ListGroup.Item className="bg-light">
                <span className="text-dark">User 3 </span>
                <span className="text-muted ms-2">12:00</span>
                <p className="text-dark">How are you?</p>
              </ListGroup.Item>
              <ListGroup.Item className="bg-light">
                <span className="text-dark">User 4 </span>
                <span className="text-muted ms-2">12:00</span>
                <p className="text-dark">I'm fine</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
