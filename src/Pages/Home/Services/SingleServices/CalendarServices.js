import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../../firebase.init';
import Spinner from '../../../../SharedComponents/Spinner';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const CalendarServices = () => {
    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <Spinner />
    }

    return (
        <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, }}
        >
            <div className="hero mt-20 lg:p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='lg:w-[500px] w-[300px] rounded-lg shadow-2xl' src="https://i.ibb.co/ZVTsHLb/calendar-icon-white-background-1308-84634.webp" alt="" />
                    <div className="lg:w-96 lg:mx-10">
                        <h1 className="text-5xl font-bold">Pick Time from Calendar</h1>
                        <p className="py-6">You can choose your available time from the real calendar. And you can also choose time as your indeed.</p>
                        <Link to={user ? '/dashboard' : "/signIn"}><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CalendarServices;