import React from 'react';

const Review = ({ review }) => {
    console.log(review.rate)
    const { name, text, image, rate } = review
    return (
        <div>
            <div class="card w-full bg-amber-200 shadow-xl">

                <div className="flex justify-evenly">
                   <img className='mask  mask-circle' src={image} alt="" />
                    <h2 class="card-title">Name:{name}</h2>
                </div>

                <div class="card-body items-center text-center">
                    <p>{text}</p>
                   <p>
                    Rating:{rate}
                   </p>
                </div>
            </div>
        </div>
    );
};

export default Review;