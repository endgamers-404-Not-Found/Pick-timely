import React, { useEffect, useState } from 'react';

const recruitmentData = [
    {
        id:1,
        title:"Remote interviews",
        description: "On-site interviews have their place, but videos make recruiting more flexible. Powered by Meeting, screen your candidates from the comfort of remote working.",
        img: "https://i.ibb.co/80j9VzF/remote.png"
    },
    {
        id:2,
        title:"Candidate database",
        description: "Whether you've already interviewed them or are waiting to, every candidate will be in Bookings by default. Filter, sort, and even export the ones proceeding to the next round for easy contact. You can also integrate your recruitment software to have all details in one place.",
        img: "https://i.ibb.co/NmGNk2R/database.jpg"
    },
    {
        id:3,
        title:"Flexible hours",
        description: "Recruiting isn't a typical 9 to 5 job. Define your availability—specifically by day and time—including breaks and vacations, and the system will only display those times on your booking page",
        img: "https://i.ibb.co/QDvgpcP/flexible.jpg"
    }
]

const Recruitment = () => {

    const [recruitments, setRecruitments] = useState([]);

    useEffect(()=>{
        setRecruitments(recruitmentData)
    }, []);

    return (
        <div>
            <div className="hero bg-slate-300 p-20">
                <div className="hero-content text-center">
                    <div className="w-full">
                        <div className='w-[100%] lg:w-[50%] mx-auto'>
                            <h1 className="lg:text-4xl font-bold mb-10 text-center text-2xl">A good scheduler gives you more than the basics without compromising the essentials</h1>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                            {
                                recruitments.map(recruitment => <div className="card w-94 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <img src={recruitment.img} className='w-56 mx-auto' alt="" />
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