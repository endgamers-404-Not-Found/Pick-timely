import React from 'react'
import AppointmentScheduling from './AppointmentScheduling/AppointmentScheduling'
import Banner from './Banner/Banner'
import FreeTail from './FreeTail'
import MobileApps from './MobileApps/MobileApps'
import Packages from './Packages/Packages'
import Services from './Services/Services'


function Home() {
    return (
        <div>
            <Banner />
            <Packages></Packages>
            <MobileApps></MobileApps>
            <FreeTail></FreeTail>
            <AppointmentScheduling></AppointmentScheduling>
            <Services></Services>
        </div>
    )
}

export default Home
