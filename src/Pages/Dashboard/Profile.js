import userEvent from '@testing-library/user-event';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import profile from '../../assets/profile.png'
import auth from '../../firebase.init';
import { HiOfficeBuilding } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';

const Profile = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-16 sm:order-2 ">
                    <div class="card-body ">
                        <h3 className='text-2xl mb-4'>Update your profile</h3>
                        <div class="form-control">
                            <input type="text" placeholder="Company Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="text" placeholder="Phone" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="text" placeholder="Address" class="input input-bordered" />
                        </div>
                        <label class="label mb-[-10px]">
                                <span class="label-text">Upload Profile</span>
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
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
                <div class="text-center lg:text-left mx-16 sm:order-1 ">
                    <div class="card w-96 bg-base-100 ">
                        <figure class="px-28 py-5 bg-sky-700">
                            <img src={profile} alt="profile" class="rounded-full" />
                        </figure>
                        <p className='text-center text-xl font-bold mb-[-16px]'>User Name</p>
                        <div class="card-body pl-20">
                            <span className=''><MdEmail className='inline-block mr-1'></MdEmail> Email: {user?.email}</span>
                            <span className=''><HiOfficeBuilding className='inline-block mr-1'></HiOfficeBuilding>Company Name: Abc Ltd.</span>
                            <span className=''><AiFillPhone className='inline-block mr-1'></AiFillPhone>Phone Number: +88016664664</span>
                            <span className=''><ImLocation2 className='inline-block mr-1'></ImLocation2>Address: Ctg, Bangladesh</span>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;