import React from 'react'


import AppointmentScheduling from './AppointmentScheduling/AppointmentScheduling'
import Banner from './Banner/Banner'
import FreeTrail from './FreeTail'
import MobileApps from './MobileApps/MobileApps'
import Packages from './Packages/Packages'
import Reviews from './Review/Reviews'
import Services from './Services/Services'


function Home() {
    return (
        <div className=''>
            <Banner />
            <AppointmentScheduling></AppointmentScheduling>
           <Services></Services>
             <Packages></Packages>
            <MobileApps></MobileApps>
            <FreeTrail></FreeTrail>
            <Reviews></Reviews> 
 
         
        </div>
    )
}

export default Home
