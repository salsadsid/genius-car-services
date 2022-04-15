import React from 'react';
import img from '../../../images/not-found.jpg';

const NotFound = () => {
    return (
        <div>

            <div className='d-flex justify-content-center'>
                <img className='w-75' src={img} alt="" />
            </div>
            <h1 className='text-center text-primary'>Page Not Found</h1>
        </div>
    );
};

export default NotFound;