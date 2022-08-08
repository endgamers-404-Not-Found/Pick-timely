import React from 'react';

const AllUserRow = ({ user, index }) => {
    const {name,email, role } = user;
    
    const handleMakeAdmin = e =>{
        fetch(`https://pick-timely.herokuapp.com/allUser/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log('Make admin ', data);
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
            {
                role === 'admin'
                ?
                <p className='font-bold'>Already Admin</p>
                :
                <button onClick={handleMakeAdmin} className="btn btn-sm">Make Admin</button>
            }
            </td>
        </tr>
    );
};

export default AllUserRow;