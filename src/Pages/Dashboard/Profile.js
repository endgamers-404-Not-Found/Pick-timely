import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


import { AiFillPhone } from 'react-icons/ai';
import { HiOfficeBuilding } from 'react-icons/hi';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../SharedComponents/Spinner';
import { useProfile } from '../../Hooks/useProfile';


const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const [profile] = useProfile();

    if (loading) {
        return <Spinner></Spinner>
    }
    
    return (
        <div className="hero min-h-screen marker:">
            <div>
                <div className="text-center lg:text-left  sm:order-1 ">
                    <div className="card w-94  shadow-2xl shadow-black ">

                        <figure className="px-28 py-5 bg-primary">
                            <img src={profile?.photo} alt="profile" className="mask w-40 mask-circle" />
                        </figure>
                        <p className='text-center text-xl font-bold mb-[-16px]'>{user.displayName}</p>
                        <div className="card-body">
                            <span className='flex items-center'><MdEmail className='inline-block mr-1'></MdEmail> <span className="hidden lg:flex">Email: </span>{user?.email} </span>
                            <span className=''><HiOfficeBuilding className='inline-block mr-1'></HiOfficeBuilding>{profile?.company}</span>
                            <span className=''><AiFillPhone className='inline-block mr-1'></AiFillPhone>{profile?.phone}</span>
                            <span className=''><ImLocation2 className='inline-block mr-1'></ImLocation2>{profile?.address}</span>
                            <span className='text-lg'>Package :  {profile.status ? profile.status : "free"}</span>
                            {
                                profile?.status !== "free" ?
                                    <span className=''>Transaction Id:  {profile?.transactionId}</span>

                                    :
                                    ''
                            }
                            <Link to="/dashboard/updateProfile" className="btn btn-primary">Update Profile</Link>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}


export default Profile;

