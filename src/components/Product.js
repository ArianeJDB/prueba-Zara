import React from 'react'
import { Route, Link } from 'react-router-dom'
import ProductDetail from './ProductDetail';

const Product = () => {
    return (
        //id viene por props
        <React-Fragment>
            {/* <Link to={`/product/${id}`}> */}
            <Link to={`/product`}>
                <div>hola soy un producto</div>
            </Link>
        </React-Fragment>

    )

}

export default Product