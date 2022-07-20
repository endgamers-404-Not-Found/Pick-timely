import React from 'react'
import FreeTail from './FreeTail'
import Banner from './Banner/Banner'
import AppointmentScheduling from './AppointmentScheduling/AppointmentScheduling'


function Home() {
    return (
        <div>
            <h1>this is home page</h1>
            <FreeTail></FreeTail>
            <Banner />
            <AppointmentScheduling></AppointmentScheduling>
        </div>
    )
}

export default Home
