/** @format */

import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon, MDBInput, MDBBtn } from 'mdbreact';

const Login = () => {
  return (
    <MDBContainer className='mt-5 mb-5'>
      <MDBRow center>
        <MDBCol md='8'>
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className='form-header deep-blue-gradient rounded'>
                <h3 className='my-3'>
                  <MDBIcon icon='lock' /> Login:
                </h3>
              </MDBCardHeader>
              <form>
                <div className='grey-text'>
                  <MDBInput
                    label='Type your email'
                    icon='envelope'
                    group
                    type='email'
                    validate
                    error='wrong'
                    success='right'
                  />
                  <MDBInput label='Type your password' icon='lock' group type='password' validate />
                </div>

                <div className='text-center mt-4'>
                  <MDBBtn color='light-blue' className='mb-3' type='submit'>
                    Login
                  </MDBBtn>
                </div>
              </form>
              {/* <MDBModalFooter>
                <div className='font-weight-light'>
                  <p>Not a member? Sign Up</p>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
