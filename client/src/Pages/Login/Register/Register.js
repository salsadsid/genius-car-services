import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate('/login')
    }

    if (user) {
        console.log(user)
    }
    const handleRegister = async event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log("update")
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary'>Registration</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='mt-2 w-50 d-block mx-auto btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='mt-3'>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateToLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;