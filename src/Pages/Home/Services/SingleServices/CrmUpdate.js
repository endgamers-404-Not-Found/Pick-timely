import React from 'react';

const CrmUpdate = () => {

    const myStyle = {
        width: 600,
    }


    return (
        <div>
            <div class="hero mt-20">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img style={myStyle} src="https://i.ibb.co/YXbCGn7/crm.jpg" class="w-full rounded-lg shadow-2xl" alt="" />
                    <div className="w-96 mx-10">
                        <h1 class="text-5xl font-bold">Update your CRM</h1>
                        <p class="py-6">Keep track of your appointments and plan for follow-up from your CRM. Use our built-in integration with Picktimely CRM or connect to another CRM with PickTimely Flow.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrmUpdate;