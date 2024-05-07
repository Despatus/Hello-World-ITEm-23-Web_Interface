import React, { useState, useEffect } from 'react';
import ShopCard from '../shopcard/ShopCard';

// Define a constant for the localStorage key
const LOCAL_STORAGE_KEY = "cartItems";

const ListComponents = () => {
  // Fetch items from localStorage during component initialization
  const [totalItems, setTotalItems] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedItems = savedItems ? JSON.parse(savedItems) : [];
    setTotalItems(parsedItems);
  }, []);

  const addItem = (item) => {
    const existingItem = totalItems.find((i) => i.id === item.id);
    let updatedItems;
    
    if (existingItem) {
      updatedItems = totalItems.map((i) =>
        i.id === item.id ? { ...i, added: i.added + 1 } : i
      );
    } else {
      item.added = 1;
      updatedItems = [...totalItems, item];
    }

    setTotalItems(updatedItems);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const removeItem = (item) => {
    const updatedItems = totalItems.map((i) => 
      i.id === item.id ? { ...i, added: i.added - 1 } : i
    ).filter(i => i.added > 0);

    setTotalItems(updatedItems);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const cards = [
    { id: 1, title: "Aviation", price: 150, imgUrl: "../../Product/Aviation.jpg" },
    { id: 2, title: "Blue Lagoon", price: 100, imgUrl: "../../Product/Blue Lagoon.jpg" },
    { id: 3, title: "Frozen Aperol Spritz", price: 120, imgUrl: "../../Product/Frozen Aperol Spritz.jpg" },
    { id: 4, title: "Old Fashioned", price: 130, imgUrl: "../../Product/Old Fashioned.jpg" },
  ];

  return (
    <div>
      <h3>Total Price: {totalItems.reduce((acc, i) => acc + i.price * i.added, 0)} грн.</h3>
      <div className="row">
        {cards.map((item) => (
          <ShopCard
            key={item.id}
            card={item}
            getItem={addItem} // Updated function name
            removeItem={removeItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ListComponents;
