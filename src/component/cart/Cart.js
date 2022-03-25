import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({product}) => {
    console.log(product);
    const {picture, name} = product;
    return (
        <div className='flex items-center'>
            <img className='w-1/5 rounded-full' src={picture} alt="" />
            <h1>{name}</h1>
            <button className='text-xl ml-1 text-red-900'><FontAwesomeIcon icon={faTrash}/></button>
        </div>
    );
};

export default Cart;