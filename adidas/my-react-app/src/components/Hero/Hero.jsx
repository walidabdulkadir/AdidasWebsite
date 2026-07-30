import cover from "../../assets/photo/Cover Image.png";
import adidasPng from "../../assets/photo/adidas.png";

function Hero() {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="absolute left-5 top-1/2 -translate-y-1/2 md:left-30">
        <div className="relative max-w-2xl">
          <h1 className="relative z-20 text-5xl font-bold leading-tight text-[#98121e] md:text-7xl">
            ADICLUB <br /> IS SHOWING OFF.
          </h1>
          <img
            className="md:absolute left-7 top-2 z-10 w-93 max-w-full "
            src={adidasPng}
            alt="Adidas logo"
          />
        </div>
        <p className="absolute z-10 max-w-2xl text-sm text-slate-200 tracking-[0.1rem] md:text-base">
          Exclusive releases for our members and more ways <br />
          to unlock those things that you love.
        </p>
        <div className="mt-20  flex flex-col gap-4 font-bold  md:gap-10">
          <button className="inline-flex items-center gap-3 text-2xl text-white font-bold transition hover:text-[#d7cb4a]">
            <span className="text-4xl">→</span> SEE MORE
          </button>
          <button className="inline-flex items-center gap-3 text-2xl text-white font-bold transition hover:text-[#d7cb4a]">
            <span className="text-4xl">→</span> BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
