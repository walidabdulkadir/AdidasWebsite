import "./ShoesContainer.css";
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
    <div className="scroller-wrapper">
      <div className="header">
        <h5>adiWeek</h5>
        <div className="arrows-container">
          <button className="arrow-btn" onClick={() => scroll("left")}>
            <img src={back} alt="back" className="arrow" />
          </button>
          <button className="arrow-btn" onClick={() => scroll("right")}>
            <img src={forth} alt="forth" className="arrow" />
          </button>
        </div>
      </div>

      <div className="shoesContainer" ref={ref}>
        {images.map((src, i) => (
          <article className="card" key={i}>
            <div className="card-image">
              <img src={src} alt={`product-${i}`} />
            </div>
            <div className="card-content">
              <div className="product-title">Sneaker {i + 1}</div>
              <div className="product-sub">Lifestyle</div>
              <div className="price">$129.99</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ShoesContainer;
