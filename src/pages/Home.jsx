import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import Product from '../components/Product';
// #9cfe60


const Home = () => {

  const items = useLoaderData();
  return (
    <div>


      <Banner></Banner>

      {/* sports category  */}
      <div className='flex items-center justify-center gap-3 mt-6 '>
        <div className='h-px flex-grow bg-[#69e61c]'>
        </div>
        <div>
          <p className="text-center text-5xl font-bold px-5 shadow-md bg-[url('https://i.pinimg.com/236x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg')] bg-blend-overlay bg-opacity-90 bg-[#1a500d] text-white py-2" >Categories We Provide</p>
        </div>
        <div className='h-px flex-grow bg-[#69e61c]'>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 p-4 text-center text-3xl">
        <div className="bg-[#010535] text-white p-4 rounded shadow col-span-2 row-span-2 bg-[url('https://i.pinimg.com/236x/26/8d/a6/268da6a56d727808bcd316e393fd8515.jpg')] bg-blend-overlay bg-opacity-90 flex justify-center items-center min-h-[250px]">
         Cricket
        </div>
        <div className= "bg-[url('https://i.pinimg.com/236x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg')] bg-blend-overlay bg-opacity-90 bg-[#1a500d] text-white p-4 rounded shadow col-span-1 flex justify-center items-center min-h-[150px]">
          Football
        </div>
        <div className="bg-[url('https://i.pinimg.com/236x/e6/ee/1e/e6ee1e5a56e5f5dc7dd32fef9a9eb1c1.jpg')] bg-blend-overlay bg-opacity-90 bg-[#7a1010] text-white p-4 rounded shadow col-span-1 flex justify-center items-center min-h-[200px]">
          Badminton
        </div>
        <div className="bg-[url('https://i.pinimg.com/736x/0e/31/d6/0e31d65535eca10ee6abbda209dc8824.jpg')] bg-blend-overlay bg-opacity-90 bg-[#615e0d] text-white p-4 rounded shadow col-span-2 row-span-2 flex justify-center items-center">
          BasketBall
        </div>
        <div className="bg-[url('https://i.pinimg.com/236x/eb/a8/89/eba889b9b863b4d3f8b7ebfa15199eff.jpg')] bg-blend-overlay bg-opacity-90 bg-[#6a107e] text-white p-4 rounded shadow col-span-2 flex justify-center items-center min-h-[150px]">
          Clothing
        </div>
      </div>

      {/* product section  */}
      <div className='flex items-center justify-center gap-3 mt-6 '>
        <div className='h-px flex-grow bg-[#69e61c]'>
        </div>
        <div>
          <p className="text-center text-5xl font-bold px-3 shadow-md bg-[url('https://i.pinimg.com/236x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg')] bg-blend-overlay bg-opacity-90 bg-[#1a500d] text-white py-2">Product Section</p>
        </div>
        <div className='h-px flex-grow bg-[#69e61c]'>
        </div>
      </div>


      <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/736x/b9/5e/34/b95e3402e0301cf3f3ab308147d81bcf.jpg')] bg-blend-overlay bg-black bg-opacity-75">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center w-11/12 mx-auto my-4 py-7">
          {/* grid er khetre place-item diye center e ana lage */}
          {
            items.slice(0, 8).map(item => <Product key={item._id} itemOne={item}></Product>)
          }

        </div>
      </div>









    </div>
  );
};

export default Home;