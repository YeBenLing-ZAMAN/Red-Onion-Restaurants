import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../Images/logo/logo2.png';

const SignUp = () => {
    return (
        <div className='form-container d-flex align-items-center justify-content-center'>
        <div className='w-50'>
            <img className='d-block mx-auto my-5' src={logo} alt="" />
            <Form className='mx-auto w-75'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button className='w-100' variant="danger" type="submit">
                    Sign Up
                </Button>
            </Form>

        </div>
    </div>
    );
};

export default SignUp;