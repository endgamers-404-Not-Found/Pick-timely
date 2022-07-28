import React from 'react';
import { Link } from 'react-router-dom';
import notFound from './../../src/assets/404-not-found.png'

const NotFound = () => {
    return (
       <div className='flex justify-center my-20'>
         <div class="card w-96  bg-base-100">
            <figure class="px-10 pt-10">
                <img src={notFound} alt="not-found" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-xl text-red-600">Oops! The page you are looking for wasn't found!</h2>
                <div class="card-actions">
                    <Link to='/' class="btn btn-primary">Back To Home</Link>
                </div>
            </div>
        </div>
       </div>
    );
};

export default NotFound;