import React from 'react';

const SchedulingItem = ({ item }) => {
    const { title, img, description } = item;
    return (
        <div style={{ boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px" }} className="card w-80 h-96  rounded-md mb-10 mx-5 bg-[#f8fafc]">
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