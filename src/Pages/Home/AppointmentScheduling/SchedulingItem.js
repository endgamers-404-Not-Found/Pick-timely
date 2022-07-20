import React from 'react';

const SchedulingItem = ({item}) => {
    const {title,img,description}=item;
    return (
        <div class="card w-80 h-96 bg-base-100 shadow-xl rounded-none mb-10 mx-5">
            <figure class="px-10 pt-6">
                <img src={img} alt="Shoes" class="" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SchedulingItem;