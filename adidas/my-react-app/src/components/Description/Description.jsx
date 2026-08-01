import desc from "../../assets/photo/coverImage.png";

function Description() {
  return (
    <section className="relative w-full h-210 bg-linear-to-r from-[#bb5d01] to-[#ff9d2e] overflow-hidden min-h-125  sm:min-h-265 md:min-h-150  sm:max-h-200">
      <img
        src={desc}
        alt="Adidas athlete"
        className="absolute z-30 inset-0 lg:w-auto  h-200 object-cover select-none object-center sm:h-250 mt-30 md:h-200 md:mt-25"
      />

      <div className="relative flex flex-col items-center px-6 md:px-12 py-10 gap-8 min-h-120">
        {/* Heading */}
        <h1
          className="relative z-10 uppercase text-6xl  text-white font-extrabold text-center leading-none tracking-tight w-full
                       lg:text-9xl md:text-8xl 
                        "
        >
          History and Grace
        </h1>

        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 w-full mt-2">
          <p className="text-white text-sm sm:text-lg md:text-base leading-relaxed max-w-75">
            At adidas, we believe that sports have the power to transform lives.
            It's not just about keeping your body and mind fit; it's about
            bringing people together and creating a community of individuals who
            share the same passion for excellence.
          </p>

          <p className="text-white text-sm sm:text-lg md:text-base leading-relaxed md:text-right md:ml-auto max-w-75">
            Whether you're a runner, a basketball player, a soccer player, or
            someone who loves to train, you'll find a home with us. Our products
            are designed to meet your needs, no matter what your preferred form
            of exercise may be.
          </p>

          <p className="text-white text-sm sm:text-lg md:text-base leading-relaxed max-w-75">
            We draw inspiration from the athletes who push themselves to their
            limits every day, and from the technology we develop to help them
            achieve their goals.
          </p>

          <p className="text-white text-sm sm:text-lg md:text-base leading-relaxed md:text-right md:ml-auto max-w-75">
            We're not just present on the playing field, either. You'll find the
            three stripes at music festivals, on stages, and in the city
            streets.
          </p>
        </div>

        <p className="relative z-30 text-white font-bold text-center text-lg sm:text-base mt-4 pb-4">
          To improve performances. Improve lives
          <br />
          and change the world.
        </p>
      </div>
    </section>
  );
}

export default Description;
