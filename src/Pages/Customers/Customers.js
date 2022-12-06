import React, { useEffect, useState } from 'react';

const Customers = () => {

    const [customers, setCustomer] = useState([]);

    console.log(customers);

    useEffect(() => {
        const url = `https://pick-timely-server.vercel.app/customers`;
        fetch(url)
            .then(res => res.json())
            .then(result => setCustomer(result))
    }, [])

    return (


        <div className="p-5 h-screen bg-gray-50 overflow-x-scroll">
            <h1 className="text-xl mb-2 text-center font-serif">Our all customers Information</h1>

            <div className="overflow-auto rounded-lg shadow hidden md:block">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Role</th>
                            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">company</th>
                            <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">address</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {
                            customers?.map((customers, index) => <tr className="bg-white">
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span className="font-bold text-blue-500 hover:underline">{index + 1}</span>
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    {customers.name}
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span
                                        className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{customers.role}</span>
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{customers.company}</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{customers.address}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {
                    customers?.map((customer, index) => <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <span className="text-blue-500 font-bold hover:underline">{index + 1}</span>
                            </div>
                           ;5U <div className="text-gray-500">{customer.address}</div>
                            <div>
                                <span
                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{customer.role}</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-700">
                            {customer.name}
                        </div>
                        <div className="text-sm font-medium text-black">
                            {customer.company}
                        </div>
                    </div>)
                }
            </div>
        </div>



    );
};

export default Customers;