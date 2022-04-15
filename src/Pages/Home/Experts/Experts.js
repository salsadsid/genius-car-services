import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';
const Experts = () => {
    const experts = [
        { id: 1, name: "Will Smith", img: expert1 },
        { id: 2, name: "Chris Evan", img: expert2 },
        { id: 3, name: "Leo DeCaprio", img: expert3 },
        { id: 4, name: "Thomas Shelby", img: expert4 },
        { id: 5, name: "Robert Downey JR", img: expert5 },
        { id: 6, name: "Ema Watson", img: expert6 },
    ]
    return (
        <div id='experts' className='container mt-3'>
            <h1 className='text-primary text-center'>Our Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;