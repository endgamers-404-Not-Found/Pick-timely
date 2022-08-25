import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../SharedComponents/Spinner';
import CheckoutForm from './CheckoutForm';

function Payment() {
    const { id } = useParams()
    const [bundle, setBundle] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/package/${id}`)
            .then(res => res.json())
            .then(data => setBundle(data))
    }, [id])

    if (!bundle) {
        return <Spinner></Spinner>
    }

    const stripePromise = loadStripe('pk_test_51LQEBdJIn250YWhJH5a1IHzpXWhAXuIwMrRyIhw2XKilukXXQpy0wVEF0CraVah4wlRlt4h8uBsqr5WVlnFgmfxP00eJHhNozi')
    return (
        <div className='lg:h-72 lg:mx-10 lg:my-28 lg:flex'>
            {/* package detail show here */}
            <div className='lg:w-6/12 w-10/12 lg:flex p-2 rounded-xl shadow-2xl shadow-black m-4 my-auto'>

                <img src={bundle?.img} alt="" className="rounded-xl w-6/12" />

                <div className=" p-6">
                    <h2 className="card-title text-3xl mb-1">{bundle?.name}</h2>
                    <p>{bundle?.point.map(p => <p className='flex items-center '>
                        <img className='w-6 mask mask-circle h-6 m-2' src="https://i.ibb.co/dK05bDg/image.png" alt="" />
                        <p className='text-left mb-2'>{p}</p>
                    </p>)}</p>
                    <p className='text-xl font-semibold'>Price: $ {bundle?.price} {bundle.price !== 'free' ? <span className='text-sm'>/month</span> : ''}</p>

                </div>
            </div>
            {/* payment here */}
            <div>
                <div className="card w-96  shadow-2xl shadow-black">

                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm bundle={bundle} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
