import React from 'react'

function MobileApps() {
    return (
        <div className='my-10 lg:h-[500px] bg-[#E2DFDF] flex justify-evenly lg:pt-32'>
            <div className='w-4/12 lg:pt-16'>
                <h1 className='text-3xl font-bold mb-4'>Download Our Mobile Application</h1>
                <p>Download our mobile apps and view all your upcoming, pending, and completed bookings from your phone. Available for the admin and the whole team.</p>
            </div>
            <div className='flex w-4/12'>
                <img className='h-72' src="https://i.ibb.co/Wfq9ghL/zbookings-mob-1-1.png" alt=""/>
                <img className='h-72' src="https://i.ibb.co/7Sx34bh/zbookings-mob-2-1.png" alt=""/>
            </div>
        </div>
    )
}

export default MobileApps;
