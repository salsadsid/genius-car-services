import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    console.log(user)
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center'>
            <h2 className='text-center text-center'>Your email is not verified</h2>
            <button onClick={async () => {
                sendPasswordResetEmail();
                toast('Sent Email');
            }} className="btn-primary">Send Email Verification</button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children
};

export default RequireAuth;