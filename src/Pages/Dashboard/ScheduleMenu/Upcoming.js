import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../../../SharedComponents/Spinner';
import CancellingModal from './CancellingModal';
import ModalDetails from './ModalDetails';

const Upcoming = () => {
                       
  const [user, loading] = useAuthState(auth)
  const [meeting, setMeeting] = useState({});

  const { data: schedules, isLoading, refetch } = useQuery(['schedules'], () => fetch(`http://localhost:5000/mySchedules/${user.email}`).then(res => res.json()));


  
  
  // schedules.map(schedule=>console.log(schedule.email)) 

  


  if (isLoading || loading) {
    return <Spinner></Spinner>
  }



  
  


  const handleDeleteSchedule = (id) => {
    const confirmDelete = window.confirm('Are you sure delete this schedule?');
    if (confirmDelete) {
      fetch(`http://localhost:5000/schedule/${id}`, {
        method: "DELETE",
        headers: {
          'content-type': 'application/json',
        },
       
      
      })
        .then((res) => res.json())
        .then((result) => {

          if (result.deletedCount) {
            toast(`Schedule is deleted`);
            refetch();
          }
        });
    }
  };
  console.log(schedules)
  return (
    <div className='mt-5 w-full'>

      <div className="overflow-x-auto">
        <table className=" border border-gray-400  w-full">

          <thead>
            <tr>
              <th>#</th>
              <th>Date / Time</th>
              <th>Meeting</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>


            { schedules ?
                schedules?.map((schedule, index) =>
                  <tr className='border border-gray-400 ' key={schedule._id}>

                    <td className='p-3'>{index + 1}</td>
                    <td>{schedule?.dateFormat} <br /> {schedule?.timeSlot}  </td>
                    <td>
                      <a href={schedule?.linking}  rel="noreferrer"  target='_blank'>
                        <button className='btn btn-primary btn-sm my-2' >Join now</button>
                      </a>
                    </td>
                   

                    <td>
                      <ul>
                        {
                         schedule && schedule?.email?.map((email, index) => <li key={index}>{email?.email}</li>)
                        }
                      </ul>
                    </td>
                    <td>
     

                    <label
                        htmlFor="my-meeting"
                        className="btn btn-sm btn-success"
                        onClick={() => setMeeting(schedule)}
                      >see details</label>
                     
                
                      <button onClick={() => handleDeleteSchedule(schedule._id)} className='btn btn-sm btn-warning'>Delete</button>
                    </td>
                  </tr>)

                :
                'No data available'
            }



          </tbody>
        </table>

        {meeting && <ModalDetails user={user} refetch={refetch} setMeeting={setMeeting} meeting={meeting}></ModalDetails>}
        {meeting && <CancellingModal user={user} setMeeting={setMeeting} meeting={meeting}></CancellingModal>}
        

      </div>
    </div>
  );
};

export default Upcoming; 