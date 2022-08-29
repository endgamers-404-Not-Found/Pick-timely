import React from 'react';
import {Link} from 'react-router-dom';

const FreeTail = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[#d9dfe9]">
                <div className=" "></div>
                <div className="">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"> Try Pictimely free</h1>
                        <p className="mb-5">After your 14-day trial of our Teams plan, enjoy the Free version of Pictimely – forever..</p>
                        <Link to='/dashboard'><button  className="btn btn-button">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeTail;