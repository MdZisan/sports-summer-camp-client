import React from 'react';
import Header from '../SharedPages/Headers/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;