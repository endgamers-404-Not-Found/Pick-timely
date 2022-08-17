import React from 'react';

const PastSchedule = () => {
    return (
        <div className='mt-5'>
            <div className='flex gap-5 mt-5 mb-2 flex-col md:flex-row'>
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
                <div className="overflow-auto rounded-lg shadow hidden md:block">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Time</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">

                            <tr className="bg-white">
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span
                                        className="font-bold text-blue-500 hover:underline">
                                        1
                                    </span>
                                </td>
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    28, July 2022
                                </td>
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span
                                        className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                                        12.30 PM
                                    </span>
                                </td>
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    Iqbal Hossain
                                </td>

                                <td
                                    className="p-3 text-sm text-gray-700">
                                    <button className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-600 rounded-lg bg-opacity-40 shadow-lg">
                                        Details
                                    </button>
                                </td>
                            </tr>

                            <tr className="bg-white">
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span
                                        className="font-bold text-blue-500 hover:underline">
                                        1
                                    </span>
                                </td>
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    28, July 2022
                                </td>
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span
                                        className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                                        12.30 PM
                                    </span>
                                </td>
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    Iqbal Hossain
                                </td>

                                <td
                                    className="p-3 text-sm text-gray-700">
                                    <button className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-600 rounded-lg bg-opacity-40 shadow-lg">
                                        Details
                                    </button>
                                </td>
                            </tr>

                            <tr className="bg-white">
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span
                                        className="font-bold text-blue-500 hover:underline">
                                        1
                                    </span>
                                </td>
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    28, July 2022
                                </td>
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span
                                        className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                                        12.30 PM
                                    </span>
                                </td>
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    Iqbal Hossain
                                </td>

                                <td
                                    className="p-3 text-sm text-gray-700">
                                    <button className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-600 rounded-lg bg-opacity-40 shadow-lg">
                                        Details
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <span className="text-blue-500 font-bold hover:underline">1</span>
                            </div>
                            <div className="text-gray-500"> 28, July 2022</div>
                            <div>
                                <span
                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">  12.30 PM</span>
                            </div>
                        </div >
                        <div className="text-sm text-gray-700" >
                            Iqbal Hossain
                        </div >
                        <div className="text-sm font-medium text-black" >
                            <button className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-600 rounded-lg bg-opacity-40 shadow-lg">
                                Details
                            </button>
                        </div >
                    </div >
                </div >

            </div >
        </div >
    );
};

export default PastSchedule;