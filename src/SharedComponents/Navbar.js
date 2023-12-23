import { signOut } from 'firebase/auth';
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMenu } from 'react-icons/ai';
import { MdSpaceDashboard } from 'react-icons/md';
import { Link, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import { useProfile } from '../Hooks/useProfile';
import defaultProfile from './../assets/profile.png';


function Header({ theme, toggleTheme }) {
    const { pathname } = useLocation()
    console.log(pathname)
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [user] = useAuthState(auth);
    const [profile] = useProfile();

    return (
        <div className='dark sticky top-0 z-40 shadow-xl'>
            <nav id={theme} className=" flex flex-wrap items-center justify-between px-2 py-3 ">
                <div data-testid="logoText" className="container px-4 mx-auto flex flex-wrap items-center justify-between">


                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            data-testid="logoText"

                            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase  "
                            to="/"
                        >
                            Pick Timely
                        </Link>
                        {pathname?.includes('/dashboard') &&
                            <label htmlFor="my-drawer-2" tabIndex="0" className="  lg:hidden">
                                <MdSpaceDashboard className="text-3xl mt-3 text-blue-500"></MdSpaceDashboard>
                            </label>
                        }


                        <button
                            className="  cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-blue-200 block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <AiOutlineMenu color="blue" />
                        </button>

                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:mb-[-8px]">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                                    to="/"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">Home</span>
                                </Link>
                            </li>






                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                                    to="/solutions"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">Solutions</span>
                                </Link>
                            </li>





                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                                    to="/pricing"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">Pricing</span>
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                                    to="/blog"
                                >
                                    <span className="ml-2">Blog</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                                    to="/contact"
                                >
                                    <span className="ml-2">Contact</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                                    to="/about"
                                >
                                    <span data-testid="aboutTest" className="ml-2">About</span>
                                </Link>
                            </li>



                            <li
                                className="nav-item">
                                {user ?
                                    // <button onClick={() => signOut(auth)} className="btn btn-xs btn-ghost mt-1 font-bold">log out</button>
                                    <div className=" lg:my-[-8px] dropdown dropdown-start lg:dropdown-end  ml-4">
                                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar online">
                                            <div className="w-10 rounded-full">
                                                {
                                                    profile?.photo ?
                                                        <img className='img-fluid' src={profile?.photo} alt='' />
                                                        :
                                                        <img src={defaultProfile} alt="" />

                                                }
                                            </div>
                                        </label>
                                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 z-40 shadow-2xl  rounded-box w-52 shadow-black">
                                            <li>
                                                <Link to='/dashboard' className="justify-between">
                                                    Profile
                                                    <span className="badge">Active Now</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <p className='justify-between'>Dark Mode
                                                    <input
                                                        onClick={toggleTheme} value={theme === "dark"}
                                                        type="checkbox" className="toggle" />
                                                </p>
                                            </li>
                                            <li>
                                                <Link to='/dashboard'>Dashboard</Link>
                                            </li>
                                            <li><button className='btn btn-primary text-white btn-sm' onClick={() => signOut(auth)}>Logout</button></li>
                                        </ul>
                                    </div>
                                    :
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug   hover:opacity-75"
                                        to="/signIn"
                                        onClick={() => setNavbarOpen(!navbarOpen)}
                                    >
                                        <span className="ml-2">Sign In</span>
                                    </Link>
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;