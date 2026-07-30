import NavBar from "./components/NAV/NavBar";
import Hero from "./components/Hero/Hero";
import ShoesContainer from "./components/Shoes/ShoesContainer";
import Offers from "./components/Offers/Offers";
import Description from "./components/Description/Description";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen text-black">
      <NavBar />
      <Hero />
      <ShoesContainer />
      <Offers />
      <ShoesContainer />
      <Description />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
