import React from 'react';
// import './header.css'

const Cart = (props) => {

    return (
        <div>
            <i className="fa fa-shopping-cart"></i>
            <span>{props.cartCount}</span>
        </div>
    )
}

export default Cart;