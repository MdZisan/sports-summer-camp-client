import React from 'react';
import Header from '../SharedPages/Headers/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='overflow-x-hidden'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;