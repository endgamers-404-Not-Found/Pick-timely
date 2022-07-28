import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const EventSchedule = () => {
    const [user] = useAuthState(auth)
    const [hosts, setHosts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const meetingData = async () =>{
            const res = await fetch('http://localhost:5000/hoster');
            const data = await res.json();
            setHosts(data);
        }
        meetingData();
    }, []);

    const handleHost = (id) =>{
        navigate(`${id}`)
        console.log(id);

    }

    return (
        <div className='p-10 border'>
            <div className='flex justify-start gap-10 mt-5'>
                <h1 className='text-3xl font-bold'>PickTimely</h1>
                <Link to='/dashboard/createEvent' className='btn btn-success'>+ Create Event Type</Link>
            </div>
                <div class="divider"></div> 

            <div className='mt-10 mb-5'>
                <div class="form-control">
                    <div class="input-group">
                        <button class="btn">Host Filter</button>
                        <select class="select select-bordered">
                        <option disabled selected>All</option>
                        <option>T-shirts</option>
                        <option>Mugs</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    hosts?.map(host => <div host={host} key={host._id} class="card bg-base-100 shadow-xl">
                    <img className='w-12 mx-auto rounded-full' src={host.img} alt='' />
                    <h1 className='text-2xl font-bold text-center'>Host: {user?.displayName}</h1>
                    <div class="card-body">
                        <h2 class="card-title">{host.eventTime}</h2>
                        <p>{host.eventType}</p>
                        <div class="card-actions justify-center">
                        <button onClick={()=>handleHost(host._id)} class="btn btn-primary">view page</button>
                        </div>
                    </div>
                </div>)
                }
                
            </div>
        </div>
    );
};

export default EventSchedule;