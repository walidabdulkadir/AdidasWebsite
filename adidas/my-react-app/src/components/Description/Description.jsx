import desc from "../../assets/photo/coverImage.png";

function Description() {
  return (
    <section className="relative w-full bg-linear-to-r from-[#bb5d01] to-[#ff9d2e] overflow-hidden min-h-110 sm:min-h-130 md:min-h-145">
      {/* ── Athlete image: z-0 = behind everything ── */}
      <img
        src={desc}
        alt="Adidas athlete"
        className="absolute z-20 inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* ── All text ── */}
      <div className="relative flex flex-col items-center px-6 md:px-12 py-10 gap-8 min-h-130">
        {/* Heading */}
        <h1
          className="relative z-0 uppercase text-white font-extrabold text-center leading-none tracking-tight w-full
                       text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          History and Grace
        </h1>

        {/* 2-column grid — stacks on mobile, side-by-side on md+ */}
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 w-full mt-2">
          {/* LEFT — paragraph 1 */}
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed max-w-75">
            At adidas, we believe that sports have the power to transform lives.
            It's not just about keeping your body and mind fit; it's about
            bringing people together and creating a community of individuals who
            share the same passion for excellence.
          </p>

          {/* RIGHT — paragraph 1 */}
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed md:text-right md:ml-auto max-w-75">
            Whether you're a runner, a basketball player, a soccer player, or
            someone who loves to train, you'll find a home with us. Our products
            are designed to meet your needs, no matter what your preferred form
            of exercise may be.
          </p>

          {/* LEFT — paragraph 2 */}
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed max-w-75">
            We draw inspiration from the athletes who push themselves to their
            limits every day, and from the technology we develop to help them
            achieve their goals.
          </p>

          {/* RIGHT — paragraph 2 */}
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed md:text-right md:ml-auto max-w-75">
            We're not just present on the playing field, either. You'll find the
            three stripes at music festivals, on stages, and in the city
            streets.
          </p>
        </div>

        {/* Bottom tagline */}
        <p className="relative z-30 text-white font-bold text-center text-sm sm:text-base mt-4 pb-4">
          To improve performances. Improve lives
          <br />
          and change the world.
        </p>
      </div>
    </section>
  );
}

export default Description;
