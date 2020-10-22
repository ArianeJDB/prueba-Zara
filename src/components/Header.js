import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs'
import Cart from './Cart'
import Filter from './Filter'


import './header.css'

const Header = ({ path, label, cartCount, setInputValue }) => {
    const currentPage = useLocation().pathname

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
            {currentPage === '/'
                ? <Filter
                    setInputValue={setInputValue}
                />
                : ''
            }
        </header>
    )
}

export default Header;