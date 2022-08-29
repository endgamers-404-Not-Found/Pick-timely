import React from 'react';

const CrmUpdate = () => {

    


    return (
        <div>
            <div className="hero mt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='lg:w-[500px]  w-[300px] rounded-lg shadow-2xl' src="https://i.ibb.co/YXbCGn7/crm.jpg"  alt="" />
                    <div className="lg:w-96 mx-2">
                        <h1 className="text-5xl font-bold">Update your CRM</h1>
                        <p className="py-6">Keep track of your appointments and plan for follow-up from your CRM. Use our built-in integration with Picktimely CRM or connect to another CRM with PickTimely Flow.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrmUpdate;