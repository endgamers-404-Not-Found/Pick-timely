import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaClock } from "react-icons/fa";
import { useParams } from 'react-router-dom';

import auth from '../../firebase.init';
import ConfirmSchedule from '../Dashboard/ConfirmSchedule';

const FiftenMin = () => {
    const [user] = useAuthState(auth);
    const { hostId } = useParams();
    const [meeting, setMeeting] = useState({});
    const [selected, setSelected] = useState(new Date());
    const dateFormat = format(selected, 'P');

    useEffect(() => {
        fetch(`http://localhost:5000/arrangeMeeting/${hostId}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setMeeting(data)
        })
    }, [hostId]);






    return (

        <div className=''>
            <div className=' flex flex-col lg:flex-row'>


                <div className='h-95 shadow-xl grid lg:grid-cols-3 sm:grid-cols-1'>
                    <div className='border p-2 text-center'>
                        <img className='mask mask-circle w-40 mt-10 mx-auto' src={meeting.img} alt="" />
                        <p className='font-bold text-2xl'>Host: {user?.displayName}</p>
                        <p className='font-bold text-2xl'>{meeting.eventTime}</p>
                        <div className='flex items-center gap-3 justify-center'>
                            <p className='text-xl'><FaClock ></FaClock></p>
                            <p className='text-xl font-bold'>{meeting.eventType}</p>
                        </div>

                    </div>

                    <div className='border'>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}

                        />
                        <p className='text-3xl'>You have selected : {dateFormat}</p>


                    </div>
                    <div>
                        <ConfirmSchedule hostId={hostId} dateFormat={dateFormat}></ConfirmSchedule>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FiftenMin;