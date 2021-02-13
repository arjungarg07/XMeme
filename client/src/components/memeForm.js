import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class MemeForm extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  handleSubmit = (e) => {
    // console.log(e.target[1].value);
      const data = {
        name :  e.target[0].value,
        url :  e.target[2].value,
        caption :  e.target[1].value,
      }
    
    console.log(data);
    this.props.handleSubmit(data);
    document.getElementById("meme-form").reset();
  };

  render() {
    return (
      <div>
        <Form id = "meme-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit(e);
          }}
        >
          <Form.Group controlId="formBasicName">
            <Form.Label>Meme Owner</Form.Label>
            <Form.Control
              type="text"
              name="owner"
              placeholder="Enter your full name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicText">
            <Form.Label>Caption</Form.Label>
            <Form.Control
              type="text"
              name="caption"
              placeholder="Be creative with the caption"
            />
          </Form.Group>

          <div className="flex flex-row">
            <Form.Group controlId="formBasicURL">
              <Form.Label>Meme URL</Form.Label>
              <Form.Control
                type="text"
                name="url"
                placeholder="Enter URL of your meme here"
                required
              />
            </Form.Group>

            <Button className = 'h-1/3 my-8' variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default MemeForm;
