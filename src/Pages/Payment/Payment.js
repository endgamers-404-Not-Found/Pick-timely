import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import Spinner from '../../SharedComponents/Spinner';

function Payment() {
    const { id } = useParams()
    const { data, isLoading } = useQuery('package', async() => await fetch(`http://localhost:5000/package/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }

console.log(data)

    return (
        <div>
            <h2>this is payment route </h2>
        </div>
    )
}

export default Payment;
