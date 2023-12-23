import React, { useEffect } from 'react';
import OurTeam from '../../Pages/About/redux-compo/OurTeam';
import { useNavigate } from 'react-router-dom';

const DeveloperContact = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/about')
    }, []);
    return (
        <div className='mb-10'>
            <h1 className='text-3xl font-bold mt-10 mb-10 text-center'>Developer Contact</h1>
            <OurTeam></OurTeam>
        </div>
    );
};

export default DeveloperContact;