import React, { useEffect, useState } from 'react';
import AllUserRow from './AllUserRow';

const AllUser = () => {
    const [users,setUsers]=useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allUser`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [users])
    return (
        <div className='mt-5'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
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