import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { auth, usersRef } from "../config/firebase";
import { addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  // Register with Google
  const RegisterWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      await addDoc(usersRef, {
        username: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        id: user.uid,
      });
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  // Register with email and password
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await addDoc(usersRef, {
        username: username,
        email: user.email,
        photoURL: "https://picsum.photos/600/?random",
        id: user.uid,
      });
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-md-center">
          <Col
            xs={12}
            md={6}
            className="border border-dark p-4 rounded-3 shadow-lg">
            <h1 className="text-center mb-4">Register</h1>
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
                controlId="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email address with anyone else.
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

              <Form.Group
                className="mb-3"
                controlId="cpassword"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={handleRegister}
                className="w-50 d-block mx-auto">
                Register
              </Button>
            </Form>

            <Button
              variant="outline-primary"
              className="mt-1 w-50 d-block mx-auto"
              onClick={RegisterWithGoogle}>
              Sign In With Google
            </Button>

            <p className="text-center mt-3">
              Don't have an account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
