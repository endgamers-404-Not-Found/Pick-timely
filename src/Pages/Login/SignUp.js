import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ImCross } from 'react-icons/im';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import Spinner from '../../SharedComponents/Spinner';


function SignUp() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);



    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: ""
    })




    const handleEmailField = e => {
        const emailInput = e.target.value;
        const emailRegx = /\S+@\S+\.\S+/;
        if (emailRegx.test(emailInput)) {
            setUserData({ ...userData, email: emailInput });
            setErrors({ ...errors, emailError: "" })
        }
        else {
            setErrors({ ...errors, emailError: "Invalid Email!" })
            setUserData({ ...userData, email: "" })
        }
    }
    const handlePasswordField = e => {
        const passwordInput = e.target.value;
        if (passwordInput.length >= 6) {
            setUserData({ ...userData, password: passwordInput });
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "Password must be at least 6 characters!" });
            setUserData({ ...userData, password: "" })
        }
    }
    const handleConfirmPasswordField = e => {
        const confirmPasswordField = e.target.value;
        if (confirmPasswordField === userData.password) {
            setUserData({ ...userData, confirmPassword: confirmPasswordField });
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "Password doesn't matched!" })
            setUserData({ ...userData, confirmPassword: "" })
        }
    }


    useEffect(() => {
        if (error || gError) {
            toast.error(error.message || gError.message, {
                position: 'top-center'
            })
        }
    }, [error, gError])

    if (loading || gLoading || sending) {
        return <Spinner></Spinner>
    };

    const formSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = userData.email;
        const password = userData.password;

        await createUserWithEmailAndPassword(email, password);
        if (user) {
            sendEmailVerification(auth.currentUser)
            toast('verification email sent')
            fetch('https://pick-timely.herokuapp.com/addUser', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ name, email, status: "free" })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    data.acknowledged && navigate('/')
                })
            event.target.reset();
        }
    }

    const googleSignIn = async () => {
        await signInWithGoogle()

        const name = gUser?.user.displayName;
        const email = gUser?.user.email;
        fetch('https://pick-timely.herokuapp.com/addUser', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name, email, status: "free" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.acknowledged && navigate(from, { replace: true });
            })

    }
    // console.log(user)
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
                                    <input onChange={handleEmailField} required name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                {errors?.emailError && <span className='text-red-600'><ImCross className='inline mr-1'></ImCross> {errors.emailError}</span>}
                                {error2 && <span className='text-red-600'><ImCross className='inline mr-1'></ImCross> {error2.message}</span>}
                                <div className="form-control">
                                    <label className="label flex">
                                        <p className="label-text">Password <img onClick={() => setShow(!show)} className='w-5 inline'
                                            src={show ?
                                                ` https://i.ibb.co/pZckkpZ/image.png`
                                                :
                                                ` https://i.ibb.co/NYycQ4D/image.png`}
                                            alt="" /> </p>
                                    </label>
                                    <input onChange={handlePasswordField} required name='password' type={show ? 'text' : 'password'} placeholder="password" className="input input-bordered" />
                                    {errors?.passwordError && <span className='text-red-600'><ImCross className='inline mr-1'></ImCross>{errors.passwordError}</span>}
                                    <label className="label flex">
                                        <p className="label-text">Confirm Password <img onClick={() => setShow(!show)} className='w-5 inline'
                                            src={show ?
                                                ` https://i.ibb.co/pZckkpZ/image.png`
                                                :
                                                ` https://i.ibb.co/NYycQ4D/image.png`}
                                            alt="" /> </p>
                                    </label>
                                    <input onChange={handleConfirmPasswordField} required name='password' type={show ? 'text' : 'password'} placeholder="Confirm password" className="input input-bordered" />
                                    <label className="label">
                                        <p className="text-sm ">Already have an account? <Link className='font-semibold' to='/signIn'>sign in now</Link></p>
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <button className="btn btn-primary">sign up</button>
                                </div>
                                <div className="divider">or</div>
                                <div className="form-control ">
                                    <button className="btn btn-primary" onClick={googleSignIn}>Sign up with Google</button>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="text-center hidden lg:block lg:text-left">
                        <img className='w-[900px]' src="https://i.ibb.co/55hCM4H/360-F-339709134-9-FKW6cg-Ji0uosf-Wb2b-D4zdcer-Tv-Rv-NXv.jpg" alt="" />
                    </div>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default SignUp;