import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Login with Google
  const SignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  // Login with email and password
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      const user = userCredential.user;
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col
            xs={12}
            md={5}
            className="mt-2 mb-4 border border-dark p-4 rounded-3 shadow-lg 
          ">
            <h1 className="text-center mt-1 mb-4">Login</h1>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                <Form.Text className="text-muted">
                  We'll never share your username with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-50 d-block mx-auto"
                onClick={handleLogin}>
                Login
              </Button>
            </Form>

            <Button
              variant="outline-primary"
              className="mt-1 w-50 d-block mx-auto"
              onClick={SignInWithGoogle}>
              Sign In With Google
            </Button>

            <p className="text-center mt-3">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
