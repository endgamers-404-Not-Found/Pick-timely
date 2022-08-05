import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spinner from '../../../SharedComponents/Spinner';

const HostList = () => {
    const [hosts, setHosts] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    useEffect(()=>{
        const meetingData = async () =>{
            const res = await fetch(`http://localhost:5000/hoster`);
            const data = await res.json();
            setHosts(data);
        }
        meetingData();
    }, [user]);

   const handleHost =() =>{
        // navigate('/')
    }

    const handleDelete = () => {
        console.log('delete')
    }
 
    if(!hosts){
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Duration</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        hosts?.map((host, index) =>  <tr key={host._id} index={index} host={host}>
                            <th>{index + 1}</th>
                            <td>{host.hoster}</td>
                            <td>{host.email}</td>
                            <td>{host.duration}</td>
                            <td>{host.eventType}</td>
                            <td>
                                <button onClick={handleHost} className='btn btn-sm mx-2'>see more</button>
                                <button onClick={handleDelete} className='btn btn-sm'>Delete</button>
                            </td>
                        </tr> )
                    }
                   
                    
            
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HostList;