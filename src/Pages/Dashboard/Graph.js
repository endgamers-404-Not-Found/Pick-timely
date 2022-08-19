import React, { useEffect, useState } from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';



function Graph() {
    const [host, setHost] = useState([]);
    const [type, setType] = useState([]);
    let fifteens = 0;
    let thirties = 0;
    let sixties = 0;
    let nineties = 0;
    let one = 0;
    let group = 0;
    let corporate = 0;

    useEffect(() => {
        const hosts = [];
        const types = [];
        fetch('https://pick-timely.herokuapp.com/hoster')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    data.map((d) => {
                        //meeting duration
                        const duration = parseInt(d.duration);
                        hosts.push(duration)
                        //meeting type
                        const meeting = d.eventType;
                        types.push(meeting)

                        setType(types)
                        setHost(hosts)
                        return hosts;
                    })
                }
            })

    }, [])


    //meeting type
    for (let i = 0; i < type.length; i++) {
        const meeting = type[i];
        if (meeting === "Corporate Meeting") {
            corporate = corporate + 1;
        }
        else if (meeting === "One-to-one") {
            one = one + 1;
        }
        else if (meeting === "Group Meeting") {
            group = group + 1;
        }
    }


    //meeting duration
    for (let i = 0; i < host.length; i++) {
        const number = host[i];
        if (number === 15) {
            fifteens = fifteens + 1;
        }
        else if (number === 30) {
            thirties = thirties + 1;
        }
        else if (number === 60) {
            sixties = sixties + 1;
        }
        else if (number === 90) {
            nineties = nineties + 1;
        }
    }
    
    const data = [{ name: 'Comparison of meeting duration (in minute)', fifteen: fifteens, thirty: thirties, sixty: sixties, ninety: nineties, amt: 2400 }];
    const data2 = [{ name: 'Comparison of meeting type', OneByOne: one, group: group, corporate: corporate, amt: 2400 }];
    return (
        <div className=''>
            <div>
                <h2 className='text-4xl text-center font-semibold mt-3 lg:mt-6'>Overview in Graph</h2>
                <p className='text-xl text-center '>see your application's quick overview with graph</p>
            </div>

            <div className='lg:flex justify-center  mt-10'>
                {/* meeting duration */}
                <BarChart className='lg:mr-20'  width={400} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="fifteen" fill="#7F00FF" />
                    <Bar dataKey="thirty" fill="#003FFF" />
                    <Bar dataKey="sixty" fill="#BF00FE" />
                    <Bar dataKey="ninety" fill="#00BFFE" />
                </BarChart>

                {/* meeting type */}
                <BarChart width={300} height={300} data={data2}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="OneByOne" fill="#7F00FF" />
                    <Bar dataKey="group" fill="#003FFF" />
                    <Bar dataKey="corporate" fill="#BF00FE" />
                </BarChart>
            </div>
        </div>
    )
}

export default Graph;
