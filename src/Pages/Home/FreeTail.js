import React from 'react';
import {Link} from 'react-router-dom';

const FreeTail = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Get started with a free 15-day trail</h1>
                        <p className="mb-5">Download our mobile apps and view all your upcoming, pending, \and completed bookings from your phone. Available for the admin and the whole team.</p>
                        <Link to='/dashboard'><button  className="btn btn-button">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeTail;