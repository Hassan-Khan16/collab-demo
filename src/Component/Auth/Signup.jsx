import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';

function App() {
    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                    <div className="mb-4">
                        <label htmlFor="form1" className="form-label">Your Name</label>
                        <MDBInput id='form1' type='text' />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form2" className="form-label">Your Email</label>
                        <MDBInput id='form2' type='email' />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form3" className="form-label">Password</label>
                        <MDBInput id='form3' type='password' />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="form4" className="form-label">Repeat your password</label>
                        <MDBInput id='form4' type='password' />
                    </div>
                    <div className='mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                    </div>
                    <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default App;
