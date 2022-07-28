import React from 'react';
import { FaClock } from "react-icons/fa";
import Calender from './Calender';
const FiftenMin = () => {
    return (

        <div className='my-10'>
            <h2 className='text-4xl text-center p-4 bg-purple-300 text-black text-bold'>15 mins meeting</h2>
            <div className='bg-yellow-50'>
                <div className='card card-compact h-95 shadow-xl grid lg:grid-cols-2 sm:grid-cols-1'>
                    <div className='mx-2 '>
                        <img className='mask mask-circle w-20' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                        <p>ADMIN</p>
                        <p>15 mins meeting</p>
                        <div className='flex d-block items-center mr-2'>
                            <p><FaClock ></FaClock></p>
                            <p>15mins</p>
                        </div>

                    </div>
                    <div>
                        <Calender></Calender>
                       
                    </div>
                </div>

            </div>





        </div>
    );
};

export default FiftenMin;