import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center px-3'>
                <div style={{ height: "2px" }} className='bg-secondary w-50 opacity-50'></div>
                <p className='fw-bolder mt-2 px-3'>OR</p>
                <div style={{ height: "2px" }} className='bg-secondary w-50 opacity-50'></div>
            </div>
            <div className=''>
                <button className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2 fw-bold'>Google Sign In</span>
                </button>
                <button className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img style={{ width: "30px" }} src={facebook} alt="" />
                    <span className='px-2 fw-bold'>Facebook Sign In</span>
                </button>
                <button className='btn btn-secondary w-50 d-block mx-auto '>
                    <img src={github} alt="" />
                    <span className='px-2 fw-bold'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;