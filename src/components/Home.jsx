import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { auth, usersRef } from "../config/firebase";
import { onSnapshot } from "firebase/firestore";

import NavbarComponent from "./Navbar";
import User from "./User";
import Chat from "./Chat";

const Home = () => {
  if (!auth.currentUser) {
    window.location.replace("/login");
  }

  const { id } = useParams();
  const [users, setUsers] = useState([]); // all users except the current user

  // get all users except the current user
  useEffect(() => {
    const unsubscribe = onSnapshot(usersRef, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().email !== auth.currentUser.email) {
          users.push({ id: doc.id, ...doc.data() });
        }
      });
      setUsers(users);
    });

    return unsubscribe;
  }, []);

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
            <Link to="/profile">
              <p className="bi bi-person-circle">
                <span className="text-primary"> Profile </span>
              </p>
            </Link>

            {users.map((user) => (
              <Link
                to={`/${user.id}`}
                key={user.id}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}>
                <User key={user.id} user={user} />
              </Link>
            ))}
          </Col>
          <Col xs={9}>
            {id ? (
              <Chat id={id} />
            ) : (
              <div className="text-center mt-5">
                <h1 className="bi bi-chat-text"> Select a user to chat </h1>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
