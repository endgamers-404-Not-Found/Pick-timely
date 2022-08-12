import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div className="flex jusify-center items-center">
            <div className="md:p-20 md:w-[700px] justify-items-center">
                <h2 className="font-extralight text-4xl text-bold font-serif">ABOUT NOWNESSFAQNOWNESS AWARDSBECOME A CONTRIBUTOR
                    A global video channel screening the best in culture</h2>

                <p className="font-serif my-5 ">
                    A global video channel screening the best in culture
                    NOWNESS is a movement for creative excellence in storytelling celebrating the extraordinary of every day. Launched in 2010, NOWNESS’ unique programming strategy has established it as the go to source of inspiration and influence across art, design, fashion, beauty, music, food, and travel. Our curatorial expertise and award-winning approach to storytelling is unparalleled. We work with exceptional talent, and both established and emerging filmmakers, which connects our audience to emotional and sensorial stories designed to provoke inspiration and debate.

                    NOWNESS launched a Chinese-language site in 2012 and NOWNESS ASIA in 2020. Since 2013, videos are available in up to 10 languages—including English, Chinese, French, German, Italian, Japanese, Korean, Portuguese, Spanish and Russian (simply turn on subtitles on our player).
                </p>
            </div>

            <div className="md:w-[700px] md:pl-20 ">
                <button className='btn btn-primary block'>Become a member </button>

                <button className="my-8 text-blue-500 font-serif ">Already a member <Link to="/signin">sign in</Link></button>
            </div>
        </div>
    );
};

export default Info;