import React from 'react';
import { Link } from 'react-router-dom';

const CreateEvent = () => {


    return (
        <div className='flex gap-10'>
            <div className='border w-96 p-10 mt-10'>
                <div className='flex justify-start gap-10'>
                    <input type="radio" name="radio-1" class="radio" checked />
                    <label htmlFor="one-to-one">One-to-One</label>
                </div>
                <div className='flex justify-start gap-10 mt-10'>
                    <input type="radio" name="radio-1" class="radio" checked />
                    <label htmlFor="one-to-one">Group</label>
                </div>
                <div className='mt-5'>
                    <button className='btn btn-sm'>continue</button>
                </div>
            
            </div>
            <div className='border p-10 w-96 mt-10'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">name</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
         
                </div>
                <div class="form-control mt-2">
                    <div class="input-group">
                        <button class="btn">Host Create</button>
                        <select class="select select-bordered">
                        <option disabled selected>All</option>
                        <option>Sujon</option>
                        <option>Meherab</option>
                        <option>Hamid</option>
                        </select>
                    </div>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Private Meeting</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
         
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label> 
                    <textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className='mt-5'>
                    <button className='btn btn-sm'>continue</button>
                </div>

            </div>
            <div className='border p-10 w-96 mt-10'>
                <ul class="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box">
                    <li><Link to='/'>15 Mins</Link></li>
                    <li><Link to='/'>30 Mins</Link></li>
                    <li><Link to='/'>60 Mins</Link></li>
                    <li><Link to='/'>90 Mins</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default CreateEvent;