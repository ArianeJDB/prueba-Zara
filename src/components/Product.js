import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    const { id, imgUrl, brand, model, price } = props
    // console.log('props', props)

    return (
        <React-Fragment>
            <Link to={`/product/${id}`}>
                <div className="product_card">
                    <img src={imgUrl} alt={brand + model} />
                    <div>
                        <span>Marca: {brand}</span>
                        <span>Modelo: {model}</span>
                        <span>Precio: {price}</span>
                    </div>
                </div>
            </Link>
        </React-Fragment>

    )

}

export default Product