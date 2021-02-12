import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const Meme = ( { details: { id, name, url, caption }}) => (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src = { url } />
  <Card.Body>
    <Card.Title>{ name }</Card.Title>
    <Card.Text>
      { caption }
    </Card.Text>
    <Button variant="primary">Edit</Button>
  </Card.Body>
</Card>
)

export default Meme;