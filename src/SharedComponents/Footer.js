import React from 'react';
import { FaEnvelope, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SocialLink from './SocialLink';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='flex justify-center bg-primary-focus'>
        <div className='w-[448px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]  p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10  bg-primary-focus'>
            <footer className="footer p-10 grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 text-white">
                <div>
                    <span data-testid="picktimely" className='uppercase text-[#FCB500] text-xl font-bold'>picktimely</span>
                    
                    <div className='mt-5 text-[#FCB500] '>
                        <div className='flex justify-start items-center gap-1'>
                            <FaEnvelope /> 
                            <span>notfound404.picktimely@gmail.com</span>
                        </div>
                        <div className='flex justify-start items-center gap-1 py-3'>
                            <FaPhoneAlt /> 
                            <span>+8801585-449223</span>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <FaGlobe /> 
                            <span>https://pick-timely.web.app/</span>
                        </div>
                        
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
            <footer className="footer p-10 border-t text-white grid grid-cols-1 md:grid-col-2 items-center">
                <div className="w-[100%] lg:w-[50%]">
                    <p>Copyright © {currentYear} - All right reserved by <span className='text-[#FCB500] font-bold'>PickTimely</span></p>
                </div>
                <div className="w-[100%] lg:w-[50%] flex justify-center md:justify-end lg:justify-end">
                    <SocialLink></SocialLink>
                </div>
            </footer>
        </div>
        </div>
    );
};

export default Footer;