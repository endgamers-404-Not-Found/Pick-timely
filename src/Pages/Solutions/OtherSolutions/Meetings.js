import React, { useEffect, useState } from 'react';

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
        img:"https://i.ibb.co/NyhDxyG/40-minutes.jpg"
    },
    {
        id:3,
        type:"60mins",
        title: "60 mins meeting schedule option",
        img:"https://i.ibb.co/vh3q9mm/60-minutes.png"
    },
    {
        id:4,
        type:"90mins",
        title: "90 mins meeting schedule option",
        img:"https://i.ibb.co/fnT8mHB/90-minutes.png"
    },
]





const Meetings = () => {
  
    const [meeting, setMeeting] = useState(images);
    const [show, setShow] = useState(false);
    useEffect(()=>{
        setMeeting(show);

    }, [show])

    return (

        <div className="hero  p-20">
            <div className="hero-content flex-col lg:flex-row-reverse mt-10">
              <div className='w-[100%] lg:w-[50%] flex lg:justify-end justify-center'>
              { show ? <img src={meeting.img} className="w-[80%] rounded-lg shadow-2xl" alt='' /> : <img src='https://i.ibb.co/8cPKJmQ/Screenshot-31.png' className="w-[100%] rounded-lg shadow-2xl" alt='' /> }
              </div>

                <div className='w-[100%] lg:w-[50%] mb-10'>
                    <h1 className="lg:text-5xl text-2xl font-bold py-20">Set up your meetings in minutes. Really!</h1>
                   
                   
                    {
                        images.map((image) => <div key={image.id}>
                            <h1 onClick={()=>setShow(image)} className='md:text-xl lg:text-3xl cursor-pointer'>{image.title}</h1>
                            <div className="divider"></div>
                        </div>)
                }
                   
                </div>
            </div>
        </div>
    );
};

export default Meetings;