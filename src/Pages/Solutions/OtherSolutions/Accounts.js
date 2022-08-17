import React, { useEffect, useState } from 'react';

const accountsData = [
    {
        id:1,
        title:"Round the clock scheduling",
        description: "I Let clients schedule appointments at any time from anywhere. Your booking page is also automatically mobile-responsive, making it even easier to book your services.",
        img: "https://www.callcentrehelper.com/images/stories/2013/10/antique-clock-calendar-pencil-760.jpg"
    },
    {
        id:2,
        title:"Recurring consultations",
        description: "Set up a series for varying consulting practices. For instance, whether you offer weekly and monthly sessions or 10 sessions for each client, you can manage them all in a single page.",
        img: "https://jobsoidstorage.blob.core.windows.net/job-images/JobDescription/Image/2010-recruitment-consultant-20211102132659623.png"
    },
    {
        id:3,
        title:"Suits individuals and teams",
        description: "Invite fellow accountants and tax consultants, manage business across locations, and maintain multiple rooms. Or use Bookings for your one-person practice. It works perfectly either way.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_7PSFq6iq-rSEnXSJX4oc-pFNO1UCqlkKg&usqp=CAU"
    },
    {
        id:4,
        title:"Mobile apps",
        description: "Stay on schedule, reschedule, or cancel appointments regardless of where you are using complimentary mobile apps for iOS and Android.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uUR2kNy-bDl70nxh2sydRr_9D-6N-kxTOQ&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uUR2kNy-bDl70nxh2sydRr_9D-6N-kxTOQ&usqp=CAU"
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
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-2'>
                {
                    accounts.map(account => <div className="bg-base-100 shadow-xl p-10">
                        <div>
                            <img src={account.img} className='rounded-lg w-full' alt="" />
                            <h2 className="text-center text-3xl font-bold">{account.title}</h2>
                            <p>{account.description}</p>
                        </div>
                        <div className="card-actions justify-center mt-10">
                            <button className="btn btn-primary">see details</button>
                        </div>
                    
                </div>)
                }
                
            </div>
        </div>
      
       
    );
};

export default Accounts;