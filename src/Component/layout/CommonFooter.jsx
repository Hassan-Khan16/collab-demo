
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Styles.css';

const CommonFooter = () => {
    return (
        <>
            <Navbar expand="lg" className="custom-theme-color custom-footer">
                <Container fluid className='d-flex flex-column align-items-center justify-content-around m-3'>
                    <div className='d-flex flex-column flex-lg-row justify-content-around w-100 mb-2 text-center text-lg-left'>
                        <a href="#" className='mb-2 mb-lg-0 '>Terms & Conditions</a>
                        <p className='mb-2 mb-lg-0'>Copyright © 2024 Your College Concierge. All rights reserved.</p>
                        <a href="#" className='mb-2 mb-lg-0'>Privacy Policy</a>
                    </div>
                    <a href="#" className='text-center'>Website by Sky Systems, Inc.</a>
                </Container>
            </Navbar>
        </>
    );
};

export default CommonFooter;
