import React from 'react';
import { FaEnvelope, FaFacebook, FaGlobeAfrica, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='flex justify-center bg-primary-focus'>
            <div className='w-[448px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]  p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10  bg-primary-focus'>
                <footer className="footer p-10 grid grid-cols-2 md:gird-cols-4 lg:grid-cols-4 text-white">
                    <div>


                        <span data-testid="picktimely" className='uppercase text-[#FCB500] text-xl'>picktimely</span>


                        <div className='mt-5'>
                            <div className='flex justify-start items-center text-secondary gap-2'><FaEnvelope /> <span>help@pictimely.com</span></div>
                            <div className='flex justify-start items-center text-secondary gap-2'><FaPhoneAlt /> <span>+83609462756</span></div>
                            <div className='flex justify-start items-center text-secondary gap-2'><FaGlobeAfrica /> <span>wwww.pictimely.com</span></div>
                        </div>
                    </div>
                    <div>
                        <Link to='/branding' className="link link-hover">Branding</Link>
                        <Link to='/mission' className="link link-hover">Mission</Link>
                        <Link to='/partner' className="link link-hover">Partner</Link>
                        <Link to='/marketing' className="link link-hover">Marketing</Link>
                    </div>
                    <div>
                        <Link to='/about' className="link link-hover">About us</Link>
                        <Link to='/blog' className="link link-hover">Blogs</Link>
                        <Link to='/contact' className="link link-hover">Contact</Link>
                        <Link to='/job' className="link link-hover">Jobs</Link>
                    </div>
                    <div>
                        <Link to='/termCondition' className="link link-hover">Terms of use</Link>
                        <Link to='/privcyPolicy' className="link link-hover">Privacy policy</Link>
                        <Link to='/cookiePolicy' className="link link-hover">Cookie policy</Link>
                        <Link to='/developerContact' className="link link-hover">Developers contact</Link>
                    </div>

                </footer>
                <div className="flex justify-between items-center border-t p-10">
                    <div className="flex justify-between items-center">
                        <p className='text-white'>Copyright © {currentYear} - All right reserved by PickTimely  Pvt.Ltm.</p>
                    </div>
                    <div className="flex justify-start gap-2">
                            <Link to='/'> <FaFacebook className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                            <Link to='/'> <FaInstagram className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                            <Link to='/'> <FaTwitter className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                            <Link to='/'> <FaLinkedinIn className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;