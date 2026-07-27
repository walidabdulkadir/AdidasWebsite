import "./App.css";
import NavBar from "./components/NAV/NavBar";
import Hero from "./components/Hero/Hero";
import ShoesContainer from "./components/Shoes/ShoesContainer";
import Offers from "./components/Offers/Offers";
import Description from "./components/Description/Description";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <ShoesContainer />
      <Offers />
      <ShoesContainer />
      <Description />
      <Products />
    </div>
  );
}

export default App;
