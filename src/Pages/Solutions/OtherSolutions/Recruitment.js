import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Recruitment = () => {
    const [recruitments, setRecruitments] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:5000/recruitments')
        .then(res =>res.json())
        .then(data => {
            setRecruitments(data);
        })
    }, []);

    const handleRecruitment = (id)=>{
        navigate(`/solutions/recruitments/${id}`);
    }

    return (
        <div>
            <div className="hero  p-20">
                <div className="hero-content text-center">
                    <div className="w-full">
                        <div className='w-[100%] lg:w-[50%] mx-auto'>
                            <h1 className="lg:text-4xl font-bold mb-10 text-center text-2xl">A good scheduler gives you more than the basics without compromising the essentials</h1>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                            {
                                recruitments?.map(recruit => <div className="card w-94  shadow-2xl shadow-black">
                                <div className="card-body">
                                    <img src={recruit.img} className='w-56 mx-auto' alt="" />
                                    <h2 className="text-center text-3xl font-bold">{recruit.title}</h2>
                                    <p>{recruit.description}</p>
                                    <div className="card-actions justify-center">
                                        <button onClick={()=>handleRecruitment(recruit._id)} className="btn btn-primary">see details</button>
                                    
                                    </div>
                                </div>
                            </div>)
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recruitment;