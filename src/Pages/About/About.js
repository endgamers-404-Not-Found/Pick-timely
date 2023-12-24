import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Home/AppointmentScheduling/CustomLink';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import OurTeam from './redux-compo/OurTeam';
import Info from './AboutPickTimely';


const About = () => {

    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className='menu  py-6 w-full font-thin '>
            <h2 className='text-center font-bold  text-4xl md:text-5xl  mb-5'>About Us</h2>
            {/* <nav className='lg:w-2/4 w-10/12 font-semibold text-xl mx-auto flex justify-center mb-8 '>
                <CustomLink to={'aboutPickTimely'}>About pick timely</CustomLink>
                <CustomLink className='mx-10' to={'developers'}>Developers</CustomLink>
            </nav>
            <Outlet /> */}

            <div className='flex justify-center align-middle mb-5'>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="About Pick Timely" sx={{ color: 'gray' }} />
                    <Tab label="About Developers" sx={{ color: 'gray' }} />
                </Tabs>
            </div>
            {
                value === 0 ? <Info /> :
                    value === 1 && <OurTeam />
            }

        </div>
    );
};

export default About;