import React from 'react';

const SchedulingItem = ({ item }) => {
    const { title, img, description } = item;
    return (
        <div className="card w-80 h-96  rounded-md mb-10 mx-5 shadow-2xl shadow-black">
            <figure className="px-10 pt-6">
                <img src={img} alt="Shoes" className="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SchedulingItem;