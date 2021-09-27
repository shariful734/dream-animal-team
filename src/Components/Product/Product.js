import './Product.css'

import React from 'react';

const Product = (probs) => {

    const { name, img, price, age, type, id, } = probs.product
    return (
        <div className="product">

            <img src={img} alt="" />

            <h2>Name: {name}</h2>

            <h4>type: {type}</h4>

            <h5>Age: {age}</h5>

            <h5>special ID No: {id}</h5>

            <h1 className="price"><i class="fas fa-money-bill-wave icon-green"></i>Price: {price}$</h1>

            <button
                onClick={() => probs.addToCart(probs.product)}
                className="purchase-btn"><i class="fas fa-shopping-cart icon"></i>Add To cart</button>

        </div>
    );
};

export default Product;