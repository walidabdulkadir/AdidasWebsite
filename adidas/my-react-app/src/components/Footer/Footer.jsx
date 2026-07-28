import "./Footer.css";
import logo from "../../assets/photo/newAddidas.png";
import fb from "../../assets/photo/fb.png";
import yt from "../../assets/photo/yt.png";
import instagram from "../../assets/photo/instagram.png";
import x from "../../assets/photo/x.png";
import sponsor1 from "../../assets/photo/express.png";
import sponsor2 from "../../assets/photo/master.png";
import sponsor3 from "../../assets/photo/visa.jpg";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="Logo">
          {" "}
          <img src={logo} alt="" className="logo" />{" "}
        </div>
        <div className="mid-container">
          <div className="cloumns">
            <h3 className="title">INFO</h3>
            <p>Terms and Condition</p>
            <p>Cookies</p>
            <p>Privacy Politics</p>
            <p></p>
          </div>
          <div className="cloumns">
            <h3 className="title">COLLECTIONS</h3>
            <p>Ultra</p>
            <p>Confirmed</p>
            <p>NMD</p>
            <p>Originals</p>
          </div>
          <div className="cloumns">
            <h3 className="title">SPORTS</h3>
            <p>Football</p>
            <p>Basketball</p>
            <p>Running</p>
            <p>Training</p>
          </div>
          <div className="cloumns">
            <h3 className="title">Support</h3>
            <p>Customer</p>
            <p>FAQ</p>
            <p>Shipping</p>
            <p>adiClub</p>
          </div>
          <div className="footer-column">
            <h3 className="title">FOLLOW US</h3>
            <div className="social-links">
              <img src={fb} alt="Facebook" />
              <img src={yt} alt="YouTube" />
              <img src={instagram} alt="Instagram" />
              <img src={x} alt="X" />
            </div>
          </div>
        </div>
        <div className="sponsors">
          <img src={sponsor1} alt="American Express" />
          <img src={sponsor2} alt="mastercard" />
          <img src={sponsor3} alt="Visa" />
        </div>
      </div>
    </>
  );
}

export default Footer;
