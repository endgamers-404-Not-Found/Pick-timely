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
                        <th className="w-20 p-3 text-sm font-semibold tracking-wide"></th>
                        <th className="w-24 p-3 text-sm font-semibold tracking-wide">Date</th>
                        <th className="w-30 p-3 text-sm font-semibold tracking-wide">Time</th>
                        <th className="w-30 p-3 text-sm font-semibold tracking-wide">Name</th>
                        <th className="w-24 p-3 text-sm font-semibold tracking-wide">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    <tr>
                        <th className="p-3 text-sm text-gray-700">1</th>
                        <td className="p-3 text-sm text-gray-700">28, July 2022</td>
                        <td className="p-3 text-sm text-gray-700">12.30 PM</td>
                        <td className="p-3 text-sm text-gray-700">Hasan Ali</td>
                        <td className="p-3 text-sm text-gray-700"><button className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-600 rounded-lg bg-opacity-40 shadow-lg">Details</button></td>
                    </tr>
                    
                    <tr>
                        <th className="p-3 text-sm text-gray-700">1</th>
                        <td className="p-3 text-sm text-gray-700">28, July 2022</td>
                        <td className="p-3 text-sm text-gray-700">12.30 PM</td>
                        <td className="p-3 text-sm text-gray-700">Hasan Ali</td>
                        <td className="p-3 text-sm text-gray-700"><button className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-600 rounded-lg bg-opacity-40 shadow-lg">Details</button></td>
                    </tr>
                    
                    <tr>
                        <th className="p-3 text-sm text-gray-700">1</th>
                        <td className="p-3 text-sm text-gray-700">28, July 2022</td>
                        <td className="p-3 text-sm text-gray-700">12.30 PM</td>
                        <td className="p-3 text-sm text-gray-700">Hasan Ali</td>
                        <td className="p-3 text-sm text-gray-700"><button className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-600 rounded-lg bg-opacity-40 shadow-lg">Details</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PastSchedule;