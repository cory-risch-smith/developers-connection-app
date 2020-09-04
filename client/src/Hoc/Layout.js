/** @format */

import React from 'react';
import Header from '../Components/HeaderFooter/Header';
import Footer from '../Components/HeaderFooter/Footer';

export const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
