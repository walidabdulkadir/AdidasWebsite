import { useState } from "react";
import adidasPng from "../../assets/photo/adidas.png";
import {
  FiMenu,
  FiX,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiSearch,
} from "react-icons/fi";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box-border">
      <div className="flex h-10 items-center justify-center bg-black text-sm">
        <div className="text-[8px] font-bold tracking-[0.05em] text-[#ede734]">
          NEW COLLABS FOR THIS WEEK. CHECK OUT THE ADICLUB FOR MORE
        </div>
      </div>

      <div className="flex w-full justify-center bg-white px-4 py-3">
        <div className="w-full max-w-7xl">
          <div className="flex items-center justify-center gap-13 ">
            <div className="flex items-center gap-3">
              <img
                className="w-16 object-contain flex-shrink-0 "
                src={adidasPng}
                alt="Adidas logo"
              />
              <div className="hidden md:flex items-center gap-8">
                <div className="text-sm font-medium text-black">WOMAN</div>
                <div className="text-sm font-medium text-black">MEN</div>
                <div className="text-sm font-medium text-black">KIDS</div>
                <div className="text-sm font-medium text-black">NEWS</div>
                <div className="text-sm font-medium text-black">SPORTS</div>
                <div className="text-sm font-medium text-black">
                  ADIDAS WORLD
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative ">
                <input
                  className="w-36 rounded-md border border-slate-300 bg-slate-100 px-3 py-2 text-sm outline-none hidden sm:flex   text-black"
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search..."
                />
                <FiSearch
                  className="absolute right-2 top-1/2 h-4 w-5 -translate-y-1/2 text-slate-500 sm:flex h-5 w-5 absolute right-2 top-1/2 cursor-pointer text-black "
                  aria-label="Search"
                />
              </div>
              <FiUser
                className="h-5 w-5 cursor-pointer text-black "
                aria-label="Profile"
              />
              <FiHeart
                className="h-5 w-5 cursor-pointer text-black "
                aria-label="Wishlist"
              />
              <FiShoppingCart
                className="h-5 w-5 cursor-pointer text-black "
                aria-label="Cart"
              />
              <button
                className="md:hidden flex   items-center justify-center rounded-full  text-black"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>

            <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
