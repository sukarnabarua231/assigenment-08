import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='bg-gray-200'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;