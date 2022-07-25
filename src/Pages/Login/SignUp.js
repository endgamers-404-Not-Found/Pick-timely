import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Spinner from '../../SharedComponents/Spinner';


function SignUp() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const formSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        fetch('http://localhost:5000/addUser', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name, email })
        })
            .then(res => res.json())
            .then(data => {
                data.acknowledged && navigate('/')
            })
        event.target.reset();
    }

    if (loading || gLoading) {
        return <Spinner></Spinner>
    }

    const googleSignIn = async () => {
        await signInWithGoogle()
        if(gUser){
            const name = gUser.user.displayName;
            const email = gUser.user.email;
            fetch('http://localhost:5000/addUser', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ name, email })
            })
                .then(res => res.json())
                .then(data => {
                    data.acknowledged && navigate('/')
                })
        }
    }

    return (
        <div>
            <div className="hero min-h-screen lg:px-32 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-gray-600 bg-base-100">
                        <form onSubmit={formSubmit}>
                            <div className="card-body">
                                <h2 className=' text-3xl text-center'>Sign Up</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input required name='name' type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label flex">
                                        <p className="label-text">Password <img onClick={() => setShow(!show)} className='w-5 inline'
                                            src={show ?
                                                ` https://i.ibb.co/pZckkpZ/image.png`
                                                :
                                                ` https://i.ibb.co/NYycQ4D/image.png`}
                                            alt="" /> </p>
                                    </label>
                                    <input required name='password' type={show ? 'text' : 'password'} placeholder="password" className="input input-bordered" />
                                    <p className="text-sm text-red-600">{error && error.message}</p>
                                    <p className="text-sm text-red-600">{gError && gError.message}</p>
                                    <label className="label">
                                        <p className="text-sm ">Already have an account? <Link className='font-semibold' to='/signIn'>sign in now</Link></p>
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <button className="btn btn-primary">sign up</button>
                                </div>
                                <div className="divider">or</div>
                                <div className="form-control ">
                                    <button className="btn btn-primary" onClick={() => googleSignIn()}>Sign up with Google</button>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="text-center hidden lg:block lg:text-left">
                        <img className='w-[900px]' src="https://i.ibb.co/55hCM4H/360-F-339709134-9-FKW6cg-Ji0uosf-Wb2b-D4zdcer-Tv-Rv-NXv.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp;
