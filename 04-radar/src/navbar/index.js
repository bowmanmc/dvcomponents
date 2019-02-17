import React from 'react';

import Logo from './Logo';

import './Navbar.scss';


const Navbar = () => {

    return (
        <div className="Navbar">
            <Logo />
            <span>City <br />Climate <br />Comparison</span>
        </div>
    );
};

export default Navbar;
