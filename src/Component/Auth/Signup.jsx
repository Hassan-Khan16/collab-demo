import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Form } from 'react-bootstrap';

function SignupForm() {
    return (
        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <Card style={{ maxWidth: '600px', width: '100%' }}>
                <Card.Body>
                    <h2 className="text-center mb-5">Create an account</h2>
                    <Form>
                        <Form.Group className="mb-4" controlId="formName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formEmail">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>

                        <Button className="w-100" variant="primary" size="lg">Register</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default SignupForm;
