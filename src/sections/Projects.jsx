import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectsList = [
  {
    title: "Schedule, Track and Pay with EASE",
    description: "Designed and developed a clean and modern website to streamline the student fee process. Reduced average waiting time through real-time queue tracking and waiting time estimation.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "GitHub Actions"],
    github: "https://github.com/Srivarshitha-Narla/Schedule-Track-and-Pay-with-EASE",
    demo: "https://srivarshitha-narla.github.io/Schedule-Track-and-Pay-with-EASE"
  },
  {
    title: "Abstracting Cloud Services for Hospital Website",
    description: "A confidential patient data management system using AWS cloud services. Configured IAM policies and private VPC setups for secure patient data access and storage in RDS & S3.",
    tags: ["AWS", "RDS", "S3", "IAM", "VPC", "Secure Data"],
    github: "https://github.com/Srivarshitha-Narla/Cloud-Services-for-Hospital-Website",
    demo: null
  },
  {
    title: "FitTrack: React Native Activity Tracker",
    description: "A cross-platform mobile application designed to log daily habits, track workouts, and sync statistics via secure REST APIs, using Redux and Material UI for a polished layout.",
    tags: ["React Native", "Redux", "Material UI", "REST APIs", "Node.js"],
    github: "https://github.com/Srivarshitha-Narla/React-Native-FitTrack",
    demo: null
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden bg-slate-50/20">
      {/* Background orbs */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-100/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-slate-950 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg font-light text-sm sm:text-base">
            A selection of web systems and mobile applications I've built, showcasing clean code structure and cloud configurations.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-4"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
