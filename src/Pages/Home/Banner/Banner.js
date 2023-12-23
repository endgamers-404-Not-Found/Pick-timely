import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/banner.png'
import auth from '../../../firebase.init';
import SharedButton from '../../../SharedComponents/SharedButton';
import { motion } from "framer-motion"

const Banner = ({ theme }) => {

    const TextVariants = {
        offscreen: {
            width: 0,
            opacity: 0
        },
        onscreen: {
            width: "auto",
            opacity: 1
        },
        exit: {
            width: 0,
            opacity: 0
        }
    };

    const texts = ["Best scheduler for offering the best meetings & consultations"];
    const [currentWord, setCurrentWord] = useState(-1);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i === texts.length) {
                setCurrentWord(0);
                i = 0;
            } else setCurrentWord(i);
            i++;
        }, 1000 + texts[i].length * 0.25);

        return () => clearInterval(interval);
    }, []);


    // console.log(theme)

    const [user] = useAuthState(auth);
    // console.log(user)

    return (
        <div id={theme} className="flex flex-col md:flex-row items-center lg:h-[600px]  ">
            {/* <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ x: 20, opacity: 100 }}
                transition={{ type: 'spring', damping: 5, stiffness: 100 }} */}

            <div
                className="md:w-[600px] lg:w-[700px] order-2 md:order-1 mb-10 md:mx-10">

                {/* <motion.h1 
                className="font-bold text-4xl md:text-6xl text-center md:text-left mx-5">
                    Online scheduler for offering the best consultations</motion.h1> */}

                <motion.h1
                    className="font-bold text-4xl md:text-5xl text-center md:text-left mx-5"
                    transition={{ staggerChildren: 0.2, duration: 0.1 }}
                >
                    {texts.map((word, index) =>
                        index === currentWord ? (
                            <motion.span key={index}>
                                {word.split("").map((r, id) => (
                                    <motion.span
                                        initial="offscreen"
                                        animate="onscreen"
                                        exit="exit"
                                        variants={TextVariants}
                                        transition={{
                                            duration: 0.1,
                                            delay: id * 0.05
                                        }}
                                        key={id}
                                    >
                                        {r}
                                    </motion.span>
                                ))}
                            </motion.span>
                        ) : null
                    )}
                </motion.h1>

                <p className="text-lg m-5 font-medium text-center md:text-left">Empower your schedule with PickTimely, the ultimate meeting scheduler. Tailor your experience with flexible packages, inviting unlimited or limited guests for seamless meetings and consultations. Time made yours!</p>


                <div className="mx-5 text-center md:text-left">

                    <Link to={user ? '/dashboard' : '/signIn'}>
                        <SharedButton>Get Started</SharedButton>
                    </Link>
                </div>
            </div>

            {/* </motion.div> */}


            {/* <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ x: -20, opacity: 100, scale: 1 }}
                transition={{ type: 'spring', damping: 5, stiffness: 100 }} */}
            <div
                className="md:w-[600px] lg:w-[700px] order-1 md:order-2 mb-10">
                <img className='' src={bannerImg} alt="bannerImg" />

            </div>
            {/* </motion.div> */}
        </div>
    );
};

export default Banner;