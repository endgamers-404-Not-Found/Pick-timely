import React from 'react';


const ModalDetails = ({meeting, setMeeting, refetch}) => {
    const {email, timeSlot, description, dateFormat, type, host} = meeting;

 
    return (
        <div className=''>
            <input type="checkbox" id="my-meeting" className="modal-toggle" />

       
            <div className="modal ">
                <div className="modal-box bg-gray-700 text-white relative mt-10">

                    <label htmlFor="my-meeting" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Time: {timeSlot}</h3>
                    <h3 className="text-lg font-bold"> Date: {dateFormat}</h3>
                    <div className='divider'></div>


                    <p className="py-4 font-bold">Host: {host}</p>
                    <p className="py-4 font-bold">Guests: 
                        <ul>
                            { email &&
                            email?.map((email, index) => <li key={index}>{email?.email}</li>)
                            }
                        </ul>
                    </p>
                    <p className="py-4 font-bold">Event Type: {type}</p>
                    <p className="py-4 font-bold">Description: {description}</p>
                    <div className='flex gap-5'>
                        
                        
                                <label 
                                htmlFor="meeting-reschedule" 
                                className="btn btn-sm btn-info mx-3"
                                onClick={()=>setMeeting(meeting)}
                                >reschedule</label> 
                        
                    </div>
                </div>
            </div> 
         

           

        </div>
    );
};

export default ModalDetails;