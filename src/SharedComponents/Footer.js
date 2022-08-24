import React from 'react';
import { FaEnvelope, FaFacebook, FaGlobe, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter, FaWeebly } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className=' bg-primary-focus'>
            <footer className="footer p-10 grid grid-cols-2 md:gird-cols-4 lg:grid-cols-4 text-white">
                <div>


                    <span data-testid="picktimely" className='uppercase text-[#FCB500] text-xl'>picktimely</span>

                

                    <div className='mt-5'>
                    <p className="py-2 flex justify-start gap-3 items-center"><FaEnvelope className='text-secondary' />notfound404.picktimely@gmail.com</p>
                        <p className="py-2 flex justify-start gap-3 items-center"><FaPhoneAlt className='text-secondary' /> +08812213231211</p>
                        <Link to='https://pick-timely.web.app/' className="py-2 flex justify-start gap-3 items-center"><FaGlobe className='text-secondary' /> www.pick-timely.web.app</Link>
                       
                    </div>
                </div>
                <div>
                  
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                   
                    <Link to='/blog' className="link link-hover">Blogs</Link>
                    <Link to='/about' className="link link-hover">About us</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer">Terms of Use</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>

            </footer>
            <footer className="footer p-10 border-t text-white">
                <div className="items-center grid-flow-col">
                    <p>Copyright © {currentYear} - All right reserved by PickTimely  Pvt.Ltm.</p>
                </div>
                <div className='flex justify-start gap-3 '>
                        <Link to='/'> <FaFacebook className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                        <Link to='/'> <FaInstagram className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                        <Link to='/'> <FaTwitter className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                        <Link to='/'> <FaLinkedinIn className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                    
                    </div>
            </footer>
        </div>
    );
};

export default Footer;