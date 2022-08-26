import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Career = () => {
    const navigate = useNavigate();

    const [easySchedules, seTeasySchedules] = useState([]);

    useEffect(()=>{
        fetch('https://pick-timely.herokuapp.com/easySchedule')
        .then(res =>res.json())
        .then(data => {
            seTeasySchedules(data);
        })
    }, []);

    const handleEasySchedule = (id)=>{
        navigate('/solutions/easySchedule/${id}');
    }

 
    return (
        <div className='flex justify-center items-center p-20'>
            <div className="w-full">
                <div className='w-[100%] lg:w-[50%] mx-auto'>
                    <h1 className="lg:text-4xl font-bold mt-10 text-center text-2xl">A great scheduler should fulfill your customers' expectations</h1>
                    <p className='text-center text-xl'>Just like a great consultation session.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center gap-10 mt-20'>
                    {
                        easySchedules.map(easy => (
                        <div className="card  shadow-2xl shadow-black">
                            <div className="card-body">
                                <img src={easy.img} className='w-96 mx-auto rounded-md' alt="" />
                                <h2 className="text-center text-3xl font-bold">{easy.title}</h2>
                                <p>{easy.description}</p>
                                <div className="card-actions justify-center">
                                    <button onClick={()=>handleEasySchedule(easy._id)} className="btn btn-primary">see details</button>
                                
                                </div>
                            </div>
                        </div>)
                    ) }
                    
                </div>
            </div>
        </div>
    );
};

export default Career;