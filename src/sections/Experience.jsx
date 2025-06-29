import React from 'react';
import { motion } from 'framer-motion';
import r3sysLogo from '../images/R3Sys_logo.png';
import numetryLogo from '../images/Numetry_logo.jfif';

const experiences = [
  {
    company: "Numetry Technologies",
    title: "Software Developer Intern",
    date: "Jan 2025 – June 2025",
    logo: numetryLogo,
    certificate: "https://drive.google.com/file/d/18h5AcfNl2mCYjxVSV1Y3y4iCefd4zxOs/view?usp=sharing", // Add your link
    skills:["JavaScript", "React.js", "Node.js", "REST APIs", "Git", "MongoDB"],
    description: `Contributed to frontend and backend development of educational platforms. 
    Developed responsive UI components, integrated REST APIs, and participated in Agile-based development cycles. 
    Collaborated with senior developers to debug and enhance feature modules.`,
  },
  {
    company: "R3Sys",
    title: "Java Developer Intern",
    date: "Jan 2023 – Feb 2023",
    logo: r3sysLogo,
    certificate: "https://drive.google.com/file/d/1xcmII5998XhfoD-JQ5KyUOdRQy1lAYAJ/view?usp=sharing", // Add your link
    skills: ["Java", "Spring Boot", "OOP", "File Handling", "Exception Handling", "Debugging"],
    description: `Learned and practiced Advanced Java concepts, built Spring Boot-based web applications, 
    and focused on improving Java skills through hands-on projects and backend logic development.`,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0b0b21] py-16 text-white">
      <h2 className="text-5xl font-bold text-center mb-12">Experience</h2>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 border-white" />

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`mb-16 flex flex-col md:flex-row ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-start md:items-center justify-between`}
            >
              {/* Date (Desktop only) */}
              <div className="hidden md:block md:w-5/12 text-center mb-6 md:mb-0 text-gray-300 text-lg font-medium">
                {exp.date}
              </div>

              {/* Logo marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-[#1e1e40] z-10 relative ml-2 md:ml-0 md:mx-4">
                <img src={exp.logo} alt={exp.company} className="h-6 w-6 object-contain" />
              </div>

              {/* Internship card */}
              <div className="bg-[#1a1a3c] md:w-5/12 w-full mt-6 md:mt-0 p-6 rounded-xl shadow-lg border border-[#2e2e5e] ml-10 md:ml-0">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-2 md:hidden">{exp.date}</p>
                <p className="text-sm text-gray-300 mb-4">{exp.description}</p>
                <p className="text-sm font-semibold">Skills:</p>
                <ul className="flex flex-wrap gap-2 mt-1 text-sm text-gray-300">
                  {exp.skills.map((skill, i) => (
                    <li key={i} className="bg-[#2c2c55] px-2 py-1 rounded">{skill}</li>
                  ))}
                </ul>

                <div className="mt-4">
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 hover:scale-105 transition-transform text-white font-semibold"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
