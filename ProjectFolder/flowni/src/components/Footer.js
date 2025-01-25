// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <p>&copy; FlowNI, designed using React</p>
      <div>
        <a href="https://facebook.com" className="text-white mx-2">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" className="text-white mx-2">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" className="text-white mx-2">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
