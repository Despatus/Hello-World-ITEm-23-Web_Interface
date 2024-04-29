import React, { useState } from 'react';
import './App.css'; // Base styles for your app
import Menu from "./components/menu/Menu"; // Assuming this is a navigation menu component
import ShopCard from './components/shopcard/ShopCard'; // ShopCard component
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

function App() {
  const [selectedCard, setSelectedCard] = useState(null); // State to track selected card

  // Array of items for the ShopCard components
  const itemsList = [
    { id: 1, name: "In a cocktail shaker filled with ice, add vodka, blue curaçao and lemonade.",
      description: "Blue Lagoon", imgurl: "./Product/Blue Lagoon.jpg" },

    { id: 2, name: "This old fashioned cocktail recipe has a history. The earliest version of it was simply water, sugar, bitters, and booze. Over time, the water became ice, the booze became whiskey, and the drink became an old fashioned.",
      description: "Old Fashioned", 
      imgurl: "./Product/Old Fashioned.jpg" },

    { id: 3, name: "Classic Aperol spritz meets the ultimate slushie in this incredible cocktail that blends frozen fresh orange juice with Aperol and bubbly prosecco. We are calling it now it is the drink of summer!",
      description: "Frozen Aperol Spritz",
      imgurl: "./Product/Frozen Aperol Spritz.jpg" },

    { id: 4, name: "The Aviation is a pre-Prohibition cocktail that consists of gin, lemon juice, maraschino liqueur, and crème de violette.",
      description: "Aviation", 
      imgurl: "./Product/Aviation.jpg"},
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card); // Set the selected card
  };

  return (
    <section className="app">
      <header className="app-header">
        <Menu />
      </header>
      <main className="container"> {/* Bootstrap container for layout */}
        <section className="row"> {/* Bootstrap row for responsive grid */}
          {itemsList.map((item) => (
            <div
              key={item.id}
              className={`col-12 col-lg-6 ${selectedCard === item ? 'bg-info' : ''}`} // Highlight if selected
              onClick={() => handleCardClick(item)} // Click event to set selected card
              style={{ cursor: 'pointer' }}
            >
              <ShopCard card={item} />
            </div>
          ))}
        </section>
        {selectedCard && (
          <div className="mt-4">
            <h2>Selected Item:</h2>
            <p>{selectedCard.name}</p>
            {selectedCard.imgurl && <img src={selectedCard.imgurl} alt={selectedCard.name} width="1000" />}
          </div>
        )}
      </main>
    </section>
  );
}

export default App;
