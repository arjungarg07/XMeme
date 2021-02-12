import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const MemeForm = () => (
  <div>
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Meme Owner</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Caption</Form.Label>
        <Form.Control type="text" placeholder="Be creative with the caption" />
      </Form.Group>

      <div className = 'flex flex-row'>
      <Form.Group controlId="formBasicURL">
        <Form.Label>Meme URL</Form.Label>
        <Form.Control type="text" placeholder="Enter URL of your meme here" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>

    </Form>
  </div>
);

export default MemeForm;
