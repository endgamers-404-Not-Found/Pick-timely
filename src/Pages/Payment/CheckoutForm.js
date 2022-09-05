import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../../SharedComponents/Spinner';

function CheckoutForm({ bundle:data }) {
    const [user,loading]=useAuthState(auth)
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const [trnxId, setTrnxId] = useState('');
    const { price } = data;
    useEffect(() => {
        if (price) {
            fetch('https://pick-timely.herokuapp.com/createPaymentIntent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret)
                    }
                })
        }


    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setPaymentError(error.message)
        }
        else {
            setPaymentError('')
        }
        setSuccess('')

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email,
                    },
                },
            },
        );

        if (intentError) {
            setPaymentError(intentError?.message)
        }
        else {
            setPaymentError('')
            setSuccess('Congratulations ! your payment is completed')
            setTrnxId(paymentIntent?.id)
            // console.log(paymentIntent.id, _id)

            fetch(`https://pick-timely.herokuapp.com/payment/${user.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify({paymentIntent,price})
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                })
        }
    }


    if(loading){
        return <Spinner></Spinner>
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement className='bg-gray-400 p-2 rounded-md'/>
                <button className='btn btn-primary btn-sm mt-6 text-white' type="submit" disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
            </form>
            {paymentError && <p className='text-red-600'>{paymentError}</p>}
            {success && <p className='text-green-500'>{success}</p>}
            {trnxId && <p className='text-green-500'>your transaction id - <span className='text-red-600'>{trnxId}</span></p>}
        </>
    )
}

export default CheckoutForm;