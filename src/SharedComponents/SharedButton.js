import React from 'react';

const SharedButton = ({ children }) => {
    return (
        <button className="btn btn-primary  text-white font-bold" > {children}</button >
    );
};

export default SharedButton;