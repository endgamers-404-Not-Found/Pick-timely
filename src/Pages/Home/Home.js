import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';



import AppointmentScheduling from './AppointmentScheduling/AppointmentScheduling';
import Banner from './Banner/Banner';
import FreeTrail from './FreeTail';
import MobileApps from './MobileApps/MobileApps';
import Packages from './Packages/Packages';
import ReviewProvider from './Review/ReviewProvider';
import Services from './Services/Services';


function Home({theme}) {
    return (
        <div className=''>
            
            <Banner  />
            <AppointmentScheduling></AppointmentScheduling>
            <Services></Services>
            <Packages></Packages>
            <MobileApps></MobileApps>
            <FreeTrail></FreeTrail>
            <ReviewProvider></ReviewProvider>
            <MessengerCustomerChat
                pageId="101404709353609"
                appId="589832299541074"
            />,
            



        </div>
    )
}

export default Home
