import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactsPage from './ContactsPage';
import NotFoundPage from './NotFoundPage';

const Header = () => {
    return (
        <>
            <header className="header">
                <Link className="header__link" to="/">Home</Link>
                <Link className="header__link" to="/about">About</Link>
                <Link className="header__link" to="/contacts">Contacts</Link>  
            </header>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/contacts" element={<ContactsPage />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
        </>  
    );
}

export default Header;
