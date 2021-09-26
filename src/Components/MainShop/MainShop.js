import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import './MainShop.css'

// calling the data or Api 

const MainShop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {

        fetch('./animals.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    // event handler here 

    const addToCart = (product) => {

        const newCart = [...cart, product];

        setCart(newCart);
    }




    return (
        <div className="shop-container">

            <div className="products">


                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    >
                    </Product>)
                }

            </div>

            <div className="cart">

                <Cart item={cart}></Cart>

            </div>



        </div>
    )
}

export default MainShop
