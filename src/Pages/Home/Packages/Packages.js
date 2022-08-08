import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Spinner from '../../../SharedComponents/Spinner';

function Packages() {

    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://pick-timely.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])
   
    if(packages===null){
        return <Spinner></Spinner>
    }
    // console.log(packages)


    return (
        <div className='my-12'>
            <h1 className='text-center text-5xl font-bold mb-3' >Meeting scheduling packages</h1>
            <p  className='text-center text-xl font-semibold'>Choose the best package for you</p>
            <div className='grid lg:grid-cols-3 my-6 lg:mx-32 mx-0 justify-items-center '>
                {
                    packages.map(data => 
                        <div className="card w-8/12 rounded shadow-2xl shadow-gray-500 lg:w-10/12">
                            <figure className="px-4 pt-6">
                                <img src={data.img} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center px-2">
                                <h2 className="card-title text-3xl mb-1">{data.name}</h2>
                                <p>{data.point.map(p=><p className='flex items-center '>
                                <img className='w-6 h-6 m-2' src="https://i.ibb.co/dK05bDg/image.png" alt=""/>
                                 <p className='text-left mb-2'>{p}</p>
                                 </p> )}</p>
                                <p className='text-xl font-semibold'>Price: $ {data.price} {data.price!=='free'? <span className='text-sm'>/month</span> : ''}</p>
                                <Link to={data.button==='Free' ? '/dashboard':`/payment/${data._id}`}>
                                    <button className={`btn border-2 border-primary ${data.button==='Free'? 'btn-primary text-white' : 'bg-white text-primary'}   font-bold  hover:btn-primary w-72 rounded-sm`}>{data.button}</button>
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