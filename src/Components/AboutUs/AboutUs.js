import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import cheifCook from '../../Images/aboutus/chefcook.png'
import showingMan from '../../Images/aboutus/showing.png'
import deliveryMan from '../../Images/aboutus/deliveryman.png'
import './AboutUs.css'

class AboutUs extends Component {
    render() {
        return (
            <div className='about-container'>
                <div className='content-container'>
                    <h3>why you chose us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia impedit sequi libero, exercitationem eius, totam mollitia aut doloremque ea molestias provident.</p>
                </div>
                <Row xs={1} md={2} lg={3} className="container mx-auto g-4 pt-5">
                    <div>
                        <Col className='d-flex'>
                            <Card className='pt-3'>
                                <Card.Img className='mx-auto' style={{ width: '14rem' }} variant="top" src={showingMan} />
                                <Card.Body>
                                    <Card.Title>Fast Delivery</Card.Title>
                                    <div className='d-flex align-items-center'>
                                        <div className=''>
                                            <p className="btn btn-primary me-2">see more</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    <div>
                        <Col className='d-flex'>
                            <Card className='pt-3'>
                                <Card.Img className='mx-auto' style={{ width: '14rem' }} variant="top" src={cheifCook} />
                                <Card.Body>
                                    <Card.Title>Fast Delivery</Card.Title>
                                    <div className='d-flex align-items-center'>
                                        <div className=''>
                                            <p className="btn btn-primary me-2">see more</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col></div>
                    <div>
                        <Col className='d-flex'>
                            <Card className='pt-3'>
                                <Card.Img className='mx-auto' style={{ width: '14rem' }} variant="top" src={deliveryMan} />
                                <Card.Body>
                                    <Card.Title>Fast Delivery</Card.Title>
                                    <div className='d-flex align-items-center'>
                                        <div className=''>
                                            <p className="btn btn-primary me-2">see more</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </div>
        );
    }
}

export default AboutUs;