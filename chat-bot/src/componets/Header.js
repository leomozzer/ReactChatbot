import React from 'react';
import logo from '../logo.svg';

const Header = props=>{
    return (
        <header className='header'>
            <img src={logo} className="logo" alt="logo" />
            <h1 className="app-title">Chatbot em react.js</h1>

        </header>
    )
}

export default Header