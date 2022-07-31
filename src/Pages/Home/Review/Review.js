import React from 'react';
import Rating from 'react-rating';
import { AiFillStar } from 'react-icons/ai';

const Review = ({review}) => {
    
    return (
        <div class="card card-side bg-neutral text-neutral-content shadow-xl">
            <div class="card-body text-center">
                <p className=''>{review?.feedback}</p>
                <Rating
                        initialRating={review.rating}
                        emptySymbol={<AiFillStar style={{ color: 'gray', fontSize: '27px' }} />}
                        fullSymbol={<AiFillStar style={{ color: 'goldenrod', fontSize: '27px' }} />}
                        readonly
                    ></Rating>
            </div>
        </div>
    );
};

export default Review;