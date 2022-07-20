import React, { useEffect, useState } from 'react';
import SchedulingItem from './SchedulingItem';

const Productive = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch("appointmentScheduling.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='flex justify-center'>
            <div className='grid md:grid-cols-3 sm:grid-cols-1'>
                {
                    data.slice(0,6).map(item => 
                    <SchedulingItem 
                    key={data._id}
                    item={item}
                    ></SchedulingItem>)
                }
            </div>
        </div>
    );
};

export default Productive;