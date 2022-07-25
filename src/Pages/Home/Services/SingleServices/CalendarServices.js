import React from 'react';

const CalendarServices = () => {

    const myStyle = {
        width: 600,
    }

    return (
        <div>
            <div class="hero mt-20 p-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img style={myStyle} src="https://i.ibb.co/jH6BHYc/calendar.png" class="w-full rounded-lg shadow-2xl" alt="" />
                    <div className="w-96 mx-10">
                    <h1 class="text-5xl font-bold">wo-way calendar sync</h1>
                    <p class="py-6">Connect your team's calendars to PickTimely Bookings. Avoid double-booking and increase efficiency. See your schedule for the day, week, and month on our calendar dashboard.</p>
                    <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarServices;