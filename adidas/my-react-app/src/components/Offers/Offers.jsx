import girlImage from "../../assets/photo/Girl Image.png";

function Offers() {
  return (
    <div className="mx-auto mb-10 max-w-[1200px] overflow-hidden rounded-[40px] bg-[#1f1c1d] text-white md:flex">
      <div
        className="relative h-[420px] w-full bg-cover bg-center md:w-[35%]"
        style={{ backgroundImage: `url(${girlImage})` }}
      >
        <div className="absolute top-10 left-6 md:left-[215px] z-10">
          <h1 className="text-5xl font-extrabold uppercase leading-tight md:text-6xl">
            OUTFITS FOR <br />
            <span className="text-[#e6d23d]">BENEFITS</span>
          </h1>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center gap-8 px-8 py-10 md:w-[65%] md:px-16">
        <p className="text-2xl font-bold text-[#d7cb4a] md:text-3xl">
          60% OFF + free shipping:{" "}
          <span className="text-white font-semibold">
            only for adiClub members.
          </span>
        </p>

        <p className="text-lg leading-8 text-slate-300 md:text-xl">
          Check your account and start buying for benefits on
          <span className="text-[#d7cb4a] font-semibold"> adiWeek.</span>
        </p>

        <div className="flex flex-col gap-4 md:flex-row">
          <button className="inline-flex items-center gap-3 text-xl font-bold text-white transition hover:text-[#d7cb4a]">
            <span>→</span> BUY NOW
          </button>
          <button className="inline-flex items-center gap-3 text-xl font-bold text-white transition hover:text-[#d7cb4a]">
            <span>↓</span> WHAT IS ADIDAS?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Offers;
