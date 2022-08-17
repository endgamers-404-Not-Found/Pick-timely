import React, { useEffect, useState } from 'react';

const recruitmentData = [
    {
        id: 1,
        title: "Remote interviews",
        description: "Remote interview is a another great feature of Pick-timly. when a company tries to take interview they have to gather some cadiadate to test. You can skip this method with Picktimely. Your company can organize a interview waiting room and a private meeting room also.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bH68Z6FWTOo-HK33P5owD-dos1VnEn2QWA&usqp=CAU"
    },
    {
        id: 2,
        title: "Candidate database",
        description: "In picktime you don't have to worry about your candidate data and notes you have taken during meeting. When you took their interview If you choose to notes in our given notepad you notes can't be banised and aslo take take full meeting informationin out database, Som you don't have to worry about meeting information.",
        img: "https://prod-discovery.edx-cdn.org/media/course/image/d3baec2d-4a92-4ae8-816a-fc77c8cb2f47-9510a4e67c95.small.jpeg"
    },
    {
        id: 3,
        title: "Flexible hours",
        description: "In pick-time we provide you greatest flexiblity in meeting. althrough you can arrange meeting in time but it's possible that you can also shift meeting in your preffered hour. And notify latest meeting time with your meeting member.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfD1du__NrN-bGnHCgX2GGqsrEKSPip5PUw&usqp=CAU"
    },
    {
        id: 4,
        title: "Time zones",
        description: "We handle also different time zone difficultiy. If your meeting person is from another time zone but you wanna arrange a meeting by maitaining his time zone also send all the notifications in day time. Yeah! that's grat you can do it in pick-timely.",
        img: "https://assets-global.website-files.com/6104304f085fddea384acd87/627bdcfb35a4977815467223_Time%20Zones.png"
    },
    {
        id: 5,
        title: "Candidate portal",
        description: "We also manage a candidate portal that you can find your master woreker for your job done perfectly. it's free to post a job in the portal. and you can manage worker with the help of pick-timely. Great yeah!",
        img: "https://cdn.dribbble.com/users/2279697/screenshots/10725534/media/dc183650fd4c9d2f32ccef6168ed036e.jpg?compress=1&resize=400x300&vertical=top"
    },
    {
        id: 6,
        title: "Information days",
        description: "Informatin days are great to have talk about info and make your company a great productive and benificial one. It help you to arrange a great festival in diffrent days",
        img: "https://i.ibb.co/B6tLFB4/fast-service.png"
    }
]

const Recruitment = () => {

    const [recruitments, setRecruitments] = useState([]);

    useEffect(() => {
        setRecruitments(recruitmentData)
    }, []);

    return (
        <div>
            <div className="p-20">
                <div className="text-center">
                    <div className="w-full">
                        <h1 className="lg:text-4xl text-2xl font-bold w-full mx-auto mb-10">A good scheduler gives you more than the basics without compromising the essentials</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center shadow-lg'>
                            {
                                recruitments.map(recruitment => <div className="card w-94 bg-base-100 shadow-xl relative h-[500px]">
                                    <div className="card-body">
                                        <img src={recruitment.img} className='w-2/4 mx-auto rounded-lg' alt="" />
                                        <h2 className="text-center text-2xl font-bold">{recruitment.title}</h2>
                                        <p className="text-left font-semibold">{recruitment.description}</p>
                                        <div className="card-actions justify-center">
                                        <button className="w-full btn btn-primary border-2 px-32 absolute bottom-0">see details</button>
                                </div>
                                </div>
                    </div>)
                            }

                </div>
            </div>
        </div>
            </div >
        </div >
    );
};

export default Recruitment;