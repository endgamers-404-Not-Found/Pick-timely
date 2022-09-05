import React from 'react';

const TwoWayCalendar = () => {
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">

                <img
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-offset='400'
                    className='lg:w-[500px] w-[300px] rounded-lg shadow-2xl' src="https://i.ibb.co/jH6BHYc/calendar.png" alt="" />
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
    );
};

export default TwoWayCalendar;