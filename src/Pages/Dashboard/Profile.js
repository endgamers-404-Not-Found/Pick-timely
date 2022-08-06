import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
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
                console.log(data)
            })
    }, [user])

     if (loading) {
        return <Spinner></Spinner>
    }
  

   return(
        <div class="lg:hero min-h-screen bg-base-200">
           <div className="">
                <div class="text-start lg:text-left mx-10 sm:order-1 flex justify-center
                ">
                    <div class="card bg-base-100 w-[500px] lg:w-96 mt-20">
                        <figure class="px-28 py-5 bg-sky-700">
                            <img  src={profile?.photo} alt="profile" class="mask mask-circle" />
                        </figure>
                        <p className='text-start text-xl font-bold mb-[-16px]'>{user.displayName}</p>
                        <div class="card-body">
                            <span className='flex items-center'><MdEmail className='inline-block mr-1'></MdEmail> <span className="hidden lg:flex">Email: </span>{user?.email} </span>
                            <span className=''><HiOfficeBuilding className='inline-block mr-1'></HiOfficeBuilding>{profile?.company}</span>
                            <span className=''><AiFillPhone className='inline-block mr-1'></AiFillPhone>{profile?.phone}</span>
                            <span className=''><ImLocation2 className='inline-block mr-1'></ImLocation2>{profile?.address}</span>

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