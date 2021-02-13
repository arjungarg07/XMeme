import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteMeme } from "../apiCalls/prodApis";
class EditModal extends Component {
  constructor(props) {
    super(props);
    const { active: { id, owner, caption, url } = {}, deleteMeme, closeModal } = props;

    this.state = {
      id,
      owner,
      caption,
      url,
      isEditable: false,
    };
    // console.log('editModal',owner,caption,url);
  }

  onHandleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    const { url, caption, id } = this.state;
    this.props.handleEdit({ url,caption, id });
  };

  handleDelete = (id) => {
      this.props.deleteMeme(id);
  }

  render() {
    const { closeModal } = this.props;
    const { id, owner, caption, url, isEditable } = this.state;
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Modal show={true} onHide={closeModal} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Meme</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <label className="font-bold" htmlFor="title">
                  Owner :-
                </label>
                <br />
                <div>{owner}</div>
              </div>
              <div>
                <label htmlFor="caption" className="font-bold">
                  Caption :-
                </label>
                <br />
                <textarea
                  onChange={this.onHandleChange}
                  type="text"
                  name="caption"
                  value={caption}
                  className="border mb-2 rounded w-full p-1"
                  required
                  readOnly={!isEditable}
                />
              </div>
              <div>
                <label htmlFor="caption" className="font-bold">
                  URL :-
                </label>
                <br />
                <textarea
                  onChange={this.onHandleChange}
                  type="text"
                  name="url"
                  value={url}
                  className="border mb-2 rounded w-full p-1"
                  required
                  readOnly={!isEditable}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  this.setState({
                    isEditable: true,
                  });
                }}
              >
                Edit
              </Button>
              <Button variant="primary" onClick={this.handleSubmit}>
                Save Changes
              </Button>
              <Button variant="primary" onClick={()=> {
                  this.handleDelete(id)
              }}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </form>
      </>
    );
  }
}

export default EditModal;
