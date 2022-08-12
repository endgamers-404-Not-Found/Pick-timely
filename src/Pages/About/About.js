import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Home/AppointmentScheduling/CustomLink';

const About = () => {
   
    return (
        <div className='menu  py-6 w-full font-thin'>
            <h2 className='text-center font-bold text-5xl mb-5'>About Us</h2>
            <nav className='w-2/4 font-semibold text-xl mx-auto flex justify-center mb-8 '>
                <CustomLink to={'aboutPickTimely'}>About pick timely</CustomLink>
                <CustomLink className='mx-10' to={'developers'}>Developers</CustomLink>
            </nav>
            <Outlet />
        </div>
    );
};

export default About;