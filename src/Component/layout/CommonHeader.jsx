import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Style.css';

const CustomHeader = () => {
    return (
        <Navbar  expand="lg" className="custom-theme-color custom-navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
            <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
                <Nav className="mx-auto">
                    <LinkContainer to="/">
                        <Nav.Link className="nav-item">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link className="nav-item">About Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <Nav.Link className="nav-item">Sign Up</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link className="nav-item">Login</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomHeader;
