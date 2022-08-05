import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const ConfirmSchedule = ({dateFormat, hostId}) => {
    const navigate = useNavigate();
    const day = new Date();
    const today = day.toLocaleTimeString();

    const handleMeeting = (event) =>{
        event.preventDefault();
        const timeSlot = event.target.timeSlot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const description = event.target.description.value;
        const platform = event.target.platform.value;
        const linking = event.target.linking.value;
        
        const meetingInfo = {
            timeSlot,
            name,
            email,
            description,
            dateFormat,
            today,
            linking,
            platform,
        }

        console.log(meetingInfo);

        fetch('https://pick-timely.herokuapp.com/schedule', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(meetingInfo),
        })
        .then(res => res.json())
        .then(data => {
            console.log('data inserted successfully', data);
            navigate('/dashboard/eventschedule');
            toast('Schedule make for interview');
        
        })
    }

    return (

        <div className='w-[100%] mx-auto border p-3'>
    
            <h1 className='text-xl font-bold mt-5'>Please enter interviewer details</h1>
            <h1>Date: {dateFormat}</h1>
            
            <div className='w-full mx-auto'>
                <form onSubmit={handleMeeting}>
                    <div className="form-control w-full">
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
        
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Platform</span>
                        </label>
                        <select name='platform' className="select select-bordered">
                            <option value='Meet Link'>Meet Link</option>
                            <option value='Zoom Link'>Zoom Link</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Meet/Zoom link</span>
                        </label>
                        <input type="text" name='linking' placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className='mt-5'>
                        <button type='submit' className='btn btn-dark w-full'>Confirm Schedule</button>
                    </div>
                </form>
            </div>
        </div>
       
    );
};

export default ConfirmSchedule;