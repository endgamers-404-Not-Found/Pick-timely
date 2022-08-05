import React, { useEffect, useState } from 'react';

const accountsData = [
    {
        id:1,
        title:"Round the clock scheduling",
        description: "I Let clients schedule appointments at any time from anywhere. Your booking page is also automatically mobile-responsive, making it even easier to book your services.",
        img: "https://i.ibb.co/FzXYgMT/team.jpg"
    },
    {
        id:2,
        title:"Recurring consultations",
        description: "Set up a series for varying consulting practices. For instance, whether you offer weekly and monthly sessions or 10 sessions for each client, you can manage them all in a single page.",
        img: "https://i.ibb.co/FzXYgMT/team.jpg"
    },
    {
        id:3,
        title:"Suits individuals and teams",
        description: "Invite fellow accountants and tax consultants, manage business across locations, and maintain multiple rooms. Or use Bookings for your one-person practice. It works perfectly either way.",
        img: "https://i.ibb.co/FzXYgMT/team.jpg"
    },
    {
        id:4,
        title:"Mobile apps",
        description: "Stay on schedule, reschedule, or cancel appointments regardless of where you are using complimentary mobile apps for iOS and Android.",
        img: "https://i.ibb.co/FzXYgMT/team.jpg"
    }
];


const Accounts = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(()=>{
        setAccounts(accountsData)
    }, []);

    return (
       
        <div className="w-full p-20">
            <div className='w-[100%] lg:w-[50%] mx-auto'>
                <h1 className="lg:text-5xl text-2xl font-bold text-center p-10">Appointment scheduler for accounting professionals</h1>
            </div>
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    accounts.map(account => <div className="w-[100%] lg:w-[50%] bg-base-100 shadow-xl">
                    
                        <img src={account.img} className='rounded-md' alt="" />
                        <h2 className="text-center text-3xl font-bold">{account.title}</h2>
                        <p>{account.description}</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">see details</button>
                        
                        </div>
                    
                </div>)
                }
                
            </div>
        </div>
      
       
    );
};

export default Accounts;