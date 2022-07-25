import React from 'react'

import Banner from './Banner/Banner'
import AppointmentScheduling from './AppointmentScheduling/AppointmentScheduling'
import Reviews from './Review/Reviews'
import Packages from './Packages/Packages'
import Services from './Services/Services'
import MobileApps from './MobileApps/MobileApps'
import FreeTrail from './FreeTail'

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

        </div>
    )
}

export default Home


