import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectsList = [
  {
    title: "Aetherial Wallet Tracker",
    description: "A multi-chain crypto wallet and portfolio analysis dashboard that pulls real-time transactions, calculates cumulative net worth, and renders interactive performance charts.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Chart.js", "Ethers.js"],
    github: "https://github.com/Srivarshitha-Narla/aetherial-wallet-tracker",
    demo: "https://aetherial-wallet-tracker.vercel.app"
  },
  {
    title: "Insightful News Portal Audit",
    description: "A automated web audit system analyzing Core Web Vitals, performance indicators, and accessibility compliance scores. Visualizes benchmark comparison charts for web optimization.",
    tags: ["React", "Vite", "Lighthouse API", "Tailwind CSS", "Recharts"],
    github: "https://github.com/Srivarshitha-Narla/news-portal-audit",
    demo: "https://news-portal-audit.vercel.app"
  },
  {
    title: "Synapse Anomaly Detector",
    description: "A real-time network transaction monitoring application leveraging predictive analytics to flag security anomalies, featuring active live logs and detailed filter controls.",
    tags: ["React", "Node.js", "Express", "D3.js", "Tailwind CSS"],
    github: "https://github.com/Srivarshitha-Narla/synapse-anomaly-detector",
    demo: null
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-lg font-light text-sm sm:text-base">
            A curated selection of applications I've built, focusing on clean engineering, responsiveness, and polished interactive experiences.
          </p>
          <div className="w-12 h-1 bg-purple-500 rounded-full mt-4"></div>
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
