import React from 'react';
import Header from '../components/Header';
import '../styles/globals.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;