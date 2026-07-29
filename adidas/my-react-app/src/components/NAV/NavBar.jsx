import adidasPng from "../../assets/photo/adidas.png";
import profile from "../../assets/photo/Conta.png";
import likes from "../../assets/photo/ListadeDesejos.png";
import cart from "../../assets/photo/Carrinho.png";
import searchBtn from "../../assets/photo/searchBtn.png";
function NavBar() {
  return (
    <div className="m-0 box-border p-0">
      <div className="flex h-10 w-auto items-center justify-center bg-black text-sm">
        <div className="text-[8px] font-bold tracking-[0.05em] text-[#ede734] ">
          NEW COLLABS FOR THIS WEEK. CHECK OUT THE ADICLUB FOR MORE{" "}
        </div>
      </div>

      <div className="flex w-full h-15 items-center justify-center bg-white px-4 py-3">
        <div className="flex w-full max-w-7xl flex items-center justify-center gap-7 bg-white">
          <img
            className="h-auto w-15 object-contain"
            src={adidasPng}
            alt="Adidas logo"
          />
          <div className="text-sm font-medium">WOMAN</div>
          <div className="text-sm font-medium">MEN</div>
          <div className="text-sm font-medium">KIDS</div>
          <div className="text-sm font-medium">NEWS</div>
          <div className="text-sm font-medium">SPORTS</div>
          <div className="text-sm font-medium">ADIDAS WORLD</div>
          <div className="flex items-center ">
            <input
              className="w-35 border-none bg-gray-300 p-2 text-sm outline-none sm:w-40"
              type="search"
              name="search"
              id="search"
              placeholder="  Search...."
            />
            <img
              src={searchBtn}
              alt="searchBtn"
              className=" h-auto w-10 rem relative right-10 -ml-10 cursor-pointer object-contain"
            />
          </div>
          <div></div>
          <div className="flex items-center gap-7">
            <img
              className="h-auto w-4 cursor-pointer object-contain"
              src={profile}
              alt="Profile"
            />
            <img
              className="h-auto w-4 cursor-pointer object-contain"
              src={likes}
              alt="Wishlist"
            />
            <img
              className="h-auto w-4 cursor-pointer object-contain"
              src={cart}
              alt="Cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
