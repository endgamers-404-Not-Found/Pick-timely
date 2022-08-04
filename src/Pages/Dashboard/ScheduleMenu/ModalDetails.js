import React from 'react';

const ModalDetails = ({meeting, setMeeting}) => {
    const {name, email, timeSlot, description, dateFormat} = meeting;

    const handleCloseModal = () =>{
        setMeeting(null)
    }

    return (
        <div>
            <input type="checkbox" id="my-meeting" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-meeting" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{timeSlot}</h3>
                <h3 className="text-lg font-bold">{dateFormat}</h3>
                <div className='divider'></div>
                <p className="py-4 font-bold">Name: {name}</p>
                <p className="py-4 font-bold">Email: {email}</p>
                <p className="py-4 font-bold">Event Type: Interview</p>
                <p className="py-4 font-bold">Event Time: 15mins meeting</p>
                <p className="py-4 font-bold">Description: {description}</p>
                <div className='flex gap-5'>
                    <button onClick={handleCloseModal} className='btn btn-success'>cancel</button>
                    
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default ModalDetails;