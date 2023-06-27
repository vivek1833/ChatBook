import React from "react";
import { Image, ListGroup } from "react-bootstrap";

const User = () => {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item action variant="light" className="text-dark">
          <Image
            src="https://picsum.photos/200"
            roundedCircle
            width={40}
            height={40}
            className="me-2"
          />
          User 69 <br />
          <span className="text-muted">last message</span>
          <span className="position-absolute badge rounded-pill bg-danger">
            99+
          </span>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default User;
