import "./App.css";
import NavBar from "./components/NAV/NavBar";
import Main from "./components/MAIN/Main";
import ShoesContainer from "./components/Shoes/ShoesContainer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Main />
      <ShoesContainer />
    </div>
  );
}

export default App;
