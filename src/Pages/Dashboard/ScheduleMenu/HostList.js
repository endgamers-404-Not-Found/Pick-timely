import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../../../SharedComponents/Spinner';
import HosterDetails from './HosterDetails';
import HosterEdit from './HosterEdit';

const HostList = () => {
    const [hosting, setHosting] = useState({});
    const [user] = useAuthState(auth);
    const { data:hosts, isLoading, refetch} = useQuery(['hosts'], ()=> fetch('http://localhost:5000/hoster').then(res => res.json()));
    
    if(isLoading){
        return <Spinner></Spinner>
    }

    const handleDeleteHoster = (id) =>{
        const confirmDelete = window.confirm('Are you want to delete this doctor?');
        if(confirmDelete){
          fetch(`http://localhost:5000/hoster/${id}`, {
          method: "DELETE",
          headers:{
            'content-type' : 'application/json',
          }
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              toast(`Hoster is deleted`);
              refetch();
            }
          });
        }
      };

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        hosts.map((host, index) =>  <tr key={host._id} index={index} host={host}>
                            <th>{index + 1}</th>
                            <td>{host.hoster}</td>
                            <td>{user?.email}</td>
                            <td>
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
                            </td>
                        </tr> )
                    }
                   
                    
            
                    </tbody>
                </table>
                {hosting && <HosterDetails setHosting={setHosting} hosting={hosting}></HosterDetails>}
            {hosting && <HosterEdit setHosting={setHosting} hosting={hosting} refetch={refetch}></HosterEdit>}
            </div>
        </div>
    );
};

export default HostList;