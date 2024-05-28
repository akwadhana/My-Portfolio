// src/Footer.js
import React from 'react';

const Footer = () => {
    return (
      <footer className=" bg-zinc-900 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-center md:text-left">
          
          </div>
          <div className="flex space-x-4 justify-center md:justify-end">
            {/* <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a> */}
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;
