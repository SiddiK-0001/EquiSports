import React, { useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';

const AllEquipment = () => {
    const initialItems = useLoaderData();
    const [items, setItems] = useState(initialItems);
    const location = useLocation();

    const handleSort = () => {  
        const sortedItems = [...items].sort((a, b) => b.price - a.price);
        setItems(sortedItems);
    };
    return (
        <div>
            <div >
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>No.</th>
                            <th>Name</th>
                            <th className="hidden md:table-cell">Description</th>
                            <th className="hidden md:table-cell">Price</th>
                            <th >
                                <button onClick={handleSort} className='btn bg-[#71ff19b8] text-black rounded-3xl'>
                                Sort by price </button></th>
                        </tr>
                    </thead>
                    <tbody >

                    {items.map((item, index) => (
                            <tr key={index}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Equipment"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.itemName}</div>
                                            <div className="text-sm opacity-50">{item.categoryName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell">
                                    {item.description}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        Processing Time: {item.processingTime}
                                    </span>
                                </td>
                                <td className="hidden md:table-cell">${item.price}</td>
                                <th>
                                    <Link to={`/equi/${item._id}`} state={location.pathname}>
                                    <button className="btn bg-[#71ff19b8] btn-sm rounded-3xl">Details</button>
                                    </Link>
                                </th>
                            </tr>
                        ))}


                    </tbody>


                </table>

            </div>

        </div>
    );
};

export default AllEquipment;
