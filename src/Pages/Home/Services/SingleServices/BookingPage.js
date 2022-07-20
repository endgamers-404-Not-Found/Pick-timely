import React from 'react';

const BookingPage = () => {

    const myStyle = {
        width: 600,
    }

    return (
        <div>
            <div className="hero mt-20 p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img style={myStyle} src="https://i.ibb.co/qRYRqVP/booking.png" className="w-full rounded-lg shadow-2xl" alt="" />
                    <div className="w-96 mx-10">
                        <h1 className="text-5xl font-bold">Booking page</h1>
                        <p className="py-6">Choose from three types of booking pages: staff, service and workspace. Select a template that resonates with your brand. Embed the booking page on your website or map it to your domain.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;