import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
              <div className='h-[10vh]  bg-cover bg-black bg-opacity-90 bg-blend-overlay ' style={{ backgroundImage: 'url("https://i.pinimg.com/736x/f0/8e/89/f08e89ef396043055ad76a2606ffd693.jpg")' }}>
                <Navbar></Navbar>
            </div>

            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;