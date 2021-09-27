import './Cart.css'

import React from 'react';

const Cart = (probs) => {

    const { item } = probs;

    let total = 0;

    for (const product of item) {

        total = total + product.price;
    }


    return (
        <div>

            <h2>Squad and Price Summary</h2>

            <h3>animals Added:{probs.item.length}</h3>

            <h2>Total Price: {total}</h2>

            <h3 className="squad">Your Animal Squad:</h3>

            {
                item.map(animal => <li>{animal.name}</li>)
            }



        </div>
    );
};

export default Cart;