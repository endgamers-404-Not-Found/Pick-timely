import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);


    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>

            </div>
            <div className="drawer-side border-r-4">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60  bg-yellow-50">

                    <li><Link className='font-medium' to='/dashboard'>My Profile</Link></li>



                    <li><NavLink className='font-medium' to='/dashboard/createEvent'>Host a meeting</NavLink></li>
                    <li><NavLink className='font-medium' to='/dashboard/eventschedule'>My Hosts</NavLink></li>
                    <li><NavLink className='font-medium' to='/dashboard/myMeetings'>My Meetings</NavLink></li>
                    {
                        admin &&
                        <>
                            <li><NavLink className='font-medium' to='/dashboard/users'>All User</NavLink></li>
                            <li><NavLink className='font-medium' to='/dashboard/hostList'>All Hosts </NavLink></li>
                            <li><NavLink className='font-medium' to='/dashboard/postBlog'>Post a blog</NavLink> </li>

                            <li><NavLink className='font-medium' to='/dashboard/graph'>Graph view</NavLink></li>

                        </>
                    }
                    


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;