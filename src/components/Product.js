import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

const Product = (props) => {
    const { id, imgUrl, brand, model, price } = props

    return (
        <div className="product_card">
            <Link to={`/product/${id}`}>
                <img src={imgUrl} alt={brand + model} />
                <div className="model-brand_container">
                    <span>Marca: {brand} </span>
                    <span>Modelo: {model}</span>
                </div>

                <span>Precio: {price}€</span>
            </Link>
        </div>
    )

}

export default Product