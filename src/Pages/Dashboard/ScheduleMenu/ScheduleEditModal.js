import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ScheduleEditModal = ({  setMeeting, meeting, refetch }) => {
    const { _id, type,dateFormat } = meeting;
    const [user]=useAuthState(auth)
    // console.log(dateFormat)


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






    const handleReschedule = (event) => {
        event.preventDefault();
        const timeSlot = event.target.time.value;
        const email = emailList;
        const description = event.target.description.value;
        const linking = event.target.link.value;
        


        const meetingInfo = {
            host:user.email,
            type:meeting.type,
            timeSlot,
            email,
            description,
            dateFormat,
            linking
        }

        console.log(meetingInfo);

        fetch(`https://pick-timely.herokuapp.com/schedule/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
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
                    <div className="modal-box bg-gray-700 text-white relative mt-10">
                        <label htmlFor="meeting-reschedule" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className='mx-auto w-full flex justify-center'>
                            <form onSubmit={handleReschedule}>
                                <div className="form-control w-full">
                                    <h2>Event Type: {type}</h2>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-gray-500">Meeting Time</span>
                                        </label>
                                        <input required id='time' className='input input-bordered w-full bg-gray-400 text-black' type="time" name="time" />
                                    </div>

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
                                            {emailList.length - 1 === index && (
                                                <div className='flex justify-end mt-3'>
                                                    {
                                                        meeting.type === "Group Meeting" && emailList.length === 5 ?
                                                            '' :
                                                            <button
                                                                disabled={meeting.type === "One-to-one" ? "disabled" : ""}
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
                                        <span className="label-text text-gray-300">Description</span>
                                    </label>
                                    <textarea required name='description' className="textarea textarea-bordered h-24 bg-gray-400 text-black placeholder:text-black" placeholder="Description"></textarea>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-gray-300">Add Meet or Zoom link</span>
                                    </label>
                                    <input required id='link' type="text" name='linkText' placeholder="Type here" className="input input-bordered w-full bg-gray-400 text-black placeholder:text-black" />
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

export default ScheduleEditModal;