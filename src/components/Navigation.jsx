import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'
import { CartContext } from '../CartContext';

const NavBar = () => {
    const { cartCount } = useContext(CartContext);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><Link to="/" className="navbar-link">Головна</Link></li>
                <li><Link to="/dishes" className="navbar-link">Страви</Link></li>
                <li><Link to="/drinks" className="navbar-link">Напої</Link></li>
                <li><Link to="/desserts" className="navbar-link">Десерти</Link></li>
                <li><Link to="/cart" className="navbar-link"><img
                    style={{ width: '22px', filter: 'invert()', paddingRight: '6px' }}
                    src="https://cdn3.iconfinder.com/data/icons/feather-5/24/shopping-cart-1024.png"
                    alt=""
                />             {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </Link></li>

            </ul>
        </nav>

    );
}

export default NavBar;
