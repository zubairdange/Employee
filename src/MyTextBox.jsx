import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
export const MyTextbox = () => {
  const [name, setName] = useState("Khwaja");
  const [location, setLocation] = useState("Pune");
  const handleOnClickNameChange = () => {
    setName("Mosh");
    setLocation("Austrailia");
  };
  const handleOnClickChange = () => {
    setName("Amitab Bachchan");
    setLocation("Alahbad");
  };
  return (
    <div>
      <Form.Group>
        <Form.Control
          size="lg"
          type="text"
          value={`Mr. ${name}`}
          placeholder="Large text"
        />
        <br />
        <Form.Control type="text" placeholder="Location" value={location} />
        <br />
      </Form.Group>
      <Button variant="danger" onClick={handleOnClickNameChange}>
        Change Person
      </Button>
      <br />
      <Button variant="success" onClick={handleOnClickChange}>
        change
      </Button>
    </div>
  );
};
