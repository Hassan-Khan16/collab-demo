

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Card, Button, Form } from 'react-bootstrap';
import './Style.css';

function Login() {
    return (

        <Container className='d-flex align-items-center justify-content-center container-center' >
            <Card className='card-max-width'>
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

                        <Button className=' w-100 custom-button' size='lg' variant="primary" type="submit">
                            Submit
                        </Button>

                        <div className='text-center m-3'>
                            Don't have an account? <Link className='text-decoration-none' to='/'>Sign up</Link>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Login;
