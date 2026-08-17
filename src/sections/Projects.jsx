import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectsList = [
  {
    title: "ACE: AI-Enabled Campus Community & Event Platform",
    description: "An AI-powered mobile and web platform for college communication, club management, and event bookings. Features automatic department grouping, slot reservation, QR-based entry verification, and AI-driven smart summarization.",
    tags: ["React Native", "Node.js", "Express", "MongoDB", "Firebase", "AI Integration"],
    github: "https://github.com/SriVarshitha7720/ACE",
    demo: null
  },
  {
    title: "Schedule, Track and Pay with EASE",
    description: "Designed and developed a clean and modern website to streamline the student fee process. Reduced average waiting time through real-time queue tracking and waiting time estimation.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "GitHub Actions"],
    github: "https://github.com/SriVarshitha7720/Schedule-Track-and-Pay-with-EASE",
    demo: "https://srivarshitha7720.github.io/Schedule-Track-and-Pay-with-EASE"
  },
  {
    title: "Abstracting Cloud Services for Hospital Website",
    description: "A confidential patient data management system using AWS cloud services. Configured IAM policies and private VPC setups for secure patient data access and storage in RDS & S3.",
    tags: ["AWS", "RDS", "S3", "IAM", "VPC", "Secure Data"],
    github: "https://github.com/SriVarshitha7720/Cloud-Services-for-Hospital-Website",
    demo: null
  },
  {
    title: "FitTrack: React Native Activity Tracker",
    description: "A cross-platform mobile application designed to log daily habits, track workouts, and sync statistics via secure REST APIs, using Redux and Material UI for a polished layout.",
    tags: ["React Native", "Redux", "Material UI", "REST APIs", "Node.js"],
    github: "https://github.com/SriVarshitha7720/React-Native-FitTrack",
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
          <p className="text-slate-900 dark:text-slate-200 max-w-lg font-light text-sm sm:text-base">
            A selection of web systems and mobile applications I've built, showcasing clean code structure and cloud configurations.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#264933] to-[#f0a202] rounded-full mt-4"></div>
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
