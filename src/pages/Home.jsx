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


      <div className='flex items-center justify-center gap-3 mt-6 '>
        <div className='h-1 flex-grow bg-[#69e61c]'>
        </div>
        <div>
        <p className='text-center text-5xl text-[#71e12c] font-bold shadow-md'>Product Section</p>
        </div>
        <div className='h-1 flex-grow bg-[#69e61c]'>
        </div>
      </div>


      <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/736x/b9/5e/34/b95e3402e0301cf3f3ab308147d81bcf.jpg')] bg-blend-overlay bg-black bg-opacity-75">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center w-11/12 mx-auto my-4 py-7">
          {/* grid er khetre place-item diye center e ana lage */}
          {
            items.slice(0, 8).map(item => <Product  key={item._id} itemOne={item}></Product>)
          }

        </div>
      </div>









    </div>
  );
};

export default Home;