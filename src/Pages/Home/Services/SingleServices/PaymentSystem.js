import React from 'react';

const PaymentSystem = () => {
    const myStyle = {
        width: 600,
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-96 mx-10">
                        <h1 className="text-5xl font-bold">Online payment</h1>
                        <p className="py-6">Collect payments ahead of your appointment and minimize losses due to no-shows. Avoid awkward payment follow-ups. You can collect a deposit or partial payment, too.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <img style={myStyle} src="https://i.ibb.co/kQKwKvT/payment.png" className="w-full rounded-lg shadow-2xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PaymentSystem;