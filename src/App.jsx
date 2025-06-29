// Separate Sections – Clean, Creative, Browser & Screen Independent
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Technologies from './sections/Technologies';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Experience from './sections/Experience';
import './App.css';
import Education from './sections/Education';

const App = () => {


  return (
   <div>
      <Navbar  />
      <main>
        <Home  />
        
    
        <Technologies />
        <Experience/>
        <Projects />
        <Education/>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
