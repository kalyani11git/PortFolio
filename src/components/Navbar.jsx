import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0b21] shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand/Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-violet-500 tracking-wide">
          Kalyani Mali
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-base font-medium">
          {['home', 'skills', 'projects', 'education', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70} // adjust for navbar height
              className="cursor-pointer text-white hover:text-violet-400 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
