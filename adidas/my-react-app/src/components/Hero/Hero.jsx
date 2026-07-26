import "./Hero.css";
import arrow from "../../assets/photo/arrow2.png";

function Hero() {
  return (
    <>
      <div className="cover-img">
        <div className="cover-overlay">
          <h1>
            ADICLUB <br /> IS SHOWING OFF
          </h1>
          <p className="cover-desc">
            Exclusive releases for our members and more ways <br />
            to unlock those things that you love.
          </p>
          <div className="cover-btns">
            <a className="cover-btn">
              <img src={arrow} alt="arrow" className="arrow" />
              SEE MORE
            </a>
            <a className="cover-btn">
              <img src={arrow} alt="arrow" className="arrow" />
              BUY NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
