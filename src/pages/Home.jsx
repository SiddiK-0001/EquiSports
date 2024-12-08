import React, { useState } from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import Product from '../components/Product';
// #9cfe60


const Home = () => {

  const items = useLoaderData();

  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    
  };
  return (
    <div className={isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}>


      <Banner></Banner>
      <p className='text-center text-4xl font-bold'>Wanna Change the theme??</p>
      <label className="swap swap-rotate w-full">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox"
          className="theme-controller"
          onChange={toggleTheme}
          value="synthwave" />

        {/* sun icon */}
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>

      {/* sports category  */}
      <div className='flex items-center justify-center gap-3 mt-6 '>
        <div className='h-px flex-grow bg-[#69e61c]'>
        </div>
        <div>
          <p className="text-center text-4xl font-bold px-5 shadow-md bg-[url('https://i.pinimg.com/236x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg')] bg-blend-overlay bg-opacity-90 bg-[#1a500d] text-white py-2" >Categories We Provide</p>
        </div>
        <div className='h-px flex-grow bg-[#69e61c]'>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 p-4 text-center text-3xl">
        <div className="bg-[#010535] text-white p-4 rounded shadow col-span-2 row-span-2 bg-[url('https://i.pinimg.com/236x/26/8d/a6/268da6a56d727808bcd316e393fd8515.jpg')] bg-blend-overlay bg-opacity-90 flex justify-center items-center">
          Cricket
        </div>
        <div className="bg-[url('https://i.pinimg.com/236x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg')] bg-blend-overlay bg-opacity-90 bg-[#1a500d] text-white p-4 rounded shadow col-span-1 flex justify-center items-center min-h-[150px]">
          Football
        </div>
        <div className="bg-[url('https://i.pinimg.com/236x/e6/ee/1e/e6ee1e5a56e5f5dc7dd32fef9a9eb1c1.jpg')] bg-blend-overlay bg-opacity-90 bg-[#7a1010] text-white p-4 rounded shadow col-span-1 flex justify-center items-center min-h-[150px]">
          Badminton
        </div>
        <div className="bg-[url('https://i.pinimg.com/736x/0e/31/d6/0e31d65535eca10ee6abbda209dc8824.jpg')] bg-blend-overlay bg-opacity-90 bg-[#615e0d] text-white p-4 rounded shadow col-span-2 row-span-2 flex justify-center items-center">
          BasketBall
        </div>
        <div className="bg-[url('https://i.pinimg.com/236x/eb/a8/89/eba889b9b863b4d3f8b7ebfa15199eff.jpg')] bg-blend-overlay bg-opacity-90 bg-[#6a107e] text-white p-4 rounded shadow col-span-2 flex justify-center items-center ">
          Clothing
        </div>
      </div>

      {/* product section  */}
      <div className='flex items-center justify-center gap-3 mt-6 '>
        <div className='h-px flex-grow bg-[#69e61c]'>
        </div>
        <div>
          <p className="text-center text-4xl font-bold px-3 shadow-md bg-[url('https://i.pinimg.com/236x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg')] bg-blend-overlay bg-opacity-90 bg-[#1a500d] text-white py-2">Product Section</p>
        </div>
        <div className='h-px flex-grow bg-[#69e61c]'>
        </div>
      </div>


      <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/736x/b9/5e/34/b95e3402e0301cf3f3ab308147d81bcf.jpg')] bg-blend-overlay bg-black bg-opacity-75">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center w-11/12 mx-auto my-4 py-7">

          {
            items.slice(0, 8).map(item => <Product key={item._id} itemOne={item}></Product>)
          }


        </div>
      </div>


      {/* review section  */}


      <div class="bg-gray-100 p-6 text-black">
        <h2 class="text-3xl  font-bold text-center mb-6">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white shadow p-4 rounded text-center">
            <p class="text-xl font-semibold">"Excellent cricket bat quality!"</p>
            <div class="text-yellow-500 flex justify-center mt-2">
              ⭐⭐⭐⭐⭐
            </div>
            <p class="mt-4 text-gray-500">- Alex Morgan</p>
          </div>
          <div class="bg-white shadow p-4 rounded text-center">
            <p class="text-xl font-semibold">"Fast delivery, highly recommend!"</p>
            <div class="text-yellow-500 flex justify-center mt-2">
              ⭐⭐⭐⭐☆
            </div>
            <p class="mt-4 text-gray-500">- Jamie Lee</p>
          </div>
          <div class="bg-white shadow p-4 rounded text-center">
            <p class="text-xl font-semibold">"Affordable and durable gear."</p>
            <div class="text-yellow-500 flex justify-center mt-2">
              ⭐⭐⭐⭐⭐
            </div>
            <p class="mt-4 text-gray-500">- Taylor Adams</p>
          </div>
          <div class="bg-white shadow p-4 rounded text-center">
            <p class="text-xl font-semibold">"Basketball shoes fit perfectly!"</p>
            <div class="text-yellow-500 flex justify-center mt-2">
              ⭐⭐⭐⭐⭐
            </div>
            <p class="mt-4 text-gray-500">- Chris Evan</p>
          </div>
          <div class="bg-white shadow p-4 rounded text-center">
            <p class="text-xl font-semibold">"Customer service was excellent."</p>
            <div class="text-yellow-500 flex justify-center mt-2">
              ⭐⭐⭐⭐⭐
            </div>
            <p class="mt-4 text-gray-500">- Riley Brooks</p>
          </div>
          <div class="bg-white shadow p-4 rounded text-center">
            <p class="text-xl font-semibold">"Love the quality of my new jersey."</p>
            <div class="text-yellow-500 flex justify-center mt-2">
              ⭐⭐⭐⭐☆
            </div>
            <p class="mt-4 text-gray-500">- Sam Parker</p>
          </div>
        </div>
      </div>

      {/* events section  */}


      <div class="bg-white p-6 text-black my-9">
        <h2 class="text-3xl font-bold text-center mb-6">Explore the World of Sports</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div class="bg-gray-100 shadow p-4 rounded flex items-center">
            <img src="https://i.pinimg.com/236x/26/8d/a6/268da6a56d727808bcd316e393fd8515.jpg"
              alt="Cricket World Cup"
              class="w-24 h-full object-cover rounded mr-4" />
            <div>
              <h3 class="text-xl font-bold mb-2">Cricket World Cup</h3>
              <p class="text-gray-600 mb-4">Gear up for the biggest cricket event. Get the best cricket gear now!</p>
              <button class="btn btn-primary">Shop Now</button>
            </div>
          </div>


          <div class="bg-gray-100 shadow p-4 rounded flex items-center">
            <img src="https://i.pinimg.com/236x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg"
              alt="Football Tips"
              class="w-24 h-full object-cover rounded mr-4" />
            <div>
              <h3 class="text-xl font-bold mb-2">Football Tips</h3>
              <p class="text-gray-600 mb-4">Learn expert techniques to improve your football game.</p>
              <button class="btn btn-secondary">Read More</button>
            </div>
          </div>


          <div class="bg-gray-100 shadow p-4 rounded flex items-center">
            <img src="https://i.pinimg.com/474x/2e/8b/3d/2e8b3d634b9cd14891bfbb00d0c4e7b5.jpg"
              alt="Badminton Championships"
              class="w-24 h-full object-cover rounded mr-4" />
            <div>
              <h3 class="text-xl font-bold mb-2">Badminton Championships</h3>
              <p class="text-gray-600 mb-4">Check out our badminton rackets for the upcoming championships.</p>
              <button class="btn btn-primary">Shop Now</button>
            </div>
          </div>


          <div class="bg-gray-100 shadow p-4 rounded flex items-center">
            <img src="https://i.pinimg.com/736x/0e/31/d6/0e31d65535eca10ee6abbda209dc8824.jpg"
              alt="Basketball Basics"
              class="w-24 h-full object-cover rounded mr-4" />
            <div>
              <h3 class="text-xl font-bold mb-2">Basketball Basics</h3>
              <p class="text-gray-600 mb-4">Discover the fundamentals of basketball to improve your skills.</p>
              <button class="btn btn-secondary">Read More</button>
            </div>
          </div>


          <div class="bg-gray-100 shadow p-4 rounded flex items-center">
            <img src="https://i.pinimg.com/236x/eb/a8/89/eba889b9b863b4d3f8b7ebfa15199eff.jpg"
              alt="Sports Apparel Trends"
              class="w-24 h-full object-cover rounded mr-4" />
            <div>
              <h3 class="text-xl font-bold mb-2">Sports Apparel Trends</h3>
              <p class="text-gray-600 mb-4">Stay stylish on the field with our latest sportswear collection.</p>
              <button class="btn btn-primary">Shop Now</button>
            </div>
          </div>

          <div class="bg-gray-100 shadow p-4 rounded flex items-center">
            <img src="https://i.pinimg.com/236x/a4/83/68/a48368624190b8e4fc8ccf0004a16404.jpg"
              alt="Upcoming Marathons"
              class="w-24 h-full object-cover rounded mr-4" />
            <div>
              <h3 class="text-xl font-bold mb-2">Upcoming Marathons</h3>
              <p class="text-gray-600 mb-4">Get your running shoes ready for the next marathon event.</p>
              <button class="btn btn-secondary">Read More</button>
            </div>
          </div>
        </div>
      </div>








    </div>
  );
};

export default Home;