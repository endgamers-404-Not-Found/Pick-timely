import React from 'react';

const Remiders = () => {

    const myStyle = {
        width: 600,
    }

    return (
        <div>
            <div class="hero bg-base-200 mt-20 p-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-96 mx-10">
                        <h1 class="text-5xl font-bold">Notifications and reminders</h1>
                        <p class="py-6">Send emails and SMSes to confirm and remind about appointments. Personalize emails with the customer name, the sender address, and the online meeting link.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <img style={myStyle} src="https://i.ibb.co/rfPp232/notification.jpg" class="w-full rounded-lg shadow-2xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Remiders;