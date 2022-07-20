import React from 'react';

const SharedButton = ({ children }) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold" > {children}</button >
    );
};

export default SharedButton;