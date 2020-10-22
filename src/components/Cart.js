import React, {useState, useEffect} from 'react';
// import './header.css'

const Cart = ({cartCount}) => {
    const cartCountStored = sessionStorage.getItem('cartCount')
    const [cartCountTotal, setCartCountTotal] = useState(cartCountStored)

    useEffect(() => {
      if(!cartCountStored && cartCount) {
        setCartCountTotal(cartCount)
        sessionStorage.setItem('cartCount', JSON.stringify(cartCount))
    } else if(cartCountStored && cartCount) {
        let total = parseInt(cartCountStored) + cartCount
        sessionStorage.setItem('cartCount', JSON.stringify(total))
        setCartCountTotal(total)
    }  
    }, [cartCount])

    return (
        <div>
            <i className="fa fa-shopping-cart"></i>
            <span>{cartCountTotal}</span>
        </div>
    )
}

export default Cart;