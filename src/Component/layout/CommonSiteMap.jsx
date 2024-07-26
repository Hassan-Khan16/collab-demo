import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import './Style.css'; 

const Sitemap = () => {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center custom-theme-color custom-footer">
            <Nav className="d-flex align-items-center w-100 m-5">
                <Nav.Item className="flex-fill d-flex justify-content-center">
                    <img
                        src='https://yourcollegeconcierge.com/wp-content/uploads/2024/02/ycc-logo-circle1.svg'
                        alt="Footer Logo"
                        width='150px'
                    />
                </Nav.Item>
                <Nav.Item className="flex-fill d-flex align-items-center justify-content-center">
                    <Nav.Link href="#vendor">VENDOR DIRECTORY</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-fill d-flex align-items-center justify-content-center">
                    <Nav.Link href="#shop">SHOP</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-fill d-flex align-items-center justify-content-center">
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-fill d-flex align-items-center justify-content-center">
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default Sitemap;
