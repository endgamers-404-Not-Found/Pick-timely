import React from 'react';
import ModalDetails from './ModalDetails';

const Upcoming = () => {
    return (
        <div className='mt-5'>
            <div className='flex gap-5 mt-5 mb-2'>
                    <div class="form-control">
                        <div class="input-group">
                            <button class="btn">Host</button>
                            <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>T-shirts</option>
                            <option>Mugs</option>
                            </select>
                            
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="input-group">
                            <button class="btn">Status Active</button>
                            <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>T-shirts</option>
                            <option>Mugs</option>
                            </select>
                            
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="input-group">
                            <button class="btn">Event Type</button>
                            <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>T-shirts</option>
                            <option>Mugs</option>
                            </select>
                            
                        </div>
                    </div>
                </div>
            <div class="overflow-x-auto">
            <table class="table w-[60%] lg:w-[80%] border">
                    
                    <thead>
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    <tr>
                        <th>1</th>
                        <td>28, July 2022</td>
                        <td>12.30 PM</td>
                        <td>Cy Ganderton</td>
                        <td><label for="my-modal-3" class="btn modal-button">open modal</label> </td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>28, July 2022</td>
                        <td>12.30 PM</td>
                        <td>Hart Hagerty</td>
                        <td><label for="my-modal-3" class="btn modal-button">open modal</label> </td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td>28, July 2022</td>
                        <td>12.30 PM</td>
                        <td>Brice Swyre</td>
                        <td><label for="my-modal-3" class="btn modal-button">open modal</label> </td>
                    </tr>
                    </tbody>
                </table>
                <ModalDetails></ModalDetails>
            </div>
        </div>
    );
};

export default Upcoming;