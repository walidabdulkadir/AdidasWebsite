import { useRef } from "react";
import products from "./Data";
import ProductCard from "./ShoesCard";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function ShoesList({ title }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative px-10 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="flex ">
          <button type="button" onClick={() => scroll("left")} className="p-2 ">
            <FiChevronLeft className="text-4xl" />
          </button>
          <button type="button" onClick={() => scroll("right")} className="p-2">
            <FiChevronRight className="text-4xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[18rem] max-w-[18rem] flex-0 snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShoesList;
