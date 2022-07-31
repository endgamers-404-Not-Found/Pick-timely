import React from 'react';
import { toast } from 'react-toastify';

const ScheduleEditModal = ({dateFormat, setMeeting}) => {

    const handleMeeting = (event) =>{
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

        fetch('http://localhost:5000/schedule', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(meetingInfo),
        })
        .then(res => res.json())
        .then(data => {
            console.log('data inserted successfully', data);
            toast('Reschedule Successfull');
        })
    }

    const handleCloseModal = () =>{
        setMeeting(null)
    }

    return (
        <div>
            <input type="checkbox" id="meeting-reschedule" class="modal-toggle" />
            <div class="modal">
            <div class="modal-box relative">
                <label for="meeting-reschedule" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold">Hello Rescheduling</h3>
                <form onSubmit={handleMeeting}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Pick time</span>
                        </label>
                        <select name='timeSlot' class="select select-bordered">
                            <option value='03.15PM-03.30PM'>03.15PM-03.30PM</option>
                            <option value='03.15PM-03.30PM'>03.30PM-03.45PM</option>
                            <option value='03.15PM-03.30PM'>03.45PM-04.00PM</option>
                            <option value='03.15PM-03.30PM'>04.00PM-04.15PM</option>
                            <option value='03.15PM-03.30PM'>04.15PM-04.30PM</option>
                            <option value='03.15PM-03.30PM'>04.30PM-04.45PM</option>
                            <option value='03.15PM-03.30PM'>04.45PM-05.00PM</option>
                          
                        </select>
             
                    </div>
        
      
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">name</span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <textarea name='description' class="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>
                    <div className='flex gap-2 mt-2'>
                        <button className='btn btn-sm btn-dark'>Google meet link</button>
                        <button className='btn btn-sm btn-dark'>Zoom link</button>
                    </div>
                    <div className='mt-5'>
                        <button type='submit' onClick={handleCloseModal} className='btn btn-dark w-full'>Confirm Schedule</button>
                    </div>
                </form>
             
            </div>
            </div>
            
        </div>
    );
};

export default ScheduleEditModal;