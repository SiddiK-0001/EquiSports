import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Product = ({ itemOne }) => {
    const location = useLocation();
    return (
        <div className='w-full h-full'>
            <div className="bg-opacity-55 px-2 py-3 text-black  bg-[#61e917]  items-center flex flex-col mb-5 shadow-lg outline outline-offset-8 outline-white outline-1">


                <img className=" h-56 w-full  object-cover rounded-xl " src={itemOne.image} alt="" />


                <div className="space-y-2">
                    <p className="text-2xl font-bold">{itemOne.itemName} </p>
                    <p>Price : <span className="font-bold">${itemOne.price}</span></p>

                    {/* <p>Duration : <span className="font-bold">{duration}</span></p> */}

                    <div className="flex gap-10 items-center">
                        <p className="btn btn-xs rounded-2xl bg-green-100 border-green-500">Available Stock:{itemOne.stockStatus}</p>
                        {/* <p className="btn btn-xs rounded-2xl bg-green-100 border-green-500 font-bold">D{counselor}</p> */}
                    </div>
                    <p>{itemOne.description}</p>                   
                    <p className="font-bold">Rating: {itemOne.rating}</p>

                    <div className="flex items-center">

                        {Array.from({ length: 5 }).map((_, index) => {


                            if (index + 1 <= itemOne.rating) {

                                return <AiFillStar key={index} className="text-white w-6 h-6" />;
                            }
                            else if (index < itemOne.rating && itemOne.rating < index + 1) {

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

                    < Link to={`/equi/${itemOne._id}`} state={location.pathname} className="btn rounded-3xl tracking-widest text-lg btn-wide ">Details</Link>

                    {/* <div className="flex items-center">

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
                    </div> */}


                </div>

            </div>

        </div>
    );
    
};

export default Product;