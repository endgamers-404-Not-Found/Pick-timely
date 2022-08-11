import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spinner from '../../../SharedComponents/Spinner';

const EventSchedule = () => {
    const [user,loading] = useAuthState(auth)
    const [hosts, setHosts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const meetingData = async () =>{
            const res = await fetch(`https://pick-timely.herokuapp.com/hoster/${user?.email}`);
            const data = await res.json();
            console.log(data)
            setHosts(data);
        }
        meetingData();
    }, [user]);

    const handleHost = (id) =>{
        navigate(`${id}`)
        // console.log(id);

    }
    if(loading|| !hosts){
        return <Spinner></Spinner>
    }

    return (
        <div className='p-10 border'>
            <div className='flex justify-start gap-10 mt-5 flex-col lg:flex-row'>
                <h1 className='text-3xl font-bold'>PickTimely</h1>
                <Link to='/dashboard/createEvent' className='btn btn-success'>+ Create Event Type</Link>
            </div>
                <div className="divider"></div> 

            <div className='mt-10 mb-5'>
                <div className="form-control">
                    <div className="input-group">
                        <button className="btn">Host Filter</button>
                        <select className="select select-bordered">
                            <option value='All'>All</option>
                            <option value='Hamid'>Hamid</option>
                            <option value='Meherab'>Meherab</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    hosts?.map(host => <div host={host} key={host._id} className="card bg-base-100 shadow-xl">
                    <img className='w-40 mx-auto rounded-full' src={host.img} alt='' />
                    <h1 className='text-xl font-bold text-center'>Host</h1>
                    <h1 className='text-2xl font-bold text-center'>{user?.displayName}</h1>
                    <div className="card-body">
                        <h2 className="card-title">{host.duration}</h2>
                        <p>{host.eventType}</p>
                        <div className="card-actions justify-center">
                        <button onClick={()=>handleHost(host._id)} className="btn btn-primary">view page</button>
                        </div>
                    </div>
                </div>)
                }
                
            </div>
        </div>
    );
};

export default EventSchedule;