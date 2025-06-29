import React from 'react';

const Footer = ({ isNightMode }) => {
  return (
    <footer className={`py-4 text-center ${isNightMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <p className="text-sm">&copy; {new Date().getFullYear()} Kalyani Mali. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
