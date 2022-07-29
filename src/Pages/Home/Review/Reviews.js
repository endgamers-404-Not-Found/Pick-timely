import React from 'react';
import Review from './Review';

const Reviews = () => {
   const newReview=[
    
        {
            "_id": 1,
            "name": "Pren",
            "image": "http://dummyimage.com/187x100.png/cc0000/ffffff",
            "text": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
            "rate":"5start"
           
          },
        {
            "_id": 2,
            "name": "sujon",
            "image": "http://dummyimage.com/187x100.png/cc0000/ffffff",
            "text": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
            "rate":"5start"
           
          },
        {
            "_id": 3,
            "name": "hadim",
            "image": "http://dummyimage.com/187x100.png/cc0000/ffffff",
            "text": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
            "rate":"5start"
           
          },

    
   ]

    return (
        <div>
            {/* <div className='my-28'>
            
            <h1 className='text-center text-3xl text-primary'>Review Our Happy Clients</h1>

            <div className='text-center mt-5 justify-center items-center'>
                <Swiper className='text-center'
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={2}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    effect="cards"
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    {newReview.map(review =>
                        <SwiperSlide className='slide' key={review._id}>
                            <div className='slide-content' >
                                <Review
                                    key={review._id}
                                    review={review}
                                >

                                </Review>
                            </div>
                        </SwiperSlide>
                    )}

                </Swiper>
            </div>

        </div> */}
        </div>
    );
};

export default Reviews;