/** @format */

import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!open);
  };
  return (
    <>
      <MDBNavbar color='purple-gradient' dark expand='md'>
        <div className='container'>
          <MDBNavbarBrand>
            <Link to='/'>
              <strong className='white-text'>DevConnectors</strong>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={open} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to='/users'>Users</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to='/login'>Login</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/register'>Register</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </div>
      </MDBNavbar>
    </>
  );
};

export default Header;
