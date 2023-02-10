import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../../firebase.init';
import Spinner from '../../../../SharedComponents/Spinner';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const PaymentSystem = () => {
    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <Spinner />
    }


    return (
        // <motion.div
        //     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        //     transition={{ duration: 1 }}
        // >
            <div className="hero py-20">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <div
                    data-aos='fade-left'
                    data-aos-duration='1000'
                    data-aos-offset='400'
                    className="lg:w-96  lg:mx-10 mx-0">
                        <h1 className="text-5xl font-bold">Online payment</h1>
                        <p className="py-6">You can pay with international card. And also with your country local card. Get cashback when offer is running.</p>
                        <Link to={user ? '/dashboard' : "/signIn"}><button className="btn btn-primary">Get Started</button></Link>
                    </div>

                    <img className='lg:w-[500px] w-[300px] rounded-lg shadow-2xl' src="https://i.ibb.co/kQKwKvT/payment.png" alt="" />
                </div>
            </div>
        // </motion.div>
    );
};

export default PaymentSystem;