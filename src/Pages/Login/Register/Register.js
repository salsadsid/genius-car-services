import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password);
    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary'>Registration</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='mt-3'>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateToLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;