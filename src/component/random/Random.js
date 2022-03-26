import React from "react";

const Random = ({ product }) => {
    const {picture, name} = product
  return (
    <div className="mb-4">
        <h3 className="text-center text-xl md:text-2xl font-bold text-violet-600">YAYY!! Best Fit For You 🤩</h3>
      <div className="border-2 rounded-lg">
        <img className="mx-auto w-1/3" src={picture} alt={name} />
        <div className="product-info ml-3">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 sm:mb-0 lg:mb-4">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Random;
