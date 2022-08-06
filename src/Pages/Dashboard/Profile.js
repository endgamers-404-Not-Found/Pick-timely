import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillPhone } from 'react-icons/ai';
import { HiOfficeBuilding } from 'react-icons/hi';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Spinner from '../../SharedComponents/Spinner';


const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const [profile, setProfile] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user?.email}`)
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
                <div className="text-center lg:text-left mx-16 sm:order-1 ">
                    <div className="card w-96 bg-base-100 ">
                        <figure className="px-28 py-5 bg-sky-700">
                            <img src={profile?.photo} alt="profile" className="mask mask-circle" />
                        </figure>
                        <p className='text-center text-xl font-bold mb-[-16px]'>{user.displayName}</p>
                        <div className="card-body pl-20">
                            <span className=''><MdEmail className='inline-block mr-1'></MdEmail> Email: {user?.email}</span>
                            <span className=''><HiOfficeBuilding className='inline-block mr-1'></HiOfficeBuilding>{profile?.company}</span>
                            <span className=''><AiFillPhone className='inline-block mr-1'></AiFillPhone>{profile?.phone}</span>
                            <span className=''><ImLocation2 className='inline-block mr-1'></ImLocation2>{profile?.address}</span>
                            <span className='text-lg'>Package :  {profile.status ? profile.status :"free"}</span>
                            {
                                profile?.status ?
                                    <span className=''>Transaction Id:  {profile?.transactionId}</span>

                                    :
                                    ''
                            }
                            <Link to="/dashboard/updateProfile" className="btn btn-primary">Update Profile</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="z-10" >

            </div>
        </div>
    );
}


export default Profile;