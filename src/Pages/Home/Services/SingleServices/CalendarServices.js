import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../../firebase.init';
import Spinner from '../../../../SharedComponents/Spinner';
import { Link } from "react-router-dom";


const CalendarServices = () => {
    const [user,loading]=useAuthState(auth)

    if(loading){
        return <Spinner/>
    }

    return (
     
            <div className="hero mt-20 lg:p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
\
                    <img className='lg:w-[500px] w-[300px] rounded-lg shadow-2xl'src="https://i.ibb.co/ZVTsHLb/calendar-icon-white-background-1308-84634.webp"  alt="" />
                    <div className="lg:w-96 lg:mx-10">
                    <h1 className="text-5xl font-bold">Pick Time from Calendar</h1>
                    <p className="py-6">You can choose your available time from the real calendar. And you can also choose time as your indeed.</p>
                    <Link to={user ? '/dashboard' :"/signIn"}><button className="btn btn-primary">Get Started</button></Link>

            <img
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-offset='400'
                    className='lg:w-[500px] w-[300px] rounded-lg shadow-2xl'src="https://i.ibb.co/jH6BHYc/calendar.png"  alt="" />
                    <div
                     data-aos='fade-right'
                     data-aos-duration='1000'
                     data-aos-offset='400'
                    className="lg:w-96 lg:mx-10">
                    <h1 className="text-5xl font-bold">Two-way calendar sync</h1>
                    <p className="py-6">Connect your team's calendars to Pick-timely Bookings. Avoid double-booking and increase efficiency. See your schedule for the day, week, and month on our calendar dashboard.</p>
                    <button className="btn btn-primary">Get Started</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarServices;