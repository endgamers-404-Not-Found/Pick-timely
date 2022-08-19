import React from 'react';

const AllUserRow = ({ user, index }) => {
    const {name,email, role } = user;
    
    const handleMakeAdmin = e =>{
        fetch(`http://localhost:5000/allUser/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Make admin ', data);
            })
    }
    const removeAdmin = ()=>{
        fetch(`http://localhost:5000/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                // console.log( data);
            })
    }
    return (
        <tr className='border p-2 border-gray-500 hover:bg-primary'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
            {
                role === 'admin'
                ?
                <button onClick={removeAdmin} className="btn btn-sm ">Remove Admin</button>
                :
                <button onClick={handleMakeAdmin} className="btn btn-sm btn-primary">Make Admin</button>
            }
            </td>
        </tr>
    );
};

export default AllUserRow;