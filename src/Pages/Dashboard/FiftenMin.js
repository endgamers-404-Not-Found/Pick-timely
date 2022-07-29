import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaClock } from "react-icons/fa";
import { useParams } from 'react-router-dom';

import auth from '../../firebase.init';
import ConfirmSchedule from './ConfirmSchedule';

const FiftenMin = () => {
    const [user] = useAuthState(auth);
    const {hostId} = useParams();
    const [meeting, setMeeting] = useState({});
    const [selected, setSelected] = useState(new Date());
   
    
    

    useEffect(()=>{
        const getMeeting = async () =>{
            const res = await fetch(`http://localhost:5000/hoster/${hostId}`);
            const data = await res.json();
            setMeeting(data);
            
        }
        getMeeting();
    }, [hostId]);

    const dateFormat = format(selected, 'PP');
    

    return (

        <div className='my-10'>
            <div className='bg-slate-400'>
                <div className=' bg-slate-800 p-4'>
                    <h2 className='text-4xl text-center text-white font-bold'>{hostId} </h2>
                    <p className='text-4xl text-center text-white font-bold'>{meeting.eventTime}</p>
                </div>
                <div className='card card-compact h-95 shadow-xl grid lg:grid-cols-3 sm:grid-cols-1 p-20'>
                    <div className='border p-2'>
                        <img className='mask mask-circle w-40 mt-10' src={meeting.img} alt="" />
                        <p className='font-bold text-2xl'>Host: {user?.displayName}</p>
                        <p className='font-bold text-2xl'>{meeting.eventTime}</p>
                        <div className='flex items-center gap-3'>
                            <p className='text-xl'><FaClock ></FaClock></p>
                            <p className='text-xl font-bold'>{meeting.eventType}</p>
                        </div>

                    </div>
                    <div className='border p-5'>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            
                            />
                            <p className='text-3xl'>You have selected : {dateFormat}</p>
                       
                            
                    </div>
                    
                    <ConfirmSchedule hostId={hostId} dateFormat={dateFormat}></ConfirmSchedule>
                </div>

            </div>
            
            
        </div>
    );
};

export default FiftenMin;