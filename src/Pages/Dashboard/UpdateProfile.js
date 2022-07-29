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


    const handleProfileSubmit = (e) => {
        e.preventDefault();

        const profileInfo = {
            email: user.email,
            name: user.displayName,
            photo: e.target.url.value,
            company: e.target.company.value,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        console.log(profileInfo);

        fetch(`http://localhost:5000/update/${user.email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(profileInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast("Your profile is added")
                    if(data.result.acknowledged){
                        navigate("/dashboard")
                    }
                }
                else {
                    toast.error("It seems their something wrong");
                }
            })
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
                    <label class="label mb-[-10px]">
                        <span class="label-text">Profile URl</span>
                    </label>



                    <form class="flex items-center space-x-6">
                        <label class="block">
                            <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                        </label>
                    </form>


                    <div class="form-control">
                        <input type="text" placeholder="Profile Url" name="url" class="input input-bordered" />
                    </div>
                    <label class="label mb-[-10px]">
                        <span class="label-text">Upload profile</span>
                    </label>
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