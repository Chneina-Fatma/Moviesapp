
import React from 'react';
import ReactStars from "react-rating-stars-component";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Moviecard({el}) {
  return (
    <div><Card style={{ margin:'20px', width: '18rem',borderRadius:'11px' }}>
    <Card.Img variant="top" src={el.posterurl} />
    <Card.Body>
      <Card.Title>{el.name}</Card.Title>
      <Card.Text>
       {el.description}
      </Card.Text>
      <ReactStars
    count={5}
    size={24}
    activeColor="rgb(23, 180, 23)"
    value={el.rating}
    edit={false}
  />
      <Button variant="primary">View Movie</Button>
    </Card.Body>
  </Card></div>
  )
}

export default Moviecard