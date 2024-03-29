import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ImCross } from 'react-icons/im';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Spinner from '../../SharedComponents/Spinner';

function Login() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: ""
    })

    useEffect(() => {
        if (user || gUser) {
            navigate('/')
        }
    }, [user, gUser, navigate]);

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
    const login = async (event) => {
        event.preventDefault();
        const email = userData.email;
        const password = userData.password;
        signInWithEmailAndPassword(email, password)
        if (user) {
            navigate(from, { replace: true });
        }
        event.target.reset()
    }


    useEffect(() => {
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error?.message,
              })
        }
        else if(gError){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: gError?.message,
              })
        }
    }, [error, gError])

    if (loading || gLoading ||sending) {
        return <Spinner></Spinner>
    };

    const googleSignIn = async () => {
        await signInWithGoogle()

        if (gUser) {
            const name = gUser?.user.displayName;
            const email = gUser?.user.email;

            console.log(name, email)
            await fetch('https://pick-timely-server.onrender.com/addUser', {

                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ name, email })
            })
                .then(res => res.json())
                .then(data => {
                    data.acknowledged && navigate(from, { replace: true });
                })
        }

    }
    const passwordReset=()=>{
        if(userData.email){
            sendPasswordResetEmail(userData.email)
            toast("password reset email sent")
        }
        else{
            setErrors({ ...errors, emailError: "Fill the email field first" })
            setUserData({ ...userData, email: "" })
        }
    }


    return (
        <div>
            <div className="hero min-h-screen lg:px-32 ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-gray-600 bg-base-100">
                        <form onSubmit={login}>


                            <div className="card-body">
                                <h2 className=' text-3xl text-center'>Sign In</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span data-testid="email" className="label-text">Email</span>
                                    </label>
                                    <input onChange={handleEmailField} name='email' required type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                {errors?.emailError && <span className='text-red-600'><ImCross className='inline mr-1'></ImCross> {errors.emailError}</span>}
                                <div className="form-control">
                                    <label className="label flex">
                                        <p className="label-text">Password <img onClick={() => setShow(!show)} className='w-5 inline'
                                            src={show ?
                                                ` https://i.ibb.co/pZckkpZ/image.png`
                                                :
                                                ` https://i.ibb.co/NYycQ4D/image.png`}
                                            alt="" /> </p>
                                    </label>
                                    <input onChange={handlePasswordField} name='password' required type={show ? 'text' : 'password'} placeholder="password" className="input input-bordered" />
                                    {errors?.passwordError && <span className='text-red-600'><ImCross className='inline mr-1'></ImCross>{errors.passwordError}</span>}
                                    {error2  && <span className='text-red-600'><ImCross className='inline mr-1'></ImCross>{error2.message}</span>}
                                    
                                    <label className="label">
                                        <p className="text-sm ">First time in Pick-Timely? <Link className='font-semibold' to='/signUp'>sign up now</Link></p>
                                    </label>
                                    <label className="label">
                                        <p className="text-sm ">Forget your password ?<button className='font-semibold' onClick={()=>passwordReset()}>Reset now</button></p>
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="divider">or</div>
                                <div className="form-control ">
                                    <button onClick={() => googleSignIn()} className="btn btn-primary">Sign in with Google</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="text-center hidden lg:block lg:text-left">
                        <img src="https://i.ibb.co/s67HSg0/account-login-password-key-computer-man-near-vector-male-character-design-concept-landing-page-web-p.jpg" alt="" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login;






