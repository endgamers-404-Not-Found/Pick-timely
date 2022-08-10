
import { signOut } from 'firebase/auth';
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMenu } from 'react-icons/ai';
import { MdSpaceDashboard } from 'react-icons/md';
import { Link, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from '../Hooks/useAdmin';
import { themeChange } from 'theme-change'

function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const { pathname } = useLocation();
  
   

    return (
        <>

            <nav className=" sticky top-0 z-10 flex flex-wrap items-center justify-between  py-3 bg-gray-400">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                            to="/"
                        >
                            Pick-Timely
                        </Link>

                        <label htmlFor="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden">
                            <MdSpaceDashboard className="text-3xl text-red-400"></MdSpaceDashboard>
                        </label>


                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-red-200 block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <AiOutlineMenu color="red" />
                        </button>

                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/features"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">Features</span>
                                </Link>
                            </li>
                            {
                                user &&
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                        to="/dashboard"
                                        onClick={() => setNavbarOpen(!navbarOpen)}
                                    >
                                        <span className="ml-2">Dashboard</span>
                                    </Link>
                                </li>
                            }


                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/solutions"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">Solutions</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/ourTeam"
                                >
                                    <span className="ml-2">Our Team</span>
                                </Link>
                            </li>


                            {
                                admin &&
                                <li className="nav-item">
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                        to="/customers"
                                    >
                                        <span className="ml-2">Customers</span>
                                    </Link>
                                </li>
                            }

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/pricing"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">Pricing</span>
                                </Link>
                            </li>



                            <li className="nav-item">
                                {user ?
                                    <button onClick={() => signOut(auth)} className="btn btn-xs btn-ghost mt-1 font-bold">log out</button>
                                    :
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                        to="/signIn"
                                        onClick={() => setNavbarOpen(!navbarOpen)}
                                    >
                                        <span className="ml-2 ">Sign In</span>
                                    </Link>
                                }
                            </li>
                            <label class="swap swap-rotate">


                                <input 
                                onClick={()=>themeChange('dark,light,blue')}
                                type="checkbox" data-toggle-theme="dark,light" />


                                <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;