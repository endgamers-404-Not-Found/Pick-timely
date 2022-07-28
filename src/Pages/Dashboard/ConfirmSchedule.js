import React from 'react';
import { FaClock } from "react-icons/fa";

const ConfirmSchedule = () => {
    return (
        <div className='w-[100%] mx-auto border bg-slate-400 p-20 content-center'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 p-5 gap-5'>
                <div className='w-[100%] mx-auto border p-2 h-[18rem]'>
                    <img className='mask mask-circle w-20 mt-10' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                    <p className='font-bold text-2xl'>ADMIN</p>
                    <p className='font-bold text-2xl'>15 mins meeting</p>
                    <div className='flex d-block items-center mr-2'>
                        <p><FaClock ></FaClock></p>
                        <p>15mins</p>
                    </div>
                </div>
                <div className='w-[100%] mx-auto border p-3'>
                    <div>
                        <h1 className='text-xl font-bold'>Interview time</h1>
                        <p>03.15PM - 03.30PM</p>
                        <p>Friday, 29th July, 2022</p>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mt-5'>Please enter interviewer details</h1>
                        <form>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">name</span>
                                </label>
                                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Description</span>
                                </label>
                                <textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                            </div>
                            <div className='mt-5'>
                                <button className='btn btn-success'>Confirm Schedule</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmSchedule;