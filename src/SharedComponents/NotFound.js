import React from 'react';
import { Link } from 'react-router-dom';
import notFound from './../../src/assets/404-not-found.png';

const NotFound = () => {
    return (
       <div className='flex justify-center my-20'>
         <div className="card w-96  ">
            <figure className="px-10 pt-10">
                <img src={notFound} alt="not-found" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl text-red-600">Oops! The page you are looking for wasn't found!</h2>
                <div className="card-actions">
                    <Link to='/' className="btn btn-primary">Back To Home</Link>
                </div>
            </div>
        </div>
       </div>
    );
};

export default NotFound;