import React, { useEffect, useState } from 'react';
import ModalDetails from './ModalDetails';

const FindSchedule = () => {

    const [schedules, setSchedules] = useState([]);
    const [meeting, setMeeting] = useState(null);

    useEffect(()=>{
        const meetingData = async() =>{
            const res = await fetch('http://localhost:5000/schedule');
            const data = await res.json();
            setSchedules(data);
        }
        meetingData();
    }, []);

    return (
        <div className='mt-5'>
            <div className='flex justify-between gap-5 mt-5 mb-2 w-[60%] lg:w-[80%]'>
                    <div class="form-control">
                        <div class="input-group">
                            <button class="btn">Host</button>
                            <select class="select select-bordered">
                                <option value='All'>All</option>
                                <option value='Hamid'>Hamid</option>
                                <option value='Meherab'>Meherab</option>
                            </select>
                            
                        </div>
                    </div>
                   
                    <div class="form-control">
                        <div class="input-group">
                            <button class="btn">Event Type</button>
                            <select class="select select-bordered">
                                <option value='All'>All</option>
                                <option value='Hamid'>Hamid</option>
                                <option value='Meherab'>Meherab</option>
                            </select>
                            
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="input-group">
                            <input type="text" placeholder='search' className='border' />
                            <button class="btn">search</button>
                            
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
            <table class="table w-[60%] lg:w-[80%] border">
                    
                    <thead>
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    

                    {
                        schedules?.map((schedule, index)=> <tr key={schedule._id}>
                            <th>{index + 1}</th>
                            <td>{schedule.dateFormat}</td>
                            <td>{schedule.timeSlot}</td>
                            <td>{schedule.name}</td>
                            <td>
                                <label 
                                for="my-meeting" 
                                class="btn btn-sm"
                                onClick={()=>setMeeting(schedule)}
                                >see details</label> 
                               
                                </td>
                        </tr>)
                    }
                    
                
                    </tbody>
                </table>
            {meeting && <ModalDetails meeting={meeting}></ModalDetails>}
            </div>
        </div>
    );
};

export default FindSchedule;