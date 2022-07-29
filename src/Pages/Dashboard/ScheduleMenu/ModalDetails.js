import React from 'react';

const ModalDetails = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
            <div class="modal-box relative">
                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold">3.00am - 3.15am</h3>
                <h3 class="text-lg font-bold">29 July, 2022</h3>
                <div className='divider'></div>
                <p class="py-4">Name: sujon</p>
                <p class="py-4">Email: sojonchambugong@gmail.com</p>
                <p class="py-4">Event Type: Interview</p>
                <p class="py-4">Event Time: 15mins meeting</p>
                <p class="py-4">Description: This is your schedule, please join before 5 mins ago</p>
                <div className='flex gap-5'>
                    <button className='btn btn-success'>Reschedule</button>
                    <button className='btn btn-warning'>Canceling</button>
                <button className='btn btn-info' to='/'>Schedule invite Again</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default ModalDetails;