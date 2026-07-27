import "./Description.css";
import desc from "../../assets/photo/WHAT IS ADIDAS.png";

function Description() {
  return (
    <>
      <div className="imageContainer">
        <img src={desc} alt="" className="imagePng" />
      </div>
    </>
  );
}

export default Description;
