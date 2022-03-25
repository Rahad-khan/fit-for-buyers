import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus} from "@fortawesome/free-solid-svg-icons";

const Proudct = ({ product }) => {
  const { name, picture, price } = product;
  return (
    <div className="border-2 rounded-lg product-container relative">
      <img className="mx-auto" src={picture} alt={name} />
      <div className="product-info ml-3">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 sm:mb-0 lg:mb-4">{name}</h3>
        <p className="text-lg md:text-xl ">Price: ${price}</p>
      </div>
      <div className="flex justify-center">
      <button className="mb-2 absolute bottom-0 px-10  py-2 font-semibold text-sm md:text-lg bg-sky-500 hover:bg-sky-700 text-white rounded-sm shadow-sm">
        Add To Cart <FontAwesomeIcon icon={faCartPlus} />
      </button>
      </div>
    </div>
  );
};

export default Proudct;
