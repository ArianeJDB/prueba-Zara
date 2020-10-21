import React, { useState, useEffect } from 'react';
import Product from './Product'
import {getProducts} from '../services/getProducts'
const ProductsList = () => {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        getProducts()
        .then(data => {
            setProducts(data);
            localStorage.setItem('productsData', JSON.stringify(data))
    })
    }, [])

    return (
        <React-Fragment>
           {
               products.map(product => <Product
                    key= { product.id}
                    id = {product.id}
                    imgUrl = {product.imgUrl}
                    brand = {product.brand}
                    model = {product.model}
                    price = {product.price}
                   />
               )
           }
        </React-Fragment>

    )
}

export default ProductsList