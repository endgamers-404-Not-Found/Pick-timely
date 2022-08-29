import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const HosterDetails = ({hosting}) => {
    const {hoster, duration, description, eventType} = hosting;
    const [user] = useAuthState(auth);
    console.log(hosting)

    return (
        <div>
            <input type="checkbox" id="my-hosting" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-hosting" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{hoster}</h3>
                <h3 className="text-lg font-bold">{user?.email}</h3>
                <div className='divider'></div>
                <p className="p-1 font-bold">Duration : {duration}</p>
                <p className="p-1 font-bold">EventType: {eventType}</p>
                <p className="p-1 font-bold">Description: {description}</p>
       
            </div>
            </div>
            
        </div>
    );
};

export default HosterDetails;