import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../Images/logo/logo2.png';
import CustomLink from './CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href=""><img className='logo-img' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="link-contianer ms-auto d-flex align-items-center ">
                           <CustomLink href="#home" to='/home'>Home</CustomLink>
                           <CustomLink to='/cart'>Cart</CustomLink>
                           <CustomLink href="#login" to='/login'>Log In</CustomLink>
                            <CustomLink to="/signup" className='btn btn-danger rounded-pill px-4 text-light'>Sign Up</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;