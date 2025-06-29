import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import girlLogo from '../images/girl-logo.png';
import Kalyani_Mali from '../images/Kalyani_Mali_Resume.pdf';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 pt-24 bg-black text-white"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-violet-500">Hi, I'm Kalyani Mali</h1>

        <p className="mt-4 text-xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
          Full Stack Developer
        </p>

        <p className="mt-6 max-w-xl text-sm md:text-lg text-gray-300">
          I am a motivated and versatile individual, always eager to take on new challenges.
          With a passion for learning I am dedicated to delivering high-quality results.
          With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
        </p>

        <div className="mt-6 flex justify-center md:justify-start space-x-6 text-white">
          <a href="https://github.com/kalyani11git" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
          <a href="https://linkedin.com/in/kalyani-mali-11" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="mailto:kalyanimali2003@gmail.com"><FaEnvelope size={30} /></a>
        </div>

        <div className="mt-8">
          <a href="https://drive.google.com/file/d/1VjeKqj6hito9XsrHDlIxoHENvu9UgI04/view?usp=sharing" target='_blank'>
            <button className="px-6 py-3 rounded bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold hover:scale-105 transition-transform">
              Check Resume
            </button>
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
      >
        <img
          src={girlLogo}
          alt="Girl Developer"
          className="w-44 h-44 md:w-60 md:h-60 rounded-full object-cover border-4 border-violet-500"
        />
      </motion.div>
    </section>
  );
};

export default Home;
