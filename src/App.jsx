// src/App.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import reactLogo from './images/react-logo.png';  // Use appropriate paths for logos
import tailwindLogo from './images/tailwind-logo.png';
import springBootLogo from './images/springboot-logo.png';
import javaLogo from './images/java-logo.png';
import mongoDBLogo from './images/mongodb-logo.png';
import girlLogo from './images/girl-logo.png'
import clogo from './images/c-logo.png';
import jslogo from './images/js-logo.png';
import mysqlLogo from './images/mysql-logo.png';

const Portfolio = () => {
  const [isNightMode, setIsNightMode] = useState(true);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return(
    <div className={isNightMode ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* Navbar */}
      <header className={`fixed top-0 left-0 w-full z-10 p-4 ${isNightMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Kalyani Mali</h1>
          <div className="space-x-6">
            <Link to="home" smooth={true} className="cursor-pointer">Home</Link>
            <Link to="about" smooth={true} className="cursor-pointer">About</Link>
            <Link to="projects" smooth={true} className="cursor-pointer">Projects</Link>
            <Link to="technologies" smooth={true} className="cursor-pointer">Technologies</Link>
            <Link to="contact" smooth={true} className="cursor-pointer">Contact</Link>
          </div>
          <button onClick={toggleTheme} className="ml-4">
            {isNightMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </nav>
      </header>

      {/* Home Section */}
      {/* Home Section */}
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}>
  <motion.div 
    className="text-center"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-6xl font-bold text-violet-500">Hello, I'm Kalyani Mali</h2>
    <p className="mt-4 text-xl text-violet-300">A Web Developer & Full Stack Developer</p>

    {/* Image below intro text */}
    <div className="mt-6">
      <img src={girlLogo} alt="Girl Developer" className="w-60 h-60 mx-auto rounded-full object-cover" />
    </div>

    {/* Social Links */}
    <div className="mt-8 flex justify-center space-x-4">
      <a href="https://github.com/kalyani11git" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className="hover:text-gray-400 transition-colors duration-200" />
      </a>
      <a href="https://linkedin.com/in/kalyani-mali-11" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className="hover:text-blue-500 transition-colors duration-200" />
      </a>
      <a href="mailto:kalyanimali2003@gmail.com">
        <FaEnvelope size={30} className="hover:text-red-500 transition-colors duration-200" />
      </a>
    </div>
  </motion.div>
    </section>


      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center p-10">
        <motion.div 
          className="text-center max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-violet-500 mb-6">About Me</h2>
          <p className="text-xl">
            I am a computer engineer specializing in web development and full stack development. I have experience in various technologies including HTML, CSS, JavaScript, React, Spring Boot, and more. My passion is to build responsive, efficient, and user-friendly websites.
          </p>
        </motion.div>
      </section>

      {/* Projects Section with Auto Scroll */}
      <section id="projects" className="min-h-screen p-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-violet-500 mb-12">My Projects</h2>
          <motion.div 
            className="flex overflow-x-auto space-x-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg min-w-[300px]">
              <h3 className="text-2xl font-semibold text-violet-300">Service Provider</h3>
              <p>Using HTML, CSS, Spring, MySQL</p>
              <a href="https://github.com/project-link" className="mt-4 block text-blue-500" target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg min-w-[300px]">
              <h3 className="text-2xl font-semibold text-violet-300">E-commerce Website</h3>
              <p>Using React, Tailwind, HTML</p>
              <a href="https://github.com/project-link" className="mt-4 block text-blue-500" target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg min-w-[300px]">
              <h3 className="text-2xl font-semibold text-violet-300">OrnaVesta</h3>
              <p>Using Spring Boot, Java, React, MongoDB</p>
              <a href="https://github.com/project-link" className="mt-4 block text-blue-500" target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg min-w-[300px]">
              <h3 className="text-2xl font-semibold text-violet-300">Music Player</h3>
              <p>Using JS, HTML, CSS</p>
              <a href="https://github.com/project-link" className="mt-4 block text-blue-500" target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg min-w-[300px]">
              <h3 className="text-2xl font-semibold text-violet-300">This Portfolio Website</h3>
              <p>Using React, Tailwind, HTML</p>
              <a href="https://github.com/project-link" className="mt-4 block text-blue-500" target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section with Logos */}
      <section id="technologies" className="min-h-screen p-10 bg-violet-200">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-black mb-12">Technologies I Use</h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-violet-500 text-white p-6 rounded-lg shadow-lg">
              <img src={reactLogo} alt="React" className="h-12 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">React</h3>
            </div>
            <div className="bg-violet-500 text-white p-6 rounded-lg shadow-lg">
              <img src={tailwindLogo} alt="Tailwind CSS" className="h-12 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Tailwind CSS</h3>
            </div>
            <div className="bg-violet-500 text-white p-6 rounded-lg shadow-lg">
              <img src={springBootLogo} alt="Spring Boot" className="h-12 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Spring Boot</h3>
            </div>
            <div className="bg-violet-500 text-white p-6 rounded-lg shadow-lg">
              <img src={javaLogo} alt="Java" className="h-12 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Java</h3>
            </div>
            <div className="bg-violet-500 text-white p-6 rounded-lg shadow-lg">
              <img src={mongoDBLogo} alt="MongoDB" className="h-12 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">MongoDB</h3>
            </div>
              <div className="bg-violet-500 text-white p-6 rounded-lg shadow-lg">
              <img src={clogo} alt="Spring Boot" className="h-12 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">C/C++</h3>
            </div>
            <div className="bg-violet-500 text-white p-6 rounded-lg shadow-lg">
              <img src={jslogo} alt="Java" className="h-12 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">JavaScript</h3>
            </div>
            <div className="bg-violet-500 text-white p-6 rounded-lg shadow-lg">
              <img src={mysqlLogo} alt="MongoDB" className="h-12 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">MySql</h3>
             
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-10 bg-gray-900 text-white">
        <h2 className="text-5xl font-bold mb-8">Get In Touch</h2>
        <motion.div 
          className="w-full max-w-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <form 
            action="https://formspree.io/f/your-form-id" 
            method="POST" 
            className="flex flex-col space-y-4"
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="p-4 bg-gray-800 text-white rounded-lg"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="p-4 bg-gray-800 text-white rounded-lg"
            />
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              required 
              className="p-4 bg-gray-800 text-white rounded-lg"
            ></textarea>
            <button 
              type="submit" 
              className="p-4 bg-violet-500 hover:bg-violet-600 text-white rounded-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={`p-4 text-center ${isNightMode ? 'bg-gray-800' : 'bg-gray-200'} mt-4`}>
        <p>&copy; 2024 Kalyani Mali. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default Portfolio;

