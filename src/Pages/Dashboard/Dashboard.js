import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    <li><Link className='font-medium' to='/dashboard'>My Profile</Link></li>
                    
                    <li><NavLink className='font-medium' to='/dashboard/users'>All User</NavLink></li>
                    {/* <li><NavLink className='font-medium' to='/dashboard/arrangemeeting'>Arrange New Meeting</NavLink></li> */}
                    <li><NavLink className='font-medium' to='/dashboard/scheduleList'>Schedule List</NavLink></li>
                    <li><NavLink className='font-medium' to='/dashboard/eventschedule'>Event schedule Type</NavLink></li>
                 
                   
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;