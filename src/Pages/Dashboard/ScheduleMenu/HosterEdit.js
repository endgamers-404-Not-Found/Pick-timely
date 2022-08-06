import React from 'react';
import { toast } from 'react-toastify';

const HosterEdit = ({ hosting, refetch, setHosting}) => {
    const {_id} = hosting;

    const handleHosting = (event) =>{
        event.preventDefault();
        const hoster = event.target.hoster.value;
        const duration = event.target.duration.value;
        const eventType = event.target.eventType.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        
        const hostingInfo = {
            hoster,
            duration,
            eventType,
            description,
            image,
        }

        fetch(`http://localhost:5000/hoster/${_id}`, {
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(hostingInfo),
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
        
            <div>
                <input type="checkbox" id="meeting-host" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="meeting-host" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Name: </h3>
                       
                        <form onSubmit={handleHosting}>
                       
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Hoster</span>
                                    </label>
                                    <input type="text" name='hoster' placeholder="Type here" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Type here" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Duration</span>
                                    </label>
                                    <input type='text' name='duration' className="input input-bordered" placeholder="Description" />
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">EventType</span>
                                    </label>
                                    <input type='text' name='eventType' className="input input-bordered" placeholder="Event Type" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea name='duration' className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Link</span>
                                    </label>
                                    <input type="text" name='image' placeholder="Type here" className="input input-bordered" />
                                </div>
                                <div className='mt-5'>
                                    <button type='submit' className='btn btn-dark w-full'>Confirm Schedule</button>
                                </div>
                            </form>
                    </div>
                </div>
            
            </div>
        
    );
};

export default HosterEdit;