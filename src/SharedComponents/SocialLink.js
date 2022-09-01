import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SocialLink = () => {
    return (
        <div className='flex justify-start gap-3 mt-5'>
            <Link to='/'> <FaFacebook className='w-10 text-[#FCB500]  h-10 rounded-full p-1 border' /></Link>
            <Link to='/'> <FaInstagram className='w-10 text-[#FCB500]  h-10 rounded-full p-1 border' /></Link>
            <Link to='/'> <FaTwitter className='w-10 text-[#FCB500]  h-10 rounded-full p-1 border' /></Link>
            <Link to='/'> <FaLinkedinIn className='w-10 text-[#FCB500]  h-10 rounded-full p-1 border' /></Link>
        </div>
    );
};

export default SocialLink;