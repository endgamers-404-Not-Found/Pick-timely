import { useQuery } from '@tanstack/react-query';
import { isToday } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../../SharedComponents/Spinner';
import ModalDetails from './ModalDetails';
import ScheduleEditModal from './ScheduleEditModal';

const Upcoming = ({dateFormat}) => {

    const [schedules, setSchedules] = useState([]);

    
    
    const [meeting, setMeeting] = useState({});
 

    /* const { data:schedules, isLoading, refetch} = useQuery(['schedule'], ()=> fetch('http://localhost:5000/schedule').then(res => res.json())
 
    ); */

    /*     if(isLoading){
            return <Spinner></Spinner>
        } */

    useEffect(() => {
        const meetingData = async () => {
            const res = await fetch('http://localhost:5000/schedule');
            const data = await res.json();
            setSchedules(data);
       

        }
        meetingData();
    }, []);

  const newDate=new Date()

    
    const dateWise = schedules.filter((schedule) => {
        return schedule.dateFormat === "Aug 7, 2022"   
    });
    console.log(dateWise)


    const handleDeleteSchedule = (id) => {
        const confirmDelete = window.confirm('Are you want to delete this doctor?');
        if (confirmDelete) {
            fetch(`https://pick-timely.herokuapp.com/schedule/${id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.deletedCount) {
                        toast(`Schedule is deleted`);

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
                          dateWise.map((schedule, index) => <tr key={schedule._id}>
                                <th>{index + 1}</th>
                                <td>{schedule.dateFormat} <br /> {schedule.timeSlot}</td>

                                <td>{schedule.name}</td>
                                <td>{schedule.email}</td>
                                <td>
                                    <label
                                        htmlFor="my-    "
                                        className="btn btn-sm btn-success"
                                        onClick={() => setMeeting(schedule)}
                                    >see details</label>
                                    <label
                                        htmlFor="meeting-reschedule"
                                        className="btn btn-sm btn-info mx-3"
                                        onClick={() => setMeeting(schedule)}
                                    >reschedule</label>
                                    <button onClick={() => handleDeleteSchedule(schedule._id)} className='btn btn-sm btn-warning'>Cancel</button>
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