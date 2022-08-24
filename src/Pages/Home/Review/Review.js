import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Rating from 'react-rating';
import { FaQuoteLeft } from 'react-icons/fa';

const Review = ({ review }) => {

    return (
        <div className="card card-side bg-slate-300 text-neutral-focus ">
            <div data-testid="reviewtest" className="card-body text-center">
            <FaQuoteLeft className='text-5xl mb-[-34px]'/>
                <div className='avatar flex justify-center'>
                    <div className='w-14 rounded-full'>
                        <img alt='' src={review?.photo} />
                    </div>
                </div>
                <p className=''>{review?.feedback}</p>
                <p className='text-xl font-semibold'>{review?.name}</p>
           
                <Rating
                    initialRating={review.rating}
                    emptySymbol={<AiFillStar style={{ color: 'gray', fontSize: '25px' }} />}
                    fullSymbol={<AiFillStar style={{ color: 'goldenrod', fontSize: '25px' }} />}
                    readonly
                ></Rating>
            </div>
        </div>
    );
};

export default Review;