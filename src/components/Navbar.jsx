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
            {
                user &&
                <>
                    <NavLink to="/add">Add Equipment</NavLink>
                    <NavLink to="/my">My Equipments</NavLink>

                </>
            }
        </>
    return (
        <div className="text-white py-3 ">

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
                            className="menu font-semibold menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>
                    <a className="font-bold text-5xl"><span className="text-[#69fe0f] ">Equi</span>Sports</a>
                    <img className="w-20" src={sport} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-3 font-semibold text-lg menu-horizontal px-1">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex flex-col md:flex-row gap-2 items-center">
                                <div className="mr-2 flex flex-col md:flex-row gap-2 btn h-10 btn-sm rounded-3xl bg-[#193806] shadow-lg border border-[#69fe0f]">
                                    <img className="rounded-full w-7 h-7" src={user?.photoURL
                                    } alt="" />
                                    <p className="text-slate-100 text-lg">{user?.displayName}</p>
                                </div>
                                {/* <a className=" mr-2">{user?.email}</a> */}
                                <button onClick={handleOut} className="btn bg-[#69fe0f] text-lg border-none font-bold text-black rounded-3xl">Sign out</button>
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