
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../../SharedComponents/Spinner';
import ModalDetails from './ModalDetails';
import ScheduleEditModal from './ScheduleEditModal';

const Upcoming = ({ dateFormat }) => {

    const [schedules, setSchedules] = useState([]);
    const [meeting, setMeeting] = useState({});
    


    useEffect(() => {
        const meetingData = async () => {
            const res = await fetch('http://localhost:5000/schedule');
            const data = await res.json();
            setSchedules(data);


        }
        meetingData();
    }, []);



    const dateWise = schedules.filter((schedule) => {
        return schedule.dateFormat === "Aug 6, 2022"
    });
    

    if(!meeting){
      return <Spinner />
    }


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
            <div className='flex gap-5 mt-5 mb-2 flex-col md:flex-row'>
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
               
                <div class="overflow-auto rounded-lg shadow hidden md:block">
                    <table class="w-full">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date/time</th>
                                <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            {
                                dateWise?.map((schedule, index) => <tr class="bg-white">
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span class="font-bold text-blue-500 hover:underline">{index + 1}</span>
                                    </td>

                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        {schedule.name}
                                    </td>

                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span
                                            class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{schedule.email}</span>
                                    </td>

                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{schedule.timeSlot}</td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap"> <label
                                        htmlFor="my-    "
                                        className="btn btn-sm btn-success"
                                        onClick={() => setMeeting(schedule)}
                                    >see details</label>
                                        <label
                                            htmlFor="meeting-reschedule"
                                            className="btn btn-sm btn-info mx-3"
                                            onClick={() => setMeeting(schedule)}
                                        >reschedule</label>
                                        <button onClick={() => handleDeleteSchedule(schedule._id)} className='btn btn-sm btn-warning'>Cancel</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {
                        dateWise?.map((schedule, index) => <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                            <div class="flex items-center space-x-2 text-sm">
                                <div>
                                    <span class="text-blue-500 font-bold hover:underline">{index + 1}</span>
                                </div>
                                <div>
                                    <span
                                        class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{schedule.timeSlot}</span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-700">
                                {schedule.name}
                            </div>
                            <div class="text-sm font-medium text-black">
                                {schedule.email}
                            </div>
                            <div class="text-gray-500">
                                <label
                                    htmlFor="my-    "
                                    className="btn btn-sm btn-success my-2"
                                    onClick={() => setMeeting(schedule)}
                                >see details</label>
                                <label
                                    htmlFor="meeting-reschedule"
                                    className="btn btn-sm btn-info mx-3"
                                    onClick={() => setMeeting(schedule)}
                                >reschedule</label>
                                <button onClick={() => handleDeleteSchedule(schedule._id)} className='btn btn-sm btn-warning'>Cancel</button>
                            </div>
                        </div>)
                    }
                </div>

                {meeting && <ModalDetails setMeeting={setMeeting} meeting={meeting}></ModalDetails>}
                {meeting && <ScheduleEditModal setMeeting={setMeeting} meeting={meeting}></ScheduleEditModal>}
            </div>
        </div>
    );
};

export default Upcoming;