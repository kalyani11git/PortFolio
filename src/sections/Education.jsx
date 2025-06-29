import React from 'react';
import rcpitLogo from '../images/rcpit_logo.png';
import gpnLogo from '../images/gpn_logo.png';
import schoolLogo from '../images/amvk_logo.png';

const educationList = [
  {
    logo: rcpitLogo,
    title: "R. C. Patel Institute of Technology, Shirpur",
    duration: "2022 – 2025",
    location: "Shirpur, Maharashtra",
    course: "B.E. in Computer Engineering",
    result: "CGPA: 8.15",
    description:
      "Built a strong foundation in data structures, algorithms, full-stack web development, and backend services. Engaged in technical events and group projects."
  },
  {
    logo: gpnLogo,
    title: "Government Polytechnic Nashik",
    duration: "2019 – 2022",
    location: "Nashik, Maharashtra",
    course: "Diploma in Information Technology",
    result: "Marks: 88.88%",
    description:
      "Focused on database management, networking, and programming logic. Completed multiple hands-on academic mini-projects and lab sessions."
  },
  {
    logo: schoolLogo,
    title: "Adarshya Madhyamik Vidhyalay, Kalamsare",
    duration: "2009 – 2019",
    location: "Shirpur, Maharashtra",
    course: "SSC (State Board)",
    result: "Marks: 90.80%",
    description:
      "Excelled academically with a strong interest in science and mathematics. Participated in school-level cultural activities and Olympiads."
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-[#0b0b21] py-16 text-white px-6">
      <h2 className="text-5xl font-bold text-center mb-12">Education</h2>

      <div className="relative mx-auto max-w-6xl">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 border-white" />

        {educationList.map((edu, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`mb-16 flex flex-col md:flex-row ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-start md:items-center justify-between`}
            >
              {/* Desktop date side (hidden on mobile) */}
              <div className="hidden md:block md:w-5/12 text-center text-gray-300 text-lg font-medium">
                {edu.duration}
              </div>

              {/* Circle with logo */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-[#1e1e40] z-10 relative ml-2 md:ml-0 md:mx-4">
                <img src={edu.logo} alt={edu.title} className="h-8 w-8 object-contain" />
              </div>

              {/* Card */}
              <div className="bg-[#1a1a3c] md:w-5/12 w-full mt-6 md:mt-0 p-6 rounded-xl shadow-lg border border-[#2e2e5e] ml-10 md:ml-0">
                <h3 className="text-xl font-bold">{edu.title}</h3>
                <p className="text-sm text-gray-400">{edu.course}</p>
                <p className="text-sm text-gray-400">{edu.location}</p>
                <p className="text-sm text-gray-400 md:hidden">{edu.duration}</p>
                <p className="text-sm text-gray-400">{edu.result}</p>
                <p className="mt-2 text-sm text-gray-300">{edu.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
