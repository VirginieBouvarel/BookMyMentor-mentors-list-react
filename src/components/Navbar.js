import React from 'react';
import './Navbar.css';


function Header() {
    return (
        <div className="Nav">
            <nav>
                <ul className="menu">
                    <li className="menu__item">
                        <a href="/">FAQ</a>
                    </li>
                    <li className="menu__item">
                        <a href="/">Inscription</a>
                    </li>
                    <li className="menu__item">
                        <a href="/">Connexion</a>
                    </li>
                </ul>
                <div className="burger">
                    <i className="fas fa-bars"></i>
                </div>
            </nav>
        </div>
    );
}

export default Header;