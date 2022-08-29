import React, { useEffect, useState } from 'react';

const salesData = [
    {
        id:1,
        title:"PickTimely CRM",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/YXbCGn7/crm.jpg"
    },
    {
        id:2,
        title:"PickTimely Meeting",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/YXbCGn7/crm.jpg"
    },
    {
        id:3,
        title:"PickTimely Calendar. Or, well, Google.",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/YXbCGn7/crm.jpg"
    }
];

const Sales = () => {

    const [sales, setSales] = useState([]);

    useEffect(()=>{
        setSales(salesData)
    }, []);

    return (
        <div>
            <div className="hero bg-blue-900 p-20">
                <div className="text-center">
                    <div className="w-full">
                        <h1 className="lg:text-5xl text-3xl font-bold w-full mx-auto mb-10 text-white">In sales and in scheduling, you've got to be well-connected.</h1>
                        <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 place-items-center gap-5'>
                            {

                                sales.map(sale => <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <img src={sale.img} className='w-40 mx-auto' alt="" />
                                    <h2 className="text-center text-3xl font-bold">{sale.title}</h2>
                                    <p>{sale.description}</p>
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

export default Sales;