import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo not found!" />
            <nav className="nav-menu">
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order-review">Order Review</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
        </header>
    );
};

export default Header;