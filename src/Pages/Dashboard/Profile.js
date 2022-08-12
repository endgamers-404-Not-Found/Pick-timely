import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { useProfile } from '../../Hooks/useProfile';

import { HiOfficeBuilding } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import Spinner from '../../SharedComponents/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


const Profile = () => {
    const [user, loading] = useAuthState(auth);

    const [profile, setProfile] = useState([]);



    useEffect(() => {
        fetch(`https://pick-timely.herokuapp.com/profile/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data)
                // console.log(data)
            })
    }, [user])

    if (loading) {
        return <Spinner></Spinner>
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center lg:text-left  sm:order-1 ">
                    <div className="card w-94 bg-base-100 ">

                        <figure className="px-28 py-5 bg-sky-700">
                            <img src={profile?.photo} alt="profile" className="mask w-40 mask-circle" />
                        </figure>
                        <p className='text-start text-xl font-bold mb-[-16px]'>{user.displayName}</p>
                        <div class="card-body">
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