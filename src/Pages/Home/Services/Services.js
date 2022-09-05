import React from 'react';
import BookingPage from './SingleServices/BookingPage';
import CalendarServices from './SingleServices/CalendarServices';
import CrmUpdate from './SingleServices/CrmUpdate';
import PaymentSystem from './SingleServices/PaymentSystem';
import Remiders from './SingleServices/Remiders';
import TeamSchedule from './SingleServices/TeamSchedule';
import {motion} from 'framer-motion';
import TwoWayCalendar from './SingleServices/TwoWayCalendar';

const Services = () => {
    return (
        <div className='mt-10'>
            <div
            
            className='lg:w-96 mx-auto'>
                <h1
                data-aos='fade-down'
                data-aos-duration='1000'
                data-aos-delay='400'
                className='text-5xl text-center font-bold'>Easy scheduling</h1>
                <p
                data-aos='fade-down'
                data-aos-duration='1000'
                data-aos-delay='400'
                className='text-xl text-center mt-2'>for growth-oriented teams</p>
            </div>
            <div className="w-full">
                {/* <CalendarServices></CalendarServices> */}
                <CalendarServices />
                <TwoWayCalendar/>
                <TeamSchedule />
                <Remiders />
               <PaymentSystem />
            </div>
        </div>
    );
};

export default Services;