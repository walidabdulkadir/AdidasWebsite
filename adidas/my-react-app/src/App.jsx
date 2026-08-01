import NavBar from "./components/NAV/NavBar";
import Hero from "./components/Hero/Hero";
import ShoesList from "./components/Shoes/ShoesList";
import Offers from "./components/Offers/Offers";
import Description from "./components/Description/Description";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen text-black">
      <NavBar />
      <Hero />
      <ShoesList title="adiweek" />
      <Offers />
      <ShoesList title="Do you still like these products?" />
      <Description />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
