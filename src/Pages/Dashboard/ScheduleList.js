import React from 'react';
import {  Outlet } from 'react-router-dom';
import CustomLink from '../Home/AppointmentScheduling/CustomLink';

const ScheduleList = () => {
    return (
        <div className='p-5 '>
            <h1 className='text-4xl font-bold mt-5 mb-5'>My meetings</h1>
            
            <div className='mt-5'>
                <ul className="menu md:menu-horizontal gap-3 p-0">
                    <li><CustomLink className='' to='upcoming'>UpComing</CustomLink></li>
                    <li><CustomLink className='' to='pastschedule'>Past</CustomLink></li>
                    <li><CustomLink className='' to='findschedule'>Find a booking</CustomLink></li>
                </ul>
                
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ScheduleList;