import React from 'react';
import { useAppointmentScheduling } from '../../../Hooks/useAppointmentScheduling';
import SchedulingItem from './SchedulingItem';

const Professional = () => {
    const [data]=useAppointmentScheduling();
    return (
        <div className='flex justify-center'>
        <div className='grid md:grid-cols-3 sm:grid-cols-1'>
            {
                data.slice(6,12).map((item,index) => 
                <SchedulingItem 
                key={index}
                item={item}
                ></SchedulingItem>)
            }
        </div>
    </div>
    );
};

export default Professional;