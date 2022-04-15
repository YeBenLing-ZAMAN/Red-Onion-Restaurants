import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './CheckOut.css';

const CheckOut = () => {
    return (
        <div className='row'>
            <div className='col-12 col-md-6'>
                <div className='Delivery-Details-container d-flex align-items-center justify-content-center'>
                    <div className='w-75'>
                        <Form className='mx-auto w-75'>
                            <h3>Edit Delivery Details</h3>
                            <hr className='mb-5' />
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" placeholder="Services" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" placeholder="Road No" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" placeholder="Flat, Suite or floor" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" placeholder="Devlivery to" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="tel" placeholder="Mobile Number" />
                            </Form.Group>
                            <Button className='w-100' variant="danger" type="submit">
                                save {`&`} continue
                            </Button>
                        </Form>

                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <div className='Delivery-Details-container d-flex align-items-center justify-content-center'>
                    <h1>this caahb</h1>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;