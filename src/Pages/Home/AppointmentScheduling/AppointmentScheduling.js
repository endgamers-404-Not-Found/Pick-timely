import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';
import { motion } from 'framer-motion';

const AppointmentScheduling = () => {
    return (
        <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}

            className='menu lg:px-16 py-6 w-full '>
            <h2 className='text-center font-bold text-5xl mb-5'>Appointment scheduling</h2>
            <nav className='w-2/4 mx-auto text-xl flex justify-center mb-8 '>
                <CustomLink active to={'productive'}>Productive</CustomLink>
                <CustomLink className='mx-4' to={'professional'}>Professional</CustomLink>
                <CustomLink to={'painless'}>Painless</CustomLink>
            </nav>
            <Outlet />
        </motion.div>
    );
};

export default AppointmentScheduling;