import React from 'react';
import bannerImg from '../../../assets/banner.png'
import SharedButton from '../../../SharedComponents/SharedButton';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center h-screen bg-[#F1ECFF] ">
            <div className="md:w-[600px] lg:w-[700px] order-2 md:order-1 mb-10">

                <h1 className="font-bold text-4xl md:text-6xl text-center md:text-left mx-5">Online scheduler for offering the best consultations</h1>

                <p className="text-lg m-5 font-medium text-center md:text-left">Pick-Timely Bookings syncs your calendars while letting customers self-schedule and pay for appointments. Our user interface auto-customizes for your industry, meaning you feel right at home. Say hello to smart scheduling!</p>

                <div className="mx-5 text-center md:text-left">
                    <SharedButton>Sign Up for free</SharedButton>
                </div>

            </div>

            <div className="md:w-[600px] lg:w-[700px] order-1 md:order-2 mb-10">
                <img src={bannerImg} alt="bannerImg" />
            </div>
        </div>
    );
};

export default Banner;