import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errorMessage;
    if (error) {
        errorMessage = <div>
            <p className='text-danger text-center'>Error: {error?.message}</p>
        </div>
    }
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }

    const navigateToRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent Mail");
        }
        else {
            toast("Please provide an email!");
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary mt-3'>Please Login</h2>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-danger text-center mt-3'>{errorMessage}</p>
                <p className='mt-3'>New To Genius Car Services? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateToRegister}>Please Register!</Link></p>
                <p className='mt-3'>Forget Password? <button className='text-danger text-decoration-none btn btn-link' onClick={resetPassword}>Reset Password!</button></p>
                <ToastContainer />
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;