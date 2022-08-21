import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../SharedComponents/Spinner';

 const UpdateProfile = () => {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    if (loading) {
        return <Spinner></Spinner>
    }
    const imageStorageKey = '6638c031935084021c384c8456c8880c'

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
             if(result.success){
                const img = result.data.url;
                const profileInfo = {
                    company: data.company,
                    phone: data.phone,
                    address: data.address,
                    photo: img
                }
                fetch(`https://pick-timely.herokuapp.com/update/${user.email}`, {
                    method: 'PUT',
                    headers: {
                           "content-type": "application/json"
                      },
                    body: JSON.stringify(profileInfo)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    toast.success('Profile updated successfully')
                })
            } })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center lg:text-left mx-16">
                    <div className="card w-96 bg-base-100 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body" >
                            <h3 className='text-2xl mb-4'>Update your profile</h3>
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("company", {
                                        required: {
                                            value: true
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="input input-bordered w-full max-w-xs "
                                    {...register("address", {
                                        required: {
                                            value: true
                                        }
                                    })}
                                />
                            </div>

                            <div className="form-control">
                                <input
                                    type="file"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="submit" />
                            </div>


                            <Link to="/dashboard" className="btn btn-primary">Go back</Link>
                        </form>
                    </div>
                    <ToastContainer
                        position="top-center"
                    />
                </div>
            </div>
        </div>

    );
                                
 }
export default UpdateProfile;