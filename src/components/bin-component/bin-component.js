import React from 'react';

const LOCAL_STORAGE_KEY = "cartItems";

const BasketComponent = () => {
  const getLocalStore = () => {
    const savedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedItems = savedItems ? JSON.parse(savedItems) : [];
    
    if (parsedItems.length === 0) {
      return <div>No selected items</div>;
    }

    return (
      <div>
        {parsedItems.map((item) => (
          <div key={item.id}>
            {item.title} - {item.price} грн. - {item.added} times
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>Basket/Cart Items</h2>
      {getLocalStore()}
    </div>
  );
};

export default BasketComponent;
