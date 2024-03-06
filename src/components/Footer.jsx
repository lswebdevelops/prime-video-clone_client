import React from 'react';
import logo from "../assets/Logo-min.png";


function Footer() {
  return (
    <footer className='footer'>
      <hr />
      <img src={logo} className='logo' alt="prime video logo" />
      &copy; CopyRight {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
