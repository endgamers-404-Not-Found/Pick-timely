import React, { useEffect, useState } from 'react';
import ModalDetails from './ModalDetails';

const Upcoming = () => {

    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const scheduleData = async () => {
            const res = await fetch('https://pick-timely.herokuapp.com/schedule');
            const data = await res.json();
            setSchedules(data);
        }
        scheduleData();
    }, [])

    return (
        <div className='mt-5'>
            <div className='flex gap-5 mt-5 mb-2 flex-col lg:flex-row'>
                <div class="form-control">
                    <div class="input-group">
                        <button class="btn">Host</button>
                        <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>Hamid</option>
                            <option>Meherab</option>
                        </select>

                    </div>
                </div>
                <div class="form-control">
                    <div class="input-group">
                        <button class="btn">Status Active</button>
                        <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>Hamid</option>
                            <option>Meherab</option>
                        </select>

                    </div>
                </div>
                <div class="form-control">
                    <div class="input-group">
                        <button class="btn">Event Type</button>
                        <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>Hamid</option>
                            <option>Meherab</option>
                        </select>

                    </div>
                </div>
            </div>
            <div class="">
                <table class="w-full">

                    <thead className='border-b-2 border-gray-200 rounded-lg'>
                        <tr>
                            <th className="w-20"></th>
                            <th className='w-24 p-3 text-sm font-semibold tracking-wide'>Date</th>
                            <th className='w-30 p-3 text-sm font-semibold tracking-wide'>Time</th>
                            <th className='p-3 text-sm font-semibold tracking-wide'>Name</th>
                            <th className='w-24 p-3 text-sm font-semibold tracking-wide'>Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-500 ">
                        {
                            schedules?.map((schedule, index) => <tr key={schedule._id} className="bg-slate-50">
                                <th className="p-3 text-sm text-gray-700 ">{index + 1}</th>
                                <td className="p-3 text-sm text-gray-700">{schedule.dateFormat}</td>
                                <td className="p-3 text-sm text-gray-700">{schedule.timeSlot}</td>
                                <td className="p-3 text-sm text-gray-700">{schedule.name}</td>
                                <td className="p-3 text-sm text-gray-700"><label for="my-modal-3" className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-600 rounded-lg bg-opacity-40 shadow-lg">details</label> </td>
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