import React from 'react'

function MobileApps() {
    return (
        <div className='  pl-4 lg:h-[500px]  lg:flex lg:text-left text-center justify-evenly pt-12 lg:pt-32'>
            <div
                data-aos='fade-right'
                data-aos-offset='350'

                className=' lg:w-4/12 mx-10 sm:pt-5 lg:pt-16 text-center lg:text-left'>
                <h1 className=' text-4xl md:text-5xl  font-bold mb-4'>Download Our Mobile Application</h1>
                <p>Download our mobile apps and view all your upcoming, pending, and completed meetings from your phone. Available for the admin and the whole team.</p>
                <button className='btn btn-primary my-4'> Coming soon</button>
            </div>
            <div
                data-aos='fade-left'
                data-aos-offset='350'

                className='flex lg:w-4/12'>
                <img className='h-72' src="https://i.ibb.co/Wfq9ghL/zbookings-mob-1-1.png" alt="" />
                <img className='h-72' src="https://i.ibb.co/7Sx34bh/zbookings-mob-2-1.png" alt="" />
            </div>
        </div>
    )
}

export default MobileApps;
