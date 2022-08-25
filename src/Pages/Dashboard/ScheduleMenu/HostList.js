import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../../SharedComponents/Spinner';

import HosterDetails from './HosterDetails';
import HosterEdit from './HosterEdit';


const HostList = () => {
    const [hosting, setHosting] = useState({});
    const [hosts, setHosts] = useState([]);


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


    if (!hosts) {
        return <Spinner></Spinner>
    }


    // const handleDeleteHoster = (id) =>{
    //     const confirmDelete = window.confirm('Are you want to delete this doctor?');
    //     if(confirmDelete){
    //       fetch(`http://localhost:5000/hoster/${id}`, {
    //       method: "DELETE",
    //       headers:{
    //         'content-type' : 'application/json',
    //       }
    //     })
    //       .then((res) => res.json())
    //       .then((result) => {
    //         if (result.deletedCount) {
    //           toast(Hoster is deleted);
    //         }
    //       });
    //     }
    //   };




    return (
        <div>
            <h1 className='text-2xl text-center font-semibold my-6'>All Hosts and meetings in Pick Timely</h1>
            <div className="overflow-x-auto">
                <table className=" w-full">

                    
                    <thead>
                    <tr className='border border-gray-400'>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        {/* <th>Action</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        hosts?.map((host, index) =>  <tr className='border border-gray-400' key={host._id} index={index} host={host}>
                            <th>{index + 1}</th>
                            <td>{host.hoster}</td>
                            <td>{user?.email}</td>
                            {/* <td>
                            <label 
                                htmlFor="my-hosting" 
                                className="btn btn-sm btn-success"
                                onClick={()=>setHosting(host)}
                                >see details</label> 
                                <label 
                                htmlFor="meeting-host" 
                                className="btn btn-sm btn-info mx-3"
                                onClick={()=>setHosting(host)}
                                >Edit</label> 
                                <button onClick={()=>handleDeleteHoster(host._id)} className='btn btn-sm'>Delete</button>
                            </td> */}
                        </tr> )
                    }
                   
                    
            
                    </tbody>
                </table>
                {hosting && <HosterDetails setHosting={setHosting} hosting={hosting}></HosterDetails>}
            {hosting && <HosterEdit setHosting={setHosting} hosting={hosting} ></HosterEdit>}
            </div>
        </div>
    );
};

export default HostList;
