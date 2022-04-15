import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const FoodShowing = ({ item }) => {
    console.log(item);
    const { picture, name, about, balance } = item;
    return (
        <Col className='d-flex'>
            <Card className='pt-3'>
                <Card.Img className='mx-auto' style={{ width: '14rem' }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{about.slice(0, 100)}</Card.Text>
                    <div className='d-flex align-items-center'>
                        <div>
                            <h3>{balance}</h3>
                        </div>
                        <div className='ms-auto'>
                        <Button variant="outline-primary me-2">see more</Button>
                        <Button variant="outline-danger">Add cart</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FoodShowing;