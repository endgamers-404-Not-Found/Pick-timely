import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SharedButton from '../../../SharedComponents/SharedButton';
import Swal from 'sweetalert2';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleFeedback = e => {
        e.preventDefault();
        const review = {
            email: user?.email,
            feedback: e.target.feedback.value,
            rating: e.target.rating.value
        }
        fetch('http://localhost:5000/review', {
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
    return (
        <div className='mb-12'>
            <h1 className='mt-12 text-center font-bold text-3xl'>Your Feedback</h1>

            <div className='flex justify-center'>
                <div className="mt-8  stack">
                    <div class="card shadow bg-[#F1ECFF] text-primary-content">
                        <div class="card-body">
                            <form onSubmit={handleFeedback}>
                                <textarea name='feedback' class="text-gray-700 textarea textarea-primary w-96" placeholder="Please add your feedback here"></textarea><br />
                                <input name='rating' type="text" placeholder="Rate us (out of 5)" class="input text-gray-700 input-bordered input-sm w-96" /><br /><br />
                                <input className='w-full btn-sm btn btn-primary btn-outline' type="submit" value="Add Feedback" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;