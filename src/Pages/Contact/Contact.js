import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f32ukmb', 'template_ylpp9qv', form.current, '2CEabvcE-C97ymcJN')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div class="hero min-h-screen bg-neutral">
            <div class="flex justify-between container">
                <div class="text-center lg:text-left w-[50%] text-white">
                    <h1 class="text-5xl font-bold mb-5">Contact With Us</h1>
                    
                    <p class="py-2 flex justify-start gap-3 items-center"><FaPhoneAlt className='text-secondary' /> +08812213231211</p>
                    <p class="py-2 flex justify-start gap-3 items-center"><FaEnvelope className='text-secondary' />support@info.columns-1</p>
                    <p class="py-2 flex justify-start gap-3 items-center"><FaMapMarkerAlt className='text-secondary' /> P-hero, Bannani, Dhaka, Bangladesh</p>
                    <div className='flex justify-start gap-3 mt-5'>
                        <Link to='/'> <FaFacebookF className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                        <Link to='/'> <FaInstagram className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                        <Link to='/'> <FaTwitter className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                        <Link to='/'> <FaLinkedinIn className='w-10 text-secondary h-10 rounded-full p-1 border' /></Link>
                    
                    </div>
                </div>
                <div class="w-[50%]">
                
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="flex justify-between gap-2">
                            <input type="text" name='fname' placeholder="First Name" class="w-[50%] input input-bordered" />
                            <input type="text" name='lname' placeholder="Last Name" class="w-[50%] input input-bordered" />
                        </div>
                        <div class="form-control mt-5">
                            <input type="email" name='email' placeholder="Email" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-5">
                            <input type="text" name='subject' placeholder="Subject" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-5">
                            <textarea name='message' class="textarea textarea-bordered" placeholder="Message"></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-secondary w-24">Submit</button>
                        </div>
                    </form>
                
                </div>
            </div>
        </div>
    );
};

export default Contact;