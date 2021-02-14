import React from "react";
import Card from "react-bootstrap/Card";
import edit from "../assets/images/edit.svg";
import trash from "../assets/images/trash.svg";
import ReactTimeAgo from 'react-time-ago'

const Meme = ({
  details: { id, name, url, caption, createdAt },
  selectMeme,
  deleteMeme,
}) => (
  <div>
    <Card className="card mx-2.5 my-2.5 py-0.5" style={{ width: "28rem" }}>
      <Card.Body>
      <div className = 'flex flex-col'>
        <div className="flex flex-row items-baseline justify-between">
          <Card.Title>{name}</Card.Title>
          <div className="flex flex-row">
            <img
              className="cursor-pointer"
              onClick={() => {
                selectMeme({ id, name, url, caption });
              }}
              alt="Edit icon"
              width="20"
              src={edit}
            />
            <img
              className="cursor-pointer ml-2"
              onClick={() => {
                deleteMeme(id);
              }}
              alt="Edit icon"
              width="20"
              src={trash}
            />
          </div>
        </div>
        <span className = 'text-gray-700 text-sm'>
         Posted <ReactTimeAgo date={createdAt} locale="en-US"/>
        </span>
      </div>
        <Card.Text className="font-sans">{caption}</Card.Text>
      </Card.Body>
      <Card.Img variant="top" src={url} />
    </Card>
  </div>
);

export default Meme;
