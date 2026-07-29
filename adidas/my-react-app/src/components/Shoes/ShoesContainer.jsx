import back from "../../assets/photo/backarrow.png";
import forth from "../../assets/photo/fortharrow.png";
import product from "../../assets/photo/PRODUCTS.png";
import { useRef } from "react";

function ShoesContainer() {
  const images = new Array(9).fill(product);
  const ref = useRef(null);

  const scroll = (dir) => {
    if (!ref.current) return;
    const amount = dir === "left" ? -240 : 240;
    ref.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="mx-4 my-6">
      <div className="flex items-center justify-between px-2 pb-3">
        <h5 className="text-lg font-bold">adiWeek</h5>
        <div className="flex gap-2">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 transition hover:bg-white"
            onClick={() => scroll("left")}
          >
            <img src={back} alt="back" className="h-4 w-4" />
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 transition hover:bg-white"
            onClick={() => scroll("right")}
          >
            <img src={forth} alt="forth" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className="flex gap-4 overflow-x-auto p-2 pb-4 scroll-smooth"
        ref={ref}
      >
        {images.map((src, i) => (
          <article
            className="min-w-[220px] max-w-[220px] flex-shrink-0 overflow-hidden rounded-[24px] bg-white shadow-sm"
            key={i}
          >
            <div className="h-40 bg-slate-100">
              <img
                src={src}
                alt={`product-${i}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-1 px-3 py-3">
              <div className="text-sm font-bold text-slate-900">
                Sneaker {i + 1}
              </div>
              <div className="text-xs text-slate-500">Lifestyle</div>
              <div className="mt-1 font-bold text-slate-900">$129.99</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ShoesContainer;
