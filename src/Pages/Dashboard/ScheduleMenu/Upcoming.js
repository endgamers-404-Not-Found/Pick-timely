import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../../../SharedComponents/Spinner';
import ModalDetails from './ModalDetails';
import ScheduleEditModal from './ScheduleEditModal';

const Upcoming = () => {
  const [user, loading] = useAuthState(auth)
  const [meeting, setMeeting] = useState({});
  const { data: schedules, isLoading, refetch } = useQuery(['schedules'], () => fetch(`https://pick-timely.herokuapp.com/mySchedules/${user.email}`).then(res => res.json()));
  // schedules.map(schedule=>console.log(schedule.email)) 

  if (isLoading || loading) {
    return <Spinner></Spinner>
  }


  const handleRemainder= (id)=>{
   
    fetch(`https://pick-timely.herokuapp.com/schedule/${id}`,{
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(res =>res.json())
    .then(result=>{
      console.log(result);
    })
  }

  const handleDeleteSchedule = (id) => {
    const confirmDelete = window.confirm('Are you want to delete this doctor?');
    if (confirmDelete) {
      fetch(`https://pick-timely.herokuapp.com/schedule/${id}`, {
        method: "DELETE",
        headers: {
          'content-type': 'application/json',
        }
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
              <th></th>
              <th>Date</th>
              <th>Time</th>
              <th>Host</th>
              <th>Meeting</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>


            {
              schedules ?
                schedules?.map((schedule, index) =>
                  <tr className='border border-gray-400 ' key={schedule._id}>
                    <td className='p-3'>{index + 1}</td>
                    <td>{schedule?.dateFormat}  </td>
                    <td>{schedule?.timeSlot}  </td>
                    <td>{schedule?.host}</td>
                    <td>
                      <a href={schedule?.linking}  rel="noreferrer"  target='_blank'>
                        <button className='btn btn-primary btn-sm my-2' >Join now</button>
                      </a>
                    </td>
                   


                    <td>
                      <ul>
                        {
                          schedule?.email?.map(email => <li>{email?.email}</li>)
                        }
                      </ul>
                    </td>
                    <td>
                      <label
                        htmlFor="my-meeting"
                        className="btn btn-sm btn-success mr-4"
                        onClick={() => setMeeting(schedule)}
                      >see details</label>
                     
                      <button onClick={() => handleDeleteSchedule(schedule._id)} className='btn btn-sm btn-warning'>Cancel</button>
                    </td>
                  </tr>)
                :
                'No data available'
            }



          </tbody>
        </table>
        {meeting && <ModalDetails setMeeting={setMeeting} meeting={meeting}></ModalDetails>}
        {meeting && <ScheduleEditModal  setMeeting={setMeeting} meeting={meeting} refetch={refetch}></ScheduleEditModal>}
      </div>
    </div>
  );
};

export default Upcoming; 