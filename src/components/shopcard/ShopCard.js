import React from 'react';
import { Card, Button } from "react-bootstrap";

const ShopCard = (props) => {
    const addItem = () => {
        console.log(props.card) ;
    }

 return (
 <Card>
    <Card.Img variant="top" src={props.card.imugrl} />
    <Card.Body>
        <Card.Title>
            {props.card.title}
        </Card.Title>
        <Card.Text>
            {props.card.description}
        </Card.Text>
        <Button variant="outline-secondary">Check it out</Button>
    </Card.Body>
 </Card>
 );
};
export default ShopCard;