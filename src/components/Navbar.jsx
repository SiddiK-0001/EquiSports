import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import sport from '../assets/physical.png'

const Navbar = () => {
    const { user, signOutUser, loading, setLoading } = useContext(Authcontext);

    const navigate = useNavigate()
    // console.log(user)

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-white"></span>
            </div>)
    }



    const handleOut = () => {
        signOutUser()
            .then(() => {
                setLoading(false)
            })

        navigate('/');


    }
    const links =
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all">All Equipment</NavLink>
            <NavLink to="/about">About Us</NavLink>
            {
                user &&
                <>
                    <NavLink to="/add">Add Equipment</NavLink>
                    <NavLink to="/my">My Equipments</NavLink>

                </>
            }
        </>
    return (
        <div className="text-white px-6">

            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>
                    <a className="font-bold text-xl md:text-3xl"><span className="text-[#69fe0f] ">Equi</span>Sports</a>
                    <img className="w-12 md:w-16" src={sport} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-3 text-lg menu-horizontal px-1">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex flex-col justify-end md:flex-row gap-2 items-center">
                                <div className=" btn h-10 btn-xs rounded-full bg-[#193806] shadow-lg border border-[#69fe0f] "
                                title={user?.displayName || "No Name"}>
                                    <img className="rounded-full w-7 h-7" src={user?.photoURL
                                    } alt="" />
                                    
                                </div>

                                {/* <div className="relative mr-2 flex flex-col md:flex-row gap-2 btn h-10 btn-sm rounded-full bg-[#193806] shadow-lg border border-[#69fe0f] group">
                                    <img className="rounded-full w-7 h-7" src={user?.photoURL} alt="" />
                                    
                                    <div className="absolute bottom-full hidden group-hover:block bg-black text-white text-xs  px-2 py-1">
                                        {user?.displayName || "No Name"}
                                    </div>
                                </div> */}
                                <button onClick={handleOut} className="btn btn-sm md:btn-md bg-[#69fe0f] text-lg border-none font-bold text-black rounded-3xl">Sign out</button>
                            </div>
                            :
                            <NavLink className="btn rounded-3xl border-none bg-[#69fe0f] text-lg font-bold text-black" to='/login'>Log in</NavLink>
                    }
                </div>
            </div>


        </div>
    );
};

export default Navbar;