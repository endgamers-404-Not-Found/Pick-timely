import React, { useState } from 'react';

const images = [
    {
        id:1,
        type:"15mins",
        title: "15 mins meeting schedule option",
        img:"https://i.ibb.co/8cPKJmQ/Screenshot-31.png"
    },
    {
        id:2,
        type:"30mins",
        title: "30 mins meeting schedule option",
        img:"https://i.ibb.co/FzXYgMT/team.jpg"
    },
    {
        id:3,
        type:"60mins",
        title: "60 mins meeting schedule option",
        img:"https://i.ibb.co/B6tLFB4/fast-service.png"
    },
    {
        id:4,
        type:"90mins",
        title: "90 mins meeting schedule option",
        img:"https://i.ibb.co/YXbCGn7/crm.jpg"
    },
]

const Meetings = () => {
  
    const [meeting, setMeeting] = useState(images);

    return (
        <div className="hero bg-base-200 p-20">
            <div className="hero-content flex-col lg:flex-row-reverse mt-10">
              { meeting.img === '15mins' ? <img src={meeting.img} className="w-[100%] lg:w-[50%] rounded-lg shadow-2xl" alt='' /> : '' }

                <div className='w-[100%] lg:w-[100%] mb-10'>
                    <h1 className="lg:text-5xl text-2xl font-bold py-20">Set up your meetings in minutes. Really!</h1>
                   
                   
                    {
                        images.map((image) => <div key={image.id}>
                            <h1 onClick={()=>setMeeting(image.id)} className='md:text-xl lg:text-3xl cursor-pointer'>{image.title}</h1>
                            <div className="divider"></div>
                        </div>)
                }
                   
                </div>
            </div>
        </div>
    );
};

export default Meetings;