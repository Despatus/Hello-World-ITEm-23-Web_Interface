import './App.css'; // Presumably, this file contains some base styles for your app.
import Menu from "./components/menu/Menu";
import ShopCard from './components/shopcard/ShopCard';
import './components/shopcard/ShopcardStyles.css'; // Import the new styles

function App() {
  return (
    <section className="app">
      <header className="app-header">
        <Menu />
      </header>
      <main>
        <section className="container">
          <div className="row">
            <div className="col-12 col-lg-4 card-blue"> {/* Apply the blue background */}
              <ShopCard
                card={{ id: 1, title: "The bouquet", description: "A shopcard for the flower shop" }}
                otherval={"other"}
              />
            </div>
            <div className="col-12 col-lg-5 card-green"> {/* Apply the green background */}
              <ShopCard
                card={{ id: 2, title: "Everything you need", description: "A shopcard for the supermarket" }}
                otherval={"other"}
              />
            </div>
            <div className="col-12 col-lg-3 card-coral"> {/* Apply the coral background */}
              <ShopCard
                card={{ id: 3, title: "Hammer&Nails", description: "A shopcard for the hardware store" }}
                otherval={"other"}
              />
            </div>
            <div className="col-12 col-lg-12 card-salmon"> {/* Apply the salmon background */}
              <ShopCard
                card={{ id: 4, title: "Comfort", description: "A shopcard for the furniture store" }}
                otherval={"other"}
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;
