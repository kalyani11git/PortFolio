import React from 'react';
import smartRecipeImg from '../images/smartrecipe.png';
import portfolioImg from '../images/portfolio.png';
import shopifyImg from '../images/shopify.png';
import memoryGameImg from '../images/memorycardgame.png';
import netflixCloneImg from '../images/netflixclone.png'


const projects = [
  {
    name: "SmartRecipe",
    tech: ["React", "Spring Boot", "MongoDB"],
    image: smartRecipeImg,
    description: "A smart recipe recommendation app using AI. Users can discover and save recipes with a Spring Boot backend and React frontend.",
    code: "https://github.com/kalyani11git/SmartRecipe_Frontend.git", live: "https://smartrecipebykalyani.netlify.app/"
  },
  {
    name: "Portfolio",
    tech: ["React", "Tailwind CSS"],
    image: portfolioImg,
    description: "A personal portfolio website with animations, light/dark mode, smooth scrolling, and contact form.",
    code: "https://github.com/kalyani11git/PortFolio.git", live: "https://kalyanimali-portfolio.netlify.app/"
  },
  {
    name: "Shopify",
    tech: ["MERN", "JWT", "External API"],
    image: shopifyImg,
    description: "An e-commerce platform like Flipkart with JWT auth, product APIs, cart, wishlist, and Redux integration.",
    code: "https://github.com/kalyani11git/Shopify-frontend.git", live: "https://shopify-ecommerce-clone.netlify.app/"
  },
  {
    name: "Memory Card Game",
    tech: ["MERN"],
    image: memoryGameImg,
    description: "A fun and interactive MERN-based memory card game with user authentication and game score tracking.",
    code: "https://github.com/kalyani11git/Memory_card_game_frontend.git", live: "https://memory-shuffle-card-game.netlify.app/"
  },
  {
  name: "Netflix Clone",
  tech: ["HTML", "CSS", "JavaScript"],
  image: netflixCloneImg, // import this image at the top
  description: "A static Netflix homepage clone with smooth layout, responsive design, and interactive hover effects. Built with pure HTML, CSS, and JavaScript to replicate the look and feel of the real platform.",
  code: "https://github.com/kalyani11git/netflix-clone.git",
  live: "https://kalyani11git.github.io/Netflix-Clone/"
  }
,


];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0b21] py-16 text-white px-6">
      <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <div key={i} className="bg-[#1a1a3c] p-4 rounded-xl shadow-lg border border-[#2e2e5e] overflow-hidden">
            <img src={proj.image} alt={proj.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <div className="flex flex-wrap gap-2 mb-3">
              {proj.tech.map((tech, idx) => (
                <span key={idx} className="bg-purple-700 text-xs px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{proj.description}</p>
            <div className="flex gap-4">
              <a href={proj.code} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded">
                Code
              </a>
              <a href={proj.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
