import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../Images/logo/logo2.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import './Login.css';
import googleIcon from '../../Images/icons/google.png';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

    const handlePassword = (event) => {
        setEmail(event.target.value);
    }
    const handleEmail = (event) => {
        setPassword(event.target.value);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <div id="login" className='d-flex align-items-center justify-content-center'>
                <div className='w-50 from-red-onion'>
                    <img className=' d-block mx-auto my-5' src={logo} alt="" />
                    <Form onSubmit={handleSubmit} className='mx-auto w-75'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <p style={{ color: "red" }}>{error?.message || errorGoogle?.message}</p>
                        {
                            (loadingGoogle || loading) && <p>Loading....</p>
                        }
                        <Button className='w-100' variant="danger" type="submit">
                            Log In
                        </Button>
                    </Form>

                </div>
            </div>
            <p className='text-center mt-4'>
                New to Red Onion Foods? <Link className='' to='/signup'>Create an account</Link>
            </p>
            <div className='line-container'>
                <div className='line'></div>
                <p>OR</p>
                <div className='line'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='google-login-container'><img src={googleIcon} alt="" /> <p> continue with google</p></button>

        </div>
    );
};

export default Login;