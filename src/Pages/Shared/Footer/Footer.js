import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='text-center my-3'>
            <p><small>copyright @ {year}</small></p>
        </div>
    );
};

export default Footer;