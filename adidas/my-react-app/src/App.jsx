import "./App.css";
import NavBar from "./components/NAV/NavBar";
import Hero from "./components/Hero/Hero";
import ShoesContainer from "./components/Shoes/ShoesContainer";
import Offers from "./components/Offers/Offers";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <ShoesContainer />
      <Offers />
    </div>
  );
}

export default App;
