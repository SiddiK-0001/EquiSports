import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const My = () => {
    const itemss = useLoaderData();
    const [items,setitems]=useState(itemss)
    const handleDelete = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          cancelButtonColor: "#d33",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!"
        })
          .then((result) => {
            if (result.isConfirmed) {
    
              fetch(`http://localhost:3000/equi/${_id}`, {
                method: 'DELETE',
              })
                .then(res => res.json())
                .then(data => {
                  console.log(data)
                  if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your Equipment has been deleted.",
                      icon: "success"
                    });
                    const remaining=items.filter(i=> i._id !== _id)
                    setitems(remaining)
                  }
    
                })
            }
          });
      }
    return (
        <div>

            <div className='flex items-center justify-center gap-3 mt-6 '>
                <div className='h-px flex-grow bg-[#69e61c]'>
                </div>
                <div>
                    <p className="text-center text-4xl font-bold px-3 shadow-md bg-[url('https://i.pinimg.com/236x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg')] bg-blend-overlay bg-opacity-90 bg-[#1a500d] text-white py-2">My Equipments</p>
                </div>
                <div className='h-px flex-grow bg-[#69e61c]'>
                </div>
            </div>


            <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/736x/b9/5e/34/b95e3402e0301cf3f3ab308147d81bcf.jpg')] bg-blend-overlay bg-black bg-opacity-75">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center w-11/12 mx-auto my-4 py-7">
                    {/* grid er khetre place-item diye center e ana lage */}
                    {
                        items.map(item => <div key={item._id}className="bg-opacity-55 px-2 py-3 text-black  bg-[#61e917]  items-center flex flex-col mb-5 shadow-lg outline outline-offset-8 outline-white outline-1">


                            <img className=" h-56 w-full  object-cover rounded-xl " src={item.image} alt="" />


                            <div className="space-y-2">
                                <p className="text-2xl font-bold">{item.itemName} </p>
                                <p>Price : <span className="font-bold">${item.price}</span></p>


                                <div className="flex gap-10 items-center">
                                    <p className="btn btn-xs rounded-2xl bg-green-100 border-green-500">Available Stock:{item.stockStatus}</p>
                                   
                                </div>
                                <p>{item.description}</p>
                                <p className="font-bold">Rating: {item.rating}</p>

                                <div className="flex flex-col">
                                    {/* <Link to={`/updateCoffee/${coffee._id}`}><button className="btn bg-black btn-circle text-white">Update</button></Link> */}
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-black btn-circle text-white">X</button>
                                </div>



                            </div>

                        </div>)
                    }


                </div>
            </div>



        </div>
    );
};

export default My;