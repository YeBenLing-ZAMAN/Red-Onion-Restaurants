import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Lunch from './Lunch';

const Home = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link href="#Breakfast">Breakfast</Nav.Link>
                        <Nav.Link href="#Lunch">Lunch</Nav.Link>
                        <Nav.Link href="#Dinner">Dinner</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Lunch></Lunch>
        </div>
    );
};

export default Home;