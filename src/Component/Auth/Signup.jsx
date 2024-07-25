import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Form } from 'react-bootstrap';
import './Style.css' ;

function SignupForm() {
    return (
        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <Card style={{ maxWidth: '400px', width: '100%' }}>
                <Card.Body>
                    <h2 className="text-center mb-5">Create an Account</h2>
                    <Form>
                        <Form.Group className="mb-4" controlId="formName">
                            <Form.Label className="d-flex justify-content-start">User Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formEmail">
                            <Form.Label className="d-flex justify-content-start">User Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formPassword">
                            <Form.Label className="d-flex justify-content-start">Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Button className="w-100 custom-button" size="lg">Register</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default SignupForm;
