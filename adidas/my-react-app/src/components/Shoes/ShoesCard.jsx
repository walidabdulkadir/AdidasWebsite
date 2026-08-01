import { FiHeart } from "react-icons/fi";

function ShoesCard({ product }) {
  return (
    <div className="w-full">
      <div className="relative bg-gray-100 p-6 rounded-md shadow-2xl">
        <button className="absolute top-4 right-4 text-2xl">
          <FiHeart />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain"
        />
        <p className="font-semibold">{product.price}</p>
        <p className="text-gray-500">{product.shipping}</p>
      </div>

      <div className="mt-4 ml-6">
        <h3 className="font-bold text-xl mt-3">{product.name}</h3>

        <p className="text-gray-500 ">{product.category}</p>
      </div>
    </div>
  );
}

export default ShoesCard;
