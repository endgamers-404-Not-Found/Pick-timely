import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { FaClock, FaUsers } from "react-icons/fa";
import ConfirmSchedule from '../Dashboard/ConfirmSchedule';

const FiftenMin = ({ hostId }) => {
    const [meeting, setMeeting] = useState({});
    const [selected, setSelected] = useState(new Date());
    const dateFormat = format(selected, 'dd-MM-yyyy');

    useEffect(() => {
        fetch(`https://pick-timely-server.onrender.com/arrangeMeeting/${hostId}`)
            .then(res => res.json())
            .then(data => {

                setMeeting(data)
            })

    }, [hostId]);







    return (

        <div className=''>

            <div className=' flex flex-col lg:flex-row'>


                <div className='h-95 shadow-xl grid lg:grid-cols-3 sm:grid-cols-1'>

                    <div className='border p-2 text-center'>
                        <img className='mask mask-circle w-40 mt-10 mx-auto' src={meeting.img ? meeting.img : 'https://i.ibb.co/Cn5N30Q/people1.png'} alt="" />
                        <p className='font-bold text-2xl'>{meeting.hoster}</p>

                        <div className='flex items-center gap-3 justify-center'>
                            <p className='text-xl'><FaClock ></FaClock></p>
                            <p className='font-bold text-2xl'>{meeting.duration}</p>
                        </div>
                        <div className='flex items-center gap-3 justify-center'>
                            <p className='text-xl'><FaUsers ></FaUsers></p>
                            <p className='text-xl font-bold'>{meeting.eventType}</p>
                        </div>

                    </div>

                    <div className='border'>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}

                        />
                        <p className='text-xl font-bold text-center'>Selected Date: {dateFormat}</p>


                    </div>
                    <div>
                        <ConfirmSchedule meeting={meeting} hostId={hostId} dateFormat={dateFormat}></ConfirmSchedule>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FiftenMin;