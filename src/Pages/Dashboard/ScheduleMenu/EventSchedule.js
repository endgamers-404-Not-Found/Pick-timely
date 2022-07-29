import React from 'react';
import { Link } from 'react-router-dom';

const EventSchedule = () => {
    return (
        <div className='p-10 border'>
            <div className='flex justify-start gap-10 mt-5'>
                <h1 className='text-3xl font-bold'>PickTimely</h1>
                <Link to='/dashboard/createEvent' className='btn btn-success'>+ Create Event Type</Link>
            </div>
                <div class="divider"></div> 

            <div className='mt-10 mb-5'>
                <div class="form-control">
                    <div class="input-group">
                        <button class="btn">Host Filter</button>
                        <select class="select select-bordered">
                        <option disabled selected>All</option>
                        <option>T-shirts</option>
                        <option>Mugs</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div class="card bg-base-100 shadow-xl">
                    <img className='w-12 mx-auto rounded-full' src="https://placeimg.com/192/192/people" alt='' />
                    <h1 className='text-2xl font-bold text-center'>Host: Sujon</h1>
                    <div class="card-body">
                        <h2 class="card-title">Group Meeting</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                        <button class="btn btn-primary">view page</button>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                <img className='w-12 mx-auto rounded-full' src="https://placeimg.com/192/192/people" alt='' />
                    <h1 className='text-2xl font-bold text-center'>Host: Sujon</h1>
                    <div class="card-body">
                        <h2 class="card-title">15 Mins Meeting</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                        <button class="btn btn-primary">view page</button>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                <img className='w-12 mx-auto rounded-full' src="https://placeimg.com/192/192/people" alt='' />
                    <h1 className='text-2xl font-bold text-center'>Host: Sujon</h1>
                    <div class="card-body">
                        <h2 class="card-title">30 Mins Meeting</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                        <button class="btn btn-primary">view page</button>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                <img className='w-12 mx-auto rounded-full' src="https://placeimg.com/192/192/people" alt='' />
                    <h1 className='text-2xl font-bold text-center'>Host: Sujon</h1>
                    <div class="card-body">
                        <h2 class="card-title">60 Mins Meeting</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                        <button class="btn btn-primary">view page</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventSchedule;