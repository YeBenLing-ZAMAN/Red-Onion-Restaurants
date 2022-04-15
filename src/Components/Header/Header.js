import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../Images/logo/logo2.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img className='logo-img' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Cart</Nav.Link>
                            <Nav.Link href="#pricing">Log In</Nav.Link>
                            <Nav.Link href="#pricing" className='btn btn-danger rounded-pill px-4 text-light'>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;