import React, { useEffect, useState } from 'react';

const recruitmentData = [
    {
        id:1,
        title:"Remote interviews",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:2,
        title:"Candidate database",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:3,
        title:"Flexible hours",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:4,
        title:"Time zones",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:5,
        title:"Candidate portal",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:6,
        title:"Information days",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    }
]

const Recruitment = () => {

    const [recruitments, setRecruitments] = useState([]);

    useEffect(()=>{
        setRecruitments(recruitmentData)
    }, []);

    return (
        <div>
            <div className=" bg-slate-300 ">
                <div className=" text-center">
                    <div className="w-full">
                        <h1 className="lg:text-5xl text-2xl font-bold w-full mx-auto mb-10">A good scheduler gives you more than the basics without compromising the essentials</h1>
                        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-12'>
                            {
                                recruitments.map(recruitment => <div className="card w-96 bg-base-100 shadow-xl">
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
        </div>
    );
};

export default Recruitment;