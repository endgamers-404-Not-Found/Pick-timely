import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaChevronCircleDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import { useProfile } from '../../Hooks/useProfile';

const CreateEvent = () => {
    const [user] = useAuthState(auth);
    const { emailId } = useNavigate(user);
    // const [profile]=useProfile()
    const profile = useProfile()
    const status = profile[0].status;
    console.log(status)



    const handleHostCreate = (event) => {
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
            headers: {
                'content-type': 'application/json'
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
        <div className='grid   grid-cols-1 lg:grid-cols-2 justify-items-center p-20'>
            <div className='shadow-2xl shadow-black rounded-lg w-96 p-10 mt-10'>
                <h1 className='text-2xl font-bold flex justify-start items-center gap-3 py-10'><FaChevronCircleDown /> One-to-One Meeting</h1>
                <h1 className='text-2xl font-bold flex justify-start items-center gap-3 py-10'><FaChevronCircleDown /> Group Meeting</h1>
                <h1 className='text-2xl font-bold flex justify-start items-center gap-3 py-10'><FaChevronCircleDown /> Corporate Meeting</h1>
            </div>

            <div className='shadow-2xl shadow-black rounded-lg p-10 w-96 mt-10'>
                <h1>{emailId}</h1>
                <form onSubmit={handleHostCreate}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="">Event Duration</span>
                        </label>
                        <select name='duration' className="select select-bordered bg-gray-400 text-white">
                            <option value='15 mins Meeting'>15 mins Meeting</option>
                            <option value='30 mins Meeting'>30 mins Meeting</option>
                            <option value='60 mins Meeting'>60 mins Meeting</option>
                            <option value='90 mins Meeting'>90 mins Meeting</option>
                        </select>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="">Event Type</span>
                        </label>
                        <select name='eventType' className="select select-bordered  bg-gray-400 text-white">
                            <option value='One-to-one'>One-to-one</option>
                            {status === 'free' &&
                                <>
                                    <option  disabled value='Group Meeting'>Group Meeting - paid service</option>
                                    
                                    <option  disabled value='Corporate Meeting'>Corporate Meeting - paid service</option>
                                </>
                            }
                            {status === 'team' &&
                                <>
                                    <option  value='Group Meeting'>Group Meeting </option>
                                   
                                    <option disabled  value='Corporate Meeting'>Corporate Meeting </option>
                                </>
                            }
                            {status === 'corporate' &&
                                <>
                                    <option  value='Group Meeting'>Group Meeting </option>
                                   
                                    <option  value='Corporate Meeting'>Corporate Meeting </option>
                                </>
                            }
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="">Description</span>
                        </label>
                        <textarea name='description' className="textarea  placeholder:text-white bg-gray-400 text-white textarea-bordered h-24" placeholder="description here"></textarea>
                    </div>
                    

                    <div className='mt-5'>
                        <button className='btn btn-primary w-full'>continue</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default CreateEvent;