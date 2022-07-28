import React from 'react';
import { useParams } from 'react-router-dom';
// import FiftenMin from './FiftenMin';

const ArrangeNewMeeting = () => {
    const {hostId} = useParams();

    return (
        <div>
          <h1 className='text-4xl'>{hostId}</h1>
            {/* <FiftenMin hostId={hostId}></FiftenMin> */}
        </div>
    );
};

export default ArrangeNewMeeting;