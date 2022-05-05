import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (

        <div className='text-center my-4'>
            <h2 >This is Service Detail:{service.name}</h2>
            <h4>Price : {service.price}</h4>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed CheckOut</button>
            </Link>
        </div>

    );
};

export default ServiceDetail;