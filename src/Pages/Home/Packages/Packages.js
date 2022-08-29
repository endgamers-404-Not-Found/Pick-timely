import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../SharedComponents/Spinner';

function Packages() {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://pick-timely.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    if (packages === null) {
        return <Spinner></Spinner>
    }
    // console.log(packages)


    return (
        <div className='my-12'>
            <h1
            data-aos='fade-down'
            data-aos-delay='1000'
            className='text-center text-5xl font-bold mb-3' >Meeting scheduling packages</h1>
            <p
            data-aos='fade-down'
            data-aos-delay='900'
            className='text-center text-xl font-semibold'>Choose the best package for you</p>
            <div className='grid lg:grid-cols-3 my-6 lg:mx-32 mx-0 justify-items-center '>
                {
                    packages.map((data,index) => 
                        <div
                        data-aos='zoom-in'
                        data-aos-offset='300'
                        data-aos-delay='1000'
                        
                            className="card w-8/12 rounded shadow-2xl shadow-black lg:w-10/12" key={index}>

                            <figure className="px-4 pt-6">
                                <img src={data.img} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center px-2">
                                <h2 className="card-title text-3xl mb-1">{data.name}</h2>
                                <div>{data.point.map((p, index) => <div key={index} className='flex items-center '>
                                    <img className='w-6 h-6 m-2 mask mask-circle' src="https://i.ibb.co/dK05bDg/image.png" alt="" />
                                    <p className='text-left mb-2'>{p}</p>
                                </div>)}</div>
                                <p className='text-xl font-semibold'>Price: $ {data.price} {data.price !== 'free' ? <span className='text-sm'>/month</span> : ''}</p>
                                <Link to={data.button === 'Free' ? '/dashboard' : `/payment/${data._id}`}>
                                    <button className={`btn border-2 border-primary btn-primary text-white  font-bold  hover:btn-primary w-72 rounded-sm`}>{data.button}</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Packages;