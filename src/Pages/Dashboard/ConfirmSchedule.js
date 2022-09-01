import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Spinner from '../../SharedComponents/Spinner';


const ConfirmSchedule = ({ dateFormat, hostId }) => {
    const [user, loading] = useAuthState(auth)
    const [meeting, setMeeting] = useState({});
    const navigate = useNavigate();
 console.log(hostId)

    useEffect(() => {
        fetch(`https://pick-timely.herokuapp.com/arrangeMeeting/${hostId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMeeting(data)
            })
    }, [hostId]);


    const [emailList, setEmailList] = useState([{ email: "" }]);


    const handleEmailAdd = () => {
        setEmailList([...emailList, { email: "" }]);
    };
    const handleEmailRemove = (index) => {
        const list = [...emailList];
        list.splice(index, 1);
        setEmailList(list);
    };
    const handleEmailChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...emailList];
        list[index][name] = value;
        setEmailList(list);
    };


    const handleMeeting = (event) => {
        event.preventDefault();
        const timeSlot = event.target.time.value;
        const email = emailList;
        const description = event.target.description.value;
        const platform = event.target.platform.value;
        const linking = event.target.linking.value;

        const meetingInfo = {
            timeSlot,
            email,
            description,
            dateFormat,
            linking,
            platform,
            host: user.email,
            type: meeting.eventType
        }

        // console.log(meetingInfo);

        fetch(' https://pick-timely.herokuapp.com/schedule', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(meetingInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log('data inserted successfully', data);
                navigate('/dashboard/eventschedule');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully schedule make for interview',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
    }


    if (loading || !meeting) {
        return <Spinner />
    }


    return (

        <div className='w-[100%] mx-auto border p-3'>

            <h1 className='text-xl font-bold mt-5'>Please enter interviewer details</h1>
            <h1>Date: {dateFormat}</h1>

            <div className='w-full mx-auto'>
                <form onSubmit={handleMeeting}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-gray-500">Meeting Time</span>
                        </label>
                        <input id='time' className='input input-bordered w-full bg-gray-400 text-black' type="time" name="time" />
                    </div>

                    {emailList.map((singleEmail, index) => (
                        <div key={index} className="">
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-gray-500">Guest Email</span>
                                </label>
                                <input
                                    className="input input-bordered w-full  bg-gray-400 text-black"
                                    placeholder='Type here'
                                    name="email"
                                    type="email"
                                    id="email"
                                    value={singleEmail.email}
                                    onChange={(e) => handleEmailChange(e, index)}
                                    required
                                />
                                <div className="">
                                    {emailList.length !== 1 && (
                                        <div className='flex justify-end'>
                                            <button

                                                type="button"
                                                onClick={() => handleEmailRemove(index)}
                                                className="btn btn-primary btn-xs mt-1"
                                            >
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                                {emailList.length - 1 === index  && (
                                    <div className='flex justify-end mt-3'>
                                        {
                                            meeting.eventType === "Group Meeting" && emailList.length === 5 ?
                                                '' :
                                                <button
                                                    disabled={meeting.eventType === "One-to-one" ? "disabled" : ""}
                                                    type="button"
                                                    onClick={handleEmailAdd}
                                                    className="btn btn-primary btn-sm"
                                                >
                                                    <span>Add more guest</span>
                                                </button>
                                        }

                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-gray-500">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered h-24  bg-gray-400 text-black" placeholder="Description"></textarea>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-gray-500">Platform</span>
                        </label>
                        <select name='platform' className="select select-bordered  bg-gray-400 text-black">
                            <option value='Meet Link'>Meet Link</option>
                            <option value='Zoom Link'>Zoom Link</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-gray-500">Meet/Zoom link</span>
                        </label>
                        <input type="text" name='linking' placeholder="Type here" className="input input-bordered w-full  bg-gray-400 text-black" />
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