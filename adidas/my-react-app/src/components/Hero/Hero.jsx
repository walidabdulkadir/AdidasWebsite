// import "./Hero.css";
import cover from "../../assets/photo/Cover Image.png";

function Hero() {
  return (
    <>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="absolute left-20 top-1/2 -translate-y-1/2">
          <h1 className="text-7xl font-bold ">
            ADICLUB <br /> IS SHOWING OFF
          </h1>
          <p className="tracking-[0.1rem] text-white-300">
            Exclusive releases for our members and more ways <br />
            to unlock those things that you love.
          </p>
          <div className=" gap-40 mt-5 font-bold">
            <button className="flex align-items gap-3 bg-transparent border-none text-2xl text-white font-bold pointer-cursor mb-10 hover:text-[#d7cb4a]">
              <span className="text-3xl">→</span> SEE MORE
            </button>

            <button className="flex align-items gap-3 bg-transparent border-none text-2xl  text-white font-bold pointer-cursor hover:text-[#d7cb4a]">
              <span className="text-3xl">→</span> BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
