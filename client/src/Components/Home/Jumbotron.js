/** @format */

import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact';

const Jumbotron = () => {
  return (
    <MDBContainer className='mt-3 text-center'>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className='p-0'>
            <MDBCardImage className='img-fluid' src='https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg' />
            <MDBCardBody>
              <MDBCardTitle className='h3'>Welcome to the Developers Community</MDBCardTitle>
              <MDBCardText>
                The Community where developers can share their thought and post their work to the world of developers
                and others can like and comment those post as well post on them.
              </MDBCardText>
              {/* <MDBBtn href='#' gradient='purple' rounded>
                BUTTON
              </MDBBtn> */}
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Jumbotron;
