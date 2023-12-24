import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Productive from './Productive';
import Professional from './Professional';
import Painless from './Painless';

const AppointmentScheduling = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className='menu lg:px-16 py-6 w-full '>
            <h2
                data-aos='fade-down'
                data-aos-delay='200'
                className='text-center font-bold text-4xl md:text-5xl mb-5'>Appointment scheduling</h2>

            <div className='flex justify-center align-middle mb-5'>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Productive" sx={{ color: 'gray' }} />
                    <Tab label="Professional" sx={{ color: 'gray' }} />
                    <Tab label="Painless" sx={{ color: 'gray' }} />
                </Tabs>
            </div>
            {
                value === 0 ? <Productive /> :
                    value === 1 ? <Professional /> :
                        value === 2 && <Painless />
            }



            {/* 
            <nav
                data-aos='fade-down'
                data-aos-delay='300'
                className='w-2/4 mx-auto  text-xl  flex justify-center mb-8 '>
                <CustomLink

                    to={'productive'}>Productive</CustomLink>
                <CustomLink className='mx-4' to={'professional'}>Professional</CustomLink>
                <CustomLink to={'painless'}>Painless</CustomLink>
            </nav>
            
            <Outlet /> */}
        </div>
    );
};

export default AppointmentScheduling;