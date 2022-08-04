import React from 'react';



const ConfirmSchedule = ({dateFormat, hostId}) => {
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
        })
      
    }

    return (

        <div className='w-[100%] mx-auto border p-3'>
    
            <h1 className='text-xl font-bold mt-5'>Please enter interviewer details</h1>
            <h1>Date: {dateFormat}</h1>
            
            <div>
                <form onSubmit={handleMeeting}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Pick time</span>
                        </label>
                        <select name='timeSlot' class="select select-bordered">
                            <option value='03.15PM-03.30PM'>03.15PM-03.30PM</option>
                            <option value='03.15PM-03.30PM'>03.15PM-03.30PM</option>
                            <option value='03.15PM-03.30PM'>03.15PM-03.30PM</option>
                            <option value='03.15PM-03.30PM'>03.15PM-03.30PM</option>
                            <option value='03.15PM-03.30PM'>03.15PM-03.30PM</option>
                            <option value='03.15PM-03.30PM'>03.15PM-03.30PM</option>
                            <option value='03.15PM-03.30PM'>03.15PM-03.30PM</option>
                          
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
                        <button type='submit' className='btn btn-dark w-full'>Confirm Schedule</button>
                    </div>
                </form>
            </div>
        </div>
       
    );
};

export default ConfirmSchedule;