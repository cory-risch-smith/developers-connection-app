/** @format */

import React from 'react';
import { MDBFooter, MDBContainer } from 'mdbreact';

const Footer = () => {
  return (
    <MDBFooter color='purple-gradient' className='font-small  '>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <strong>DaxCode</strong>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
