import React from 'react';

const  CancellingModal = ({meeting, setMeeting, user}) => {
    const {email, timeSlot, dateFormat, duration, eventType} = meeting;

    const handleCloseModal = () =>{
        setMeeting(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-cancelling" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-cancelling" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{timeSlot}</h3>
                    <h3 className="text-lg font-bold">{dateFormat}</h3>
                    <div className='divider'></div>
                    <p className="py-1 font-bold">Name: {user?.displayName}</p>
                    <p className="py-1 font-bold">Email: 
                        <ul>
                            { email &&
                            email?.map((email, index) => <li key={index}>{email?.email}</li>)
                            }
                        </ul>
                    </p>
                    <p className="py-1 font-bold">Event Type: {eventType ? eventType : 'not selected type'}</p>
                    <p className="py-1 font-bold">Event Time: {duration ? duration : 'not selected duration'}</p>
                    <form>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                        </div>
                    </form>
                    
                    <div className='flex gap-5 justify-center mt-2'>
                        <button onClick={handleCloseModal} className='btn btn-success'>schedule cancel</button>
                        
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default CancellingModal;