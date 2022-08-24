import axios from 'axios';
import Carousel from "nuka-carousel";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';
import person1 from './../../../assets/person/person-0.png'
import person2 from './../../../assets/person/person-1.png'
import person3 from './../../../assets/person/person-3.png'
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';


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

    

    return (
         <div className='my-12'>
           <h1 className='text-center text-5xl font-bold mb-3'>What Our Client Says</h1>
           <div className="avatar-group -space-x-6 flex justify-center">
               <div className="avatar">
                     <div className="w-12">
                         <img alt='' src={person1} />
                     </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <img alt='' src={person2} />
                 </div>
                </div>
                 <div className="avatar">
                     <div className="w-12">
                        <img alt='' src={person3} />
                    </div>
               </div>
                <div className="avatar placeholder">
                    <div className="w-12 bg-neutral-focus text-neutral-content">
                      <span>+99</span>
                   </div>
               </div>
            </div>
            <div className='w-3/4  mx-auto mt-10 '>
                 <Carousel
                    slidesToShow={1}
                     autoplay
                     renderCenterLeftControls={({ previousSlide }) => (
                        <button onClick={previousSlide}>
                          <HiOutlineChevronDoubleLeft className='text-primary text-4xl font-bold'/>
                        </button>
                      )}
                      renderCenterRightControls={({ nextSlide }) => (
                        <button onClick={nextSlide}>
                          <HiOutlineChevronDoubleRight className='text-primary text-4xl font-bold'/>
                        </button>
                      )}
                      renderBottomCenterControls={false}
                 >
                     {
                        reviews.slice(0,3).map(review => <Review key={review._id} review={review}></Review>)
                    }

                 </Carousel>
            </div>
            <div className='flex justify-center'>
                 <Link to='addreview' className='btn btn-primary mt-5 '>Add Your Review</Link>
            </div>
        </div>
        
    );
};

export default Reviews;