import React from 'react';

const PaymentSystem = () => {
    

    return (
        <div>
            <div className="hero py-20">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <div
                    data-aos='fade-left'
                    data-aos-duration='1000'
                    data-aos-offset='400'
                    className="lg:w-96  lg:mx-10 mx-0">
                        <h1 className="text-5xl font-bold">Online payment</h1>
                        <p className="py-6">Collect payments ahead of your appointment and minimize losses due to no-shows. Avoid awkward payment follow-ups. You can collect a deposit or partial payment, too.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <img
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-offset='400'
                    className='lg:w-[500px] w-[300px] rounded-lg shadow-2xl'  src="https://i.ibb.co/kQKwKvT/payment.png"   alt="" />
                </div>
            </div>
        </div>
    );
};

export default PaymentSystem;