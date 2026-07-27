import "./Products.css";
import img1 from "../../assets/photo/2023 COLLECTION.png";
import img2 from "../../assets/photo/GAZELLE 30 OFF.png";
import img3 from "../../assets/photo/PROOF WATER.png";
import img4 from "../../assets/photo/2023 RELEASES.png";

function Products() {
  return (
    <>
      <div className="container">
        <div>
          <h3>MOST INTERESTING</h3>
          <div className="sub-container">
            <div className="productImg">
              <img src={img1} alt="" />
            </div>
            <div className="productImg">
              <img src={img2} alt="" />
            </div>
            <div className="productImg">
              <img src={img3} alt="" />
            </div>
            <div className="productImg">
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
