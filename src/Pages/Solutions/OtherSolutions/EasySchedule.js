import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EasySchedule = () => {
    const {id} = useParams();
    const [easy, setEasy] = useState('');
    useEffect(()=>{
        fetch(`https://pick-timely.herokuapp.com/easySchedule/${id}`)
        .then(res =>res.json())
        .then(data => {
            setEasy(data);
        })
    }, [id]);
    return (
        <div className='w-[80%] flex justify-center mx-auto p-10'>
                <div className="flex justify-between items-center gap-5">
                    <img src={easy.img} className='w-[50%] mx-auto rounded-md' alt="" />
                    <div>
                    <h2 className="text-3xl font-bold">{easy.title}</h2>
                    <p className='mt-3'>{easy.description}</p>
                    </div>
                </div>
            </div>
    );
};

export default EasySchedule;