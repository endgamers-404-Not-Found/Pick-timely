import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../../SharedComponents/Spinner';
import ModalDetails from './ModalDetails';
import ScheduleEditModal from './ScheduleEditModal';

const Upcoming = () => {

    // const [schedules, setSchedules] = useState([]);
    const [meeting, setMeeting] = useState(null);
    const { data:schedules, isLoading, refetch} = useQuery(['schedule'], ()=> fetch('http://localhost:5000/schedule').then(res => res.json()));
    console.log(schedules)

    if(isLoading){
        return <Spinner></Spinner>
    }

    // useEffect(()=>{
    //     const meetingData = async() =>{
    //         const res = await fetch('http://localhost:5000/schedule');
    //         const data = await res.json();
    //         setSchedules(data);
    //     }
    //     meetingData();
    // }, []);
     

    const handleDeleteSchedule = (id) =>{
        const confirmDelete = window.confirm('Are you want to delete this doctor?');
        if(confirmDelete){
          fetch(`http://localhost:5000/schedule/${id}`, {
          method: "DELETE",
          headers:{
            'content-type' : 'application/json',
          }
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              toast(`Schedule is deleted`);
              refetch();
            }
          });
        }
      };

    return (
        <div className='mt-5'>
            <div className='flex gap-5 mt-5 mb-2 justify-between w-[60%] lg:w-[80%]'>
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
                </div>
            <div class="overflow-x-auto">
            <table class="table w-[60%] lg:w-[80%] border">
                    
                    <thead>
                    <tr>
                        <th></th>
                        <th>Date/Time</th>
                        
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    

                    {
                        schedules?.map((schedule, index)=> <tr key={schedule._id}>
                            <th>{index + 1}</th>
                            <td>{schedule.dateFormat} <br /> {schedule.timeSlot}</td>
                          
                            <td>{schedule.name}</td>
                            <td>
                                <label 
                                for="my-meeting" 
                                class="btn btn-sm btn-success"
                                onClick={()=>setMeeting(schedule)}
                                >see details</label> 
                                <label 
                                for="meeting-reschedule" 
                                class="btn btn-sm btn-info mx-3"
                                onClick={()=>setMeeting(schedule)}
                                >reschedule</label> 
                                <button onClick={()=>handleDeleteSchedule(schedule._id)} className='btn btn-sm btn-warning'>Cancel</button>
                                </td>
                        </tr>)
                    }
                    
                
                    </tbody>
                </table>
            {meeting && <ModalDetails setMeeting={setMeeting} meeting={meeting}></ModalDetails>}
            {meeting && <ScheduleEditModal setMeeting={setMeeting} meeting={meeting}></ScheduleEditModal>}
            </div>
        </div>
    );
};

export default Upcoming;