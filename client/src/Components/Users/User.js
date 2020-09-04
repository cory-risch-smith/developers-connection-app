/** @format */

import React from 'react';
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdbreact';

const User = () => {
  return (
    <MDBCol md='3' className='mt-2 mb-1'>
      <MDBCard style={{ width: '22rem' }}>
        <MDBCardImage className='img-fluid' src='https://mdbootstrap.com/img/Photos/Others/images/43.jpg' waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href='#'>MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default User;
