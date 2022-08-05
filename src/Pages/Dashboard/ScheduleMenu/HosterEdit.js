import React from 'react';
import { toast } from 'react-toastify';

const HosterEdit = ({ hosting, refetch, setHosting}) => {

    const {_id} = hosting;
    console.log(_id);

    const handleHosting = (event) =>{
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
        }

        console.log(meetingInfo);

        fetch(`http://localhost:5000/schedule/${_id}`, {
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
            setHosting(null)
        })
    }


    return (
        <div className='mx-auto'>
            <div>
                <input type="checkbox" id="meeting-reschedule" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="meeting-reschedule" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Name: </h3>
                       <div className='mx-auto w-full flex justify-center'>
                        <form onSubmit={handleHosting}>
                       
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
                                        <span className="label-text">Add Meet or Zoom link</span>
                                    </label>
                                    <input type="text" name='linkText' placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                                <div className='mt-5'>
                                    <button type='submit' className='btn btn-dark w-full'>Confirm Schedule</button>
                                </div>
                            </form>
                       </div>
                    
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default HosterEdit;