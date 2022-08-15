import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import defaultImage from '../../assets/profile.png';
=======
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> d7b928cd6d23c04b575ac3999acac74d07381d9d
import auth from '../../firebase.init';
import Spinner from '../../SharedComponents/Spinner';



const EventSchedule = () => {
    const [user,loading] = useAuthState(auth);
    const [hosts, setHosts] = useState('');
    const navigate = useNavigate();
    console.log(user);

    useEffect(()=>{
        const meetingData = async () =>{
            const res = await fetch(`https://pick-timely.herokuapp.com/hoster/${user?.email}`);

            const data = await res.json();
            console.log(data)
            setHosts(data);
        }
        meetingData();
    }, [user]);

    const handleCreateEvent = (id) => {
        navigate(`/dashboard/createEvent`);
    }

    const handleHost = (id) =>{
<<<<<<< HEAD
        navigate(`/eventSchedule/${id}`);
=======

        navigate(`/arrangeMeeting/${id}`)
        console.log(id);

>>>>>>> d7b928cd6d23c04b575ac3999acac74d07381d9d
    }
    if(loading|| !hosts){
        return <Spinner></Spinner>
    }

    return (
        <div className='p-10 border'>
            <div className='flex justify-start gap-10 mt-5 flex-col lg:flex-row'>
                <h1 className='text-3xl font-bold'>PickTimely</h1>
                <button onClick={()=>handleCreateEvent(user?.uid)} className='btn btn-success'>+ Create Event Type</button>
            </div>
                <div className="divider"></div> 

            <div className='mt-10 mb-5'>
                <div className="form-control">
                    <div className="input-group">
                        <button className="btn">Host Filter</button>
                        <select className="select select-bordered  bg-gray-500 text-white">
                            <option value='All'>All</option>
                            <option value='Hamid'>Hamid</option>
                            <option value='Meherab'>Meherab</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
<<<<<<< HEAD
                    hosts?.map(host => <div host={host} key={host._id} className="card bg-base-100 shadow-xl">
                    <img className='w-40 h-40 mx-auto rounded-full' src={host.img ? host.img : defaultImage} alt='' />
=======
                    hosts?.map(host => <div key={host._id} className="card  shadow-2xl shadow-black">
                    <img className='w-40 mx-auto rounded-full' src={host.img} alt='' />
>>>>>>> d7b928cd6d23c04b575ac3999acac74d07381d9d
                    <h1 className='text-xl font-bold text-center'>Host</h1>
                    <h1 className='text-2xl font-bold text-center'>{host.hoster}</h1>
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