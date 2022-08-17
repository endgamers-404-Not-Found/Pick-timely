import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Meetings = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    return (
        <div className="hero bg-base-200 p-20">
            <div className="hero-content flex-col lg:flex-row-reverse mt-10">
                <img src="https://i.ibb.co/8cPKJmQ/Screenshot-31.png" className="w-[100%] lg:w-[50%] rounded-lg shadow-2xl" alt='' />
                <div className='w-[100%] lg:w-[100%] mb-10'>
                    <h1 className="lg:text-5xl text-2xl font-bold py-20">Set up your meetings in minutes. Really!</h1>
                    <div>
                        <h1 className='md:text-xl lg:text-3xl'>These numbers make me the happiest person </h1>
                        <div className="divider"></div>
                        <h1 className='md:text-xl lg:text-3xl'>For a complete list of all available state modifiers </h1>
                        <div className="divider"></div>
                        <h1 className='md:text-xl lg:text-3xl'>To learn more, check out the documentation</h1>
                        <div className="divider"></div>
                        <h1 className='md:text-xl lg:text-3xl'>You can provide a default line-height for each </h1>
                    </div>
                    <div>
                        {user && <button className="btn btn-success mt-20">
                            <Link to='/dashboard/createEvent'>Create a meeting</Link>
                        </button>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Meetings;