import React from 'react';

const CalendarServices = () => {

    const myStyle = {
        width: 600,
    }

    return (
        <div>
            <div className="hero mt-20 p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img style={myStyle} src="https://i.ibb.co/jH6BHYc/calendar.png" className="w-full rounded-lg shadow-2xl" alt="" />
                    <div className="w-96 mx-10">
                        <h1 className="text-5xl font-bold">wo-way calendar sync</h1>
                        <p className="py-6">Connect your team's calendars to Zoho Bookings. Avoid double-booking and increase efficiency. See your schedule for the day, week, and month on our calendar dashboard.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarServices;