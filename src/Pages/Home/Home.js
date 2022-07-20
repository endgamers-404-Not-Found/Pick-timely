import React from 'react'
import Banner from './Banner/Banner'
import AppointmentScheduling from './AppointmentScheduling/AppointmentScheduling'
import Packages from './Packages/Packages'
import MobileApps from './MobileApps/MobileApps'
import Services from './Services/Services'
import FreeTail from './FreeTail'


function Home() {
    return (
        <div>
            <Banner />
            <AppointmentScheduling></AppointmentScheduling>
            <Services></Services>
      <Packages></Packages>
      <MobileApps></MobileApps>
      <FreeTail></FreeTail>

        </div>
    )
}

export default Home
