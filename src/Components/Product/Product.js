import './Product.css'

import React from 'react';

const Product = (probs) => {
    console.log(probs.produc)
    const { name, img, price, age, type, id } = probs.product
    return (
        <div className="product">

            <img src={img} alt="" />

            <h2>Name: {name}</h2>

            <h4>type: {type}</h4>

            <h5>Age: {age}</h5>

            <h5>special ID No: {id}</h5>

            <h1>Price: {price}</h1>

            <button className="purchase-btn">Add To cart</button>

        </div>
    );
};

export default Product;