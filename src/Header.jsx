
import React from 'react';
import './Header.css';
import logo from './path/to/your/public\Cream Brown Minimalist Line Art Fashion Store Logo (2).png'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li>HOME</li>
                    <li>NOVIDADES</li>
                    <li>SOBRE</li>
                    <li>MEUS PEDIDOS</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
