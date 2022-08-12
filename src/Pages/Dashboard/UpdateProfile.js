import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../SharedComponents/Spinner';

const UpdateProfile = () => {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    if (loading) {
        return <Spinner></Spinner>
    }
    //    const imageStorageKey='6638c031935084021c384c8456c8880c'

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        // const image = e.target.url.value;
        // console.log(image);
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(res=>res.json())
        // .then(result =>{
        //     console.log(result)
        // })

        const profileInfo = {
            name: user.displayName,
            photo: e.target.url.value,
            company: e.target.company.value,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        console.log(profileInfo);
        fetch(`https://pick-timely.herokuapp.com/update/${user.email}`, {
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
                    if (data.result.acknowledged) {
                        navigate("/dashboard")
                    }
                }
                else {
                    toast.error("It seems their something wrong");
                }
            })
        fetch(`https://pick-timely.herokuapp.com/update/${user.email}`, {
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
                    if (data.result.acknowledged) {
                        navigate("/dashboard")
                    }
                }
                else {
                    toast.error("It seems their something wrong");
                }
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center lg:text-left mx-16">
                    <div className="card w-96 bg-base-100 ">
                        <form className="card-body" onSubmit={handleProfileSubmit}>
                            <h3 className='text-2xl mb-4'>Update your profile</h3>
                            <div className="form-control">
                                <input type="text" name="company" placeholder="Company Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name="phone" placeholder="Phone" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name="address" placeholder="Address" className="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <input type="text" placeholder="Profile Url" name="url" class="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="submit" />
                            </div>

                            <Link to="/profile" className="btn btn-primary">Go back</Link>

                        </form>
                    </div>
                    <ToastContainer
                        position="top-center"
                    />
                </div>
            </div>
        </div>
        
    );
};

export default UpdateProfile;