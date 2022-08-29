import React from 'react';

const Mission = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-[448px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]  p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10'>
            <h1 className='text-3xl font-bold mt-10 text-center'>Mission and Vision</h1>
                <div>
                    <h1 className='text-xl font-bold mt-10'>Mission and Vision</h1>
                    <p className='mb-2'><span className='font-bold'>A mission</span> is a concise explanation of the organization's reason for existence. It describes the organization's purpose and its overall intention. The mission statement supports the vision and serves to communicate purpose and direction to employees, customers, vendors and other stakeholders..</p>
                    <p><span className='font-bold'>A vision</span> looks forward and creates a mental image of the ideal state that the organization wishes to achieve. It is inspirational and aspirational and should challenge employees.</p>
                </div>
                <div>
                    <h1 className='text-xl font-bold mt-10'>How Mission and Vision Statements work:</h1>
                    <p>Typically, senior managers will write the company's overall Mission and Vision Statements. Other managers at different levels may write statements for their particular divisions or business units. The development process requires managers to:
                    </p>
                    <ul class="list-decimal inside p-10">
                        <li>Clearly identify the corporate culture, values, strategy and view of the future by interviewing employees, suppliers and customers</li>
                        <li>Address the commitment the firm has to its key stakeholders, including customers, employees, shareholders and communities Ensure that the objectives are measurable, the approach is actionable and the vision is achievable</li>
                        <li>Communicate the message in clear, simple and precise language Develop buy-in and support throughout the organization</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Mission;