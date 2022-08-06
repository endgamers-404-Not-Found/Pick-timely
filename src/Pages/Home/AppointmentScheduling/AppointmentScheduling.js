import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const AppointmentScheduling = () => {
    return (
        <div className='menu  py-6 w-full '>
            <h2 className='text-center font-bold text-5xl mb-5'>Appointment scheduling</h2>
            <nav className='w-2/4 font-semibold text-xl mx-auto flex justify-center mb-8 '>
                   <CustomLink  to={'productive'}>Productive</CustomLink>
                   <CustomLink className='mx-10' to={'professional'}>Professional</CustomLink>
                   <CustomLink to={'painless'}>Painless</CustomLink>
            </nav> 
            <Outlet/>   
        </div>
    );
};

export default AppointmentScheduling;