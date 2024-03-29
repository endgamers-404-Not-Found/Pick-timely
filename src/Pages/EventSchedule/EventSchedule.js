import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useNavigate } from 'react-router-dom';

// import defaultImage from '../../assets/profile.png';



import auth from '../../firebase.init';
import Spinner from '../../SharedComponents/Spinner';



const EventSchedule = () => {
    const [user, loading] = useAuthState(auth);
    const [hosts, setHosts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {


        fetch(`https://pick-timely-server.onrender.com/hoster/${user?.email}`)

            .then(res => res.json())
            .then(data => {
                setHosts(data);
            })

    }, [user]);

    const handleCreateEvent = (id) => {
        navigate(`/dashboard/createEvent/`);
    }

    const handleHost = (id) => {
        navigate(`/dashboard/eventschedule/${id}`)
        // console.log(id);
    }

    if (loading || !hosts) {
        return <Spinner></Spinner>
    }

    return (
        <div className='p-10 border'>
            <div className='flex justify-start gap-10 mt-5 flex-col lg:flex-row'>
                <h1 className='text-3xl font-bold'>PickTimely</h1>
                <button onClick={() => handleCreateEvent(user?.uid)} className='btn btn-success'>+ Create Host</button>
            </div>
            <div className="divider"></div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    hosts?.slice()?.reverse()?.map(host =>
                        <div key={host?._id} className="card  shadow-2xl shadow-black">
                            <img className='w-40 mx-auto rounded-full' src={host?.img} alt='' />
                            <h1 className='text-xl font-bold text-center'>Host</h1>
                            <h1 className='text-2xl font-bold text-center'>{user?.displayName}</h1>
                            <div className="card-body">
                                <h2 className="card-title">{host?.duration}</h2>
                                <p>{host?.eventType}</p>
                                <div className="card-actions justify-center">
                                    <button onClick={() => handleHost(host?._id)} className="btn btn-primary">Arrange Meeting</button>
                                </div>

                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default EventSchedule;