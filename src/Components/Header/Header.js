import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Images/logo/logo2.png';
import CustomLink from './CustomLink';
import './Header.css';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href=""><img className='logo-img' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="link-contianer ms-auto d-flex align-items-center ">
                           <CustomLink to="/home">home</CustomLink>
                           <CustomLink to="/menu">Menu</CustomLink>
                           {/* <Nav.Link href="#home2">Menu</Nav.Link> */}
                           <CustomLink to='/about' herf='#about'>About</CustomLink>
                           <CustomLink to='/cart'>Cart</CustomLink>
                           {
                               user
                               ?
                               <CustomLink to="/signup" onClick={logout} className='btn btn-danger rounded-pill px-4 text-light'>Log out</CustomLink>
                               :
                               <>
                               <CustomLink href="#login" to='/login'>Log In</CustomLink>
                               <CustomLink to="/signup" className='btn btn-danger rounded-pill px-4 text-light'>Sign Up</CustomLink>
                               </>
                           }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;