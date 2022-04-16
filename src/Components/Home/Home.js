import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Header/CustomLink';
const Home = () => {
    return (
        <div>
            <Navbar id="home" bg="light" variant="light">
                <Container>
                    <Nav className="mx-auto">
                        <CustomLink className='pe-2 text-decoration-none' to="breakfast">Breakfast</CustomLink>
                        <CustomLink className='pe-2 text-decoration-none' to="lunch">Lunch</CustomLink>
                        <CustomLink className='pe-2 text-decoration-none' to="dinner">Dinner</CustomLink>
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;