import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ShopCard = ({ card, getItem, removeItem }) => {
  const handleAddItem = () => {
    getItem(card); // Call the function to add the item
  };

  const handleRemoveItem = () => {
    removeItem(card); // Call the function to remove the item
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3">
      <Card>
        <Card.Img variant="top" src={"/assets/imgs/" + card.imgUrl} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.price} грн.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" onClick={handleAddItem}>Add to Cart</Button>
          <Button variant="danger" onClick={handleRemoveItem}>Remove</Button>
          <span> Added: {card.added} times</span>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ShopCard;
