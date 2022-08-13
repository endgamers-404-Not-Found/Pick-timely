import React from 'react';

const TeamSchedule = ({theme}) => {

    console.log(theme)
    

    return (
        <div>
            <div className="hero bg-base-200 lg:p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="lg:w-96 lg:mx-10">
                        <h1 className="text-4xl font-bold">Team scheduling</h1>
                        <p className="py-6">Share pooled availability with customers on the booking page. Allow customers to choose a staff member or opt for using our routing algorithms to allocate appointments.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <img className='lg:w-[500px] w-[300px] rounded-lg shadow-2xl' src="https://i.ibb.co/FzXYgMT/team.jpg"  alt="" />
                </div>
            </div>
        </div>
    );
};

export default TeamSchedule;