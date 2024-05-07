import './App.css';
import MenuComponent from "./components/menu-component/menu-component";
import { Routes, Route } from "react-router-dom";
import BinComponent from "./components/bin-component/bin-component";
import AboutComponent from "./components/about-component/about-component";
import ListComponents from "./components/list-component/list-components";

function App() {
  return (
    <section className="app">
      <header className="app-header">
        <MenuComponent />
      </header>
      <Routes>
        <Route path="/bin" element={<BinComponent />} /> {/* Corrected from component */}
        <Route path="/about" element={<AboutComponent />} /> {/* Corrected from component */}
        <Route path="/" element={<ListComponents />} />
      </Routes>
    </section>
  );
}

export default App;
