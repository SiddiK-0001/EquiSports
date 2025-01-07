import React, { useContext, useState } from 'react';
import { Authcontext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const {user: authUser}= useContext(Authcontext);
  
  const user = useLoaderData();
  console.log("item",user)



  const handleSubmit = (e) => {
    e.preventDefault();

    const itemName = e.target.itemName.value;
    const image = e.target.image.value;
    const categoryName = e.target.categoryName.value;
    const description = e.target.description.value;
    const price = parseFloat(e.target.price.value);
    const rating = parseFloat(e.target.rating.value);
    const customization = e.target.customization.value;
    const processingTime = e.target.processingTime.value;
    const stockStatus = parseInt(e.target.stockStatus.value);

    const formData ={ itemName,image,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus}


    fetch(`https://server-site-phi.vercel.app/equi/${user._id}`, {
      method: "PUT",
      headers: {
         "content-Type": "application/json"
         },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        
      //  console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Successfully Updated",
                        icon: "success"
                    });
                    e.target.reset();
                }
      })
      
  };
  return (
    <div>

      <p className='text-center text-3xl md:text-6xl my-4'>Update <span className='text-[#69fe0f] '>Your</span> Equipment</p>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md space-y-4 mb-5"
      >


        {/* Image */}
        <div>
          <label className="form-control font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"          
            className="w-full border rounded px-3 py-2"
            placeholder="Enter image URL"
            defaultValue={user.image}
            required
          />
        </div>

     
        <div>
          <label className="form-control font-medium mb-1">Item Name</label>
          <input
            type="text"
            name="itemName"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter item name"
            defaultValue={user.itemName}
            required
          />
        </div>

       
        <div>
          <label className="form-control font-medium mb-1">Category Name</label>
          <input
            type="text"
            name="categoryName"  
            className="w-full border rounded px-3 py-2"
            placeholder="Enter category name"
            defaultValue={user.categoryName}
            required
          />
        </div>

       
        <div>
          <label className="form-control font-medium mb-1">Description</label>
          <textarea
            name="description"            
            className="w-full border rounded px-3 py-2"
            placeholder="Enter item description"
            defaultValue={user.description}
            required
          />
        </div>

       
        <div>
          <label className="form-control font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"                      
            className="w-full border rounded px-3 py-2"
            placeholder="Enter price"
            defaultValue={user.price}
            required
          />
        </div>

        
        <div>
          <label className="form-control font-medium mb-1">Rating</label>
          <input
            type="number"
            name="rating"                      
            className="w-full border rounded px-3 py-2"
            placeholder="Enter rating (1-5)"
            defaultValue={user.rating}
            required
            
          />
        </div>

        
        <div>
          <label className="form-control font-medium mb-1">Customization</label>
          <input
            type="text"
            name="customization"                       
            className="w-full border rounded px-3 py-2"
            placeholder="Enter customization details"
            defaultValue={user.customization}
            required
          />
        </div>

      
        <div>
          <label className="form-control font-medium mb-1">Processing Time</label>
          <input
            type="text"
            name="processingTime"                      
            className="w-full border rounded px-3 py-2"
            placeholder="Enter processing/delivery time"
            defaultValue={user.processingTime}
            required
          />
        </div>

      
        <div>
          <label className="form-control font-medium mb-1">Stock Status</label>
          <input
            type="number"
            name="stockStatus"                     
            className="w-full border rounded px-3 py-2"
            placeholder="Enter available quantity"
            defaultValue={user.stockStatus}
            required
          />
        </div>

        {/* User Email (Read-only) */}
        <div>
          <label className="form-control font-medium mb-1">User Email</label>
          <input
            type="email"
            name="userEmail"   
            value={authUser?.email}    
            readOnly
            className="w-full border rounded px-3 py-2 bg-gray-200 cursor-not-allowed"
          />
        </div>

        {/* User Name (Read-only) */}
        <div>
          <label className="form-control font-medium mb-1">User Name</label>
          <input
            type="text"
            name="userName"  
            value={authUser?.displayName}          
            readOnly
            className="w-full border rounded px-3 py-2 bg-gray-200 cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
         Update Item
        </button>
      </form>
    </div>
  );
};

export default Update;