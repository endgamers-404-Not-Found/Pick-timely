import React from 'react';

const PaymentSystem = () => {
    const myStyle = {
        width: 600,
    }

    return (
        <div>
            <div class="hero bg-base-200 mb-20 p-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-96 mx-10">
                        <h1 class="text-5xl font-bold">Online payment</h1>
                        <p class="py-6">Collect payments ahead of your appointment and minimize losses due to no-shows. Avoid awkward payment follow-ups. You can collect a deposit or partial payment, too.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <img style={myStyle} src="https://i.ibb.co/kQKwKvT/payment.png" class="w-full rounded-lg shadow-2xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PaymentSystem;