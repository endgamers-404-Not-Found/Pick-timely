import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Rating from 'react-rating';

const Review = ({review}) => {
    
    return (
        <div className="card card-side bg-neutral text-neutral-content shadow-xl">
            <div data-testid="reviewtest" className="card-body text-center">
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