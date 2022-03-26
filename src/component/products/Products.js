import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Proudct from "../product/Proudct";

const Products = () => {
  // For Products load from json file
  const [products, setProducts] = useState([]);
  // Selected Products
  const [pickProduct, setPickProduct] = useState([]);
  const [randomProduct, setRandomProudct] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //function for addedToCart
  const addedToCart = (product) => {
    if (pickProduct.length > 3) {
      return alert("can't added more than 4 items");
    }
    const found = pickProduct.find((pro) => pro.id === product.id);
    let addedProduct;
    !found
      ? (addedProduct = [...pickProduct, product])
      : (addedProduct = [...pickProduct]);
    setPickProduct(addedProduct);
  };
  const resetProduct = () => {
    setPickProduct([]);
    setRandomProudct([]);
  };
  const randomSelect = () => {
    const randomNumber = Math.floor(Math.random() * pickProduct.length);
    const pickedOne = pickProduct[randomNumber];
    if (pickedOne) {
      setRandomProudct([pickedOne]);
    }
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-9 gap-2">
      <div className="products md:col-span-7 container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Proudct
              product={product}
              addedToCart={addedToCart}
              key={product.id}
            ></Proudct>
          ))}
        </div>
      </div>
      {/* CArt */}
      <div className="shopping-cart shadow-xl  pl-2 mr-2 border-2 md:col-span-2 rounded-l-lg">
        <div className="mt-10 sticky top-8">
          <h2 className="text-2xl md:text-3xl mb-4 font-semibold">
            Selected Laptops
          </h2>
          {pickProduct.map((product) => (
            <Cart product={product} key={product.id}></Cart>
          ))}

          {/* Buttons */}
          <div className="flex justify-center flex-col mb-8">
            <button
              onClick={randomSelect}
              className="block w-3/4 py-1 mt-8 text-lg font-medium text-green-500 hover:bg-green-500 hover:text-white rounded-lg border-2 border-green-500"
            >
              Pick 1 For Me
            </button>
            <button
              onClick={resetProduct}
              className="block w-3/4 py-1 mt-2 text-lg font-medium text-red-500 hover:bg-red-500 hover:text-white rounded-lg border-2 border-red-500"
            >
              Reset
            </button>
          </div>
          {randomProduct.map((product) => (
            <Cart product={product} key={product.id}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
