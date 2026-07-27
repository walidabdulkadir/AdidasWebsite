import "./NavBar.css";
import adidasPng from "../../assets/photo/adidas.png";
import profile from "../../assets/photo/Conta.png";
import likes from "../../assets/photo/ListadeDesejos.png";
import cart from "../../assets/photo/Carrinho.png";

function NavBar() {
  return (
    <>
      <div className="nav-text">
        <div className="navAbove">
          NEW COLLABS FOR THIS WEEK. CHECK OUT THE ADICLUB FOR MORE{" "}
        </div>
      </div>

      <div className="nav">
        <div className="nav-container">
          <img src={adidasPng} alt="" />
          <div>WOMAN</div>
          <div>MEN</div>
          <div>KIDS</div>
          <div>NEWS</div>
          <div>SPORTS</div>
          <div>ADIDAS WORLD</div>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search...."
            />
            {/* <img src= {#} alt="search" /> */}
          </div>
          <div>
            <img src={profile} alt="" />
          </div>
          <div>
            <img src={likes} alt="" />
          </div>
          <div>
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
