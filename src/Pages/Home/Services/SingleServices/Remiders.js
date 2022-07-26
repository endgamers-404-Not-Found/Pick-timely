import React from 'react';

const Remiders = () => {

    

    return (
        <div>
            <div className="hero sm:w-full bg-base-200 mt-20 p-2">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="lg:w-96 lg:mx-10">
                        <h1 className="text-5xl font-bold">Notifications and reminders</h1>
                        <p className="py-6">Send emails and SMSes to confirm and remind about appointments. Personalize emails with the customer name, the sender address, and the online meeting link.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <img className='lg:w-[500px] w-[300px] rounded-lg shadow-2xl' src="https://i.ibb.co/rfPp232/notification.jpg"  alt="" />
                </div>
            </div>
        </div>
    );
};

export default Remiders;