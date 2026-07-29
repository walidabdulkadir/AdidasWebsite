import desc from "../../assets/photo/WHAT IS ADIDAS.png";

function Description() {
  return (
    <section className="mx-auto mb-12 max-w-7xl px-6 sm:px-8">
      <img
        src={desc}
        alt="What is Adidas"
        className="w-full rounded-3xl object-cover"
      />
    </section>
  );
}

export default Description;
