import React from 'react';
// #9cfe60

import sport from '../assets/physical.png'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Home = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            {/* eivhabe kaj kre na  */}

            {/* <div className="min-h-[50vh] w-full bg-cover bg-center bg-black bg-opacity-90 mix-blend-overlay bg-[url('https://i.ibb.co/Ch60pPY/vecteezy-top-view-of-a-workspace-on-a-blue-desk-1309407.jpg')]">
                <img src={sport} alt="" />
            </div> */}
            <div className='lg:min-h-[70vh] min-h-[50vh] bg-cover bg-black bg-opacity-90 bg-blend-overlay ' style={{ backgroundImage: 'url("https://i.pinimg.com/736x/f0/8e/89/f08e89ef396043055ad76a2606ffd693.jpg")' }}>
                <Navbar></Navbar>
            </div>

            <div className='flex-grow'>

            </div>

            <div>
                <Footer></Footer>
            </div>







        </div>
    );
};

export default Home;