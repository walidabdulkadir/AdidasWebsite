import img1 from "../../assets/photo/2023 COLLECTION.png";
import img2 from "../../assets/photo/GAZELLE 30 OFF.png";
import img3 from "../../assets/photo/PROOF WATER.png";
import img4 from "../../assets/photo/2023 RELEASES.png";

function Products() {
  return (
    <section className="mx-auto mb-12 max-w-7xl px-6 sm:px-8">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold uppercase tracking-[0.15em] ">
          Most Interesting
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[img1, img2, img3, img4].map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[5px] shadow-lg shadow-black/20"
            >
              <img
                src={src}
                alt={`Product ${index + 1}`}
                className="h-[300px] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
