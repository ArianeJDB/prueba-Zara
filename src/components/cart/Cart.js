import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './cart.css'

const Cart = ({ cartCount }) => {
    const cartCountStored = sessionStorage.getItem('cartCount')
    const [cartCountTotal, setCartCountTotal] = useState(cartCountStored)

    useEffect(() => {
        if (!cartCountStored && cartCount) {
            setCartCountTotal(cartCount)
            sessionStorage.setItem('cartCount', JSON.stringify(cartCount))
        } else if (cartCountStored && cartCount) {
            let total = parseInt(cartCountStored) + cartCount
            sessionStorage.setItem('cartCount', JSON.stringify(total))
            setCartCountTotal(total)
        }
    }, [cartCount])

    return (
        <div>
            <span>{cartCountTotal}</span>
            <i className="fa fa-shopping-cart"></i>
        </div>
    )
}

Cart.propTypes = {
    cartCount: PropTypes.number
}
export default Cart;