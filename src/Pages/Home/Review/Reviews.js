import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Rating from 'react-rating';
import { AiFillStar } from 'react-icons/ai';
import { useRef } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { VscPreview } from 'react-icons/vsc';
import reviewImage from '../../../assets/wave (1).png'


const Reviews = () => {
    const [width, setWidth] = useState(0)
    const [reviews, setReviews] = useState([])
    const carousel = useRef();


    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])


    const url = `https://pick-timely.herokuapp.com/review`;
    useEffect(() => {
        const allReview = async () => {
            const { data } = await axios.get(url, {
            })
            setReviews(data)
        }
        allReview();
    }, [url])



    return (
        <div className='my-12'>
            <motion.div ref={carousel} whileTap={{ cursor: "grabbing" }} className='mx-52 cursor-grab overflow-hidden'>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className='flex'>
                    {
                        reviews.map((review) => {
                            return (
                                <motion.div className="bg-gray-100 min-h-[10rem] min-w-[30rem] shadow-lg border-2  md:p-10 mx-8 rounded-lg">
                                    <div>
                                        <Rating
                                            initialRating={review.rating}
                                            emptySymbol={<AiFillStar style={{ color: 'gray', fontSize: '20px' }} />}
                                            fullSymbol={<AiFillStar style={{ color: 'goldenrod', fontSize: '20px' }} />}
                                            readonly
                                        ></Rating>
                                        <p class="mt-2 text-sm font-medium leading-5 text-gray-500">11.2.2022</p>

                                        <div class="mt-6 flex items-center space-x-1">
                                            <p class="text-sm font-medium leading-5 capitalize text-gray-500">
                                                Color: Black
                                            </p>
                                            <span class="text-gray-500">&bull;</span>
                                            <p
                                                v-if="review.verifiedPurchase"
                                                class="text-sm font-medium leading-5 text-gray-500"
                                            >
                                                Verified review
                                            </p>
                                        </div>
                                        <div class="space-y-1">
                                            <h3 class="font-semibold text-gray-800">
                                                {review.feedback.slice(0, 50)}
                                            </h3>
                                            <p class="text-sm font-medium leading-5 text-gray-600">
                                                {review.feedback}
                                            </p>
                                        </div>

                                        <div class="mt-6 flex items-center space-x-2">
                                            <div class="flex flex-shrink-0 rounded-full border border-gray-200">
                                                <img
                                                    class="w-8 h-8 object-cover rounded-full"
                                                    src={reviewImage}
                                                    alt=""
                                                />
                                            </div>
                                            <span class="text-sm font-semibold leading-5 text-gray-900">
                                                Iqbal Hossain
                                            </span>
                                            <div className="flex-shrink-0">
                                                <AiFillCheckCircle />
                                            </div>

                                            <div className="flex-shrink-0" title="give a review">
                                                <Link to='/AddReview'>
                                                    <VscPreview />
                                                </Link>
                                            </div>
                                        </div>
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