import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../../firebase.init';
import Spinner from '../../../../SharedComponents/Spinner';
import { Link } from "react-router-dom";


const Remiders = () => {

    const [user,loading]=useAuthState(auth)

    if(loading){
        return <Spinner/>
    }
    

    return (
      

                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-96 lg:mx-10">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div
                    data-aos='fade-left'
                    data-aos-duration='1000'
                    data-aos-offset='400'
                    className="lg:w-96 lg:mx-10">

                        <h1 className="text-5xl font-bold">Notifications and reminders</h1>
                        <p className="py-6">Guest will get a invitation email after you appoint him. And user will get a remainder email before the half of hour of meeting. </p>
                        <Link to={user ? '/dashboard' :"/signIn"}><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                    <img
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-offset='400'
                    className='lg:w-[500px] w-[300px] rounded-lg shadow-2xl' src="https://i.ibb.co/rfPp232/notification.jpg"  alt="" />
                </div>
            </div>
        </div>
    );
};

export default Remiders;