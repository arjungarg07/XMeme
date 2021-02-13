import React from "react";
import Card from "react-bootstrap/Card";

const Meme = ({
  details: { id, name, url, caption },
  selectMeme,
}) => (
  <div onClick={() => {
    selectMeme({ id, name, url, caption });
  }}>
    <Card className = "cursor-pointer" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{caption}</Card.Text>
      </Card.Body>
      <Card.Img variant="top" src={url} />
    </Card>
  </div>
);

export default Meme;
