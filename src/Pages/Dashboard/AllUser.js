import React, { useEffect, useState } from 'react';
import AllUserRow from './AllUserRow';

const AllUser = () => {
    const [users,setUsers]=useState([]);
    useEffect(() => {
        fetch(`https://pick-timely-server.onrender.com/allUser`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [users])
    return (
        <div className='mt-5'>
            <h1 className='text-2xl text-center font-semibold my-6'>All Users in Pick Timely</h1>
            <div className="overflow-x-auto">
                <table className=" border-gray-500 border  w-full">
                    <thead>
                        <tr className=''>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => <AllUserRow
                            key={index}
                            index={index}
                            user={user}
                            ></AllUserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;