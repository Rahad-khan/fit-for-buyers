import React, { useEffect, useState } from 'react';
import Proudct from '../product/Proudct';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='grid grid-cols-9 gap-8'>
            <div className="products col-span-7 container mx-auto px-4 md:px-16">
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <Proudct product= {product} key= {product.id}></Proudct>)
                }
                </div>
            </div>
            <div className="shopping-cart">
                <h2>ypup</h2>

            </div>
        </div>
    );
};

export default Products;