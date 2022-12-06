import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecruitDetails = () => {
    const {id} = useParams();
    const [recruit, setRecruits] = useState('');
    useEffect(()=>{
        fetch(`https://pick-timely-server.vercel.app/recruitments/${id}`)
        .then(res =>res.json())
        .then(data => {
            setRecruits(data);
        })
    }, [id]);

    return (
       
            <div className='w-[80%] flex justify-center mx-auto p-10'>
                <div className="flex justify-between items-center gap-5">
                    <img src={recruit.img} className='w-[50%] mx-auto rounded-md' alt="" />
                    <div>
                    <h2 className="text-3xl font-bold">{recruit.title}</h2>
                    <p className='mt-3'>{recruit.description}</p>
                    </div>
                </div>
            </div>
        
    );
};

export default RecruitDetails;