import axios from 'axios';
import Carousel from "nuka-carousel";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';
import { motion } from 'framer-motion';
import Rating from 'react-rating';
import { AiFillStar } from 'react-icons/ai';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const url = `https://pick-timely.herokuapp.com/review`;
    useEffect(() => {
        const allReview = async () => {
            const { data } = await axios.get(url, {
            })
            setReviews(data)
        }
        allReview();
    }, [url])

    console.log(reviews);

    return (
        <div className='my-12'>
            {/* <h1 className='text-center text-5xl font-bold mb-3'>What Our Client Says</h1>

            <div className="avatar-group -space-x-6 flex justify-center">
                <div className="avatar">
                    <div className="w-12">
                        <img alt='' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <img alt='' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <img alt='' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className="w-12 bg-neutral-focus text-neutral-content">
                        <span>+99</span>
                    </div>
                </div>
            </div>

            <div className='w-2/4 mx-auto mt-10'>
                <Carousel
                    slidesToShow={1}
                    autoplay
                >
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }

                </Carousel>
            </div>

            <div className='flex justify-center'>
                <Link to='addreview' className='btn btn-primary mt-5 '>Add Your Review</Link>
            </div> */}

            <motion.div className='mx-52 cursor-grab overflow-hidden bg-green-300'>
                <motion.div drag="x" className='flex '>
                    {
                        reviews.map((review) => {
                            return (
                                <motion.div  className="bg-sky-200 min-h-[10rem] min-w-[30rem] shadow-lg border-2 md:p-20">

                                    <div className="w-full h-full">
                                        <p className=''>{review?.feedback}</p>
                                        <Rating
                                            initialRating={review.rating}
                                            emptySymbol={<AiFillStar style={{ color: 'gray', fontSize: '27px' }} />}
                                            fullSymbol={<AiFillStar style={{ color: 'goldenrod', fontSize: '27px' }} />}
                                            readonly
                                        ></Rating>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Reviews;