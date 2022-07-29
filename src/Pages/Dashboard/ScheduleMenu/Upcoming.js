import React, { useEffect, useState } from 'react';
import ModalDetails from './ModalDetails';

const Upcoming = () => {

    const [schedules, setSchedules] = useState([]);

    useEffect(()=>{
        const scheduleData = async() =>{
            const res = await fetch('http://localhost:5000/schedule');
            const data = await res.json();
            setSchedules(data);
        }
        scheduleData();
    }, [])

    return (
        <div className='mt-5'>
            <div className='flex gap-5 mt-5 mb-2'>
                    <div class="form-control">
                        <div class="input-group">
                            <button class="btn">Host</button>
                            <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>T-shirts</option>
                            <option>Mugs</option>
                            </select>
                            
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="input-group">
                            <button class="btn">Status Active</button>
                            <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>T-shirts</option>
                            <option>Mugs</option>
                            </select>
                            
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="input-group">
                            <button class="btn">Event Type</button>
                            <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>T-shirts</option>
                            <option>Mugs</option>
                            </select>
                            
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
                            <td><label for="my-modal-3" class="btn modal-button">see details</label> </td>
                        </tr>)
                    }
                    
                
                    </tbody>
                </table>
                <ModalDetails></ModalDetails>
            </div>
        </div>
    );
};

export default Upcoming;