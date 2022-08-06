import React, { useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../SharedComponents/Spinner';
import { Link, Navigate, useNavigate } from "react-router-dom";

const UpdateProfile = () => {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    if (loading) {
        return <Spinner></Spinner>
    }
   const imageStorageKey='6638c031935084021c384c8456c8880c'

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        const image = e.target.url.value;
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
        })

        const profileInfo = {
            name: user.displayName,
            photo: e.target.url.value,
            company: e.target.company.value,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        // console.log(profileInfo);

        // fetch(`http://localhost:5000/update/${user.email}`, {
        //     method: 'PUT',
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(profileInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.success) {
        //             toast("Your profile is added")
        //             if(data.result.acknowledged){
        //                 navigate("/dashboard")
        //             }
        //         }
        //         else {
        //             toast.error("It seems their something wrong");
        //         }
        //     })
    }

    return (
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-16 sm:order-2 ">
                <form class="card-body" onSubmit={handleProfileSubmit}>
                    <h3 className='text-2xl mb-4'>Update your profile</h3>
                    <div class="form-control">
                        <input type="text" name="company" placeholder="Company Name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <input type="text" name="phone" placeholder="Phone" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <input type="text" name="address" placeholder="Address" class="input input-bordered" />
                    </div>
                    <input name='url' type="file" />




                    {/* <div class="form-control">
                        <input type="text" placeholder="Profile Url" name="url" class="input input-bordered" />
                    </div> */}
                    
                    <div class="form-control mt-6">
                        <input class="btn btn-primary" type="submit" value="submit" />
                    </div>

                    <Link to="/dashboard" className="btn btn-primary">Go back</Link>

                </form>
            </div>
            <ToastContainer
                position="top-center"
            />
        </div>
    );
};

export default UpdateProfile;