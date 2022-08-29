import React from 'react';
import { useAppointmentScheduling } from '../../../Hooks/useAppointmentScheduling';
import SchedulingItem from './SchedulingItem';

const Productive = () => {
    const [data]=useAppointmentScheduling();
    return (
        <div className='flex justify-center'>
            <div className='grid md:grid-cols-3 sm:grid-cols-1'>
                {
                    data.slice(0,3).map((item,index) => 
                    <SchedulingItem 
                    key={index}
                    item={item}
                    ></SchedulingItem>)
                }
            </div>
        </div>
    );
};

export default Productive;