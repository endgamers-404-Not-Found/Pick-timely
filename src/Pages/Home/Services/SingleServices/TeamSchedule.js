import React from 'react';

const TeamSchedule = () => {

    const myStyle = {
        width: 600,
    }

    return (
        <div>
            <div class="hero bg-base-200 p-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-96 lg:mx-10">
                        <h1 class="text-5xl font-bold">Team scheduling</h1>
                        <p class="py-6">Share pooled availability with customers on the booking page. Allow customers to choose a staff member or opt for using our routing algorithms to allocate appointments.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <img style={myStyle} src="https://i.ibb.co/FzXYgMT/team.jpg" class="w-full rounded-lg shadow-2xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TeamSchedule;