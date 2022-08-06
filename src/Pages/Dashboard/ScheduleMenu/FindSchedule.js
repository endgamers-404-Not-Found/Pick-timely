import React, { useEffect, useState } from 'react';
import ModalDetails from './ModalDetails';

const FindSchedule = () => {

    const [schedules, setSchedules] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const [meeting, setMeeting] = useState(null);

    useEffect(()=>{
        const meetingData = async() =>{
            const res = await fetch('https://pick-timely.herokuapp.com/schedule');
            const data = await res.json();
            setSchedules(data);
            setSearchText(data);
        }
        meetingData();
    }, []);

    const searchHandle = (event) =>{
        const searchData = event.target.value;
        const filtered = schedules.filter(schedule => schedule.name.toLowerCase().includes(searchData));
        setSearchText(filtered);

    }

    return (
        <div className='mt-5'>
            <h1>Schedule List Total: {searchText?.length}</h1>
            <div className='flex justify-between gap-5 mt-5 mb-2 w-[60%] lg:w-[80%]'>
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
                    <table className="table w-[60%] lg:w-[80%] border">
                            
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
                            searchText?.map((schedule, index)=> <tr key={schedule._id}>
                                <th>{index + 1}</th>
                                <td>{schedule.dateFormat}</td>
                                <td>{schedule.timeSlot}</td>
                                <td>{schedule.name}</td>
                                <td>
                                    <label 
                                    htmlFor="my-meeting" 
                                    className="btn btn-sm"
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