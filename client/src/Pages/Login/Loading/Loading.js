import React from 'react';

const Loading = () => {
    return (
        <div style={{ height: "300px" }} className='d-flex justify-content-center align-items-center mt-5 '>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;