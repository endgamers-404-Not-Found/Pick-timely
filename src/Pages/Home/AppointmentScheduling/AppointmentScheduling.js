import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AppointmentScheduling = () => {
    return (
        <div className='menu px-16 py-6 w-full '>
            <h2 className='text-center font-bold text-4xl mb-5'>Appointment scheduling</h2>
            <nav className='w-2/4 font-semibold mx-auto flex justify-center mb-5'>
                   <Link to={'productive'}>Productive</Link>
                   <Link className='mx-10' to={'professional'}>Professional</Link>
                   <Link to={'painless'}>Painless</Link>
            </nav> 
            <Outlet/>   
        </div>
    );
};

export default AppointmentScheduling;