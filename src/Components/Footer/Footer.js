import React from 'react';
import logo from '../../Images/logo/logo2.png';
import './Footer.css';
const Footer = () => {
    const year= 2022;
    return (
        <div className='bg-dark py-5'>
            <div className='container d-flex  text-light mb-5'>
                <div><img className='logo-img' src={logo} alt="" /></div>
                <div className='ms-auto d-flex'>
                    <div className='mx-4'>
                        <p>Anout Online</p>
                        <p>Read our food Blog</p>
                        <p>sign up to deliver</p>
                        <p>Add Your restaurant</p>
                    </div>
                    <div className='mx-4'>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                    </div>
                </div>
            </div>
            <div className='container d-flex  text-light mt-5'>
                <p>copyright @{year} online food</p>
                <div className='ms-auto d-flex privacy-container'>
                    <p>privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;