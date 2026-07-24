import "./Main.css";
import arrow from "../../assets/photo/Seta Botão.png";

function Main() {
  return (
    <>
      <div className="cover-img">
        <div className="cover-overlay">
          <h1>
            ADICLUB <br /> IS SHOWING OFF
          </h1>
          <p>
            Exclusive releases for our members and more ways <br />
            to unlock those things that you love.
          </p>
          <div className="cover-btns">
            {/* <p className="cover-btn">
              <img src={arrow} alt="" />
              SEE MORE
            </p> */}
            <p className="cover-btn">
              <img src={arrow} alt="" />
              BUY NOW
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
