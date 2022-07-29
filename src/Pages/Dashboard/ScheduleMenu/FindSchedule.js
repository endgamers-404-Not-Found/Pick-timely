import React from 'react';

const FindSchedule = () => {
    return (
        <div className='mt-5'>
            <div className='flex gap-5 mt-5 mb-2'>
                    <div class="form-control">
                        <div class="input-group">
                            <button class="btn">Host</button>
                            <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>Hamid</option>
                            <option>Meherab</option>
                            </select>
                            
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="input-group">
                            <button class="btn">Status Active</button>
                            <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>Hamid</option>
                            <option>Meherab</option>
                            </select>
                            
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="input-group">
                            <button class="btn">Event Type</button>
                            <select class="select select-bordered">
                            <option disabled selected>All</option>
                            <option>Hamid</option>
                            <option>Meherab</option>
                            </select>
                            
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="input-group">
                            <input type="text" placeholder='search' className='border' />
                            <button class="btn">search</button>
                            
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
                        <td>Md Hamid Azad</td>
                        <td><button className='btn btn-sm'>see details</button></td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>28, July 2022</td>
                        <td>12.30 PM</td>
                        <td>Md Meherab</td>
                        <td><button className='btn btn-sm'>see details</button></td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td>28, July 2022</td>
                        <td>12.30 PM</td>
                        <td>Sujon Chambugong</td>
                        <td><button className='btn btn-sm'>see details</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FindSchedule;