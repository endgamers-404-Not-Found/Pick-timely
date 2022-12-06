import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const EasySchedule = () => {
    const { id } = useParams();
    const [easy, setEasy] = useState('');
    useEffect(() => {
        fetch(`https://pick-timely-server.vercel.app/easySchedule/${id}`)
            .then(res => res.json())
            .then(data => {
                setEasy(data);
            })
    }, [id]);
    return (
        <motion.div className='w-[80%] flex justify-center mx-auto p-10'
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
            <div className="flex justify-between items-center gap-5">

                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}

                    src={easy.img} className='w-[50%] mx-auto rounded-md' alt="" />

                <div>
                    <h2 className="text-3xl font-bold">{easy.title}</h2>
                    <p className='mt-3'>{easy.description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default EasySchedule;