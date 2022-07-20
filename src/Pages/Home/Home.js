import React from 'react'
import FreeTail from './FreeTail'
import Banner from './Banner/Banner'
import AppointmentScheduling from './AppointmentScheduling/AppointmentScheduling'
import Packages from './Packages/Packages'
import MobileApps from './MobileApps/MobileApps'


function Home() {
    return (
        <div>
            <Banner />
            <AppointmentScheduling></AppointmentScheduling>
            <FreeTail></FreeTail>
            <Packages></Packages>
            <MobileApps></MobileApps>
            
        </div>
    )
}

export default Home
