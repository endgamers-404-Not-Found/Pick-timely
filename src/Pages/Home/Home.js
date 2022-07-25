import React from 'react'

import Banner from './Banner/Banner'
import AppointmentScheduling from './AppointmentScheduling/AppointmentScheduling'
import Services from './Services/Services'
import Packages from './Packages/Packages'
import MobileApps from './MobileApps/MobileApps'
import FreeTrail from './FreeTail'
import Reviews from './Review/Reviews'


function Home() {
    return (
        <div>
            <Banner />
            <AppointmentScheduling></AppointmentScheduling>
            <Services></Services>
            <Packages></Packages>
            <MobileApps></MobileApps>
            <Reviews></Reviews>
            <FreeTrail></FreeTrail>

            <FreeTrail></FreeTrail>
        </div>
    )
}

export default Home


