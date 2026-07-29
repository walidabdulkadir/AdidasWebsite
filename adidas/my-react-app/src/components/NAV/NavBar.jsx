import adidasPng from "../../assets/photo/adidas.png";
import profile from "../../assets/photo/Conta.png";
import likes from "../../assets/photo/ListadeDesejos.png";
import cart from "../../assets/photo/Carrinho.png";
import searchBtn from "../../assets/photo/searchBtn.png";
function NavBar() {
  return (
    <div className="box-border">
      <div className="flex h-10 items-center justify-center bg-black text-sm">
        <div className="text-[8px] font-bold tracking-[0.05em] text-[#ede734]">
          NEW COLLABS FOR THIS WEEK. CHECK OUT THE ADICLUB FOR MORE
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-white px-4 py-3">
        <div className="flex w-full max-w-7xl items-center justify-center gap-7 bg-white">
          <img
            className="w-16 object-contain"
            src={adidasPng}
            alt="Adidas logo"
          />
          <div className="text-sm font-medium">WOMAN</div>
          <div className="text-sm font-medium">MEN</div>
          <div className="text-sm font-medium">KIDS</div>
          <div className="text-sm font-medium">NEWS</div>
          <div className="text-sm font-medium">SPORTS</div>
          <div className="text-sm font-medium">ADIDAS WORLD</div>
          <div className="relative">
            <input
              className="w-36 rounded-md border border-slate-300 bg-slate-100 px-3 py-2 text-sm outline-none sm:w-40"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
            />
            <img
              src={searchBtn}
              alt="Search"
              className="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 object-contain"
            />
          </div>
          <div className="flex items-center gap-7">
            <img
              className="h-4 w-4 cursor-pointer object-contain"
              src={profile}
              alt="Profile"
            />
            <img
              className="h-4 w-4 cursor-pointer object-contain"
              src={likes}
              alt="Wishlist"
            />
            <img
              className="h-4 w-4 cursor-pointer object-contain"
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
