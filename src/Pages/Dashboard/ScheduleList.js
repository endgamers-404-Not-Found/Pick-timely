import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ScheduleList = () => {
    return (
        <div className='p-5 '>
            <h1 className='text-4xl font-bold mt-5 mb-5'>Interview Schedule</h1>
            
            <div className='mt-5'>
                <ul className="menu menu-horizontal gap-3 p-0">
                    <li><Link className='border' to='upcoming'>UpComing</Link></li>
                    <li><Link className='border' to='pastschedule'>Past</Link></li>
                    <li><Link className='border' to='findschedule'>Find a booking</Link></li>
                </ul>
                
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ScheduleList;