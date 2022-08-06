import React, { useEffect, useState } from 'react';

const accountsData = [
    {
        id:1,
        title:"Freedom of choice",
        description: "Customers can choose which of your consultants they want to talk to—an ideal option when you're managing an agency with multiple counselors.",
        img: "https://i.ibb.co/FzXYgMT/team.jpg"
    },
    {
        id:2,
        title:"Self-scheduling",
        description: "Your booking page will be entirely online, making it accessible at any time. Whether it's in the middle of the day or just before dawn, your clients can schedule an appointment whenever they need to.",
        img: "https://i.ibb.co/FzXYgMT/team.jpg"
    },
    {
        id:3,
        title:"Mobile booking",
        description: "Customers don't have to be on their laptops or PCs to contact you. Your booking page will be responsive to any mobile device they have, letting them get in touch easily.",
        img: "https://i.ibb.co/FzXYgMT/team.jpg"
    }
];

const Career = () => {

    const [accounts, setAccounts] = useState([]);

    useEffect(()=>{
        setAccounts(accountsData)
    }, []);

 
    return (
        <div className='flex justify-center items-center p-20'>
            <div className="w-full">
                <div className='w-[100%] lg:w-[50%] mx-auto'>
                    <h1 className="lg:text-5xl font-bold mt-10 text-center text-2xl">A great scheduler should fulfill your customers' expectations</h1>
                    <p className='text-center'>Just like a great consultation session.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center gap-10 mt-20'>
                    {
                        accounts.map(account => (
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <img src={account.img} className='w-96 mx-auto rounded-md' alt="" />
                                <h2 className="text-center text-3xl font-bold">{account.title}</h2>
                                <p>{account.description}</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">see details</button>
                                
                                </div>
                            </div>
                        </div>)
                    ) }
                    
                </div>
            </div>
        </div>
    );
};

export default Career;