import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import BannarImg from '../../Images/Bannar/bannerbackground.png'
import './Bannar.css';
const Bannar = () => {
    return (
        <div className='bannar-container d-flex align-items-center justify-content-center' style={{backgroundImage : `url(${BannarImg})`}}>
            <div>
                <h1 className='mb-3'>Best Food waiting for your Belly</h1>
                <InputGroup className="mb-3 mx-auto w-75">
                    <FormControl
                        placeholder="Search Your food item"
                        aria-label="Search Your food item"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-danger" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default Bannar;