import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const Meme = () => (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://filmdaily.co/wp-content/uploads/2020/07/cleanmeme-lede-1300x1244.jpg" />
  <Card.Body>
    <Card.Title>Rahul Manu</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
    </Card.Text>
    <Button variant="primary">Edit</Button>
  </Card.Body>
</Card>
)

export default Meme;