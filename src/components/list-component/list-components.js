import React, {useState} from 'react';
import ShopCard from "../shopcard/ShopCard";

const ListComponents = () => {
    const cards = [
    {id: 1, title: "Aviation (шт)", price: 150, imgUrl: "../../Product/Aviation.jpg", 
   added: 0},
    {id: 2, title: "Blue Lagoon (шт)", price: 100, imgUrl: "../../Product/Blue Lagoon.jpg", 
   added: 0},
    {id: 3, title: "Frozen Aperol Spritz (шт)", price: 120, imgUrl: "../../Product/Frozen Aperol Spritz.jpg", 
   added: 0},
    {id: 4, title: "Old Fashioned (шт)", price: 130, imgUrl: "../../Product/Old Fashioned.jpg", 
    added: 0},
    ];
    const [totalItems, setTotalItems] = useState([]);
    const totalPriceClick = (item) => {
    console.log("totalPriceClick", cards);
    cards.forEach((itemF, indexF) => {
    if (itemF.id === item.id) {
    cards[indexF].added++;
    }
    });
    setTotalItems([...totalItems, item]);
    }
    const removeItem = (item) => {
    console.log("removeItem", item);
    }
    return (
    <main>
    <section className="container my-5">
    <div className="row">
    <div className="col-6 col-sm-5 col-md-4 col-xl-3">
 <h3>Куплено на {totalItems.reduce((acc, item) => acc + item.price, 0)} грн.</h3>
 </div>
 </div>
 </section>
 <section className="container">
 <div className="row">
 {cards.map(item => {
 return (
 <ShopCard
 card={item}
 key={item.id}
 getItem={totalPriceClick}
 removeItem={removeItem}
 />
 );
 })}
 </div>
 </section>
 </main>
 );
};
export default ListComponents;
