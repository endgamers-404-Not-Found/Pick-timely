import React from 'react';

const TeamSchedule = () => {

    const myStyle = {
        width: 600,
    }

    return (
        <div>
            <div className="hero bg-base-200 p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-96 mx-10">
                        <h1 className="text-5xl font-bold">Team scheduling</h1>
                        <p className="py-6">Share pooled availability with customers on the booking page. Allow customers to choose a staff member or opt for using our routing algorithms to allocate appointments.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <img style={myStyle} src="https://i.ibb.co/FzXYgMT/team.jpg" className="w-full rounded-lg shadow-2xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TeamSchedule;