import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';

const BookingPage = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
    }, []);

    const myStyle = {
        width: 600,
    }

    return (
        <div>
            <div class="hero mt-20 p-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-left" style={myStyle} src="https://i.ibb.co/qRYRqVP/booking.png" class="w-full rounded-lg shadow-2xl" alt="" />
                    <div data-aos="fade-right"  className="w-96 mx-10">
                        <h1 class="text-5xl font-bold">Booking page</h1>
                        <p class="py-6">Choose from three types of booking pages: staff, service and workspace. Select a template that resonates with your brand. Embed the booking page on your website or map it to your domain.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;