import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, FaGithub, FaDocker,
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiSpringboot, SiMongodb, SiMysql, SiPostman, SiIntellijidea,  SiPython } from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const iconSize = 30;

const skills = {
  frontend: [
    { name: 'HTML', icon: <FaHtml5 size={iconSize} color="#e34c26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={iconSize} color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJs size={iconSize} color="#f7df1e" /> },
    { name: 'React.js', icon: <FaReact size={iconSize} color="#61DBFB" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={iconSize} color="#38bdf8" /> },
  ],
  backend: [
    { name: 'Java', icon: <DiJava size={iconSize} color="#f89820" /> },
    { name: 'Node.js', icon: <FaNode size={iconSize} color="#68a063" /> },
    { name: 'Express.js', icon: <SiExpress size={iconSize} color="white" /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={iconSize} color="#6DB33F" /> },
    { name: 'MySQL', icon: <SiMysql size={iconSize} color="#00758f" /> },
    { name: 'MongoDB', icon: <SiMongodb size={iconSize} color="#47A248" /> },
    { name: 'Python (Basic)', icon: <SiPython size={iconSize} color="#3776ab" /> },
  ],
  others: [
    // { name: 'VS Code', icon: <SiVscode size={iconSize} color="#007ACC" /> },
    { name: 'Git', icon: <FaGitAlt size={iconSize} color="#f34f29" /> },
    { name: 'GitHub', icon: <FaGithub size={iconSize} /> },
    { name: 'IntelliJ', icon: <SiIntellijidea size={iconSize} color="#000" /> },
    { name: 'Postman', icon: <SiPostman size={iconSize} color="#ff6c37" /> },
    { name: 'Docker', icon: <FaDocker size={iconSize} color="#0db7ed" /> },
  ]
};

const SectionCard = ({ title, items }) => (
  <div className="bg-[#0b0b21] p-6 rounded-xl w-full md:w-[30%] shadow-lg">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center bg-[#1a1a3c] px-4 py-3 rounded-lg min-w-[100px]">
          {item.icon}
          <span className="mt-2 text-sm text-white">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Technologies = () => {
  return (
    <section id="skills" className="min-h-screen px-6 py-16 bg-[#060617] text-center">
      <h2 className="text-5xl font-bold text-white mb-12">Skills</h2>
      <p className="text-gray-300 text-md mb-12">
        Here are some of my skills on which I have been working on for the past 2 years.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-center items-start gap-8 flex-wrap"
      >
        <SectionCard title="Frontend" items={skills.frontend} />
        <SectionCard title="Backend" items={skills.backend} />
        <SectionCard title="Others" items={skills.others} />
      </motion.div>
    </section>
  );
};

export default Technologies;
