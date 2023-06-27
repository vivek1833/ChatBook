import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col xs={12} md={5}>
            <h1 className="text-center mb-4">Login</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                <Form.Text className="text-muted">
                  We'll never share your username with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-50 ml-5">
                Login
              </Button>

              <p className="text-center mt-3">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
