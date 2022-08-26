import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from 'react-rating-stars-component';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import Spinner from '../../../SharedComponents/Spinner';

const AddReview = () => {
    const [user, loading] = useAuthState(auth)
    console.log(user)
    const [currentRating, setCurrentRating] = useState(0)
    const ratingChanged = (rating) => {
        setCurrentRating(rating)
    }
    const handleFeedback = e => {
        e.preventDefault();
        const review = {
            name: user?.displayName,
            photo: user?.photoURL,
            feedback: e.target.feedback.value,
            rating: currentRating
        }
        fetch('https://pick-timely.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Thank you so much for your feedback',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        e.target.reset();
    }


    if (loading) {
        return <Spinner />
    }

    return (
        <div className='mb-12 py-20'>
            <h1 className='mt-12 text-center font-bold text-3xl'>Your Feedback</h1>

            <div className='flex justify-center'>
                <div className="mt-8  stack">
                    <div className="card shadow-2xl shadow-black text-primary-content">
                        <div className="card-body">
                            <div className='flex justify-center'>
                                <ReactStars
                                    size={40}
                                    isHalf={true}
                                    activeColor='goldenrod'
                                    onChange={ratingChanged}
                                />
                            </div>
                            <form onSubmit={handleFeedback}>
                                <textarea name='feedback' className=" bg-gray-400 text-white placeholder:text-white textarea  w-96" placeholder="Please add your feedback here"></textarea><br />

                                <input className='w-full btn-sm btn btn-primary mt-3' type="submit" value="Add Feedback" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;