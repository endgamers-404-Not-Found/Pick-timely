
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import profile from '../../assets/profile.png'
import auth from '../../firebase.init';
import { HiOfficeBuilding } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import Spinner from '../../SharedComponents/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data)
                console.log(data)
            })
    }, [user])

     if (loading) {
        return <Spinner></Spinner>
    }
  


   return(
        <div class="hero min-h-screen bg-base-200">
           <div>
                <div class="text-center lg:text-left mx-16 sm:order-1 ">
                    <div class="card w-96 bg-base-100 ">
                        <figure class="px-28 py-5 bg-sky-700">
                            <img src={profile} alt="profile" class="rounded-full" />
                        </figure>
                        <p className='text-center text-xl font-bold mb-[-16px]'>User Name</p>
                        <div class="card-body pl-20">
                            <span className=''><MdEmail className='inline-block mr-1'></MdEmail> Email: {user?.email}</span>
                            <span className=''><HiOfficeBuilding className='inline-block mr-1'></HiOfficeBuilding>{profile[0]?.company}</span>
                            <span className=''><AiFillPhone className='inline-block mr-1'></AiFillPhone>{profile[0]?.phone}</span>
                            <span className=''><ImLocation2 className='inline-block mr-1'></ImLocation2>{profile[0]?.address}</span>

                            <Link to="/dashboard/updateProfile" className="btn btn-primary">Update Profile</Link>

                        </div>
                    </div>
                </div>

            </div>
            <div className="z-10" >
                <ToastContainer />
            </div>
        </div>
    );
}


export default Profile;