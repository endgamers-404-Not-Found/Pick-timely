import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const HosterEdit = ({ hosting, refetch, setHosting}) => {
    const {_id, hoster} = hosting;
    const [user] = useAuthState(auth);

    const handleHosting = (event) =>{
        event.preventDefault();
        const hoster = event.target.hoster.value;
        const duration = event.target.duration.value;
        const eventType = event.target.eventType.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        
        const hostingInfo = {
            hoster,
            email: user?.email,
            duration,
            eventType,
            description,
            image,
        }

        fetch(`https://pick-timely.herokuapp.com/hoster/${_id}`, {
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(hostingInfo),
        })
        .then(res => res.json())
        .then(data => {
            console.log('data updated successfully', data);
            toast('Hoster edit successfull');
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
                        <h3 className="text-lg font-bold">Name: {hoster}</h3>
                       
                        <form onSubmit={handleHosting}>
                       
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Hoster</span>
                                </label>
                                <input type="text" name='hoster' placeholder="Type here" className="input input-bordered" />
                            </div>
             
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Event Duration</span>
                                </label>
                                <select name='duration' className="select select-bordered">
                                    <option value='15 mins Meeting'>15 mins Meeting</option>
                                    <option value='30 mins Meeting'>30 mins Meeting</option>
                                    <option value='60 mins Meeting'>60 mins Meeting</option>
                                    <option value='90 mins Meeting'>90 mins Meeting</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Event Type</span>
                                </label>
                                <select name='eventType' className="select select-bordered">
                                        <option value='One-to-one'>One-to-one</option>
                                        <option value='Group Meeting'>Group Meeting</option>
                                        <option value='Corporate Meeting'>Corporate Meeting</option>
                                        <option value='Virsual Meeting'>Virsual Meeting</option>
                                    </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Link</span>
                                </label>
                                <input type="text" name='image' placeholder="Type here" className="input input-bordered" />
                            </div>
                            <div className='mt-5'>
                                <button type='submit' className='btn btn-dark w-full'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            
            </div>
        
    );
};

export default HosterEdit;