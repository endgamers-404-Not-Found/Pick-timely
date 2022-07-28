import React from 'react';
import { FaClock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Calender from './Calender';
import ConfirmSchedule from './ConfirmSchedule';


const FiftenMin = ({hostId}) => {

    return (

        <div className='my-10'>
       
            <div className='bg-yellow-50'>
                <h2 className='text-4xl text-center p-4 bg-blue-600 text-white font-bold'>{hostId} </h2>
                <div className='card card-compact h-95 shadow-xl grid lg:grid-cols-3 sm:grid-cols-1 p-2'>
                    <div className='w-[18rem] mx-auto border p-2'>
                        <img className='mask mask-circle w-20 mt-10' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                        <p className='font-bold text-2xl'>ADMIN</p>
                        <p className='font-bold text-2xl'>15 mins meeting</p>
                        <div className='flex d-block items-center mr-2'>
                            <p><FaClock ></FaClock></p>
                            <p>15mins</p>
                        </div>

                    </div>
                    <div>
                        <Calender></Calender>
                       
                    </div>
                        <div className='w-[20rem] mx-auto border'>
                            <div className='sticky top-0 z-40 bg-slate-500 p-2'>
                                <h1 className='text-2xl font-bold text-center text-white'>Select a time</h1>
                                <h1 className='text-xl font-bold text-center text-white'>29 July, 2022</h1>
                            </div>
                            <ul class="menu bg-base-100 w-56 p-2 rounded-box mx-auto overflow-y-auto h-[22rem]">
                                <li><Link to='/'>03.00PM - 03.15PM</Link></li>
                                <li><Link to='/'>03.15PM - 03.30PM</Link></li>
                                <li><Link to='/'>03.30PM - 03.45PM</Link></li>
                                <li><Link to='/'>03.30PM - 03.45PM</Link></li>
                                <li><Link to='/'>03.30PM - 03.45PM</Link></li>
                                <li><Link to='/'>03.30PM - 03.45PM</Link></li>
                                <li><Link to='/'>03.30PM - 03.45PM</Link></li>
                                <li><Link to='/'>03.30PM - 03.45PM</Link></li>
                                <li><Link to='/'>03.30PM - 03.45PM</Link></li>
                                <li><Link to='/'>03.30PM - 03.45PM</Link></li>
                                <li><Link to='/'>03.30PM - 03.45PM</Link></li>
                            </ul>
                            <div className='flex justify-center mt-3 mb-3'>
                                <button className='btn btn-success'>Continue</button>
                            </div>
                        </div>
                </div>

            </div>
            
            <ConfirmSchedule></ConfirmSchedule>
            
        </div>
    );
};

export default FiftenMin;