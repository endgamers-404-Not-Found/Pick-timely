
import { signOut } from 'firebase/auth';
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
import auth from "../firebase.init";


function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [user, loading] = useAuthState(auth)



    return (
        <>

            <nav className=" sticky top-0 z-10 flex flex-wrap items-center justify-between px-2 py-3 bg-[#F1ECFF]">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                            to="/"
                        >
                            Pick-Timely
                        </Link>
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
                                >
                                    <span className="ml-2">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/features"
                                >
                                    <span className="ml-2">Features</span>
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/solutions"
                                >
                                    <span className="ml-2">Solutions</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/customers"
                                >
                                    <span className="ml-2">Customers</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                    to="/pricing"
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
                                    >
                                        <span className="ml-2">Sign In</span>
                                    </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;