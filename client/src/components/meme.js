import React from "react";
import Card from "react-bootstrap/Card";
import edit from "../assets/images/edit.svg";
import trash from "../assets/images/trash.svg";

const Meme = ({
  details: { id, name, url, caption },
  selectMeme,
}) => (
  <div >
    <Card onClick={() => {
    selectMeme({ id, name, url, caption });
  }} className = "card cursor-pointer mx-2.5 my-2.5" style={{ width: "30rem" }}>
      <Card.Body>
        <div className="flex flex-row items-baseline justify-between">
          <Card.Title>{name}</Card.Title>
        <div className="flex flex-row">
              <img
                alt="Edit icon"
                // className="mx-auto"
                width="20"
                src={edit}
              />
              <img
                alt="Edit icon"
                className="ml-2"
                width="20"
                src={trash}
              />
          </div>
        </div>
        <Card.Text className="font-sans">{caption}</Card.Text>
      </Card.Body>
      <Card.Img variant="top" src={url} />
    </Card>
  </div>
);

export default Meme;
