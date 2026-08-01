import logo from "../../assets/photo/newAddidas.png";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import sponsor1 from "../../assets/photo/express.png";
import sponsor2 from "../../assets/photo/master.png";
import sponsor3 from "../../assets/photo/visa.jpg";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#131212] px-6 py-10 text-slate-100 sm:px-8 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex justify-center pb-6">
          <img
            src={logo}
            alt="Adidas logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-xl font-extrabold uppercase tracking-[0.2em] text-white">
              Info
            </h3>
            <p className="text-sm text-slate-400">Terms and Condition</p>
            <p className="text-sm text-slate-400">Cookies</p>
            <p className="text-sm text-slate-400">Privacy Politics</p>
          </div>

          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-xl font-extrabold uppercase tracking-[0.2em] text-white">
              Collections
            </h3>
            <p className="text-sm text-slate-400">Ultra</p>
            <p className="text-sm text-slate-400">Confirmed</p>
            <p className="text-sm text-slate-400">NMD</p>
            <p className="text-sm text-slate-400">Originals</p>
          </div>

          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-xl font-extrabold uppercase tracking-[0.2em] text-white">
              Sports
            </h3>
            <p className="text-sm text-slate-400">Football</p>
            <p className="text-sm text-slate-400">Basketball</p>
            <p className="text-sm text-slate-400">Running</p>
            <p className="text-sm text-slate-400">Training</p>
          </div>

          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-xl font-extrabold uppercase tracking-[0.2em] text-white">
              Support
            </h3>
            <p className="text-sm text-slate-400">Customer</p>
            <p className="text-sm text-slate-400">FAQ</p>
            <p className="text-sm text-slate-400">Shipping</p>
            <p className="text-sm text-slate-400">adiClub</p>
          </div>

          <div className="space-y-4 text-center ">
            <h3 className="text-xl font-extrabold uppercase tracking-[0.2em] text-white">
              Follow Us
            </h3>
            <div className="grid grid-cols-2 place-items-center gap-7 w-fit mx-auto lg:mx-20">
              <FaFacebook className="h-5 w-5 cursor-pointer " />
              <FaYoutube className="h-5 w-5 cursor-pointer " />
              <FaInstagram className="h-5 w-5 cursor-pointer " />
              <FaTwitter className="h-5 w-5 cursor-pointer " />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-6">
          <img
            src={sponsor1}
            alt="American Express"
            className="h-7 object-contain opacity-90"
          />
          <img
            src={sponsor2}
            alt="Mastercard"
            className="h-7 object-contain opacity-90"
          />
          <img
            src={sponsor3}
            alt="Visa"
            className="h-7 object-contain opacity-90"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
