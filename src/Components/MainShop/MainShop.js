import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './MainShop.css'

const MainShop = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('./animals.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])





    return (
        <div className="shop-container">

            <div className="products">


                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                    >
                    </Product>)
                }

            </div>

            <div className="cart">

                <h1>cart</h1>

            </div>



        </div>
    )
}

export default MainShop
