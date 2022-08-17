import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const AppointmentScheduling = () => {
    return (
        <div className='menu lg:px-16 py-6 w-full '>
            <h2 className='text-center font-bold text-5xl mb-5'>Appointment scheduling</h2>
            <nav className='w-2/4 mx-auto text-xl flex justify-center mb-8 '>
                   <CustomLink active  to={'productive'}>Productive</CustomLink>
                   <CustomLink className='mx-4' to={'professional'}>Professional</CustomLink>
                   <CustomLink to={'painless'}>Painless</CustomLink>
            </nav> 
            <Outlet/>   
        </div>
    );
};

export default AppointmentScheduling;