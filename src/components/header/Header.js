import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

Header.propTypes = {
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    cartCount: PropTypes.number
}
export default Header;