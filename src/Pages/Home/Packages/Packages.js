import React from 'react'

function Packages() {

    const fakeData = [
        { img: 'https://i.ibb.co/6FjwdWc/group-diverse-business-people-meeting-45852716.jpg', name: 'More then five', point: ['More then five members can join', '4k/8k video quality', 'Best sound quality', 'Present by screen share'], button:'Buy Package', price:130 },
        { img: 'https://i.ibb.co/wSWvFWF/image.png', name: 'Less then five', point: ['Less then five members can join', 'HD video quality', 'Best sound quality', 'Present by screen share'], button:'Buy Package', price:50 },
        { img: 'https://i.ibb.co/DQntmBj/one-to-business-meeting-cartoon-vector-illustration-two-businessmen-sitting-opposite-each-other-form.jpg', name: 'One by one', point: ['One by one meeting', 'HD video quality', 'Best sound quality', 'Present by screen share'], button:'Free', price:'free' }
    ];


    return (
        <div className='my-12'>
            <h1 className='text-center text-5xl font-bold mb-3' >Meeting scheduling packages</h1>
            <p  className='text-center text-xl font-semibold'>Choose the best package for you</p>
            <div className='grid grid-cols-3 my-6 mx-32 justify-items-center '>
                {
                    fakeData.map(data => 
                        <div class="card w-96 rounded shadow-2xl shadow-gray-500 lg:w-10/12">
                            <figure class="px-4 pt-6">
                                <img src={data.img} alt="" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center px-2">
                                <h2 class="card-title text-3xl mb-1">{data.name}</h2>
                                <p>{data.point.map(p=><p className='flex items-center '>
                                <img className='w-6 h-6 m-2' src="https://i.ibb.co/dK05bDg/image.png" alt=""/>
                                 <p className='text-left mb-2'>{p}</p>
                                 </p> )}</p>
                                <p className='text-xl font-semibold'>Price: $ {data.price} {data.price!=='free'? <span className='text-sm'>/month</span> : ''}</p>
                                <div>
                                    <button className={`btn border-2 border-primary ${data.button==='Free'? 'btn-primary text-white' : 'bg-white text-primary'}   font-bold  hover:btn-primary w-72 rounded-sm`}>{data.button}</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Packages;
