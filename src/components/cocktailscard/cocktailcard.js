// CocktailCard.js
import React from 'react';
import { Card, Image, ListGroup } from 'react-bootstrap'; // Assuming you're using Bootstrap

const CocktailCard = ({ name, image, ingredients }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup variant="flush">
          {ingredients.map((ingredient) => (
            <ListGroup.Item key={ingredient}>{ingredient}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CocktailCard;
