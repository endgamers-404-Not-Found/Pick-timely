import React from 'react';

const PastSchedule = () => {
    return (
        <div className='mt-5'>
            <div className='flex gap-5 mt-5 mb-2'>
                    <div className="form-control">
                        <div className="input-group">
                            <button className="btn">Host</button>
                            <select className="select select-bordered">
                            <option disabled selected>All</option>
                            <option>Hamid</option>
                            <option>Meherab</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="input-group">
                            <button className="btn">Status Active</button>
                            <select className="select select-bordered">
                            <option disabled selected>All</option>
                            <option>Hamid</option>
                            <option>Meherab</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="input-group">
                            <button className="btn">Event Type</button>
                            <select className="select select-bordered">
                            <option disabled selected>All</option>
                            <option>Hamid</option>
                            <option>Meherab</option>
                            </select>
                            
                        </div>
                    </div>
                </div>
            <div className="overflow-x-auto">
                <table className="table w-[60%] lg:w-[80%] border">
                    
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
                        <td>Hasan Ali</td>
                        <td><button className='btn btn-sm'>see details</button></td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>28, July 2022</td>
                        <td>12.30 PM</td>
                        <td>Azim Chowdhury</td>
                        <td><button className='btn btn-sm'>see details</button></td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td>28, July 2022</td>
                        <td>12.30 PM</td>
                        <td>Iqbal Hasan</td>
                        <td><button className='btn btn-sm'>see details</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PastSchedule;