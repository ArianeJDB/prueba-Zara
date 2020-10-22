import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './product.css'

const Product = (props) => {
    const { id, imgUrl, brand, model, price } = props

    return (
        <div className="product_card">
            <Link to={`/product/${id}`} className="link_div">
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
Product.propTypes = {
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired
}
export default Product