import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaChevronCircleDown } from "react-icons/fa";
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Swal from 'sweetalert2';

const CreateEvent = () => {
    const [user] = useAuthState(auth);
   

    const handleHostCreate = (event) =>{
        event.preventDefault();
        const duration = event.target.duration.value;
        const eventType = event.target.eventType.value;
        const description = event.target.description.value;
        const img = event.target.image.value;
        const hosterInfo = {
            hoster: user?.displayName,
            duration,
            eventType,
            description,
            img,
            email: user?.email,
        };
        console.log(hosterInfo);
        fetch('https://pick-timely-server.onrender.com/hoster', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(hosterInfo),
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Host Created Successfully!',
                showConfirmButton: false,
                timer: 1500
            })

            event.target.reset();
        })

    }

    return (
        <div className='grid  bg-slate-400 grid-cols-1 lg:grid-cols-2 justify-items-center p-20'>
            <div className='border w-96 p-10 mt-10'>
                <h1 className='text-2xl font-bold flex justify-start items-center gap-3 py-10'><FaChevronCircleDown /> One-to-One Meeting</h1>
                <h1 className='text-2xl font-bold flex justify-start items-center gap-3 py-10'><FaChevronCircleDown /> Group Meeting</h1>
                <h1 className='text-2xl font-bold flex justify-start items-center gap-3 py-10'><FaChevronCircleDown /> Corporate Meeting</h1>
            </div>
            
            <div className='border p-10 w-96 mt-10'>
                <form onSubmit={handleHostCreate}>
                    <div className="form-control w-full max-w-xs">
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


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Event Type</span>
                        </label>
                        <select name='eventType' className="select select-bordered">
                                <option value='One-to-one'>One-to-one</option>
                                <option value='Group Meeting'>Group Meeting</option>
                                <option value='Corporate Meeting'>Corporate Meeting</option>
                                {/* <option value='Virsual Meeting'>Virsual Meeting</option> */}
                            </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label> 
                        <textarea name='description' className="textarea textarea-bordered h-24" placeholder="description here"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User image Link</span>
                        </label> 
                        <input type='text' name='image' className="input input-bordered" placeholder="add image link" />
                    </div>
                    
                    <div className='mt-5'>
                        <button className='btn btn-sm w-full'>continue</button>
                    </div>
                </form>

            </div>
 
        </div>
    );
};

export default CreateEvent;