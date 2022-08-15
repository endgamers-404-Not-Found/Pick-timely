import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../../SharedComponents/Spinner';
import ModalDetails from './ModalDetails';

const Upcoming = () => {
    
    const [meeting, setMeeting] = useState({});
    const { data:schedules, isLoading, refetch} = useQuery(['schedules'], ()=> fetch('http://localhost:5000/schedule').then(res => res.json()));
    console.log(schedules);
    
    if(isLoading){
        return <Spinner></Spinner>
    }

    const handleDeleteSchedule = (id) =>{
        const confirmDelete = window.confirm('Are you want to delete this doctor?');
        if(confirmDelete){
          fetch(`https://pick-timely.herokuapp.com/schedule/${id}`, {
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
                    <div className="form-control">
                        <div className="input-group">
                            <button className="btn">Host</button>
                            <select className="select select-bordered">
                                <option value='All'>All</option>
                                <option value='Hamid'>Hamid</option>
                                <option value='Meherab'>Meherab</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="input-group">
                            <button className="btn">Event Type</button>
                            <select className="select select-bordered">
                                <option value='All'>All</option>
                                <option value='Hamid'>Hamid</option>
                                <option value='Meherab'>Meherab</option>
                            </select>
                            
                        </div>
                    </div>
                </div>
            <div className="overflow-x-auto">
            <table className="table w-[60%] lg:w-[80%] border">
                    
                    <thead>
                    <tr>
                        <th></th>
                        <th>Date/Time</th>
                        
                        <th>email</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    

                    {
                    schedules && schedules ? schedules?.map((schedule, index)=> <tr key={schedule._id}>
                            <th>{index + 1}</th>
                            <td>{schedule.dateFormat} <br /> {schedule.timeSlot}</td>
                          
                            <td> <label 
                                htmlFor="my-meeting" 
                                className="btn btn-sm btn-success"
                                onClick={()=>setMeeting(schedule)}
                                
                                >
                                {schedule.name ? schedule.name : "no name"}
                                </label> 
                                </td>
                            <td>{schedule.email}</td>
                            <td>
                                
                                <button onClick={()=>handleDeleteSchedule(schedule._id)} className='btn btn-sm btn-warning'>Delete</button>
                            </td>
                        </tr>)
                        :
                        'No data available'
                    }
                   
                    
                
                    </tbody>
                </table>
            {meeting && <ModalDetails setMeeting={setMeeting} meeting={meeting} refetch={refetch}></ModalDetails>}
           
            </div>
        </div>
    );
};

export default Upcoming;