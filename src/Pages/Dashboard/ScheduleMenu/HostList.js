import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spinner from '../../../SharedComponents/Spinner';

const HostList = () => {
    const [hosts, setHosts] = useState([]);
    const navigate = useNavigate();
    const [user,loading] = useAuthState(auth);

  
    
    

    useEffect(() => {
        const meetingData = async () => {
            const res = await fetch(`http://localhost:5000/hoster?user=${user?.email}`);
            const data = await res.json();
            setHosts(data);
        }
        meetingData();
    }, [user]);

    if(loading){
        return <Spinner/>
    }

    console.log(user)
    const handleHost = () => {
        // navigate('/')
    }

    const handleDelete = () => {
        console.log('delete')
    }

    if (!hosts) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div class="overflow-x-auto">
                {/* <table class="table w-full">
                    
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
                </table> */}
                <div class="overflow-auto rounded-lg shadow hidden md:block">
                    <table class="w-full">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Duration</th>
                                <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">Type</th>
                                <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            {
                                hosts?.map((host, index) => <tr class="bg-white">
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span class="font-bold text-blue-500 hover:underline">{index + 1}</span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        {host.hoster}
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span
                                            class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{host.email}</span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{host.duration}</td>

                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{host.eventType}</td>

                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <button onClick={handleHost} className='btn btn-sm mx-2'>see more</button>
                                        <button onClick={handleDelete} className='btn btn-sm'>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {
                        hosts?.map((host, index) => <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                            <div class="flex items-center space-x-2 text-sm">
                                <div>
                                    <span class="text-blue-500 font-bold hover:underline">{index + 1}</span>
                                </div>
                                <div class="text-gray-500">{host.hoster}</div>
                                <div>
                                    <span
                                        class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{host.duration}</span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-700">
                                {host.email}
                            </div>
                            <div class="text-sm font-medium text-black">
                                {host.eventType}
                            </div>
                            <div class="text-sm font-medium text-black">
                                <button onClick={handleHost} className='btn btn-sm mx-2'>see more</button>
                                <button onClick={handleDelete} className='btn btn-sm'>Delete</button>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default HostList;