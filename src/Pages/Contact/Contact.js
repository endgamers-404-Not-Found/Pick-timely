import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f32ukmb', 'template_ylpp9qv', form.current, '2CEabvcE-C97ymcJN')
            .then((result) => {
                e.target.reset()
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-between container p-10 gap-5" >
                    <div className="text-center lg:text-left w-[100%] " >
                        <h1 className=" text-4xl md:text-5xl  font-bold mb-5" > Contact With Us</h1 >

                        <p className="py-2 flex justify-start gap-3 items-center" > <FaPhoneAlt className='text-primary' /> +880 1585-449223</p >
                        <p className="py-2 flex justify-start gap-3 items-center" > <FaEnvelope className='text-primary' />notfound404.picktimely@gmail.com</p >
                        <p className="py-2 flex justify-start gap-3 items-center" > <FaMapMarkerAlt className='text-primary' /> P-hero, Banani, Dhaka, Bangladesh</p >
                        <div className='flex justify-start gap-3 mt-5'>
                            <Link to='/'> <FaFacebook className='w-10 text-primary h-10 rounded-full p-1 border' /></Link>
                            <Link to='/'> <FaInstagram className='w-10 text-primary h-10 rounded-full p-1 border' /></Link>
                            <Link to='/'> <FaTwitter className='w-10 text-primary h-10 rounded-full p-1 border' /></Link>
                            <Link to='/'> <FaLinkedinIn className='w-10 text-primary h-10 rounded-full p-1 border' /></Link>

                        </div>
                    </div >
                    <div className="w-[100%]" >

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex justify-between gap-2">
                                <input type="text" name='fname' placeholder="First Name" className="w-[50%] input input-bordered bg-gray-400 text-white font-semibold text-lg placeholder:text-white" />
                                <input type="text" name='lname' placeholder="Last Name" className="w-[50%] input input-bordered bg-gray-400 text-white font-semibold text-lg placeholder:text-white" />
                            </div>
                            <div className="form-control mt-5" >
                                <input type="email" name='email' placeholder="Email" className="input input-bordered  bg-gray-400 text-white font-semibold text-lg placeholder:text-white" />
                            </div >
                            <div className="form-control mt-5" >
                                <input type="text" name='subject' placeholder="Subject" className="input input-bordered  bg-gray-400 text-white font-semibold text-lg placeholder:text-white" />
                            </div >
                            <div className="form-control mt-5" >
                                <textarea name='message' className="textarea textarea-bordered  bg-gray-400 text-white font-semibold text-lg placeholder:text-white" placeholder="Message"></textarea>
                            </div >
                            <div className="form-control mt-6" >
                                <button type='submit' className="btn btn-primary w-36">Send</button>
                            </div >
                        </form >

                    </div >
                </div >
            </div >
        </div>

    );
};

export default Contact;