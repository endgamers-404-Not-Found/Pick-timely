import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../../firebase.init';
import Spinner from '../../../../SharedComponents/Spinner';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const TeamSchedule = () => {
    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <Spinner />
    }



    return (
        // <motion.div
        //     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        //     transition={{ duration: 1 }}
        // >
            <div className="hero  lg:p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="lg:w-96 lg:mx-10">
                        <h1 className="text-4xl font-bold">Add unlimited member</h1>
                        <p className="py-6">Add unlimited member in your meeting by purchasing  corporate package. But you can start one by one meeting in free.</p>

                        <Link to={user ? '/dashboard' : "/signIn"}><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                    <img className='lg:w-[500px] w-[300px] rounded-lg shadow-2xl' src="https://i.ibb.co/FzXYgMT/team.jpg" alt="" />
                </div>
            </div>
        // {/* </motion.div> */}
    );
};

export default TeamSchedule;