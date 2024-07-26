
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Styles.css';

const CommonFooter = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary custom-footer">
                <Container fluid className='d-flex flex-column align-items-center justify-content-around m-3'>
                    <div className='d-flex justify-content-around w-100 mb-2'>
                        <a href="#" className='mb-0 '>Terms & Conditions</a>
                        <p className='mb-0'>Copyright © 2024 Your College Concierge. All rights reserved.</p>
                        <a href="#" className='mb-0'>Privacy Policy</a>
                    </div>
                    <a href="#" >Website by Sky Systems, Inc.</a>
                </Container>
            </Navbar>
        </>
    );
};

export default CommonFooter;
