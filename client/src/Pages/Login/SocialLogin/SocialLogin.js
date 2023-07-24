import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorMessage;
    if (error || error1) {
        errorMessage = <div>
            <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    if (user || user1) {
        navigate('/home');
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div className='d-flex align-items-center px-3'>
                <div style={{ height: "2px" }} className='bg-secondary w-50 opacity-50'></div>
                <p className='fw-bolder mt-2 px-3'>OR</p>
                <div style={{ height: "2px" }} className='bg-secondary w-50 opacity-50'></div>
            </div>
            <div className=''>
                {errorMessage}
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2 fw-bold'>Google Sign In</span>
                </button>
                <button className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img style={{ width: "30px" }} src={facebook} alt="" />
                    <span className='px-2 fw-bold'>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()}
                    className='btn btn-secondary w-50 d-block mx-auto '>
                    <img src={github} alt="" />
                    <span className='px-2 fw-bold'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;