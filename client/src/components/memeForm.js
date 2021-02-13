import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class MemeForm extends Component {

  handleSubmit = (e) => {
      const data = {
        name :  e.target[0].value,
        url :  e.target[2].value,
        caption :  e.target[1].value,
      }
    this.props.handleSubmit(data);
    document.getElementById("meme-form").reset();
  };

  render() {
    return (
      <div>
        <Form className = "container" id = "meme-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit(e);
          }}
        >
          <Form.Group className = "w-4/5" controlId="formBasicName">
            <Form.Label className = "font-bold">Meme Owner</Form.Label>
            <Form.Control
              type="text"
              name="owner"
              placeholder="Enter your full name"
            />
          </Form.Group>

          <Form.Group className = "w-4/5" controlId="formBasicText">
            <Form.Label className = "font-bold" >Caption</Form.Label>
            <Form.Control
              type="text"
              name="caption"
              placeholder="Be creative with the caption"
            />
          </Form.Group>

          <div className="flex flex-row">
            <Form.Group className = "w-4/5 font-bold" controlId="formBasicURL">
              <Form.Label>Meme URL</Form.Label>
              <Form.Control
                type='url'
                name="url"
                placeholder="Enter URL of your meme here"
                required
              />
            </Form.Group>

            <Button className = 'h-1/3 my-8 mx-3.5' variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default MemeForm;
