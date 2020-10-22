import React, { useState, useEffect, useCallback } from 'react';
import Product from './Product'
import Header from './Header'
import { getProducts } from '../services/getProducts'
const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const productsDataStored = JSON.parse(localStorage.getItem('productsData'))
    const timeRequestStored = parseInt(localStorage.getItem('timeRequest'))

    useEffect(() => {
        if (productsDataStored && timeRequestStored) {
            const now = Date.now() // timestamp
            const afterAnHour = timeRequestStored + 3600 //one hour more than the time that the request was stored
            if(now <= afterAnHour) {
                getProducts()
                .then(data => {
                    setProducts(data);
                    localStorage.setItem('productsData', JSON.stringify(data))
                    localStorage.setItem('timeRequest', JSON.stringify(Date.now()))
                }) 
            }
            setProducts(productsDataStored)
        } else {
            getProducts()
                .then(data => {
                    setProducts(data);
                    localStorage.setItem('productsData', JSON.stringify(data))
                    localStorage.setItem('timeRequest', JSON.stringify(Date.now()))
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
        <React-Fragment>
            <Header
                path='/'
                label='Inicio'
                setInputValue={setInputValue}
            />
            <ul className="products_list">
                {
                    products
                        .filter(product =>
                            product.brand.toLowerCase().includes(inputValue)
                            || product.model.toLowerCase().includes(inputValue))
                        .map(product =>
                            <li className="product_item" key={product.id}>
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