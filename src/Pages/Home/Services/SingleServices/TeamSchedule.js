import React from 'react';

const TeamSchedule = () => {

    

    return (
        <div>
            <div className="hero  lg:p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div
                    data-aos='fade-left'
                    data-aos-duration='1000'
                    data-aos-offset='400'
                    className="lg:w-96 lg:mx-10">
                        <h1 className="text-4xl font-bold">Team scheduling</h1>
                        <p className="py-6">Share pooled availability with customers on the booking page. Allow customers to choose a staff member or opt for using our routing algorithms to allocate appointments.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <img
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-offset='400'
                    className='lg:w-[500px] w-[300px] rounded-lg shadow-2xl' src="https://i.ibb.co/FzXYgMT/team.jpg"  alt="" />
                </div>
            </div>
        </div>
    );
};

export default TeamSchedule;