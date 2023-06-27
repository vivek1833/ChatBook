import React, { useState } from "react";
import { Container, Button, Form, Image } from "react-bootstrap";
import Message from "./Message";

const Chat = () => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };

  return (
    <>
      <Container
        style={{
          height: "calc(100vh - 120px)",
          background: "lightblue",
          overflowY: "scroll",
          scrollbarWidth: "none",
          scrollbarColor: "red",

        }}>
        <Container className="d-flex justify-content-center align-items-center">
          <Image
            src="https://picsum.photos/400/?random"
            roundedCircle
            width={40}
            height={40}
            className="mt-2 mb-n2"
          />
          <h1 className="mx-auto mt-1 mb-n2"> Username </h1>
        </Container>

        <hr />

        <Container className="mb-1">
          <Message message="Hello" place="left" />
          <Message message="Hi" place="right" />
          <Message message="Hello" place="left" />
          <Message message="Hi" place="right" />
          <Message message="Hello" place="left" />
          <Message message="Hi" place="right" />
          <Message message="Hello" place="left" />
          <Message message="Hi" place="right" />
          <Message message="Hello" place="left" />
          <Message message="Hi" place="right" />
          <Message message="Hello" place="left" />
          <Message message="Hi" place="right" />
          <Message message="Hello" place="left" />
          <Message message="Hi" place="right" />
          <Message message="Hello" place="left" />
          <Message message="Hi" place="right" />
          <Message message="Hello" place="left" />
          <Message message="Hi" place="right" />
        </Container>
      </Container>

      <Container>
        <Form className="d-flex justify-content-center align-items-center mt-1">
          <Form.Group className="w-100">
            <Form.Control
              type="text"
              placeholder="Enter your message"
              autoComplete="Off"
              value={message}
              name="message"
              id="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            name="send"
            id="send"
            onClick={sendMessage}
            className="ml-2">
            <i className="bi bi-caret-right"></i>
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Chat;
