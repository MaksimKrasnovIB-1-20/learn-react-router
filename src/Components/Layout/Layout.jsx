import React from 'react';
import { Outlet } from 'react-router-dom';

import Customlink from '../CustomLink/CustomLink';

import './Layout.scss';

// const activeLink = ({ isActive }) => isActive ? 'active-link' : '';

const Layout = () => {
    return (
        <>
            <header className="header">
                <Customlink to="/">Home</Customlink>
                <Customlink to="/about">About</Customlink>
                <Customlink to="/contacts">Contacts</Customlink>  
            </header>
            <main className='main'>
                <div className="container">
                    <Outlet /> 
                </div>
            </main>
            <footer className="footer">
                <p>Copyright © 2022</p>
            </footer>
        </>
    );
}

export default Layout;
