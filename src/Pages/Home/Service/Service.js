import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, price, description, img } = service
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p><small>Price: {price}</small></p>
            <p>{description}</p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;