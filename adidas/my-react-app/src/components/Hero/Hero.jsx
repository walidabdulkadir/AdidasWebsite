import cover from "../../assets/photo/Cover Image.png";

function Hero() {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="absolute left-5 top-1/2 -translate-y-1/2 md:left-20">
        <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
          ADICLUB <br /> IS SHOWING OFF
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-slate-200 tracking-[0.1rem] md:text-base">
          Exclusive releases for our members and more ways <br />
          to unlock those things that you love.
        </p>
        <div className="mt-5 flex flex-col gap-4 font-bold md:flex-row md:gap-10">
          <button className="inline-flex items-center gap-3 text-2xl text-white font-bold transition hover:text-[#d7cb4a]">
            <span className="text-3xl">→</span> SEE MORE
          </button>
          <button className="inline-flex items-center gap-3 text-2xl text-white font-bold transition hover:text-[#d7cb4a]">
            <span className="text-3xl">→</span> BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
