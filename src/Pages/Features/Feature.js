import React from 'react';
import { Outlet } from 'react-router-dom';

import AppointmentScheduling from '../Home/AppointmentScheduling/AppointmentScheduling';


const Feature = () => {
    return (
        <div>
            <AppointmentScheduling/>
            <Outlet></Outlet>
        
        </div>
    );
};

export default Feature;