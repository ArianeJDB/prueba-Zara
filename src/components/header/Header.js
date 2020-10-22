import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import Cart from '../cart/Cart'
import './header.css'

const Header = ({ path, label, cartCount }) => {
    return (
        <header>
            <Link to="/" className="link">
                <i className="fa fa-mobile"></i>
            </Link>
            <Breadcrumbs
                path={path}
                label={label}
            />
            <Cart cartCount={cartCount} />
        </header>
    )
}

export default Header;