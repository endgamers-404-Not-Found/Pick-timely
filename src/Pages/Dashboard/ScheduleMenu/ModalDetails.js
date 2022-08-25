import React from 'react';

const ModalDetails = ({meeting, setMeeting, refetch, user}) => {
    const {email, timeSlot, description, dateFormat, eventType, duration} = meeting;


    return (
        <div className=''>
            <input type="checkbox" id="my-meeting" className="modal-toggle" />

       
            <div className="modal ">
                <div className="modal-box bg-gray-700 text-white relative mt-10">

                    <label htmlFor="my-meeting" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{timeSlot}</h3>
                    <h3 className="text-lg font-bold">{dateFormat}</h3>
                    <div className='divider'></div>

                    <p className="py-4 font-bold">Name: {user ? user?.displayName : "no name"}</p>
                    <p className="py-4 font-bold">Email: 
                        <ul>
                            { email &&
                            email?.map((email, index) => <li key={index}>{email?.email}</li>)
                            }
                        </ul>
                    </p>
                    <p className="py-4 font-bold">Event Type: {eventType}</p>
                    <p className="py-4 font-bold">Event Time: {duration}</p>

                    <p className="py-4 font-bold">Description: {description}</p>
                    <div className='flex gap-5'>
                        
                        <label 
                                htmlFor="my-cancelling" 
                                className="btn btn-sm btn-success"
                                onClick={()=>setMeeting(meeting)}
                                >Cancelling</label> 
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