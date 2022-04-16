import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo/logo2.png';
import googleIcon from "../../Images/icons/google.png";
import faceBookIcon from '../../Images/icons/Facebook_f_logo_(2019).svg'

const SignUp = () => {
    return (
        <div className='form-container d-flex flex-column align-items-center justify-content-center'>
            <div className='w-50 from-red-onion'>
                <img className='d-block mx-auto my-5' src={logo} alt="" />
                <Form className='mx-auto w-75'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter New Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button className='w-100' variant="danger" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
            <p className='text-center mt-4'>
                Already have Member? <Link className='' to='/signup'>Go to Lon In</Link>
            </p>
            <div className='line-container'>
                <div className='line'></div>
                <p>OR</p>
                <div className='line'></div>
            </div>
            <div className='d-flex flex-column flex-md-row'>
            <button className='google-login-container m-2'><img src={googleIcon} alt="" /> <p> continue with google</p></button>
            <button className='google-login-container m-2'><img src={faceBookIcon} alt="" /> <p> continue with faceBook</p></button>
            </div>
        </div>
    );
};

export default SignUp;