import React, { useEffect, useState } from 'react';
import Spinner from '../../../SharedComponents/Spinner';
import ModalDetails from './ModalDetails';

const FindSchedule = () => {

    const [schedules, setSchedules] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const [meeting, setMeeting] = useState(null);

    useEffect(() => {
        const meetingData = async () => {
            const res = await fetch('https://pick-timely.herokuapp.com/schedule');
            const data = await res.json();
            setSchedules(data);
            setSearchText(data);
        }
        meetingData();
    }, []);

    const searchHandle = (event) => {
        const searchData = event.target.value;
        const filtered = schedules.filter(schedule => schedule.name.toLowerCase().includes(searchData));
        setSearchText(filtered);
    }

    if (!searchText) {
        return <Spinner />
    }

    return (
        <div className='mt-5'>
            <h1>Schedule List Total: {searchText?.length}</h1>
            <div className='flex justify-between gap-5 mt-5 mb-2 flex-col md:flex-row'>
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
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" name='search' onChange={searchHandle} placeholder='search' className='border' />
                        <button className="btn">search</button>

                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">

                <div class="overflow-auto rounded-lg shadow hidden md:block">
                    <table class="w-full">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Time</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                                <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            {
                                searchText?.map((schedule, index) => <tr class="bg-white">
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span class="font-bold text-blue-500 hover:underline">{index + 1}</span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        {schedule.dateFormat}
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span
                                            class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{schedule.timeSlot}</span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{schedule.name}</td>

                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">  <label
                                        htmlFor="my-meeting"
                                        className="btn btn-sm"
                                        onClick={() => setMeeting(schedule)}
                                    >see details</label></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {
                        searchText?.map((schedule, index) => <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                            <div class="flex items-center space-x-2 text-sm">
                                <div>
                                    <span class="text-blue-500 font-bold hover:underline">{index + 1}</span>
                                </div>
                                <div class="text-gray-500">{schedule.dateFormat}</div>
                                <div>
                                    <span
                                        class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{schedule.timeSlot}</span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-700">
                                {schedule.name}
                            </div>
                            <div class="text-sm font-medium text-black">
                                <label
                                    htmlFor="my-meeting"
                                    className="btn btn-sm"
                                    onClick={() => setMeeting(schedule)}
                                >see details</label>
                            </div>
                        </div>)
                    }
                </div>

                {meeting && <ModalDetails meeting={meeting}></ModalDetails>}
            </div>
        </div>
    );
};

export default FindSchedule;