import React from 'react'

function MobileApps() {
    return (
        <div className='mt-10  pl-4 lg:h-[500px] bg-[#E2DFDF] lg:flex lg:text-left text-center justify-evenly lg:pt-32'>
            <div className=' lg:w-4/12 w-9/12 lg:pt-16 text-center lg:text-left'>
                <h1 className='text-3xl font-bold mb-4'>Download Our Mobile Application</h1>
                <p>Download our mobile apps and view all your upcoming, pending, and completed bookings from your phone. Available for the admin and the whole team.</p>
            </div>
            <div className='flex lg:w-4/12 w-8/12'>
                <img className='h-72' src="https://i.ibb.co/Wfq9ghL/zbookings-mob-1-1.png" alt=""/>
                <img className='h-72' src="https://i.ibb.co/7Sx34bh/zbookings-mob-2-1.png" alt=""/>
            </div>
        </div>
    )
}

export default MobileApps;
