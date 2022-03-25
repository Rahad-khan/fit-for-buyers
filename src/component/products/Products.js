import React, { useEffect, useState } from 'react';
import Proudct from '../product/Proudct';

const Products = () => {
    // For Products load from json file
    const [products, setProducts] = useState([]);
    // Selected Products
    const [pickProduct,  setPickProduct] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const addedToCart = product => {
        setPickProduct(product);
    }
    return (
        <div className='grid grid-cols-9 gap-8'>
            <div className="products col-span-7 container mx-auto px-4 md:px-16">
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <Proudct product= {product} addedToCart= {addedToCart} key= {product.id}></Proudct>)
                }
                </div>
            </div>
            <div className="shopping-cart shadow-lg container mx-auto px-4 border-2 col-span-2 rounded-l-lg">
                <div className='mt-10'>
                    <h2 className='text-3xl font-semibold'>Selected Laptops</h2>

                </div>
                <div className='flex justify-center flex-col'>
                    <button className='block w-3/4 py-1 mt-8 text-lg font-medium text-green-500 hover:bg-green-500 hover:text-white rounded-lg border-2 border-green-500'>Pick 1 For Me</button>
                    <button className='block w-3/4 py-1 mt-2 text-lg font-medium text-red-500 hover:bg-red-500 hover:text-white rounded-lg border-2 border-red-500'>Reset/Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Products;