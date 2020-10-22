import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs'
import Cart from './Cart'
import Filter from './Filter'


import './header.css'

const Header = (props) => {
    const {path, label, cartCount, setInputValue} = props;
    const currentPage = useLocation().pathname;

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