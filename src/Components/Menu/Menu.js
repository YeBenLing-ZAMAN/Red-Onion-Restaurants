import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Header/CustomLink';
import Breakfast from '../Home/Breakfast';
import Dinner from '../Home/Dinner';
import Lunch from '../Home/Lunch';
import './Menu.css';
const Menu = () => {
    const [change, setChange] = useState('breakfast');
    return (
        <div className='mb-5' style={{minHeight:"100vh"}}>
        <Navbar id="menu" bg="light" variant="light">
            <Container>
                <Nav className="mx-auto meun-container">
                    <h4 onClick={()=>{setChange('breakfast')}} className="" style={{color : change === 'breakfast' ? "tomato" :"black"}}>Breakfast</h4>
                    <h4 onClick={()=>{setChange('lunch')}} className="" style={{color : change === 'lunch' ? "tomato" :"black"}}>Lunch</h4>
                    <h4 onClick={()=>{setChange('dinner')}} className="" style={{color : change === 'dinner' ? "tomato" :"black"}}>Dinner</h4>
                </Nav>
            </Container>
        </Navbar>
        <div>
            {
                change === 'breakfast' && <Breakfast></Breakfast>
            }
            {
                change === 'lunch' && <Lunch></Lunch>
            }
            {
                change === 'dinner' && <Dinner></Dinner>
            }
        </div>
    </div>
    );
};

export default Menu;


/* 
<CustomLink className='pe-2 text-decoration-none' to="breakfast">Breakfast</CustomLink>
<CustomLink className='pe-2 text-decoration-none' to="lunch">Lunch</CustomLink>
<CustomLink className='pe-2 text-decoration-none' to="dinner">Dinner</CustomLink>
*/