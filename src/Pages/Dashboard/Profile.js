// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';


// import { AiFillPhone } from 'react-icons/ai';
// import { HiOfficeBuilding } from 'react-icons/hi';
// import { ImLocation2 } from 'react-icons/im';
// import { MdEmail } from 'react-icons/md';
// import { Link } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
// import Spinner from '../../SharedComponents/Spinner';


// const Profile = () => {
//     const [user, loading] = useAuthState(auth);

//     const [profile, setProfile] = useState([]);



//     useEffect(() => {
//         fetch(`http://localhost:5000/profile/${user?.email}`)
//             .then(res => res.json())
//             .then(data => {
//                 setProfile(data)
//                 // console.log(data)
//             })
//     }, [user])

//     if (loading) {
//         return <Spinner></Spinner>
//     }



//     return (
//         <div className="hero min-h-screen marker:">
//             <div>
//                 <div className="text-center lg:text-left  sm:order-1 ">
//                     <div className="card w-94  shadow-2xl shadow-black ">

//                         <figure className="px-28 py-5 bg-primary">
//                             <img src={profile?.photo} alt="profile" className="mask w-40 mask-circle" />
//                         </figure>
//                         <p className='text-center text-xl font-bold mb-[-16px]'>{user.displayName}</p>
//                         <div className="card-body">
//                             <span className='flex items-center'><MdEmail className='inline-block mr-1'></MdEmail> <span className="hidden lg:flex">Email: </span>{user?.email} </span>
//                             <span className=''><HiOfficeBuilding className='inline-block mr-1'></HiOfficeBuilding>{profile?.company}</span>
//                             <span className=''><AiFillPhone className='inline-block mr-1'></AiFillPhone>{profile?.phone}</span>
//                             <span className=''><ImLocation2 className='inline-block mr-1'></ImLocation2>{profile?.address}</span>
//                             <span className='text-lg'>Package :  {profile.status ? profile.status : "free"}</span>
//                             {
//                                 profile?.status !== "free" ?
//                                     <span className=''>Transaction Id:  {profile?.transactionId}</span>

//                                     :
//                                     ''
//                             }
//                             <Link to="/dashboard/updateProfile" className="btn btn-primary">Update Profile</Link>

//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     );
// }


// export default Profile;


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
        <div className="hero p-5 min-h-screen marker:">
            <div>
                <div className="flex justify-between ">
                    <div className="card w-[30%]  shadow-2xl shadow-black ">

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
                    <div className='w-[30%]'>
                        <div>
                            <h1>Description</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, consectetur delectus? Dignissimos distinctio autem sit sed. Perspiciatis iste placeat corporis assumenda, architecto suscipit repudiandae veniam eos aut ab tempore quidem inventore explicabo aliquid. Nostrum amet aperiam deleniti eaque incidunt! Autem architecto quas distinctio qui voluptatum accusantium doloribus at, beatae incidunt!</p>
                        </div>
                        <div>
                            <h1>Skills</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, consectetur delectus? Dignissimos distinctio autem sit sed. Perspiciatis iste placeat corporis assumenda, !</p>
                        </div>

                        <div>
                            <h1>Skills</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, consectetur delectus? Dignissimos distinctio autem sit sed.!</p>
                        </div>
                    </div>
                    <div className='w-[30%]'>
                        <div>
                            <h1>Description</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, consectetur delectus? Dignissimos distinctio autem sit sed. Perspiciatis iste placeat corporis assumenda, architecto suscipit repudiandae veniam eos aut ab tempore quidem inventore explicabo aliquid. Nostrum amet aperiam deleniti eaque incidunt! Autem architecto quas distinctio qui voluptatum accusantium doloribus at, beatae incidunt!</p>
                        </div>
                        <div>
                            <h1>Skills</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, consectetur delectus? Dignissimos distinctio autem sit sed. Perspiciatis iste placeat corporis assumenda, !</p>
                        </div>

                        <div>
                            <h1>Skills</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, consectetur delectus? Dignissimos distinctio autem sit sed.!</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}


export default Profile;