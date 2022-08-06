import React, { useEffect, useState } from 'react';

const recruitmentData = [
    {
        id:1,
        title:"Time zones",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:2,
        title:"Calendar dashboard",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:3,
        title:"Interview summaries",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:4,
        title:"Cancellations and rescheduling",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:5,
        title:"Email and text alerts",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:6,
        title:"Buffer times",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:7,
        title:"Custom time slots",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:8,
        title:"Custom fields",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:9,
        title:"Branded booking page",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:10,
        title:"Online courses",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    }
]


const Podcasts = () => {

    const [recruitments, setRecruitments] = useState([]);

    useEffect(()=>{
        setRecruitments(recruitmentData)
    }, []);

    return (
        
            <div className="hero bg-slate-300 p-20">
                <div className="hero-content text-center">
                    <div className="w-full">
                    <div className='w-[100%] lg:w-[70%] mx-auto'>
                        <h1 className="lg:text-5xl text-2xl font-bold mb-10">Everything you need to successfully coordinate interviews</h1>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                            {
                                recruitments.map(recruitment => <div className="card w-94 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <img src={recruitment.img} className='w-24 mx-auto' alt="" />
                                    <h2 className="text-center text-3xl font-bold">{recruitment.title}</h2>
                                    <p>{recruitment.description}</p>
                                    <div className="card-actions justify-center">
                                        <button className="btn btn-primary">see details</button>
                                    
                                    </div>
                                </div>
                            </div>)
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Podcasts;