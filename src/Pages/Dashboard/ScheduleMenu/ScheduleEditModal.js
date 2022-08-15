import React from 'react';
import { toast } from 'react-toastify';

const ScheduleEditModal = ({dateFormat, setMeeting, meeting, refetch}) => {
    const {_id} = meeting;
    console.log(_id);

    const handleReschedule = (event) =>{
        event.preventDefault();
        const timeSlot = event.target.timeSlot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const description = event.target.description.value;
        

        const meetingInfo = {
            timeSlot,
            name,
            email,
            description,
            dateFormat,
        }

        console.log(meetingInfo);

        fetch(`https://pick-timely.herokuapp.com/schedule/${_id}`, {
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(meetingInfo),
        })
        .then(res => res.json())
        .then(data => {
            console.log('data updated successfully', data);
            toast('Reschedule Successfull');
            refetch();
            setMeeting(null)
        })
    }

  

    return (
        <div className='mx-auto'>
            <div>
                <input type="checkbox" id="meeting-reschedule" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="meeting-reschedule" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Name: {meeting.name}</h3>
                       <div className='flex justify-center'>
                        <form className='w-full' onSubmit={handleReschedule}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Pick time</span>
                                    </label>
                                    <select name='timeSlot' className="select select-bordered">
                                        <option value='03.15PM-03.30PM'>03.15PM-03.30PM</option>
                                        <option value='03.15PM-03.30PM'>03.30PM-03.45PM</option>
                                        <option value='03.15PM-03.30PM'>03.45PM-04.00PM</option>
                                        <option value='03.15PM-03.30PM'>04.00PM-04.15PM</option>
                                        <option value='03.15PM-03.30PM'>04.15PM-04.30PM</option>
                                        <option value='03.15PM-03.30PM'>04.30PM-04.45PM</option>
                                        <option value='03.15PM-03.30PM'>04.45PM-05.00PM</option>
                                    
                                    </select>
                        
                                </div>
                    
                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Type here" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Type here" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Add Meet or Zoom link</span>
                                    </label>
                                    <input type="text" name='linkText' placeholder="Type here" className="input input-bordered" />
                                </div>
                                <div className='mt-5 flex justify-center'>
                                    <button type='submit' className='btn btn-dark'>Confirm Schedule</button>
                                </div>
                            </form>
                       </div>
                    
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default ScheduleEditModal;