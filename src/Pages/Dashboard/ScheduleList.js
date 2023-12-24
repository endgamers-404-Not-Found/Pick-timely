import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Home/AppointmentScheduling/CustomLink';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Upcoming from './ScheduleMenu/Upcoming';
import PastSchedule from './ScheduleMenu/PastSchedule';
import FindSchedule from './ScheduleMenu/FindSchedule';

const ScheduleList = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className='p-5 '>
            <h1 className='text-4xl font-bold mt-5 mb-5'>My meetings</h1>
            {/*             
            <div className='mt-5'>
                <ul className="menu md:menu-horizontal gap-3 p-0">
                    <li><CustomLink className='' to='upcoming'>UpComing</CustomLink></li>
                    <li><CustomLink className='' to='pastschedule'>Past</CustomLink></li>
                    <li><CustomLink className='' to='findschedule'>Find a booking</CustomLink></li>
                </ul>
                
                <Outlet></Outlet>
            </div> */}

            <div className=' mb-5'>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Upcoming" sx={{ color: 'gray' }} />
                    <Tab label="Past Schedule" sx={{ color: 'gray' }} />
                    <Tab label="Find Schedule" sx={{ color: 'gray' }} />
                </Tabs>
            </div>
            {
                value === 0 ? <Upcoming /> :
                    value === 1 ? <PastSchedule /> :
                        value === 2 && <FindSchedule />
            }

        </div>
    );
};

export default ScheduleList;