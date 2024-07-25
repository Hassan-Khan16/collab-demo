import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Form } from 'react-bootstrap';
import './Style.css' ;

function Login() {
    return (
        <Container className='d-flex align-items-center justify-content-center' >
            <Card style={{ maxWidth: '400px', width: '100%' }}>
            <Card.Body>
                    <h2 className="text-center mb-5">Login to your Account</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button style={{width:'23rem'}} className='custom-button' size='lg' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            </Card.Body>
            </Card>
        </Container>
    );
}

export default Login;
