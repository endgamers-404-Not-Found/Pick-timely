import React, { useEffect, useState } from 'react';
import meeting from '../../../assets/banner.png'

const salesData = [
    {
        id: 1,
        title: "PickTimely CRM",
        description: "In sales, customer relations is everything. That's why as soon as your client schedules a discovery call, we send their details right into your Zoho CRM account.",
        img: "https://i.ibb.co/YXbCGn7/crm.jpg"
    },
    {
        id: 2,
        title: "PickTimely Meeting",
        description: "Pick time is a meeting origanizable platform. You can arrange from anywhere. It is really easy, also you can cancel meeting to we notify you if other person is avilabe or not. Try timely",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TWxVYmjmseweze3LoSeLj_JjCqDu4VKnWQ&usqp=CAU"
    },
    {
        id: 3,
        title: "PickTimely Calendar.",
        description: "With pick timely this it is too easy that you manage your routine and also work with by exact calender time. We provide you a calender that you ca choose your preferred work time to work.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJx-LtZN9jBDNPzfUU-sgux8llJk6aWKhqZRSxP_luw&s"
    }
];

const Sales = () => {

    const [sales, setSales] = useState([]);

    useEffect(() => {
        setSales(salesData)
    }, []);

    return (
        <div>
            <div class="hero-content text-center">
                <div class="w-full">
                    <h1 class="lg:text-5xl text-2xl font-bold w-full mx-auto mb-10">A In sales and in scheduling, you've got to be well-connected.</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                        {
                            sales.map(sales => <div class="card w-80 h-[400px] bg-base-100 shadow-xl relative">
                                <div class="card-body">
                                    <img src={sales.img} className='w-24 mx-auto' alt="" />
                                    <h2 class="text-center text-3xl font-bold">{sales.title}</h2>
                                    <p>{sales.description}</p>
                                    <div class="card-actions justify-center">
                                        <button class="w-full btn btn-primary border-2 px-32 absolute bottom-0">see details</button>
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

export default Sales;