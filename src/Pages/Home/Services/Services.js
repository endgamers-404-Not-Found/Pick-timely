import React from 'react';
import BookingPage from './SingleServices/BookingPage';
import CalendarServices from './SingleServices/CalendarServices';
import CrmUpdate from './SingleServices/CrmUpdate';
import PaymentSystem from './SingleServices/PaymentSystem';
import Remiders from './SingleServices/Remiders';
import TeamSchedule from './SingleServices/TeamSchedule';

const Services = () => {
    return (
        <div>
            <div className="w-full">
                <CalendarServices></CalendarServices>
                <TeamSchedule></TeamSchedule>
                <CrmUpdate></CrmUpdate>
                <Remiders></Remiders>
                <BookingPage></BookingPage>
                <PaymentSystem></PaymentSystem>
                
            </div>
        </div>
    );
};

export default Services;