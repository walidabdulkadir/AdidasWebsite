import "./Offers.css";

function Offers() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-overlay">
            <h1>
              OUTFITS FOR <br />
              <span>BENEFITS</span>
            </h1>
          </div>
        </div>

        <div className="hero-right">
          <p className="discount">
            60% OFF + free shipping: <span>only for adiClub members.</span>
          </p>

          <p className="description">
            Check your account and start buying for benefits on
            <span> adiWeek.</span>
          </p>

          <div className="hero-buttons">
            <button className="buy-btn">
              <span>→</span> BUY NOW
            </button>

            <button className="info-btn">
              <span>↓</span> WHAT IS ADIDAS?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
