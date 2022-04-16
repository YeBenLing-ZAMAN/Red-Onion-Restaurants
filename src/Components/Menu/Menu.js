import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Header/CustomLink';

const Menu = () => {
    return (
        <div className='mb-5' style={{minHeight:"100vh"}}>
        <Navbar id="menu" bg="light" variant="light">
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

export default Menu;