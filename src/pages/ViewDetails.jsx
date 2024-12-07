import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const item = useLoaderData();
    
    // console.log(item)

  
    return (
        <div>
            <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/736x/b9/5e/34/b95e3402e0301cf3f3ab308147d81bcf.jpg')] bg-blend-overlay bg-opacity-70 px-5 py-3 text-black rounded-3xl mx-auto w-3/4 mt-10 bg-[#78e13f]  items-center flex flex-col md:flex-row gap-10 mb-5 shadow-lg outline outline-offset-8 outline-green-950">


                <img className="md:h-full md:w-56 h-56 w-full  object-cover rounded-xl " src={item.image} alt="" />


                <div className="space-y-2">
                    <p className="text-5xl font-bold">{item.itemName} </p>
                    <p>Price : <span className="font-bold">${item.price}</span></p>

                    {/* <p>Duration : <span className="font-bold">{duration}</span></p> */}

                    <div className="flex gap-10 items-center">
                        <p className="btn btn-xs rounded-2xl bg-green-100 border-green-500">Available Stock:{item.stockStatus}</p>
                        {/* <p className="btn btn-xs rounded-2xl bg-green-100 border-green-500 font-bold">D{counselor}</p> */}
                    </div>
                    <p>{item.description}</p>
<p className='text-2xl font-semibold'> More Details</p>
                    <ul>
                    <li><span className='font-semibold'>Customization:</span>{item.customization}</li>
                    <li><span className='font-semibold'>ProcessingTime:</span>{item.processingTime}</li>
                    </ul>
                    

                    <p className="font-bold">Rating: {item.rating}</p>

                    <div className="flex items-center">

                        {Array.from({ length: 5 }).map((_, index) => {


                            if (index + 1 <= item.rating) {

                                return <AiFillStar key={index} className="text-white w-6 h-6" />;
                            }
                            else if (index < item.rating && item.rating < index + 1) {

                                return (

                                    <AiFillStar key={index}
                                        className="text-white w-6 h-6"
                                        style={{ clipPath: "inset(0 50% 0 0)" }}
                                    />


                                );
                            }
                            else {

                                return <AiOutlineStar key={index} className="text-white w-6 h-6" />;
                            }
                        }
                        )
                        }
                    </div>
               <Link to="/all"> <button className='btn mt-3 rounded-3xl text-xl'>Back</button></Link>

                </div>

            </div>

        </div>
    );
};

export default ViewDetails;
