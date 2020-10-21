import React, { useState, useEffect } from 'react';
import Product from './Product'
import { getProducts } from '../services/getProducts'
const ProductsList = () => {

    const [products, setProducts] = useState([]);
    const productsDataStored = JSON.parse(localStorage.getItem('productsData'))

    useEffect(() => {
        if(productsDataStored) {
            setProducts(productsDataStored)
        } else {
          getProducts()
            .then(data => {
                setProducts(data);
                localStorage.setItem('productsData', JSON.stringify(data))
            })  
        } 
    }, [])

    return (
        <React-Fragment>
            <ul className="products_list">
                {
                    products.map(product => <li className="product_item" key={product.id}>
                        <Product
                            id={product.id}
                            imgUrl={product.imgUrl}
                            brand={product.brand}
                            model={product.model}
                            price={product.price}
                        />
                    </li>
                    )
                }
            </ul>
        </React-Fragment>

    )
}

export default ProductsList